import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Clock, Shield, Heart, Target, Eye, CheckCircle, Star, Phone, MapPin, Stethoscope, Activity, UserCheck, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Shri Sigma Hospitals | Best Multispecialty Hospital in Madhapur Hyderabad',
  description: 'Learn about Shri Sigma Hospitals - a leading multispecialty hospital in Madhapur, Hyderabad. Our mission, vision, values, and commitment to excellence in healthcare.',
  keywords: 'about Shri Sigma Hospitals, multispecialty hospital Madhapur, healthcare excellence, hospital mission vision, medical facilities Hyderabad',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Advanced Clinical Treatments',
      description: 'We provide high-quality healthcare with advanced clinical treatments that are not widely accessible, ensuring patients benefit from the newest medical discoveries.',
      icon: Activity,
    },
    {
      title: 'Interdisciplinary Approach',
      description: 'Our medical practitioners work comfortably with specialists in a team-based environment, enabling precise and comprehensive patient care.',
      icon: Users,
    },
    {
      title: 'Patient-Centered Care',
      description: 'We develop partnerships with patients and families, providing clinical information and technology needed for informed health decisions.',
      icon: Heart,
    },
  ];

  const keyFeatures = [
    'Leading health services provider in Hyderabad',
    'Multiple specialists under one roof',
    'Advanced clinical treatments and technology',
    'Interdisciplinary team-based approach',
    'Committed clinical and non-clinical staff',
    'Partnership-focused patient care',
  ];

  return (
    <>
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Stethoscope className="w-5 h-5 mr-2 text-hospital-yellow" />
                <span className="text-sm font-semibold">About Our Hospital</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 heading-no-break">
                <span className="block">About Shri Sigma</span>
                <span className="block text-hospital-yellow">Hospitals</span>
              </h1>

              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Shri Sigma Super Speciality Hospital, Madhapur, Hyderabad - Leading multispecialty hospital
                committed to providing world-class healthcare with compassion, innovation, and excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#our-story"
                  className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-8 py-4 text-hospital-blue font-bold rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
                >
                  Learn Our Story
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact-us-madhapur-hyderabad"
                  className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-hospital-blue"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Enhanced */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-6">
                <Star className="w-5 h-5 mr-2 text-hospital-blue" />
                <span className="text-sm font-semibold text-hospital-blue">Our Journey</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-8 heading-no-break">
                <span className="whitespace-nowrap">Our Story</span> <span className="whitespace-nowrap">of</span>
                <span className="block text-hospital-green whitespace-nowrap">Excellence</span>
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Shri Sigma Hospital is one of the leading health services provider in Hyderabad serving high-quality healthcare with advanced clinical treatments that are not widely accessible. The patient always benefits from our unique clinical ability to put in use the newest discoveries and more recent advancements in field of medicine.
                </p>

                <p>
                  At Shri Sigma Hospitals each patient would have access to a large number of specialists who could be approached effortlessly under one roof. This speeds up the process of arriving at a diagnosis, because the patient's presenting condition is never isolated.
                </p>

                <p>
                  Shri Sigma Hospital is very unique and the only one in the area having medical practitioners who would be always comfortable working with many other specialists in an interdisciplinary, clinical outcome-driven team-based environment. This approach and ease with which we collaborate allows us to empower our medical staff to harness the best outcomes of clinical interaction thus aiding to precise and apt patient care practice.
                </p>

                <p>
                  Our clinical and non-clinical staff is committed to consistently providing the highest quality patient experience, which includes developing partnerships with patients and their families and identifying ways to provide patients with clinical information and advanced technology they need to make informed health decisions.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-hospital-green rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/best-doctors-madhapur-hyderabad"
                  className="inline-flex items-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
                >
                  Meet Our Team
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/homepage.webp"
                    alt="Shri Sigma Hospitals - Modern Healthcare Facility"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hospital-blue/20 to-transparent"></div>
                </div>

                {/* Floating Patient Satisfaction - Single Badge */}
                <div className="absolute -top-8 -right-8 bg-hospital-yellow/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl text-white animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-lg font-bold">4.8/5</div>
                    <div className="text-xs opacity-90">Patient Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Modern Design */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-6">
              <Target className="w-5 h-5 mr-2 text-hospital-blue" />
              <span className="text-sm font-semibold text-hospital-blue">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
              <span className="whitespace-nowrap">Mission, Vision</span> <span className="whitespace-nowrap">& Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Vision',
                description: 'To be the most trusted healthcare provider, delivering world-class medical services with compassion and excellence.',
                icon: Eye,
                color: 'bg-hospital-blue',
              },
              {
                title: 'Mission',
                description: 'To provide comprehensive, affordable, and accessible healthcare services while maintaining the highest standards of medical excellence.',
                icon: Target,
                color: 'bg-hospital-green',
              },
              {
                title: 'Values',
                description: 'Compassion, Integrity, Excellence, Innovation, and Respect guide everything we do in our commitment to exceptional patient care.',
                icon: Heart,
                color: 'bg-hospital-teal',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="text-center">
                      <div className="mb-8 flex justify-center">
                        <div className={`flex h-24 w-24 items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-large`}>
                          <IconComponent className="h-12 w-12 text-white" />
                        </div>
                      </div>

                      <h3 className="mb-6 text-2xl font-bold font-display text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-green/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 mr-2 text-hospital-green" />
              <span className="text-sm font-semibold text-hospital-green">What Makes Us Different</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
              <span className="whitespace-nowrap">Our Core</span> <span className="whitespace-nowrap">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our commitment to exceptional healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full text-center">
                    <div className="mb-8 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-hospital-blue group-hover:bg-hospital-green group-hover:scale-110 transition-all duration-300 shadow-large">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    <h3 className="mb-6 text-2xl font-bold font-display text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>







      {/* Modern Facilities Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-teal/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 mr-2 text-hospital-teal" />
              <span className="text-sm font-semibold text-hospital-teal">World-Class Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
              <span className="whitespace-nowrap">Our Advanced</span>
              <span className="block text-hospital-teal whitespace-nowrap">Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure and cutting-edge medical equipment for comprehensive healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'State-of-the-art Operation Theaters',
              'Advanced ICU and Critical Care Units',
              'Modern Diagnostic and Imaging Centers',
              'Fully Equipped Emergency Department',
              'Comprehensive Laboratory Services',
              'NABH Accredited Healthcare Services',
            ].map((facility, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-large hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-hospital-teal to-hospital-green rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-hospital-blue group-hover:text-hospital-teal transition-colors duration-300 leading-tight">
                        {facility}
                      </h3>
                    </div>
                  </div>

                  {/* Decorative bottom border */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-hospital-teal to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-5 h-5 mr-2 text-hospital-yellow" />
              <span className="text-sm font-semibold">Join Our Healthcare Family</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 heading-no-break">
              <span className="whitespace-nowrap">Experience Excellence</span> <span className="whitespace-nowrap">in</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Healthcare</span>
            </h2>

            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust us with their health.
              Your wellness journey starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-8 py-4 text-hospital-blue font-bold rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Meet Our Doctors
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/contact-us-madhapur-hyderabad"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white hover:text-hospital-blue"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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