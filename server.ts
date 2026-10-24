import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Persistent store for enquiries
const dataDir = path.join(__dirname, 'data');
const enquiriesFilePath = path.join(dataDir, 'enquiries.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(enquiriesFilePath)) {
  fs.writeFileSync(enquiriesFilePath, JSON.stringify([], null, 2), 'utf-8');
}

// API endpoint for receiving and validating enquiries
app.post('/api/enquiries', (req: Request, res: Response) => {
  try {
    const { fullName, phone, email, service, eventDate, eventLocation, projectDetails } = req.body;

    // Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please enter a valid full name.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return res.status(400).json({ success: false, error: 'Please enter a valid phone number.' });
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    if (!service || typeof service !== 'string') {
      return res.status(400).json({ success: false, error: 'Please select a required service.' });
    }

    if (!projectDetails || typeof projectDetails !== 'string' || projectDetails.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Please share a brief note about your project requirements.' });
    }

    const enquiryRecord = {
      id: `ENQ-${Date.now().toString(36).toUpperCase()}`,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      service,
      eventDate: eventDate ? eventDate.trim() : null,
      eventLocation: eventLocation ? eventLocation.trim() : null,
      projectDetails: projectDetails.trim(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    let enquiries: any[] = [];
    try {
      if (fs.existsSync(enquiriesFilePath)) {
        const fileData = fs.readFileSync(enquiriesFilePath, 'utf-8');
        enquiries = JSON.parse(fileData);
      }
    } catch {
      enquiries = [];
    }

    enquiries.unshift(enquiryRecord);
    fs.writeFileSync(enquiriesFilePath, JSON.stringify(enquiries, null, 2), 'utf-8');

    // Build pre-filled WhatsApp message for user convenience
    const waText = encodeURIComponent(
      `Hello 2KMotion! I submitted an enquiry on your website.\n\n` +
      `*Name:* ${enquiryRecord.fullName}\n` +
      `*Service:* ${enquiryRecord.service}\n` +
      (enquiryRecord.eventDate ? `*Date:* ${enquiryRecord.eventDate}\n` : '') +
      (enquiryRecord.eventLocation ? `*Location:* ${enquiryRecord.eventLocation}\n` : '') +
      `*Project:* ${enquiryRecord.projectDetails}`
    );
    const whatsappUrl = `https://wa.me/917845005919?text=${waText}`;

    return res.status(200).json({
      success: true,
      enquiryId: enquiryRecord.id,
      message: 'Thank you! Your enquiry has been received. The 2KMotion creative team will contact you shortly.',
      whatsappUrl
    });
  } catch (error) {
    console.error('Error handling enquiry:', error);
    return res.status(500).json({ success: false, error: 'Internal server error while processing your enquiry.' });
  }
});

// Setup Vite middleware in dev or static serving in prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`2KMotion server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
