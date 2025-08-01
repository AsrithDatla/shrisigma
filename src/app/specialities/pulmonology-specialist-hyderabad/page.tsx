import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Pulmonology Specialist in Hyderabad | Lung Care Madhapur',
  description: 'Expert pulmonology care at Shri Sigma Hospitals. Lung treatments, respiratory therapy, sleep studies, asthma care with experienced pulmonologists.',
  keywords: 'pulmonology specialist Hyderabad, lung care Madhapur, respiratory therapy, sleep studies, asthma treatment, pulmonologist Hyderabad',
};

export default function PulmonologyPage() {
  const pageData = {
    title: 'Pulmonology',
    subtitle: 'Comprehensive Lung & Respiratory Care',
    description: 'Complete pulmonology services including lung treatments, respiratory therapy, sleep studies, asthma management, and advanced respiratory care with experienced pulmonologists.',
    bannerImage: '/images/service/pulmonology.webp',
    sideImage: '/images/service/pulmonology.webp',
    features: [
      {
        title: 'Lung Care',
        description: 'Comprehensive lung disease diagnosis and treatment',
        icon: '/images/home/Pulmonology.png',
      },
      {
        title: 'Respiratory Therapy',
        description: 'Advanced respiratory therapy and rehabilitation',
        icon: '/images/home/Pulmonology.png',
      },
      {
        title: 'Sleep Studies',
        description: 'Sleep disorder diagnosis and treatment',
        icon: '/images/home/Pulmonology.png',
      },
      {
        title: 'Asthma Care',
        description: 'Comprehensive asthma management and treatment',
        icon: '/images/home/Pulmonology.png',
      },
    ],
    benefits: [
      'Comprehensive lung and respiratory care',
      'Advanced diagnostic and treatment facilities',
      'Sleep disorder evaluation and treatment',
      'Asthma and COPD management programs',
      'Respiratory therapy and rehabilitation',
      'Smoking cessation programs',
      'Insurance coverage and cashless facility',
      'Experienced team of pulmonologists',
    ],
    procedures: [
      'Pulmonary Function Tests',
      'Bronchoscopy',
      'Sleep Studies',
      'Chest X-ray and CT Scan',
      'Oxygen Therapy',
      'Nebulization',
      'Respiratory Rehabilitation',
      'Allergy Testing',
    ],
    whyChooseUs: [
      'Experienced team of pulmonologists and respiratory therapists',
      'State-of-the-art pulmonary function testing equipment',
      'Comprehensive sleep study facilities',
      'Advanced bronchoscopy and diagnostic procedures',
      'Personalized treatment plans for respiratory conditions',
      'Respiratory rehabilitation and therapy programs',
      'Insurance assistance and cashless treatment',
      'Multidisciplinary approach to lung care',
    ],
    doctors: [
      {
        name: 'Dr. Srinivas',
        qualification: 'MBBS, MD (Pulmonology)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/doc-srinivas.webp',
        specialization: 'Pulmonology & Critical Care',
      },
      {
        name: 'Dr. Santosh Kumar',
        qualification: 'MBBS, MD (Respiratory Medicine)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/santosh-kumaR.webp',
        specialization: 'Respiratory Medicine & Sleep Disorders',
      },
    ],
    metaTitle: 'Best Pulmonology Specialist in Hyderabad | Lung Care Madhapur',
    metaDescription: 'Expert pulmonology care at Shri Sigma Hospitals. Lung treatments, respiratory therapy, sleep studies, asthma care with experienced pulmonologists.',
    keywords: 'pulmonology specialist Hyderabad, lung care Madhapur, respiratory therapy, sleep studies, asthma treatment, pulmonologist Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}