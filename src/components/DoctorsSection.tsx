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
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-hospital-blue">
            Meet Our Expert Doctors
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 px-4">
            Our team of highly qualified and experienced doctors are committed
            to providing the best possible care for our patients.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Slider */}
          <div className="hidden md:block">
            <div className="overflow-hidden px-4 py-4">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(doctors.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="grid w-full flex-shrink-0 grid-cols-3 gap-8 px-4">
                    {doctors.slice(slideIndex * 3, slideIndex * 3 + 3).map((doctor, index) => (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative mx-2"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:hidden">
            {doctors.slice(0, 6).map((doctor, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex sm:flex-col">
                  <div className="relative h-24 w-24 sm:h-48 sm:w-full flex-shrink-0">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-1 p-3 sm:p-4">
                    <h3 className="mb-1 text-base sm:text-lg font-semibold text-hospital-blue line-clamp-2">
                      {doctor.name}
                    </h3>
                    <p className="mb-1 text-sm sm:text-base text-hospital-green font-medium">
                      {doctor.specialty}
                    </p>
                    <p className="mb-1 text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {doctor.qualifications}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
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
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 z-20"
            >
              <ChevronLeft className="h-5 w-5 text-hospital-blue" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 z-20"
            >
              <ChevronRight className="h-5 w-5 text-hospital-blue" />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/best-doctors-madhapur-hyderabad"
            className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-hospital-blue px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white font-semibold transition-all duration-300 hover:bg-hospital-blue/90 hover:scale-105 shadow-lg"
          >
            View All Doctors
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;