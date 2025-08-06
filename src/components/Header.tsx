'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone, MapPin, Clock, Mail } from 'lucide-react';

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
      {/* Top Bar - Enhanced */}
      <div className="hidden bg-gradient-to-r from-hospital-blue to-hospital-blue-dark py-3 text-white lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center group">
                <MapPin className="mr-2 h-4 w-4 text-hospital-yellow" />
                <span className="font-medium">Madhapur, Hyderabad</span>
              </div>
              <div className="flex items-center group">
                <Clock className="mr-2 h-4 w-4 text-hospital-yellow" />
                <span className="font-medium">24/7 Emergency Care</span>
              </div>
              <div className="flex items-center group">
                <Mail className="mr-2 h-4 w-4 text-hospital-yellow" />
                <span className="font-medium">info@shrisigmahospitals.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">Follow Us:</span>
                <ul className="social-icons flex space-x-3 ml-3">
                  <li>
                    <Link href="https://www.instagram.com/shrisigma_hospitals/" target="_blank" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-hospital-yellow hover:text-hospital-blue transition-all duration-200 text-white hover:text-hospital-blue">
                      <i className="fa-brands fa-instagram text-xs"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/ShriSigmaHospital/" target="_blank" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-hospital-yellow hover:text-hospital-blue transition-all duration-200 text-white hover:text-hospital-blue">
                      <i className="fa-brands fa-facebook text-xs"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@SigmaHospitals" target="_blank" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-hospital-yellow hover:text-hospital-blue transition-all duration-200 text-white hover:text-hospital-blue">
                      <i className="fa-brands fa-youtube text-xs"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-large' : 'shadow-medium'} border-b border-hospital-gray-100`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <Image
                  src="/images/new-logo.webp"
                  alt="Shri Sigma Hospitals Logo"
                  width={isScrolled ? 150 : 170}
                  height={isScrolled ? 48 : 55}
                  priority
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              <Link
                href="/about-hospital-madhapur-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                About Us
              </Link>
              
              {/* Specialities Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSpecialitiesOpen(!isSpecialitiesOpen);
                  }}
                >
                  Specialities
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isSpecialitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSpecialitiesOpen && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-96 rounded-2xl bg-white shadow-large border border-hospital-gray-100 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-hospital-gray-900 mb-4">Our Specialities</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {specialities.map((specialty) => (
                          <Link
                            key={specialty.href}
                            href={specialty.href}
                            className="flex items-center px-4 py-3 text-sm font-medium text-hospital-gray-700 transition-all duration-200 hover:bg-hospital-blue/10 hover:text-hospital-blue rounded-xl group"
                            onClick={() => setIsSpecialitiesOpen(false)}
                          >
                            <div className="w-2 h-2 bg-hospital-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            {specialty.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                Our Doctors
              </Link>
              <Link
                href="/career-opportunities-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                Careers
              </Link>
              <Link
                href="/healthcare-blog-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                Blog
              </Link>
              <Link
                href="/patient-testimonials-madhapur-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                Testimonials
              </Link>
              <Link
                href="/contact-us-madhapur-hyderabad"
                className="px-4 py-2 font-semibold text-hospital-gray-700 transition-all duration-200 hover:text-hospital-blue hover:bg-hospital-blue/5 rounded-lg"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Emergency Call Button */}
              <Link
                href="tel:+918977763308"
                className="hidden items-center bg-gradient-to-r from-hospital-green to-hospital-green-dark px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:shadow-glow-green hover:scale-105 rounded-xl lg:flex group"
              >
                <Phone className="mr-2 h-4 w-4 group-hover:animate-bounce-gentle" />
                Emergency Call
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="rounded-xl p-3 text-hospital-gray-600 hover:bg-hospital-gray-100 transition-colors duration-200 lg:hidden"
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
            <div className="border-t bg-white pb-4 lg:hidden shadow-lg">
              <div className="space-y-1 pt-4">
                <Link
                  href="/about-hospital-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                
                {/* Mobile Specialities */}
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
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
                          className="block rounded px-4 py-2 text-sm text-gray-600 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
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
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Doctors
                </Link>
                <Link
                  href="/career-opportunities-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/healthcare-blog-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/patient-testimonials-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact-us-madhapur-hyderabad"
                  className="block rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-hospital-blue/5 hover:text-hospital-blue transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile Emergency Buttons */}
                <div className="px-4 pt-4 space-y-2">
                  <Link
                    href="tel:+918977763308"
                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-hospital-green to-hospital-green-dark px-4 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Call
                  </Link>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Emergency Numbers:</p>
                    <div className="flex justify-center space-x-4 text-xs">
                      <Link href="tel:+918977763308" className="text-hospital-blue font-medium">+91 89777 63308</Link>
                      <Link href="tel:+918858234345" className="text-hospital-blue font-medium">+91 88582 34345</Link>
                    </div>
                  </div>
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