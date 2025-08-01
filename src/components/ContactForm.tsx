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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Desktop Form - Floating */}
      <div className="absolute right-4 top-32 z-10 hidden lg:block lg:right-20">
        <section className="myform-area">
          <div className="form-area login-form">
            <div className="form-input w-80 rounded-lg bg-white p-6 shadow-xl border">
              <div className="mb-4 flex items-center">
                <h2 className="text-xl font-semibold text-hospital-blue">
                  Request a Callback
                </h2>
              </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full rounded border border-gray-300 px-3 py-3 focus:border-hospital-blue focus:outline-none"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-hospital-blue peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-hospital-blue"
                >
                  Name
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

              <div className="form-group">
                <div className="myform-button">
                  {/* reCAPTCHA placeholder */}
                  <div className="mb-4 h-20 rounded bg-gray-100 p-4 text-center text-sm text-gray-500">
                    reCAPTCHA will be integrated here
                  </div>
                  <button 
                    type="submit" 
                    className="w-full rounded-lg bg-hospital-blue px-6 py-3 text-white transition-colors hover:bg-hospital-blue/90 font-semibold"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

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
      </section>
    </div>

    {/* Mobile Form - Below Hero */}
    <div className="block lg:hidden">
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 text-center">
              <h2 className="text-xl font-semibold text-hospital-blue">
                Request a Callback
              </h2>
              <p className="text-sm text-gray-600">Get expert medical consultation</p>
            </div>
            
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
                Request Callback
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
      </section>
    </div>
    </>
  );
};

export default ContactForm;