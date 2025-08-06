'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Award, Users, Clock, Search, Filter, Stethoscope, Heart, Phone } from 'lucide-react';
import { useState } from 'react';

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const doctors = [
    {
      name: 'Dr. M.M. Shareef',
      qualification: 'MBBS, MS-ENT, MRCS (UK), DLO',
      specialty: 'ENT',
      image: '/images/service/doctor-images/shareef.webp',
      specialization: 'Sr Consultant-ENT/otorhinolaryngologist',
    },
    {
      name: 'Dr. Sridhar Musthyala',
      qualification: 'MBBS, Diploma in Orthopedics, FRCS (UK)',
      specialty: 'Orthopedics',
      image: '/images/service/doctor-images/sridar.webp',
      specialization: 'Orthopaedics & Trauma',
    },
    {
      name: 'Dr. Srinivas Jakkinaboina',
      qualification: 'MBBS (Osm), MD (NIMS), DM (CCM), EDIC (UK)',
      specialty: 'Critical Care',
      image: '/images/service/doctor-images/doc-srinivas.webp',
      specialization: 'Critical Care Medicine Specialist',
    },
    {
      name: 'Dr. Bhargava Talluri',
      qualification: 'MBBS, DNB (Internal Medicine)',
      specialty: 'Internal Medicine',
      image: '/images/service/doctor-images/Dr-bhargava.webp',
      specialization: 'Sr. Consultant - Internal Medicine',
    },
    {
      name: 'Dr. S. Shazia Farhana',
      qualification: 'MBBS, M.D General Medicine, Fellowship in Infectious Diseases',
      specialty: 'General Medicine',
      image: '/images/service/doctor-images/Dr. S. Shazia Farhana.png',
      specialization: 'Sr. Consultant Physician & Diabetologist',
    },
    {
      name: 'Dr. Sanjay Paul',
      qualification: 'MBBS, F.Diab, PG Diab, FCCP',
      specialty: 'Diabetology',
      image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
      specialization: 'Sr. Consultant Physician & Diabetologist',
    },
    {
      name: 'Dr. Harish V Kumar',
      qualification: 'MS, DNB (Urology)',
      specialty: 'Urology',
      image: '/images/service/doctor-images/dr- harish-v-kumar .jpg',
      specialization: 'Sr. Consultant Urologist, Laparoscopic & Renal Transplant Surgeon',
    },
    {
      name: 'Dr. Naveen Chandra Acharya',
      qualification: 'MBBS, MS - General Surgery, M.Ch - Urology, MRCS, DNB',
      specialty: 'Urology',
      image: '/images/service/doctor-images/Dr.Naveen Chandra Acharya.png',
      specialization: 'Sr. Consultant Urologist & Andrologist',
    },
    {
      name: 'Dr. Santhosh Kumar. A',
      qualification: 'MBBS, DNB (General Surgery), FMAS, DNB (Urology & Andrology)',
      specialty: 'Urology',
      image: '/images/service/doctor-images/santosh-kumaR.webp',
      specialization: 'Urology & Andrology',
    },
    {
      name: 'Dr. Jyotika Waghray',
      qualification: 'MBBS, MS (Otorhinolaryngology, Head & Neck Surgery & Diploma in Allergy)',
      specialty: 'ENT',
      image: '/images/service/doctor-images/dr-jyotika-waghray .jpg',
      specialization: 'Sr. Consultant - ENT (Otorhinolaryngologist) & Allergy Specialist',
    },
    {
      name: 'Dr. Jahnavi Koneru',
      qualification: 'MS (Gen) FMAS FISCP',
      specialty: 'General Surgery',
      image: '/images/service/doctor-images/jahnavi.webp',
      specialization: 'Sr. Proctology Surgeon',
    },
    {
      name: 'Dr. Madan Mohan Rao. G.V',
      qualification: 'MBBS, MS (Orthopedics)',
      specialty: 'Orthopedics',
      image: '/images/service/doctor-images/madhan.webp',
      specialization: 'Orthopedics',
    },
    {
      name: 'Dr. Chakravarthi Avula',
      qualification: 'MBBS, MS (General Surgery), M.Ch (Neurosurgery)',
      specialty: 'Neurosurgery',
      image: '/images/service/doctor-images/chakravarthi.webp',
      specialization: 'Sr Consultant Neurosurgeon',
    },
    {
      name: 'Dr. K. Balasubramanyam',
      qualification: 'MBBS, MS (General Surgery), M.Ch (Plastic Surgery)',
      specialty: 'Plastic Surgery',
      image: '/images/service/doctor-images/bala.webp',
      specialization: 'Plastic Surgery',
    },
    {
      name: 'Dr. Krishna Kishore Reddy',
      qualification: 'MBBS, MD, DNB (Cardiology), FACC',
      specialty: 'Cardiology',
      image: '/images/service/doctor-images/dr-krishna-kishore-reddy.jpg',
      specialization: 'Senior Interventional Cardiologist',
    },
    {
      name: 'Dr. Viswanath',
      qualification: 'MD, PGDCC, FCCS (USA)',
      specialty: 'Cardiology',
      image: '/images/service/doctor-images/dr-viswanath.png',
      specialization: 'Senior Interventional Cardiologist',
    },
    {
      name: 'Dr. Krishna Patil',
      qualification: 'MBBS, MD (Nephrology)',
      specialty: 'Nephrology',
      image: '/images/service/doctor-images/dr-krishna-patil.jpg',
      specialization: 'Nephrologist',
    },
    {
      name: 'Dr. Sai Sharanya V',
      qualification: 'MBBS (Osm), MS OBG (Osm), FIIMA, (MRCOG) Uk',
      specialty: 'Gynecology',
      image: '/images/service/doctor-images/Dr.Sai Sharanya.V.png',
      specialization: 'Sr.Consultant - Obstetrician & Gynaecologist & Infertility Specialist',
    },
    {
      name: 'Dr. Sarath Kumar Reddy A',
      qualification: 'MBBS, MS (Gen. Surgery), FMAS, MRCS (Edin), FIAGES, FRCS (UK) (ColorectalSurgery), FALS (Robotic Surgery), FALS (Surgical Oncology)',
      specialty: 'General Surgery',
      image: '/images/service/doctor-images/dr-sarath-kumar.webp',
      specialization: 'Sr. Consultant - Colorectal Oncosurgeon Laparoscopic & Robotic Surgeon',
    },
    {
      name: 'Dr. M. Arathi Kameswari',
      qualification: 'Bachelor Of Physiotherapy (BPT)',
      specialty: 'Physiotherapy',
      image: '/images/service/doctor-images/arathi-kumar.png',
      specialization: 'Consultant Physiotherapist',
    },
    {
      name: 'Ms. Anvitha Kachakayala',
      qualification: 'M.Sc. Dietetics and Applied Nutrition',
      specialty: 'Nutrition',
      image: '/images/service/doctor-images/ms-anvitha.png',
      specialization: 'Dietician & Nutritionist',
    },
  ];

  // Get unique specialties for filter
  const specialties = ['All', ...Array.from(new Set(doctors.map(doctor => doctor.specialty)))];
  
  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const stats = [
    { number: '21+', label: 'Expert Doctors', icon: Users, color: 'hospital-blue' },
    { number: '14+', label: 'Medical Specialties', icon: Award, color: 'hospital-green' },
    { number: '50000+', label: 'Happy Patients', icon: Heart, color: 'hospital-teal' },
    { number: '24/7', label: 'Emergency Care', icon: Clock, color: 'hospital-yellow' },
  ];

  return (
    <>
      <Head>
        <title>Best Doctors in Madhapur Hyderabad | Expert Specialists at Shri Sigma Hospitals</title>
        <meta name="description" content="Meet our team of expert doctors and specialists at Shri Sigma Hospitals, Madhapur. Experienced physicians across all medical specialties providing world-class healthcare." />
        <meta name="keywords" content="best doctors Madhapur, specialist doctors Hyderabad, expert physicians, medical specialists, experienced doctors, healthcare professionals Madhapur" />
      </Head>
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Stethoscope className="w-5 h-5 mr-2 text-hospital-yellow" />
              <span className="text-sm font-semibold">Medical Excellence</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 heading-no-break">
              <span className="block">Meet Our Expert</span>
              <span className="block text-hospital-yellow">Medical Team</span>
            </h1>
            
            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Our team of highly qualified specialists are committed to providing 
              world-class healthcare with compassion and expertise across all medical specialties
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-white -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="mb-6 flex justify-center">
                      <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-${stat.color}/10 group-hover:bg-${stat.color}/20 group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className={`h-10 w-10 text-${stat.color}`} />
                      </div>
                    </div>
                    <div className={`text-4xl font-bold font-display text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Filter Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-6">
              <Filter className="w-5 h-5 mr-2 text-hospital-blue" />
              <span className="text-sm font-semibold text-hospital-blue">Filter by Specialty</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
              <span className="block whitespace-nowrap">Our Medical</span>
              <span className="block text-hospital-green whitespace-nowrap">Specialists</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our wide range of medical specialties to find the right doctor for your healthcare needs
            </p>
          </div>

          {/* Specialty Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty
                    ? 'bg-hospital-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-hospital-blue/10 hover:text-hospital-blue border border-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-hospital-blue">{filteredDoctors.length}</span> doctors
              {selectedSpecialty !== 'All' && (
                <span> in <span className="font-bold text-hospital-green">{selectedSpecialty}</span></span>
              )}
            </p>
          </div>

          {/* Modern Doctors Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                  {/* Doctor Image - Full Header */}
                  <div className="relative h-80">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Specialty Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-hospital-blue/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {doctor.specialty}
                      </span>
                    </div>
                    

                    
                    {/* Doctor Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-hospital-yellow transition-colors duration-300">
                        {doctor.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Doctor Info */}
                  <div className="p-6">
                    <p className="text-hospital-green font-semibold mb-3 text-sm">
                      {doctor.qualification}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {doctor.specialization}
                    </p>
                    
                    {/* Contact Button */}
                    <Link
                      href="tel:+918977763308"
                      className="w-full bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center group/btn"
                    >
                      <Phone className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Consult Now
                    </Link>
                    
                    {/* Decorative Element */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No doctors found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
              <span className="text-sm font-semibold">Your Health, Our Priority</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 heading-no-break">
              <span className="block whitespace-nowrap">Ready to Consult with</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Our Specialists?</span>
            </h2>
            
            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Get expert medical care from our experienced doctors. Book your consultation today 
              and take the first step towards better health.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-10 py-5 text-hospital-blue font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Call: +91 89777 63308
              </Link>
              <Link
                href="/contact-us-madhapur-hyderabad"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-10 py-5 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl"
              >
                <Mail className="mr-3 h-6 w-6" />
                Contact Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">21+</div>
                <div className="text-sm opacity-90">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">14+</div>
                <div className="text-sm opacity-90">Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">4.8★</div>
                <div className="text-sm opacity-90">Patient Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">24/7</div>
                <div className="text-sm opacity-90">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}