import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Clock, Shield, Heart, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Shri Sigma Hospitals | Best Multispecialty Hospital in Madhapur Hyderabad',
  description: 'Learn about Shri Sigma Hospitals - a leading multispecialty hospital in Madhapur, Hyderabad. Our mission, vision, values, and commitment to excellence in healthcare.',
  keywords: 'about Shri Sigma Hospitals, multispecialty hospital Madhapur, healthcare excellence, hospital mission vision, medical facilities Hyderabad',
};

export default function AboutPage() {
  const stats = [
    { number: '75+', label: 'Bedded Hospital', icon: Users },
    { number: '25+', label: 'Expert Doctors', icon: Award },
    { number: '5000+', label: 'Happy Patients', icon: Heart },
    { number: '24/7', label: 'Emergency Care', icon: Clock },
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'We prioritize our patients\' needs and provide personalized care with compassion and respect.',
      icon: Heart,
    },
    {
      title: 'Medical Excellence',
      description: 'We maintain the highest standards of medical care with advanced technology and skilled professionals.',
      icon: Award,
    },
    {
      title: 'Safety & Quality',
      description: 'We ensure patient safety through rigorous quality measures and best practices in healthcare.',
      icon: Shield,
    },
    {
      title: 'Continuous Innovation',
      description: 'We embrace new technologies and treatment methods to provide the best possible outcomes.',
      icon: Target,
    },
  ];

  const facilities = [
    'State-of-the-art Operation Theaters',
    'Advanced ICU and Critical Care Units',
    'Modern Diagnostic and Imaging Centers',
    'Fully Equipped Emergency Department',
    'Comprehensive Laboratory Services',
    'Pharmacy and Medical Store',
    'Comfortable Patient Rooms',
    'Dedicated Parking Facilities',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              About Shri Sigma Hospitals
            </h1>
            <p className="mx-auto max-w-3xl text-xl">
              Leading multispecialty hospital in Madhapur, Hyderabad, committed to 
              providing world-class healthcare with compassion and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hospital-blue/10">
                      <IconComponent className="h-8 w-8 text-hospital-blue" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-hospital-blue">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-hospital-blue">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Shri Sigma Hospitals stands as a beacon of healthcare excellence in Madhapur, 
                Hyderabad. Established with a vision to provide world-class medical care, 
                we have grown to become one of the most trusted multispecialty hospitals 
                in the region.
              </p>
              <p className="mb-6 text-gray-600">
                Our journey began with a simple yet powerful mission: to make quality 
                healthcare accessible to everyone. Today, we serve thousands of patients 
                with our comprehensive range of medical services, advanced technology, 
                and a team of highly skilled healthcare professionals.
              </p>
              <p className="text-gray-600">
                We believe that healthcare is not just about treating illness, but about 
                promoting wellness, preventing disease, and enhancing the quality of life 
                for our patients and their families.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg lg:h-full">
                <Image
                  src="/images/service/about-side-image.jpg"
                  alt="Shri Sigma Hospitals - Modern Healthcare Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Mission */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-hospital-blue">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-hospital-blue">Our Mission</h3>
              <p className="text-gray-600">
                To provide compassionate, high-quality healthcare services that improve 
                the health and well-being of our patients and communities through 
                excellence in patient care, education, and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-hospital-green">
                  <Eye className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-hospital-blue">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare provider in the region, recognized for 
                our commitment to excellence, innovation, and compassionate care, 
                setting new standards in medical treatment and patient experience.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-hospital-yellow">
                  <Heart className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-hospital-blue">Our Values</h3>
              <p className="text-gray-600">
                Compassion, Integrity, Excellence, Innovation, and Respect guide 
                everything we do. We are committed to treating every patient with 
                dignity and providing care that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence is reflected in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start rounded-lg bg-white p-6 shadow-lg">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-hospital-blue">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Modern infrastructure and advanced medical equipment for comprehensive care
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center rounded-lg bg-white p-4 shadow">
                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-hospital-green">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hospital-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Experience Excellence in Healthcare
          </h2>
          <p className="mb-8 text-xl">
            Join thousands of satisfied patients who trust us with their health
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/best-doctors-madhapur-hyderabad"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
            >
              Meet Our Doctors
            </Link>
            <Link
              href="/contact-us-madhapur-hyderabad"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}