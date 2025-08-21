'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Star, Users, ThumbsUp, Heart, Play, Quote, Award, Stethoscope, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function TestimonialsPage() {
    // ...existing code...
    const [isHeroExpanded, setIsHeroExpanded] = useState(true);
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);
    
    // Auto-collapse hero after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHeroExpanded(false);
        }, 3000);
        
        return () => clearTimeout(timer);
    }, []);
    const videoTestimonials = [
        {
            department: 'General Medicine',
            treatmentFor: 'Dengue',
            treatedBy: 'Dr. Srinivas Jakkinaboina',
            procedure: 'Severe Dengue',
            patientLocation: 'Near By',
            description: 'SHRI SIGMA provides specialized treatment for severe dengue, led by Dr. Srinivas Jakkinaboina, an expert in managing critical fever cases.',
            videoId: 'TLtAbZvXkj8'
        },
        {
            department: 'Critical Care',
            treatmentFor: 'Emergency Case',
            treatedBy: 'Dr. Srinivas Jakkinaboina',
            procedure: 'Emergency Care',
            patientLocation: 'Prefer Not to Say',
            description: 'SHRI SIGMA has a dedicated team of experts led by Dr. Srinivas Jakkinaboina, specializing in handling critical emergency cases with prompt and professional care.',
            videoId: 'mSv_b3x1uis'
        },
        {
            department: 'Orthopedics',
            treatmentFor: 'Accident Case',
            treatedBy: 'Dr. Madan Mohan V',
            procedure: 'Accident Recovery',
            patientLocation: 'Prefer Not to Say',
            description: 'SHRI SIGMA is equipped with a team of seasoned specialists, including Dr. Madan Mohan V, who is proficient in accident recovery and trauma care.',
            videoId: 'YSEj4-l2Onc'
        },
        {
            department: 'General Medicine',
            treatmentFor: 'Lower Respiratory Problem',
            treatedBy: 'Dr. Srinivas Jakkinaboina',
            procedure: 'Lower Respiratory Tract Infections',
            patientLocation: 'Not Prefer to Say',
            description: 'SHRI SIGMA has a team of skilled professionals dedicated to treating Lower Respiratory Tract Infections, with expert care provided by Dr. Srinivas Jakkinaboina.',
            videoId: 'NsUJKxbVsZs'
        },
        {
            department: 'General Medicine',
            treatmentFor: 'Dengue',
            treatedBy: 'Dr. Srinivas Jakkinaboina',
            procedure: 'Severe Dengue',
            patientLocation: 'Warangal',
            description: 'SHRI SIGMA provides specialized treatment for severe dengue, led by Dr. Srinivas Jakkinaboina, an expert in managing critical fever cases.',
            videoId: 'BUrhAnQfuvM'
        },
        {
            department: 'OBS & Gynaecology',
            treatmentFor: 'Ovarian Cysts and Fibroids',
            treatedBy: 'Dr. Vijaya Laxmi A',
            procedure: 'Ectopic Pregnancy Surgery',
            patientLocation: 'KPHB',
            description: 'SHRI SIGMA has a strong team of seasoned experts who are proficient in Minimal Access Surgery, commonly known as Laparoscopic or Keyhole surgery.',
            videoId: 'axo8E3176oU'
        }
    ];

    const stats = [
        { number: '4.8/5', label: 'Average Rating', icon: Star },
        { number: '500+', label: 'Patient Reviews', icon: Users },
        { number: '95%', label: 'Satisfaction Rate', icon: ThumbsUp },
        { number: '50000+', label: 'Happy Patients', icon: Heart },
    ];

    return (
        <>
            <Head>
                <title>Patient Reviews | Best Multispeciality Hospital in Madhapur</title>
                <meta name="description" content="Read hospital reviews by patients and watch video testimonials at Shri Sigma, a top multispeciality hospital in Madhapur, Hyderabad. Quality care that makes a difference." />
                <meta name="keywords" content="Patient Testimonials Shri Sigma Hospitals, Testimonials from happy patients in Madhapur Hyderabad, Shri Sigma Hospitals Reviews Madhapur, Best-rated hospital in Madhapur based on reviews, Patient Feedback in Madhapur Hyderabad, Honest feedback about hospital care in Madhapur, Hospital Reviews in Madhapur, Madhapur hospital patient reviews, Best Hospital with Positive Patient Experiences, Healthcare testimonials near Hitech City, What patients say about Shri Sigma Hospitals Madhapur, Patient stories from Jubilee Hills Hyderabad, Real patient experiences and success stories Hyderabad, Positive reviews for Shri Sigma Hospitals Madhapur" />
                <link rel="canonical" href="patient-testimonials-madhapur-hyderabad.html" />
            </Head>

            {/* Collapsible Hero Section - Fully Collapsible */}
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
                        <div className={`transition-all duration-500 ${isHeroExpanded ? 'py-12 sm:py-16 lg:py-20' : 'py-8 sm:py-12 lg:py-16'}`}>
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
                                    <span className="text-xs sm:text-sm font-semibold">Patient Stories</span>
                                </div>

                                <h1 className={`font-bold font-display mb-4 sm:mb-6 heading-no-break px-2 transition-all duration-500 ${
                                    isHeroExpanded 
                                        ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' 
                                        : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                                }`}>
                                    <span className="whitespace-nowrap">Patient</span>
                                    <span className="block text-hospital-yellow whitespace-nowrap">Testimonials</span>
                                </h1>

                                <p className={`opacity-90 leading-relaxed max-w-3xl mx-auto px-4 mb-6 transition-all duration-500 ${
                                    isHeroExpanded 
                                        ? 'text-base sm:text-lg lg:text-xl mb-8 sm:mb-12' 
                                        : 'text-sm sm:text-base lg:text-lg mb-6 sm:mb-8'
                                }`}>
                                    Real experiences from our satisfied patients who have received world-class healthcare
                                    {isHeroExpanded && (
                                        <span className="block mt-2">
                                            at Shri Sigma Hospitals
                                        </span>
                                    )}
                                </p>

                                {/* Expandable Content */}
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    isHeroExpanded ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Star className="w-8 h-8 text-hospital-yellow" />
                                            </div>
                                            <h3 className="font-semibold mb-2">4.8/5 Rating</h3>
                                            <p className="text-sm opacity-80">Patient satisfaction</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Users className="w-8 h-8 text-hospital-yellow" />
                                            </div>
                                            <h3 className="font-semibold mb-2">500+ Reviews</h3>
                                            <p className="text-sm opacity-80">Happy patients</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Play className="w-8 h-8 text-hospital-yellow" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Video Stories</h3>
                                            <p className="text-sm opacity-80">Real experiences</p>
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
            </section>

            {/* Video Testimonials Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 -mt-6 sm:-mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-blue" />
                            <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Video Stories</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-4 sm:mb-6 heading-no-break px-2">
                            <span className="whitespace-nowrap">Patient Video</span>
                            <span className="block text-hospital-green whitespace-nowrap">Testimonials</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                            Watch real patients share their experiences and recovery stories at Shri Sigma Hospitals
                        </p>
                    </div>

                    <div className="space-y-8 sm:space-y-12">
                        {(showAllTestimonials ? videoTestimonials : videoTestimonials.slice(0, 3)).map((testimonial, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Content Side */}
                                        <div className="flex-1 p-6 sm:p-8 lg:p-12">
                                            <div className="mb-4 sm:mb-6">
                                                <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-3 sm:px-4 py-2 mb-3 sm:mb-4">
                                                    <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-hospital-blue" />
                                                    <span className="text-xs sm:text-sm font-semibold text-hospital-blue">{testimonial.department}</span>
                                                </div>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-hospital-blue mb-3 sm:mb-4 group-hover:text-hospital-green transition-colors duration-300">
                                                    {testimonial.department} Treatment
                                                </h3>
                                            </div>

                                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                                <div className="flex items-start space-x-2 sm:space-x-3">
                                                    <div className="w-2 h-2 bg-hospital-green rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                                    <p className="text-sm sm:text-base text-gray-700">
                                                        <span className="font-semibold text-hospital-blue">Treatment For:</span> {testimonial.treatmentFor}
                                                    </p>
                                                </div>
                                                <div className="flex items-start space-x-2 sm:space-x-3">
                                                    <div className="w-2 h-2 bg-hospital-green rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                                    <p className="text-sm sm:text-base text-gray-700">
                                                        <span className="font-semibold text-hospital-blue">Treated By:</span> {testimonial.treatedBy}
                                                    </p>
                                                </div>
                                                <div className="flex items-start space-x-2 sm:space-x-3">
                                                    <div className="w-2 h-2 bg-hospital-green rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                                    <p className="text-sm sm:text-base text-gray-700">
                                                        <span className="font-semibold text-hospital-blue">Procedure:</span> {testimonial.procedure}
                                                    </p>
                                                </div>
                                                <div className="flex items-start space-x-2 sm:space-x-3">
                                                    <div className="w-2 h-2 bg-hospital-green rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                                    <p className="text-sm sm:text-base text-gray-700">
                                                        <span className="font-semibold text-hospital-blue">Patient Location:</span> {testimonial.patientLocation}
                                                    </p>
                                                </div>
                                            </div>

                                            <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed italic border-l-4 border-hospital-blue pl-3 sm:pl-4">
                                                "{testimonial.description}"
                                            </blockquote>

                                            {/* Decorative Element */}
                                            <div className="mt-4 sm:mt-6 flex justify-start">
                                                <div className="w-12 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>

                                        {/* Video Side */}
                                        <div className="flex-1 lg:max-w-lg">
                                            <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] sm:min-h-[400px]">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${testimonial.videoId}?si=RhRwC4RY0gEh3cum`}
                                                    title="YouTube video player"
                                                    className="w-full h-full rounded-b-2xl sm:rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                                {/* Play Button Overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-b-2xl sm:rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
                                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {!showAllTestimonials && videoTestimonials.length > 3 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAllTestimonials(true)}
                                className="group inline-flex items-center justify-center bg-hospital-blue hover:bg-hospital-blue-dark px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                <Play className="mr-3 h-5 w-5" />
                                Load More Testimonials
                                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    )}

                    {/* Show Less Button */}
                    {showAllTestimonials && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAllTestimonials(false)}
                                className="group inline-flex items-center justify-center bg-gray-600 hover:bg-gray-700 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                Show Less
                                <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    )}
                </div>
            </section>
            

            {/* Share Your Experience */}
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
                            <span className="text-xs sm:text-sm font-semibold">Share Your Story</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 heading-no-break px-2">
                            <span className="whitespace-nowrap">Share Your</span>
                            <span className="block text-hospital-yellow whitespace-nowrap">Experience</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
                            Help others by sharing your experience with Shri Sigma Hospitals.
                            Your story can inspire and guide others on their healthcare journey.
                        </p>

                        <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-center px-4">
                            <Link
                                href="https://www.google.com/search?q=Shri+Sigma+Hospitals+Madhapur+reviews#lrd=0x0:0x0,3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base text-hospital-blue font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
                            >
                                <Star className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                                Write a Google Review
                            </Link>
                            <Link
                                href="/contact-us-madhapur-hyderabad"
                                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-white hover:text-hospital-blue"
                            >
                                <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                                Contact Us
                                <svg className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-hospital-teal/10 rounded-full px-4 py-2 mb-6">
                            <Award className="w-5 h-5 mr-2 text-hospital-teal" />
                            <span className="text-sm font-semibold text-hospital-teal">Join Our Healthcare Family</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
                            <span className="block whitespace-nowrap">Experience World-Class</span>
                            <span className="block text-hospital-green whitespace-nowrap">Healthcare</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Join thousands of satisfied patients who have trusted us with their health.
                            Your wellness journey starts with a single step.
                        </p>

                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                            <Link
                                href="/best-doctors-madhapur-hyderabad"
                                className="group inline-flex items-center justify-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-10 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
                            >
                                <Users className="mr-3 h-5 w-5" />
                                Meet Our Doctors
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="tel:+918977763308"
                                className="group inline-flex items-center justify-center border-2 border-hospital-blue px-10 py-4 text-hospital-blue font-bold rounded-xl transition-all duration-300 hover:bg-hospital-blue hover:text-white hover:scale-105"
                            >
                                <Phone className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                                Book Appointment
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16">
                            <div className="text-center">
                                <div className="text-2xl font-bold font-display text-hospital-blue mb-1">4.8★</div>
                                <div className="text-sm text-gray-600">Patient Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold font-display text-hospital-green mb-1">500+</div>
                                <div className="text-sm text-gray-600">Reviews</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold font-display text-hospital-teal mb-1">50000+</div>
                                <div className="text-sm text-gray-600">Happy Patients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">24/7</div>
                                <div className="text-sm text-gray-600">Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}