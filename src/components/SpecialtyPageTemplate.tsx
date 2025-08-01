'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Award, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

interface Doctor {
  name: string;
  qualification: string;
  experience: string;
  image: string;
  specialization?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface SpecialtyPageProps {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  sideImage: string;
  features: Feature[];
  benefits: string[];
  doctors: Doctor[];
  procedures?: string[];
  whyChooseUs: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

const SpecialtyPageTemplate = ({
  title,
  subtitle,
  description,
  bannerImage,
  sideImage,
  features,
  benefits,
  doctors,
  procedures,
  whyChooseUs,
  metaTitle,
  metaDescription,
  keywords,
}: SpecialtyPageProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
              <p className="mb-6 text-xl">{subtitle}</p>
              <p className="mb-8 text-lg opacity-90">{description}</p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="tel:+918977763308"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 89777 63308
                </Link>
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-xl lg:h-full">
                <Image
                  src={bannerImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div id="contact-form">
          <ContactForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Why Choose Our {title} Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hospital-blue/10">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-hospital-blue">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Treatment Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-hospital-blue">
                Advanced {title} Treatment
              </h2>
              
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-hospital-blue">
                  Benefits of Our Treatment:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-hospital-green" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {procedures && (
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-hospital-blue">
                    Our Procedures Include:
                  </h3>
                  <ul className="space-y-2">
                    {procedures.map((procedure, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-hospital-green" />
                        <span className="text-gray-700">{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg lg:h-full">
                <Image
                  src={sideImage}
                  alt={`${title} treatment`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Why Choose Shri Sigma Hospitals?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start rounded-lg bg-white p-6 shadow-lg">
                <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hospital-blue">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Meet our experienced specialists who provide world-class {title.toLowerCase()} care
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                    {doctor.name}
                  </h3>
                  <p className="mb-2 text-hospital-green font-medium">
                    {doctor.qualification}
                  </p>
                  {doctor.specialization && (
                    <p className="mb-2 text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                  )}
                  <p className="text-sm text-gray-500">
                    Experience: {doctor.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Get the Best {title} Treatment?
          </h2>
          <p className="mb-8 text-xl">
            Contact us today to schedule your consultation with our expert specialists
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="tel:+918977763308"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 89777 63308
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=+918977763308&text=I want to know more about ${title} treatment"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialtyPageTemplate;