import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { EnquiryFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'wedding_photography',
    eventDate: '',
    eventLocation: '',
    projectDetails: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    id: string;
    message: string;
    whatsappUrl?: string;
  } | null>(null);

  // Sync preselected service from cards if passed
  useEffect(() => {
    if (preselectedService) {
      const lower = preselectedService.toLowerCase();
      if (lower.includes('wedding') && !lower.includes('pre')) {
        setFormData((prev) => ({ ...prev, service: 'wedding_photography' }));
      } else if (lower.includes('pre-wedding')) {
        setFormData((prev) => ({ ...prev, service: 'pre_wedding' }));
      } else if (lower.includes('video editing')) {
        setFormData((prev) => ({ ...prev, service: 'video_editing' }));
      } else if (lower.includes('photo editing')) {
        setFormData((prev) => ({ ...prev, service: 'photo_editing' }));
      } else if (lower.includes('advertisement')) {
        setFormData((prev) => ({ ...prev, service: 'advertisement' }));
      } else if (lower.includes('social media')) {
        setFormData((prev) => ({ ...prev, service: 'social_media' }));
      } else if (lower.includes('event')) {
        setFormData((prev) => ({ ...prev, service: 'event_coverage' }));
      }
    }
  }, [preselectedService]);

  const serviceOptions = [
    { value: 'wedding_photography', label: 'Wedding Photography & Cinema' },
    { value: 'pre_wedding', label: 'Pre-Wedding Shoot' },
    { value: 'event_coverage', label: 'Event & Family Function Coverage' },
    { value: 'video_editing', label: 'Professional Video Editing' },
    { value: 'photo_editing', label: 'Photo Editing & Retouching' },
    { value: 'advertisement', label: 'Advertisement & Commercial Shoot' },
    { value: 'social_media', label: 'Social Media Content Creation' },
    { value: 'other', label: 'Other Enquiries' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessData(null);

    // Client-side validations
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number (e.g. 78450 05919).');
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.projectDetails.trim()) {
      setErrorMessage('Please share a few details about your upcoming event or project.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again or reach out on WhatsApp.');
      }

      setSuccessData({
        id: data.enquiryId,
        message: data.message,
        whatsappUrl: data.whatsappUrl
      });

      // Reset fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: 'wedding_photography',
        eventDate: '',
        eventLocation: '',
        projectDetails: ''
      });
    } catch (err: any) {
      console.error('Enquiry submission error:', err);
      setErrorMessage(err.message || 'Network error occurred. You can reach us directly via WhatsApp or phone.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C49A55] mb-3">
            GET IN TOUCH WITH 2KMOTION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight mb-4 font-serif-heading">
            Let's Create Something Amazing.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Planning a wedding, pre-wedding shoot, special event, advertisement, or social media campaign? Tell us about your idea. Let's bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#F7F7F7] border border-neutral-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-[#171717] mb-2 font-serif-heading">
                Direct Contact
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Reach our creative team directly. We are based in Tamil Nadu and travel across the state for shoots.
              </p>

              <div className="space-y-4">
                {/* Phone Link */}
                <a
                  href={BRAND_INFO.phoneTel}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#C49A55] hover:shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#171717] text-white flex items-center justify-center group-hover:bg-[#C49A55] transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Call Us Directly</div>
                    <div className="text-sm font-bold text-[#171717]">{BRAND_INFO.phone}</div>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={BRAND_INFO.emailMailto}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#C49A55] hover:shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#171717] text-white flex items-center justify-center group-hover:bg-[#C49A55] transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Email Address</div>
                    <div className="text-sm font-bold text-[#171717]">{BRAND_INFO.email}</div>
                  </div>
                </a>

                {/* WhatsApp Action Button */}
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Quick WhatsApp Chat</div>
                    <div className="text-sm font-bold text-emerald-950">Chat with 2KMotion on WhatsApp</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-neutral-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  Follow Our Recent Visuals
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={BRAND_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white border border-neutral-200 flex items-center justify-center gap-2 text-xs font-bold text-neutral-800 hover:border-[#C49A55] hover:text-[#C49A55] transition-all"
                  >
                    <Instagram className="w-4 h-4 text-[#E1306C]" />
                    <span>@twokmotion</span>
                  </a>
                  <a
                    href={BRAND_INFO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white border border-neutral-200 flex items-center justify-center gap-2 text-xs font-bold text-neutral-800 hover:border-[#C49A55] hover:text-[#C49A55] transition-all"
                  >
                    <Youtube className="w-4 h-4 text-[#FF0000]" />
                    <span>YouTube Channel</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Shoot Coverage Areas Note */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-600">
              <div className="font-bold text-[#171717] mb-1">Production Across Tamil Nadu</div>
              <p>
                Available for on-location wedding shoots and commercial productions in Chennai, Madurai, Coimbatore, Thanjavur, Tiruchirappalli, Salem, Tirunelveli, and destination locations worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/90 shadow-xl">
              <h3 className="text-2xl font-bold text-[#171717] mb-2 font-serif-heading">
                Book Your Shoot / Enquire Now
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Fill in the details below. We review every enquiry promptly and provide tailored package recommendations.
              </p>

              {/* Success Notification Alert */}
              {successData && (
                <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in duration-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-emerald-950 mb-1">
                        Enquiry Submitted Successfully!
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                        {successData.message}
                      </p>
                      <div className="text-[11px] font-mono bg-white px-2.5 py-1 rounded border border-emerald-200 inline-block text-emerald-900 mb-4">
                        Reference ID: {successData.id}
                      </div>

                      {successData.whatsappUrl && (
                        <div>
                          <a
                            href={successData.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Continue to WhatsApp with this Booking</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Full Name <span className="text-[#C49A55]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vignesh Karthik"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number <span className="text-[#C49A55]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 78450 05919"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Email Address <span className="text-[#C49A55]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                    />
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Service Required <span className="text-[#C49A55]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Event Date (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center justify-between">
                      <span>Event Date</span>
                      <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.eventDate || ''}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Event Location (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center justify-between">
                      <span>Event Location</span>
                      <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Madurai / Chennai / Coimbatore"
                      value={formData.eventLocation || ''}
                      onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Project Details <span className="text-[#C49A55]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your wedding ceremonies, shoot concept, expected hours, or commercial deliverables..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-[#C49A55] focus:ring-1 focus:ring-[#C49A55] transition-all bg-white"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#C49A55] rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
