import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Calendar, Award, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Doctors in Madhapur Hyderabad | Expert Specialists at Shri Sigma Hospitals',
  description: 'Meet our team of expert doctors and specialists at Shri Sigma Hospitals, Madhapur. Experienced physicians across all medical specialties providing world-class healthcare.',
  keywords: 'best doctors Madhapur, specialist doctors Hyderabad, expert physicians, medical specialists, experienced doctors, healthcare professionals Madhapur',
};

export default function DoctorsPage() {
  const doctors = [
    {
      name: 'Dr. Harish V Kumar',
      qualification: 'MBBS, MD, DM (Cardiology)',
      specialty: 'Cardiology',
      experience: '18+ Years',
      image: '/images/service/doctor-images/dr- harish-v-kumar .jpg',
      specialization: 'Interventional Cardiology',
      expertise: ['Heart Surgery', 'Angioplasty', 'Cardiac Care'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Jyotika Waghray',
      qualification: 'MBBS, MS (Gynecology)',
      specialty: 'Gynecology',
      experience: '16+ Years',
      image: '/images/service/doctor-images/dr-jyotika-waghray .jpg',
      specialization: 'Obstetrics & Gynecology',
      expertise: ['Maternity Care', 'Fertility Treatment', 'Women\'s Health'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Krishna Kishore Reddy',
      qualification: 'MBBS, MS (Orthopedics)',
      specialty: 'Orthopedics',
      experience: '20+ Years',
      image: '/images/service/doctor-images/dr-krishna-kishore-reddy.jpg',
      specialization: 'Joint Replacement & Trauma Surgery',
      expertise: ['Knee Replacement', 'Hip Surgery', 'Sports Medicine'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Krishna Patil',
      qualification: 'MBBS, MS (General Surgery)',
      specialty: 'General Surgery',
      experience: '18+ Years',
      image: '/images/service/doctor-images/dr-krishna-patil.jpg',
      specialization: 'Laser Surgery & Proctology',
      expertise: ['Piles Treatment', 'Laser Surgery', 'General Surgery'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Sanjay Paul',
      qualification: 'MBBS, MS, MCh (Neurosurgery)',
      specialty: 'Neuroscience',
      experience: '18+ Years',
      image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
      specialization: 'Neurosurgery & Spine Surgery',
      expertise: ['Brain Surgery', 'Spine Surgery', 'Stroke Treatment'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. S. Shazia Farhana',
      qualification: 'MBBS, MS (ENT)',
      specialty: 'ENT',
      experience: '14+ Years',
      image: '/images/service/doctor-images/Dr. S. Shazia Farhana.png',
      specialization: 'ENT & Head-Neck Surgery',
      expertise: ['Sinus Surgery', 'Hearing Care', 'Throat Surgery'],
      languages: ['English', 'Hindi', 'Telugu', 'Urdu'],
    },
    {
      name: 'Dr. Shareef',
      qualification: 'MBBS, MS (Urology)',
      specialty: 'Urology',
      experience: '14+ Years',
      image: '/images/service/doctor-images/shareef.webp',
      specialization: 'Endourology & Laparoscopic Surgery',
      expertise: ['Kidney Stones', 'Prostate Surgery', 'Urological Care'],
      languages: ['English', 'Hindi', 'Telugu', 'Urdu'],
    },
    {
      name: 'Dr. Sarath Kumar',
      qualification: 'MBBS, MD (General Medicine)',
      specialty: 'General Medicine',
      experience: '16+ Years',
      image: '/images/service/doctor-images/dr-sarath-kumar.webp',
      specialization: 'Internal Medicine & Cardiology',
      expertise: ['Diabetes Care', 'Hypertension', 'Preventive Care'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Bhargava',
      qualification: 'MBBS, MD (Endocrinology)',
      specialty: 'Diabetology',
      experience: '15+ Years',
      image: '/images/service/doctor-images/Dr-bhargava.webp',
      specialization: 'Diabetology & Endocrinology',
      expertise: ['Diabetes Management', 'Insulin Therapy', 'Hormone Disorders'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Chakravarthi',
      qualification: 'MBBS, MS, MCh (Plastic Surgery)',
      specialty: 'Plastic Surgery',
      experience: '16+ Years',
      image: '/images/service/doctor-images/chakravarthi.webp',
      specialization: 'Plastic & Reconstructive Surgery',
      expertise: ['Cosmetic Surgery', 'Reconstructive Surgery', 'Aesthetic Procedures'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Naveen Chandra Acharya',
      qualification: 'MBBS, MS (ENT)',
      specialty: 'ENT',
      experience: '12+ Years',
      image: '/images/service/doctor-images/Dr.Naveen Chandra Acharya.png',
      specialization: 'Otolaryngology & Endoscopic Surgery',
      expertise: ['Endoscopic Surgery', 'Voice Disorders', 'Sleep Apnea'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
    {
      name: 'Dr. Sai Sharanya V',
      qualification: 'MBBS, MS (Gynecology)',
      specialty: 'Gynecology',
      experience: '12+ Years',
      image: '/images/service/doctor-images/Dr.Sai Sharanya.V.png',
      specialization: 'High-Risk Pregnancy & Fertility',
      expertise: ['High-Risk Pregnancy', 'Fertility Treatment', 'Laparoscopy'],
      languages: ['English', 'Hindi', 'Telugu'],
    },
  ];

  const stats = [
    { number: '25+', label: 'Expert Doctors', icon: Users },
    { number: '15+', label: 'Medical Specialties', icon: Award },
    { number: '5000+', label: 'Happy Patients', icon: Users },
    { number: '24/7', label: 'Emergency Care', icon: Clock },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Meet Our Expert Doctors
            </h1>
            <p className="mx-auto max-w-3xl text-xl">
              Our team of highly qualified and experienced doctors are committed to 
              providing the best possible care across all medical specialties
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

      {/* Doctors Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Our Medical Specialists
            </h2>
            <p className="text-lg text-gray-600">
              Experienced doctors across all specialties providing world-class healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-hospital-blue px-3 py-1 text-sm text-white">
                      {doctor.specialty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                    {doctor.name}
                  </h3>
                  <p className="mb-2 text-hospital-green font-medium">
                    {doctor.qualification}
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    {doctor.specialization}
                  </p>
                  <p className="mb-4 text-sm text-gray-500">
                    Experience: {doctor.experience}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-700">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-gray-700">Languages:</h4>
                    <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      href="tel:+918977763308"
                      className="flex flex-1 items-center justify-center rounded bg-hospital-blue px-3 py-2 text-sm text-white transition-colors hover:bg-hospital-blue/90"
                    >
                      <Phone className="mr-1 h-4 w-4" />
                      Call
                    </Link>
                    <Link
                      href="#appointment"
                      className="flex flex-1 items-center justify-center rounded border border-hospital-blue px-3 py-2 text-sm text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
                    >
                      <Calendar className="mr-1 h-4 w-4" />
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hospital-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Book an Appointment with Our Specialists
          </h2>
          <p className="mb-8 text-xl">
            Get expert medical care from our experienced doctors across all specialties
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
              href="/contact-us-madhapur-hyderabad"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}