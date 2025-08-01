import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Critical Care Hospital in Hyderabad | ICU Services Madhapur',
  description: 'Advanced critical care at Shri Sigma Hospitals. ICU services, ventilator support, intensive care with experienced critical care specialists.',
  keywords: 'critical care hospital Hyderabad, ICU services Madhapur, intensive care unit, ventilator support, critical care specialist Hyderabad',
};

export default function CriticalCarePage() {
  const pageData = {
    title: 'Critical Care',
    subtitle: 'Advanced Intensive Care Services',
    description: 'Comprehensive critical care services including ICU management, ventilator support, continuous monitoring, and specialized intensive care with experienced critical care specialists.',
    bannerImage: '/images/service/critical-care.webp',
    sideImage: '/images/service/critical-care.webp',
    features: [
      {
        title: 'ICU Services',
        description: 'State-of-the-art intensive care unit with advanced monitoring',
        icon: '/images/home/Critical Care.png',
      },
      {
        title: 'Ventilator Support',
        description: 'Advanced mechanical ventilation and respiratory support',
        icon: '/images/home/Critical Care.png',
      },
      {
        title: '24/7 Monitoring',
        description: 'Continuous patient monitoring and critical care',
        icon: '/images/home/Critical Care.png',
      },
      {
        title: 'Emergency Care',
        description: 'Immediate critical care for emergency situations',
        icon: '/images/home/Critical Care.png',
      },
    ],
    benefits: [
      'State-of-the-art ICU with advanced monitoring systems',
      'Experienced critical care specialists available 24/7',
      'Advanced ventilator support and respiratory care',
      'Continuous patient monitoring and assessment',
      'Multidisciplinary critical care team approach',
      'Emergency critical care services',
      'Insurance coverage and cashless facility',
      'Family support and counseling services',
    ],
    procedures: [
      'ICU Management',
      'Mechanical Ventilation',
      'Hemodynamic Monitoring',
      'Dialysis Support',
      'Post-operative Critical Care',
      'Emergency Stabilization',
      'Respiratory Support',
      'Cardiac Monitoring',
    ],
    whyChooseUs: [
      'State-of-the-art ICU with advanced life support systems',
      'Experienced team of critical care specialists',
      'Advanced monitoring and diagnostic equipment',
      'Multidisciplinary approach to critical care',
      'Family-centered care and support services',
      'Emergency critical care available 24/7',
      'Insurance assistance and cashless treatment',
      'High success rates in critical care management',
    ],
    doctors: [
      {
        name: 'Dr. Santosh Kumar',
        qualification: 'MBBS, MD (Critical Care)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/santosh-kumaR.webp',
        specialization: 'Critical Care & Emergency Medicine',
      },
      {
        name: 'Dr. Madhan',
        qualification: 'MBBS, MD (Anesthesia & Critical Care)',
        experience: '14+ Years',
        image: '/images/service/doctor-images/madhan.webp',
        specialization: 'Critical Care & Anesthesiology',
      },
    ],
    metaTitle: 'Best Critical Care Hospital in Hyderabad | ICU Services Madhapur',
    metaDescription: 'Advanced critical care at Shri Sigma Hospitals. ICU services, ventilator support, intensive care with experienced critical care specialists.',
    keywords: 'critical care hospital Hyderabad, ICU services Madhapur, intensive care unit, ventilator support, critical care specialist Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}