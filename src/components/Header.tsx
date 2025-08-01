'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const specialities = [
    { name: 'Piles', href: '/specialities/best-piles-hospital-in-madhapur' },
    { name: 'Cardiology', href: '/specialities/cardiology-hospital-madhapur-hyderabad' },
    { name: 'Critical Care', href: '/specialities/critical-care-hospital-hyderabad' },
    { name: 'Diabetology', href: '/specialities/diabetes-treatment-hyderabad' },
    { name: 'ENT', href: '/specialities/ent-specialist-madhapur-hyderabad' },
    { name: 'General Medicine', href: '/specialities/general-medicine-doctors-hyderabad' },
    { name: 'General Surgery', href: '/specialities/general-surgery-hospital-hyderabad' },
    { name: 'Gynecology', href: '/specialities/gynecology-services-madhapur-hyderabad' },
    { name: 'Laser Proctology', href: '/specialities/laser-proctology-madhapur-hyderabad' },
    { name: 'Laser Surgery', href: '/specialities/laser-surgery-madhapur-hyderabad' },
    { name: 'Neuroscience', href: '/specialities/neuroscience-care-madhapur-hyderabad' },
    { name: 'Nutrition', href: '/specialities/nutrition-and-diet-hyderabad' },
    { name: 'Orthopedics', href: '/specialities/orthopedic-hospital-hyderabad' },
    { name: 'Physiotherapy', href: '/specialities/physiotherapy-services-hyderabad' },
    { name: 'Plastic Surgery', href: '/specialities/plastic-surgery-hospital-hyderabad' },
    { name: 'Pulmonology', href: '/specialities/pulmonology-specialist-hyderabad' },
    { name: 'Urology', href: '/specialities/urology-hospital-madhapur-hyderabad' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
      if (isSpecialitiesOpen) setIsSpecialitiesOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isSpecialitiesOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden bg-hospital-blue py-2 text-white lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                <span>Madhapur, Hyderabad</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-1 h-4 w-4" />
                <span>24/7 Emergency: +91 89777 63308</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <div className="flex space-x-2">
                <Link href="#" className="hover:text-hospital-yellow">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="hover:text-hospital-yellow">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="hover:text-hospital-yellow">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" className="hover:text-hospital-yellow">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/new-logo.webp"
                alt="Shri Sigma Hospitals Logo"
                width={isScrolled ? 140 : 160}
                height={isScrolled ? 45 : 50}
                priority
                className="transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 lg:flex">
              <Link
                href="/about-hospital-madhapur-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                About Us
              </Link>
              
              {/* Specialities Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center font-medium text-gray-700 transition-colors hover:text-hospital-blue"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSpecialitiesOpen(!isSpecialitiesOpen);
                  }}
                >
                  Specialities
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isSpecialitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSpecialitiesOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-80 rounded-lg bg-white shadow-xl border">
                    <div className="grid grid-cols-2 gap-1 p-4">
                      {specialities.map((specialty) => (
                        <Link
                          key={specialty.href}
                          href={specialty.href}
                          className="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-hospital-blue/10 hover:text-hospital-blue"
                          onClick={() => setIsSpecialitiesOpen(false)}
                        >
                          {specialty.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                Our Doctors
              </Link>
              <Link
                href="/career-opportunities-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                Careers
              </Link>
              <Link
                href="/healthcare-blog-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                Blog
              </Link>
              <Link
                href="/patient-testimonials-madhapur-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                Reviews
              </Link>
              <Link
                href="/contact-us-madhapur-hyderabad"
                className="font-medium text-gray-700 transition-colors hover:text-hospital-blue"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Emergency Call Button */}
              <Link
                href="tel:+918977763308"
                className="hidden items-center rounded-full bg-hospital-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hospital-blue/90 lg:flex"
              >
                <Phone className="mr-2 h-4 w-4" />
                Emergency
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="border-t bg-white pb-4 lg:hidden">
              <div className="space-y-1 pt-4">
                <Link
                  href="/about-hospital-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                {/* Mobile Specialities */}
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSpecialitiesOpen(!isSpecialitiesOpen);
                    }}
                  >
                    Specialities
                    <ChevronDown className={`h-4 w-4 transition-transform ${isSpecialitiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSpecialitiesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {specialities.map((specialty) => (
                        <Link
                          key={specialty.href}
                          href={specialty.href}
                          className="block rounded px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-hospital-blue"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsSpecialitiesOpen(false);
                          }}
                        >
                          {specialty.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/best-doctors-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Doctors
                </Link>
                <Link
                  href="/career-opportunities-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/healthcare-blog-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/patient-testimonials-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/contact-us-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile Emergency Button */}
                <div className="px-4 pt-4">
                  <Link
                    href="tel:+918977763308"
                    className="flex w-full items-center justify-center rounded-lg bg-hospital-blue px-4 py-3 font-semibold text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: +91 89777 63308
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;