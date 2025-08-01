'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DoctorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const doctors = [
    {
      name: 'Dr. Harish V Kumar',
      specialty: 'Cardiologist',
      experience: '15+ Years',
      image: '/images/service/doctor-images/dr- harish-v-kumar .jpg',
      qualifications: 'MBBS, MD, DM (Cardiology)',
    },
    {
      name: 'Dr. Jyotika Waghray',
      specialty: 'Gynecologist',
      experience: '12+ Years',
      image: '/images/service/doctor-images/dr-jyotika-waghray .jpg',
      qualifications: 'MBBS, MS (Gynecology)',
    },
    {
      name: 'Dr. Krishna Kishore Reddy',
      specialty: 'Orthopedic Surgeon',
      experience: '18+ Years',
      image: '/images/service/doctor-images/dr-krishna-kishore-reddy.jpg',
      qualifications: 'MBBS, MS (Orthopedics)',
    },
    {
      name: 'Dr. Sanjay Paul',
      specialty: 'Neurologist',
      experience: '14+ Years',
      image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
      qualifications: 'MBBS, MD, DM (Neurology)',
    },
    {
      name: 'Dr. Krishna Patil',
      specialty: 'Urologist',
      experience: '16+ Years',
      image: '/images/service/doctor-images/dr-krishna-patil.jpg',
      qualifications: 'MBBS, MS (Urology)',
    },
    {
      name: 'Dr. S. Shazia Farhana',
      specialty: 'ENT Specialist',
      experience: '10+ Years',
      image: '/images/service/doctor-images/Dr. S. Shazia Farhana.png',
      qualifications: 'MBBS, MS (ENT)',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(doctors.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(doctors.length / 3)) % Math.ceil(doctors.length / 3));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-hospital-blue md:text-4xl">
            Meet Our Expert Doctors
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our team of highly qualified and experienced doctors are committed 
            to providing the best possible care for our patients.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Slider */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(doctors.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="grid w-full flex-shrink-0 grid-cols-3 gap-8">
                    {doctors.slice(slideIndex * 3, slideIndex * 3 + 3).map((doctor, index) => (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                      >
                        <div className="relative h-64">
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                            {doctor.name}
                          </h3>
                          <p className="mb-2 text-hospital-green font-medium">
                            {doctor.specialty}
                          </p>
                          <p className="mb-2 text-sm text-gray-600">
                            {doctor.qualifications}
                          </p>
                          <p className="text-sm text-gray-500">
                            Experience: {doctor.experience}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {doctors.slice(0, 3).map((doctor, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="flex">
                  <div className="relative h-32 w-32 flex-shrink-0">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="mb-1 text-lg font-semibold text-hospital-blue">
                      {doctor.name}
                    </h3>
                    <p className="mb-1 text-hospital-green font-medium">
                      {doctor.specialty}
                    </p>
                    <p className="mb-1 text-sm text-gray-600">
                      {doctor.qualifications}
                    </p>
                    <p className="text-sm text-gray-500">
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 text-hospital-blue" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5 text-hospital-blue" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/best-doctors-madhapur-hyderabad"
            className="rounded-lg bg-hospital-blue px-8 py-3 text-white transition-colors hover:bg-hospital-blue/90"
          >
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;