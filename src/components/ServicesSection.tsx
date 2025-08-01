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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-hospital-blue md:text-4xl">
            Our Medical Specialties
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We offer comprehensive healthcare services across multiple specialties 
            with experienced doctors and modern medical equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Image
                      src={service.icon}
                      alt={`${service.name} icon`}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-hospital-blue">
                  {service.name}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-hospital-blue hover:text-hospital-green"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/specialities"
            className="rounded-lg bg-hospital-blue px-8 py-3 text-white transition-colors hover:bg-hospital-blue/90"
          >
            View All Specialties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;