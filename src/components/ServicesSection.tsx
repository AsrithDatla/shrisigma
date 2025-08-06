'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      name: 'Piles Treatment',
      description: 'Advanced laser treatment for piles with minimal pain and quick recovery.',
      icon: '/images/home/Piles.png',
      href: '/specialities/best-piles-hospital-in-madhapur',
      image: '/images/piles/piles.webp',
    },
    {
      name: 'Cardiology',
      description: 'Comprehensive heart care with state-of-the-art cardiac facilities.',
      icon: '/images/home/Cardiology.png',
      href: '/specialities/cardiology-hospital-madhapur-hyderabad',
      image: '/images/service/cardio.webp',
    },
    {
      name: 'Orthopedics',
      description: 'Expert bone and joint care including knee replacement surgeries.',
      icon: '/images/home/Orthopedics.png',
      href: '/specialities/orthopedic-hospital-hyderabad',
      image: '/images/service/ortho.webp',
    },
    {
      name: 'Gynecology',
      description: 'Complete women\'s health services with experienced specialists.',
      icon: '/images/home/gynecology.png',
      href: '/specialities/gynecology-services-madhapur-hyderabad',
      image: '/images/service/gynecology.webp',
    },
    {
      name: 'Neuroscience',
      description: 'Advanced neurological treatments and brain surgery capabilities.',
      icon: '/images/home/Neurosciences.png',
      href: '/specialities/neuroscience-care-madhapur-hyderabad',
      image: '/images/service/neurosciences.webp',
    },
    {
      name: 'Urology',
      description: 'Specialized urological treatments including kidney stone removal.',
      icon: '/images/home/Urology.png',
      href: '/specialities/urology-hospital-madhapur-hyderabad',
      image: '/images/service/urology.webp',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-hospital-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center bg-hospital-green/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-hospital-green rounded-full mr-2"></div>
            <span className="text-sm font-semibold text-hospital-green">Our Specialties</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold font-display text-hospital-gray-900">
            Comprehensive Medical Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-hospital-gray-600 leading-relaxed">
            We offer world-class healthcare services across multiple specialties 
            with experienced doctors and state-of-the-art medical equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-soft border border-hospital-gray-100 overflow-hidden transition-all duration-300 hover:shadow-large hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={service.icon}
                      alt={`${service.name} icon`}
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center bg-hospital-green/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                    <span className="text-xs font-semibold text-white">Specialty Care</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold font-display text-hospital-gray-900 group-hover:text-hospital-blue transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="mb-6 text-hospital-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center font-semibold text-hospital-blue hover:text-hospital-green transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/specialities"
            className="group inline-flex items-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-10 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            View All Specialties
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;