'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      src: '/images/home/knee-bannerr.jpg',
      alt: 'Knee replacement treatment madhapur',
      mobile: '/images/home/knee-bannerr.jpg',
      title: 'Advanced Knee Replacement Surgery',
      subtitle: 'Get back to your active lifestyle with our expert orthopedic care',
      cta: 'Book Consultation',
      ctaLink: '/specialities/orthopedic-hospital-hyderabad',
    },
    {
      src: '/images/home/piles-banner.jpg',
      alt: 'Piles treatment madhapur',
      mobile: '/images/home/piles-banner.jpg',
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
          <div className="relative h-[70vh] min-h-[500px] max-h-[700px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
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
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white">
                      <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-6xl">
                        {slide.title}
                      </h1>
                      <p className="mb-8 text-lg lg:text-xl opacity-90">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                          href={slide.ctaLink}
                          className="inline-flex items-center justify-center rounded-lg bg-hospital-blue px-8 py-4 font-semibold text-white transition-all hover:bg-hospital-blue/90 hover:scale-105"
                        >
                          {slide.cta}
                        </Link>
                        <Link
                          href="tel:+918977763308"
                          className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-hospital-blue"
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
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
                
                {/* Mobile Content */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-6 text-white">
                    <h1 className="mb-3 text-2xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mb-6 text-sm opacity-90">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={slide.ctaLink}
                        className="inline-flex items-center justify-center rounded-lg bg-hospital-blue px-6 py-3 font-semibold text-white transition-all hover:bg-hospital-blue/90"
                      >
                        {slide.cta}
                      </Link>
                      <Link
                        href="tel:+918977763308"
                        className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-hospital-blue"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Emergency Call
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop Only */}
        <div className="hidden md:block">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full border-2 border-white transition-all ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-transparent hover:bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-6 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <Play className={`h-4 w-4 ${isAutoPlaying ? 'opacity-50' : 'opacity-100'}`} />
        </button>
      </div>

      {/* Quick Stats Bar - Mobile */}
      <div className="bg-hospital-blue py-4 text-white md:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold">25+</div>
              <div className="text-xs">Expert Doctors</div>
            </div>
            <div>
              <div className="text-lg font-bold">5000+</div>
              <div className="text-xs">Happy Patients</div>
            </div>
            <div>
              <div className="text-lg font-bold">24/7</div>
              <div className="text-xs">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;