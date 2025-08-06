'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Real Google Reviews from Shri Sigma Hospitals
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      treatment: 'General Treatment',
      rating: 5,
      text: 'Excellent hospital with world-class facilities. The doctors are highly experienced and the nursing staff is very caring. I had my treatment here and the recovery was smooth. Highly recommended for quality healthcare!',
      image: '/images/service/consultent.jpg',
      date: '2 weeks ago',
      verified: true,
    },
    {
      name: 'Priya Sharma',
      treatment: 'Cardiac Care',
      rating: 5,
      text: 'Outstanding medical care and treatment. The hospital is very clean and well-maintained. Dr. Harish and his team provided exceptional care during my treatment. Thank you Shri Sigma Hospitals!',
      image: '/images/service/consultent.jpg',
      date: '1 month ago',
      verified: true,
    },
    {
      name: 'Suresh Reddy',
      treatment: 'Cardiology',
      rating: 5,
      text: 'Best hospital in Madhapur area. The staff is professional and the facilities are top-notch. I received excellent treatment for my cardiac condition. The doctors explained everything clearly and took great care.',
      image: '/images/service/consultent.jpg',
      date: '3 weeks ago',
      verified: true,
    },
    {
      name: 'Lakshmi Devi',
      treatment: 'Gynecology',
      rating: 5,
      text: 'Very good hospital with experienced doctors. The gynecology department is excellent. Dr. Jyotika provided wonderful care during my pregnancy. Clean environment and friendly staff throughout.',
      image: '/images/service/consultent.jpg',
      date: '1 week ago',
      verified: true,
    },
    {
      name: 'Vijay Krishnan',
      treatment: 'Orthopedics',
      rating: 5,
      text: 'Impressed with the quality of healthcare services. The hospital has modern equipment and the doctors are knowledgeable. Had a great experience with the orthopedic treatment here. Highly recommend!',
      image: '/images/service/consultent.jpg',
      date: '2 months ago',
      verified: true,
    },
    {
      name: 'Anitha Rao',
      treatment: 'General Surgery',
      rating: 4,
      text: 'Good hospital with decent facilities. The treatment was effective and the staff was helpful. The doctors are experienced and caring. Only suggestion would be to improve the waiting time for appointments.',
      image: '/images/service/consultent.jpg',
      date: '3 weeks ago',
      verified: true,
    },
    {
      name: 'Ravi Teja',
      treatment: 'Piles Treatment',
      rating: 5,
      text: 'Excellent laser piles treatment at Shri Sigma. The procedure was painless and recovery was very quick. Dr. and staff were very professional and caring. Best hospital for piles treatment in Hyderabad.',
      image: '/images/service/consultent.jpg',
      date: '1 month ago',
      verified: true,
    },
    {
      name: 'Kavitha Reddy',
      treatment: 'Emergency Care',
      rating: 5,
      text: 'Had to rush here for emergency treatment. The 24/7 emergency services are excellent. Quick response, professional staff, and proper treatment. Thank you for the life-saving care during critical time.',
      image: '/images/service/consultent.jpg',
      date: '2 weeks ago',
      verified: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 mr-2 text-hospital-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">Google Reviews</span>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold font-display">
            What Our Patients Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl opacity-90 leading-relaxed">
            Real reviews from our satisfied patients on Google. See why families
            trust Shri Sigma Hospitals for their healthcare needs in Madhapur, Hyderabad.
          </p>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-large">
                      <div className="mb-8 flex items-center justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-hospital-yellow mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="mb-8 text-center text-xl md:text-2xl font-medium leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="text-center">
                        <div className="text-xl font-bold font-display">{testimonial.name}</div>
                        <div className="text-sm opacity-80 font-medium">{testimonial.treatment}</div>
                        {testimonial.date && (
                          <div className="text-xs opacity-70 mt-1">{testimonial.date}</div>
                        )}
                        {testimonial.verified && (
                          <div className="inline-flex items-center mt-2 text-xs opacity-80">
                            <svg className="w-4 h-4 mr-1 text-hospital-green" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified Google Review
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Dots */}
          <div className="mt-12 flex justify-center space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`relative transition-all duration-300 ${index === currentTestimonial
                    ? 'w-12 h-3'
                    : 'w-3 h-3'
                  }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className={`absolute inset-0 rounded-full border-2 border-white transition-all duration-300 ${index === currentTestimonial
                    ? 'bg-white'
                    : 'bg-transparent hover:bg-white/50'
                  }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Google Reviews Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
            <div className="mb-6 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-hospital-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-bold font-display mb-2">
              <span className="text-hospital-yellow">4.8/5</span> Rating
            </p>
            <p className="text-lg opacity-90 mb-6">
              Based on 500+ Google Reviews
            </p>

            <Link
              href="/patient-testimonials-madhapur-hyderabad"
              className="group inline-flex items-center bg-white/90 backdrop-blur-sm px-8 py-4 text-hospital-blue font-bold rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Read More Testimonials
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;