'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const services = [
    'Piles',
    'Cardiology',
    'ENT',
    'Gynecology',
    'Neuroscience',
    'Plastic Surgery',
    'Urology',
    'Critical Care',
    'General Medicine',
    'Laser Proctology',
    'Nutrition',
    'Physiotherapy',
    'Diabetology',
    'General Surgery',
    'Laser Surgery',
    'Orthopedics',
    'Pulmonology',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData object to match the live website format
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('locations', formData.service); // 'locations' matches live website field name
    
    try {
      const response = await fetch('https://shrisigmahospitals.com/inc/homepage_form', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
        });
        alert('Thank you! Your request has been submitted successfully. We will contact you soon.');
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Desktop Form - Enhanced Floating */}
      <div className="absolute right-8 z-10 hidden lg:block" style={{ top: '50%', transform: 'translateY(-59%)' }}>
        <div className="w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-hospital-blue to-hospital-blue p-6 text-white">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Request a Callback</h2>
                <p className="text-sm opacity-90">Get expert consultation</p>
              </div>
            </div>
          </div>
          <div className="p-6">

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-group relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full rounded-xl border-2 border-gray-200 px-4 py-4 text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-xs peer-focus:text-hospital-blue peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue peer-[:not(:placeholder-shown)]:font-semibold"
                >
                  Full Name
                </label>
              </div>

              <div className="form-group relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  placeholder=" "
                  required
                  className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                >
                  Phone
                </label>
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
                  className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                >
                  Email
                </label>
              </div>

              <div className="form-group">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-4 text-gray-900 transition-all duration-200 focus:border-hospital-blue focus:outline-none focus:ring-4 focus:ring-hospital-blue/10"
                >
                  <option value="" disabled>
                    Choose Service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-hospital-green to-hospital-green px-6 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                >
                  <span className="flex items-center justify-center">
                    Enquire Now
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="mt-6 text-center">
                <div className="mb-3 flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-hospital-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  <span className="text-hospital-blue">4.4/5</span> Rating
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Based on 500+ Google Reviews
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Form - Enhanced */}
      <div className="block lg:hidden">
        <section className="bg-gradient-to-br from-gray-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-hospital-blue to-hospital-blue p-6 text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Request a Callback</h2>
                <p className="text-sm opacity-90">Get expert medical consultation</p>
              </div>
              <div className="p-6">

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="form-group relative">
                      <input
                        type="text"
                        id="mobile-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                      />
                      <label
                        htmlFor="mobile-name"
                        className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                      >
                        Name
                      </label>
                    </div>

                    <div className="form-group relative">
                      <input
                        type="tel"
                        id="mobile-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        placeholder=" "
                        required
                        className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                      />
                      <label
                        htmlFor="mobile-phone"
                        className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                      >
                        Phone
                      </label>
                    </div>
                  </div>

                  <div className="form-group relative">
                    <input
                      type="email"
                      id="mobile-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                    />
                    <label
                      htmlFor="mobile-email"
                      className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                    >
                      Email
                    </label>
                  </div>

                  <div className="form-group">
                    <select
                      id="mobile-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                    >
                      <option value="" disabled>
                        Choose Service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-hospital-blue px-6 py-3 text-white transition-colors hover:bg-hospital-blue/90 font-semibold"
                  >
                    Enquire Now
                  </button>

                  <div className="mt-3 text-center">
                    <div className="mb-2 flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/images/stars.png"
                          alt="Rating star"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      4.4/5 (Based on 500+ google reviews)
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;