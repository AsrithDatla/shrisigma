'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '75+', label: 'Bedded Hospital' },
    { number: '25+', label: 'Best Doctors' },
    { number: '5000+', label: 'Happy Patients' },
    { number: '20+', label: 'Cashless Payment Options' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-hospital-blue md:text-4xl">
              Leading Healthcare Excellence in{' '}
              <span className="text-hospital-green">Madhapur</span>
            </h2>
            
            <p className="mb-6 text-lg text-gray-600">
              Shri Sigma Hospitals is a premier multispecialty healthcare facility 
              located in the heart of Madhapur, Hyderabad. We are committed to 
              providing world-class medical care with state-of-the-art technology 
              and experienced specialists.
            </p>
            
            <p className="mb-8 text-gray-600">
              Our comprehensive range of medical services includes advanced treatments 
              in cardiology, orthopedics, gynecology, neuroscience, and many other 
              specialties. We pride ourselves on delivering personalized care with 
              compassion and excellence.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-hospital-yellow">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about-hospital-madhapur-hyderabad"
                className="rounded-lg bg-hospital-blue px-6 py-3 text-center text-white transition-colors hover:bg-hospital-blue/90"
              >
                Learn More About Us
              </Link>
              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="rounded-lg border-2 border-hospital-blue px-6 py-3 text-center text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 overflow-hidden rounded-lg shadow-lg lg:h-full">
              <Image
                src="/images/service/about-side-image.jpg"
                alt="Shri Sigma Hospitals - Modern Healthcare Facility"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hospital-green">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-hospital-blue">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;