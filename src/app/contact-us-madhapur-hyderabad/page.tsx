'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Car,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Shield
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    message: '',
    appointmentType: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object to match the live website format
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('locations', formData.department); // 'locations' matches live website field name

    // Add message and appointment type as additional info
    const fullMessage = `Appointment Type: ${formData.appointmentType}\n\nMessage: ${formData.message}`;
    formDataToSend.append('message', fullMessage);

    try {
      const response = await fetch('https://shrisigmahospitals.com/inc/contact_form', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            email: '',
            department: '',
            message: '',
            appointmentType: 'consultation'
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      title: 'Phone Numbers',
      items: [
        { label: 'Main Reception', value: '+91 88582 34345', href: 'tel:+918858234345' },
        { label: 'Emergency', value: '+91 89777 63308', href: 'tel:+918977763308' },
        { label: 'Appointments', value: '+91 89777 63308', href: 'tel:+918977763308' },
      ],
      icon: Phone,
      color: 'hospital-blue',
    },
    {
      title: 'Email Address',
      items: [
        { label: 'General Inquiries', value: 'info@shrisigmahospitals.com', href: 'mailto:info@shrisigmahospitals.com' },
      ],
      icon: Mail,
      color: 'hospital-green',
    },
    {
      title: 'Hospital Timings',
      items: [
        { label: 'OPD Timings', value: '9:00 AM - 8:00 PM' },
        { label: 'Emergency', value: '24/7 Available' },
        { label: 'Pharmacy', value: '24/7 Available' },
      ],
      icon: Clock,
      color: 'hospital-teal',
    },
  ];

  const departments = [
    'Cardiology', 'Orthopedics', 'Gynecology', 'Neuroscience',
    'Urology', 'ENT', 'General Medicine', 'General Surgery',
    'Critical Care', 'Diabetology', 'Laser Surgery', 'Physiotherapy',
    'Piles Treatment', 'Plastic Surgery', 'Pulmonology'
  ];

  return (
    <>
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
              <span className="text-xs sm:text-sm font-semibold">Get In Touch</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6">
              <span className="block">Contact <span className="text-hospital-yellow">US</span></span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4">
              Get in touch with us for appointments, emergency care, or any healthcare queries.
              We're here to help you 24/7 with world-class medical services.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center mb-8 sm:mb-12 px-4">
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-hospital-blue font-bold rounded-xl transition-all duration-300 hover:bg-white hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Call Now: </span>+91 89777 63308
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=+918977763308&text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-hospital-blue text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Us
                <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Get In Touch Section - Side by Side on Desktop */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 -mt-6 sm:-mt-10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center bg-hospital-teal/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-teal" />
                <span className="text-xs sm:text-sm font-semibold text-hospital-teal">Contact & Appointment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-4 sm:mb-6">
                <span className="block">Get In Touch With Us</span>
                <span className="block text-hospital-teal">& Book Your Appointment</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Multiple ways to reach us for your healthcare needs. Fill out the form or contact us directly.
              </p>
            </div>

            {/* Desktop: Side by Side Layout, Mobile: Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Side - Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="text-center lg:text-left mb-8">
                      <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-6">
                        <Phone className="w-5 h-5 mr-2 text-hospital-blue" />
                        <span className="text-sm font-semibold text-hospital-blue">Contact Information</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-hospital-blue mb-4">
                        Multiple Ways to <span className="text-hospital-green">Reach Us</span>
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {contactInfo.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                          <div key={index} className="group">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                              <div className="flex items-start mb-4">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${section.color}/10 mr-4 flex-shrink-0 group-hover:bg-${section.color}/20 transition-colors duration-300`}>
                                  <IconComponent className={`h-6 w-6 text-${section.color}`} />
                                </div>
                                <div className="flex-1">
                                  <h4 className={`text-lg font-bold font-display text-${section.color} mb-3`}>
                                    {section.title}
                                  </h4>
                                  <div className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                      <div key={itemIndex} className="flex flex-col sm:flex-row sm:justify-between">
                                        <span className="text-gray-600 font-medium text-sm">{item.label}:</span>
                                        {'href' in item ? (
                                          <Link
                                            href={item.href}
                                            className={`text-${section.color} hover:text-hospital-green font-semibold transition-colors duration-200 text-sm break-all sm:break-normal`}
                                          >
                                            {item.value}
                                          </Link>
                                        ) : (
                                          <span className="font-semibold text-gray-800 text-sm">{item.value}</span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start">
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-hospital-green mr-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Your information is secure</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-end">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-hospital-blue mr-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">Response within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="text-center lg:text-left mb-8">
                      <div className="inline-flex items-center bg-hospital-teal/10 rounded-full px-4 py-2 mb-6">
                        <Send className="w-5 h-5 mr-2 text-hospital-teal" />
                        <span className="text-sm font-semibold text-hospital-teal">Send Message</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-hospital-blue mb-4">
                        Book Your <span className="text-hospital-teal">Appointment</span>
                      </h3>
                      <p className="text-base text-gray-600">
                        Fill out the form below and we'll get back to you within 24 hours
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl">
                        <div className="flex items-start sm:items-center">
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                            <p className="text-sm sm:text-base text-green-600">We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl">
                        <div className="flex items-start sm:items-center">
                          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-red-800">Submission Failed</h3>
                            <p className="text-sm sm:text-base text-red-600">Please try again or call us directly.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                        <div className="form-group relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 text-sm sm:text-base transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 sm:peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-hospital-blue peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue peer-[:not(:placeholder-shown)]:font-semibold"
                          >
                            Full Name *
                          </label>
                        </div>

                        <div className="form-group relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="peer w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 text-sm sm:text-base transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 sm:peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-hospital-blue peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue peer-[:not(:placeholder-shown)]:font-semibold"
                          >
                            Phone Number *
                          </label>
                        </div>
                      </div>

                      <div className="form-group relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          required
                          className="peer w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 text-sm sm:text-base transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 sm:peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-hospital-blue peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue peer-[:not(:placeholder-shown)]:font-semibold"
                        >
                          Email Address *
                        </label>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                        <div className="form-group">
                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                          >
                            <option value="">Select Department/Specialty</option>
                            {departments.map((dept, index) => (
                              <option key={index} value={dept}>{dept}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <select
                            id="appointmentType"
                            name="appointmentType"
                            value={formData.appointmentType}
                            onChange={handleChange}
                            className="w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                          >
                            <option value="consultation">General Consultation</option>
                            <option value="emergency">Emergency</option>
                            <option value="followup">Follow-up</option>
                            <option value="checkup">Health Checkup</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder=" "
                          required
                          className="peer w-full rounded-lg sm:rounded-xl border-2 border-gray-200 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10 resize-none"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-500 text-sm sm:text-base transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 sm:peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-hospital-blue peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 sm:peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue peer-[:not(:placeholder-shown)]:font-semibold"
                        >
                          Message or Symptoms *
                        </label>
                      </div>

                      <div className="pt-2 sm:pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group w-full bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-6 sm:px-8 py-3 sm:py-4 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                          <span className="flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                                <span className="hidden sm:inline">Sending Message...</span>
                                <span className="sm:hidden">Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                                <span className="hidden sm:inline">Send Message & Book Appointment</span>
                                <span className="sm:hidden">Send & Book</span>
                              </>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Address and Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Address */}
            <div>
              <div className="inline-flex items-center bg-hospital-green/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-green" />
                <span className="text-xs sm:text-sm font-semibold text-hospital-green">Hospital Location</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-6 sm:mb-8">
                <span className="block">Visit Our <span className="text-hospital-green">Hospital</span></span>
              </h2>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-large border border-gray-100 mb-6 sm:mb-8">
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-hospital-blue/10 mr-3 sm:mr-4 flex-shrink-0">
                    <Building className="h-6 w-6 sm:h-8 sm:w-8 text-hospital-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-hospital-blue mb-2">
                      Shri Sigma Hospitals
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Beside Karachi Bakery, Madhapur<br />
                      HUDA Techno Enclave, HITEC City<br />
                      Hyderabad, Telangana - 500081<br />
                      <span className="text-hospital-green font-semibold">Best Multispecialty Hospital in Madhapur</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                  <Link
                    href="https://maps.google.com/?q=Shri+Sigma+Hospitals+Madhapur+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-4 sm:px-6 py-3 text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105 text-sm sm:text-base"
                  >
                    <Navigation className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Directions
                    <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <button className="inline-flex items-center justify-center border-2 border-hospital-blue px-4 sm:px-6 py-3 text-hospital-blue font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-hospital-blue hover:text-white text-sm sm:text-base">
                    <Car className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Parking Available
                  </button>
                </div>
              </div>

              {/* Landmarks */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-large border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold font-display text-hospital-blue mb-4 sm:mb-6 flex items-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-hospital-green" />
                  Nearby Landmarks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {['Near Hitech City', 'Close to Jubilee Hills', 'Adjacent to Gachibowli', 'Near Durgam Cheruvu'].map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-2 h-2 bg-hospital-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d487207.55587227724!2d78.385416!3d17.444917000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b91ac485fd%3A0x1ae13362e0a6ead8!2sShri%20Sigma%20Hospitals%20-%20Best%20Hospital%20in%20Madhapur%20Hyderabad!5e0!3m2!1sen!2sus!4v1739880383433!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl sm:rounded-3xl"
                />
                {/* Map Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-hospital-blue rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Shri Sigma Hospitals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-200" />
              <span className="text-xs sm:text-sm font-semibold">Emergency Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6">
              <span className="block">24/7 Emergency</span>
              <span className="block text-red-200">Contact</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
              For medical emergencies, call us immediately. Our emergency team is available
              round the clock to provide immediate medical assistance.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-center mb-8 sm:mb-12 px-4">
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-red-600 font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Emergency: </span>+91 89777 63308
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=+918977763308&text=Emergency%20-%20I%20need%20immediate%20medical%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:text-red-600 shadow-2xl text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">WhatsApp Emergency</span>
                <span className="sm:hidden">WhatsApp</span>
                <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Emergency Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Ambulance Service', desc: '24/7 Emergency Transport' },
                { title: 'Critical Care', desc: 'ICU & Emergency Medicine' },
                { title: 'Trauma Care', desc: 'Accident & Injury Treatment' }
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h3 className="text-base sm:text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}