import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Navigation, Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Best Multispecialty Hospital in Madhapur Hyderabad',
  description: 'Contact Shri Sigma Hospitals, Madhapur for appointments, emergency care, and healthcare services. Get directions, phone numbers, and hospital timings.',
  keywords: 'contact Shri Sigma Hospitals, hospital contact Madhapur, emergency contact Hyderabad, hospital address, appointment booking, healthcare contact',
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Phone Numbers',
      items: [
        { label: 'Main Reception', value: '+91 89777 63308', href: 'tel:+918977763308' },
        { label: 'Emergency', value: '+91 89777 63308', href: 'tel:+918977763308' },
        { label: 'Appointments', value: '+91 89777 63308', href: 'tel:+918977763308' },
      ],
      icon: Phone,
    },
    {
      title: 'Email Addresses',
      items: [
        { label: 'General Inquiries', value: 'info@shrisigmahospitals.com', href: 'mailto:info@shrisigmahospitals.com' },
        { label: 'Appointments', value: 'appointments@shrisigmahospitals.com', href: 'mailto:appointments@shrisigmahospitals.com' },
        { label: 'Emergency', value: 'emergency@shrisigmahospitals.com', href: 'mailto:emergency@shrisigmahospitals.com' },
      ],
      icon: Mail,
    },
    {
      title: 'Hospital Timings',
      items: [
        { label: 'OPD Timings', value: '9:00 AM - 8:00 PM' },
        { label: 'Emergency', value: '24/7 Available' },
        { label: 'Pharmacy', value: '24/7 Available' },
      ],
      icon: Clock,
    },
  ];

  const departments = [
    'Cardiology', 'Orthopedics', 'Gynecology', 'Neuroscience',
    'Urology', 'ENT', 'General Medicine', 'General Surgery',
    'Critical Care', 'Diabetology', 'Laser Surgery', 'Physiotherapy'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-3xl text-xl">
              Get in touch with us for appointments, emergency care, or any healthcare queries. 
              We're here to help you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactInfo.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-hospital-blue">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-hospital-blue">{section.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between">
                        <span className="text-gray-600">{item.label}:</span>
                        {item.href ? (
                          <Link href={item.href} className="text-hospital-blue hover:text-hospital-green">
                            {item.value}
                          </Link>
                        ) : (
                          <span className="font-medium text-gray-800">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Address and Map */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Address */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-hospital-blue">
                Hospital Address
              </h2>
              
              <div className="mb-8 rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-start">
                  <MapPin className="mr-3 mt-1 h-5 w-5 text-hospital-blue" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-hospital-blue">
                      Shri Sigma Hospitals
                    </h3>
                    <p className="text-gray-700">
                      Madhapur, Hyderabad<br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://maps.google.com/?q=Shri+Sigma+Hospitals+Madhapur+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded bg-hospital-blue px-4 py-2 text-white transition-colors hover:bg-hospital-blue/90"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                  <Link
                    href="#parking"
                    className="inline-flex items-center justify-center rounded border border-hospital-blue px-4 py-2 text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Parking Info
                  </Link>
                </div>
              </div>

              {/* Landmarks */}
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-hospital-blue">
                  Nearby Landmarks
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Near Hitech City</li>
                  <li>• Close to Jubilee Hills</li>
                  <li>• Adjacent to Gachibowli</li>
                  <li>• Near Durgam Cheruvu</li>
                </ul>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-hospital-blue">
                Location Map
              </h2>
              <div className="relative h-96 overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-4 h-16 w-16 text-hospital-blue" />
                    <p className="text-lg font-semibold text-hospital-blue">
                      Interactive Map
                    </p>
                    <p className="text-gray-600">
                      Click "Get Directions" above to view in Google Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Have a question or need assistance? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <form className="rounded-lg bg-white p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="department" className="mb-2 block text-sm font-medium text-gray-700">
                  Department/Specialty
                </label>
                <select
                  id="department"
                  name="department"
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  placeholder="Please describe your query or concern..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-hospital-blue px-6 py-3 text-white transition-colors hover:bg-hospital-blue/90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Emergency Contact
          </h2>
          <p className="mb-6 text-xl">
            For medical emergencies, call us immediately. We're available 24/7.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="tel:+918977763308"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-red-600 transition-colors hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: +91 89777 63308
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+918977763308&text=Emergency%20-%20I%20need%20immediate%20medical%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-red-600"
            >
              WhatsApp Emergency
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}