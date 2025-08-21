'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Users, Award, Heart, Clock, Send, User, MessageSquare, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const [isHeroExpanded, setIsHeroExpanded] = useState(true);
  
  // Auto-collapse hero after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroExpanded(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData object to match the live website format
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://shrisigmahospitals.com/inc/career_form', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        // Reset form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        alert('Thank you! Your application has been submitted successfully. We will contact you soon.');
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const stats = [
    { number: '21+', label: 'Expert Doctors', icon: Users, color: 'hospital-blue' },
    { number: '14+', label: 'Medical Specialties', icon: Award, color: 'hospital-green' },
    { number: '50000+', label: 'Happy Patients', icon: Heart, color: 'hospital-teal' },
    { number: '24/7', label: 'Emergency Care', icon: Clock, color: 'hospital-yellow' },
  ];

  return (
    <>
      <Head>
        <title>Medical Job Openings in Madhapur Hyderabad | Careers at Shri Sigma Hospitals</title>
        <meta name="description" content="Begin your journey with Shri Sigma Hospitals. Explore current job openings in Hyderabad's leading multispeciality hospital in Madhapur." />
        <meta name="keywords" content="Medical Job Openings in Madhapur, Healthcare Jobs in Madhapur Hyderabad, Hospital Job Vacancies in Madhapur, Support Staff Jobs in Healthcare Madhapur, Careers in Healthcare Madhapur Hyderabad" />
      </Head>

      {/* Collapsible Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green text-white overflow-hidden transition-all duration-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Hero Section - Completely Hidden When Collapsed */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isHeroExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 relative">
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
                  <span className="text-xs sm:text-sm font-semibold">Join Our Team</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 heading-no-break px-2">
                  <span className="block">Build Your Career in</span>
                  <span className="block text-hospital-yellow">Healthcare Excellence</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
                  Join Shri Sigma Hospitals and be part of a team dedicated to providing world-class healthcare.
                  <span className="block mt-2">
                    Discover exciting career opportunities in Hyderabad's leading multispecialty hospital.
                  </span>
                </p>

                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-hospital-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">Healthcare Professionals</h3>
                      <p className="text-sm opacity-80">Doctors & Nurses</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-8 h-8 text-hospital-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">Support Staff</h3>
                      <p className="text-sm opacity-80">Administrative roles</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-8 h-8 text-hospital-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                      <p className="text-sm opacity-80">Career advancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Toggle Button - Always Visible */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => setIsHeroExpanded(!isHeroExpanded)}
            className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
          >
            <span className="text-sm font-medium text-hospital-blue mr-2">
              {isHeroExpanded ? 'Hide Hero' : 'Show Hero'}
            </span>
            {isHeroExpanded ? (
              <ChevronUp className="w-4 h-4 text-hospital-blue group-hover:-translate-y-1 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-4 h-4 text-hospital-blue group-hover:translate-y-1 transition-transform duration-300" />
            )}
          </button>
        </div>
      </section>

      {/* Top Toggle Button - Visible when hero is collapsed */}
      {!isHeroExpanded && (
        <div className="bg-hospital-blue py-3 relative z-20">
          <div className="container mx-auto px-4 flex justify-center">
            <button
              onClick={() => setIsHeroExpanded(true)}
              className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-sm font-medium text-hospital-blue mr-2">Show Hero</span>
              <ChevronDown className="w-4 h-4 text-hospital-blue group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* Current Openings Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-blue" />
              <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Current Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-4 sm:mb-6 heading-no-break px-4">
              <span className="whitespace-nowrap">Current</span>
              <span className="block text-hospital-green whitespace-nowrap">Openings</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Explore exciting career opportunities across various departments and specialties at Shri Sigma Hospitals
            </p>
          </div>

          {/* Job Opening Images - Full Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Healthcare Professionals Image */}
            <div className="group">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 sm:h-96 lg:h-[500px] xl:h-[600px]">
                  <Image
                    src="/images/hiring1.webp"
                    alt="Healthcare Job Opportunities - Doctors and Nurses"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Support Staff Image */}
            <div className="group">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 sm:h-96 lg:h-[500px] xl:h-[600px]">
                  <Image
                    src="/images/hiring2.webp"
                    alt="Support Staff Opportunities - Administrative and Support Roles"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Application Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-hospital-blue mb-4 sm:mb-6">
                  Get In Touch With Us
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Ready to start your healthcare career journey? Contact us today to learn more about available positions and application process.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-hospital-blue/10 group-hover:bg-hospital-blue/20 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-blue" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      <Link
                        href="https://www.google.com/maps/place/Shri+Sigma+Hospitals+-+Best+Multispecialty+Hospital+in+Madhapur%7C+Hyderabad/@17.444966,78.385436,10z/data=!4m6!3m5!1s0x3bcb91b91ac485fd:0x1ae13362e0a6ead8!8m2!3d17.4449657!4d78.3854362!16s%2Fg%2F11j0_crrr6?hl=en-US&entry=ttu"
                        target="_blank"
                        className="hover:text-hospital-blue transition-colors duration-300"
                      >
                        beside karachi bakery Madhapur,<br />
                        HUDA Techno Enclave, HITEC City,<br />
                        Hyderabad, Telangana-500081
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-hospital-green/10 group-hover:bg-hospital-green/20 transition-colors duration-300 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-green" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Phone</h4>
                    <div className="space-y-1">
                      <p>
                        <Link
                          href="tel:+918858234345"
                          className="text-gray-600 hover:text-hospital-green transition-colors duration-300 text-sm sm:text-base"
                        >
                          +91 88582 34345
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="tel:+918977763308"
                          className="text-gray-600 hover:text-hospital-green transition-colors duration-300 text-sm sm:text-base"
                        >
                          +91 89777 63308
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-hospital-teal/10 group-hover:bg-hospital-teal/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-teal" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">E-Mail</h4>
                    <p>
                      <Link
                        href="mailto:info@shrisigmahospitals.com"
                        className="text-gray-600 hover:text-hospital-teal transition-colors duration-300 text-sm sm:text-base break-all"
                      >
                        info@shrisigmahospitals.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-large">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-hospital-blue mb-2">
                  Request a Callback
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-4 focus:ring-hospital-blue/20 focus:border-hospital-blue transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-4 focus:ring-hospital-blue/20 focus:border-hospital-blue transition-all duration-300 text-sm sm:text-base"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-4 focus:ring-hospital-blue/20 focus:border-hospital-blue transition-all duration-300 text-sm sm:text-base"
                    placeholder="Email Address"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-4 focus:ring-hospital-blue/20 focus:border-hospital-blue transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your interest and experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center group text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
              <span className="text-xs sm:text-sm font-semibold">Join Our Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 heading-no-break px-2">
              <span className="whitespace-nowrap">Ready to</span> <span className="whitespace-nowrap">Make a</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Difference?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
              Join Shri Sigma Hospitals and be part of a team that's transforming healthcare in Hyderabad.
              Your career in healthcare excellence starts here.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-center px-4">
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-hospital-blue font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                Call: +91 89777 63308
              </Link>
              <Link
                href="mailto:info@shrisigmahospitals.com"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl text-sm sm:text-base"
              >
                <Mail className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Send Resume
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}