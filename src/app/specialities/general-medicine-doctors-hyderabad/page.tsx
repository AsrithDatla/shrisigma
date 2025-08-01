import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best General Medicine Doctors in Hyderabad | Internal Medicine Specialist Madhapur',
  description: 'Expert general medicine care at Shri Sigma Hospitals. Comprehensive internal medicine, chronic disease management, and preventive healthcare services.',
  keywords: 'general medicine doctors Hyderabad, internal medicine specialist Madhapur, physician Hyderabad, chronic disease treatment, preventive healthcare',
};

export default function GeneralMedicinePage() {
  const pageData = {
    title: 'General Medicine',
    subtitle: 'Comprehensive Internal Medicine Care',
    description: 'Complete internal medicine services including chronic disease management, preventive care, health screenings, and comprehensive medical consultations with experienced physicians.',
    bannerImage: '/images/service/general-medicine.webp',
    sideImage: '/images/service/general-medicine.webp',
    features: [
      {
        title: 'Preventive Care',
        description: 'Comprehensive health screenings and preventive medicine',
        icon: '/images/home/General Medicine.png',
      },
      {
        title: 'Chronic Disease Management',
        description: 'Expert management of diabetes, hypertension, and other conditions',
        icon: '/images/home/General Medicine.png',
      },
      {
        title: 'Health Screenings',
        description: 'Regular health check-ups and diagnostic evaluations',
        icon: '/images/home/General Medicine.png',
      },
      {
        title: 'Emergency Care',
        description: '24/7 emergency medical care and consultation',
        icon: '/images/home/General Medicine.png',
      },
    ],
    benefits: [
      'Comprehensive health assessments and check-ups',
      'Chronic disease management and monitoring',
      'Preventive healthcare and vaccination services',
      'Emergency medical care and consultation',
      'Specialist referrals and coordination of care',
      'Health education and lifestyle counseling',
      'Insurance coverage and cashless facility',
      'Experienced team of internal medicine specialists',
    ],
    procedures: [
      'Comprehensive Health Check-ups',
      'Chronic Disease Management',
      'Vaccination Services',
      'Health Screenings',
      'Emergency Consultations',
      'Specialist Referrals',
      'Lifestyle Counseling',
      'Preventive Care Programs',
    ],
    whyChooseUs: [
      'Experienced team of internal medicine specialists',
      'Comprehensive diagnostic and laboratory facilities',
      'Personalized treatment plans for each patient',
      'Coordination with other medical specialties',
      'Preventive healthcare and wellness programs',
      'Emergency medical care available 24/7',
      'Insurance assistance and cashless treatment',
      'Patient-centered approach to healthcare',
    ],
    doctors: [
      {
        name: 'Dr. Sarath Kumar',
        qualification: 'MBBS, MD (General Medicine)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/dr-sarath-kumar.webp',
        specialization: 'Internal Medicine & Cardiology',
      },
      {
        name: 'Dr. Bhargava',
        qualification: 'MBBS, MD (General Medicine)',
        experience: '14+ Years',
        image: '/images/service/doctor-images/Dr-bhargava.webp',
        specialization: 'General Medicine & Diabetes Care',
      },
    ],
    metaTitle: 'Best General Medicine Doctors in Hyderabad | Internal Medicine Specialist Madhapur',
    metaDescription: 'Expert general medicine care at Shri Sigma Hospitals. Comprehensive internal medicine, chronic disease management, and preventive healthcare services.',
    keywords: 'general medicine doctors Hyderabad, internal medicine specialist Madhapur, physician Hyderabad, chronic disease treatment, preventive healthcare',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}