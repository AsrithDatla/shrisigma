'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Patel',
      treatment: 'Knee Replacement Surgery',
      rating: 5,
      text: 'Excellent treatment and care at Shri Sigma Hospitals. The doctors are very experienced and the staff is very supportive. I had my knee replacement surgery here and recovered completely.',
      image: '/images/service/consultent.jpg',
    },
    {
      name: 'Priya Reddy',
      treatment: 'Piles Treatment',
      rating: 5,
      text: 'I was suffering from piles for years. The laser treatment at Shri Sigma was painless and I recovered very quickly. Highly recommend this hospital for piles treatment.',
      image: '/images/service/consultent.jpg',
    },
    {
      name: 'Suresh Kumar',
      treatment: 'Heart Surgery',
      rating: 5,
      text: 'The cardiology department is world-class. Dr. Harish V Kumar performed my bypass surgery with great skill. The entire team took excellent care of me throughout my stay.',
      image: '/images/service/consultent.jpg',
    },
    {
      name: 'Lakshmi Devi',
      treatment: 'Gynecology Care',
      rating: 5,
      text: 'Dr. Jyotika Waghray and her team provided exceptional care during my pregnancy. The facilities are modern and the nursing staff is very caring and professional.',
      image: '/images/service/consultent.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-gradient-to-br from-hospital-blue to-hospital-green py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            Read testimonials from our satisfied patients who have experienced 
            our quality healthcare services.
          </p>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                      <div className="mb-6 flex items-center justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-hospital-yellow text-xl mr-1"></i>
                        ))}
                      </div>
                      
                      <blockquote className="mb-6 text-center text-lg italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm opacity-75">{testimonial.treatment}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mt-12 text-center">
          <div className="mb-4">
            <div className="mb-2 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-hospital-yellow text-2xl"></i>
              ))}
            </div>
            <p className="text-lg">
              <strong>4.4/5</strong> based on 500+ Google Reviews
            </p>
          </div>
          
          <Link
            href="/patient-testimonials-madhapur-hyderabad"
            className="inline-block rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;