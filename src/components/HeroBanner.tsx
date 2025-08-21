'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      src: '/images/home/examining-patient.jpg',
      alt: 'Knee replacement treatment madhapur',
      mobile: '/images/home/examining-patient.jpg',
      title: 'Advanced Knee Replacement Surgery',
      subtitle: 'Get back to your active lifestyle with our expert orthopedic care',
      cta: 'Book Consultation',
      ctaLink: '/specialities/orthopedic-hospital-hyderabad',
    },
    {
      src: '/images/home/piles banner.jpg',
      alt: 'Piles treatment madhapur',
      mobile: '/images/home/piles banner.jpg',
      title: 'Painless Laser Piles Treatment',
      subtitle: 'Quick recovery with advanced laser technology - No cuts, no stitches',
      cta: 'Learn More',
      ctaLink: '/specialities/best-piles-hospital-in-madhapur',
    },
    {
      src: '/images/home/24by7.jpg',
      alt: '24x7 emergency services',
      mobile: '/images/home/24by7.jpg',
      title: '24/7 Emergency Care',
      subtitle: 'Round-the-clock medical care with experienced specialists',
      cta: 'Emergency Contact',
      ctaLink: 'tel:+918977763308',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Main Carousel */}
      <div className="relative">
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="relative h-[80vh] min-h-[600px] max-h-[800px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                  }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-hospital-blue/80 via-hospital-blue/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Content */}

              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="relative h-[60vh] min-h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                  }`}
              >
                <Image
                  src={slide.mobile}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Mobile Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />


              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Enhanced */}
        <div className="hidden md:block">
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 flex items-center justify-center group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 flex items-center justify-center group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Enhanced Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`relative transition-all duration-300 ${index === currentSlide
                  ? 'w-12 h-3'
                  : 'w-3 h-3'
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full border-2 border-white transition-all duration-300 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-transparent hover:bg-white/50'
                }`} />
            </button>
          ))}
        </div>

        {/* Enhanced Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 flex items-center justify-center"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <Play className={`h-5 w-5 transition-opacity duration-200 ${isAutoPlaying ? 'opacity-50' : 'opacity-100'}`} />
        </button>
      </div>

      {/* Enhanced Quick Stats Bar */}
      <div className="bg-gradient-to-r from-hospital-blue to-hospital-blue-dark py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold font-display text-hospital-yellow mb-1 group-hover:scale-110 transition-transform duration-200">75+</div>
              <div className="text-sm font-medium opacity-90">Bedded Hospital</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold font-display text-hospital-yellow mb-1 group-hover:scale-110 transition-transform duration-200">25+</div>
              <div className="text-sm font-medium opacity-90">Expert Doctors</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold font-display text-hospital-yellow mb-1 group-hover:scale-110 transition-transform duration-200">50000+</div>
              <div className="text-sm font-medium opacity-90">Happy Patients</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold font-display text-hospital-yellow mb-1 group-hover:scale-110 transition-transform duration-200">24/7</div>
              <div className="text-sm font-medium opacity-90">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;