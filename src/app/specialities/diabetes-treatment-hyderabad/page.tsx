import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Diabetes Treatment in Hyderabad | Diabetology Specialist Madhapur',
  description: 'Expert diabetes care at Shri Sigma Hospitals. Comprehensive diabetology services, insulin therapy, diabetes management with experienced specialists.',
  keywords: 'diabetes treatment Hyderabad, diabetology specialist Madhapur, diabetes management, insulin therapy, endocrinologist Hyderabad, diabetes care',
};

export default function DiabetologyPage() {
  const pageData = {
    title: 'Diabetology',
    subtitle: 'Comprehensive Diabetes Care',
    description: 'Complete diabetes management services including blood sugar control, insulin therapy, diabetic complications management, and lifestyle counseling with experienced diabetologists.',
    bannerImage: '/images/service/diabatology.webp',
    sideImage: '/images/service/diabatology.webp',
    features: [
      {
        title: 'Diabetes Management',
        description: 'Comprehensive diabetes care and blood sugar control',
        icon: '/images/home/Diabetology.png',
      },
      {
        title: 'Insulin Therapy',
        description: 'Advanced insulin therapy and glucose monitoring',
        icon: '/images/home/Diabetology.png',
      },
      {
        title: 'Lifestyle Counseling',
        description: 'Diet planning and lifestyle modification programs',
        icon: '/images/home/Diabetology.png',
      },
      {
        title: 'Complication Management',
        description: 'Prevention and treatment of diabetic complications',
        icon: '/images/home/Diabetology.png',
      },
    ],
    benefits: [
      'Comprehensive diabetes assessment and management',
      'Advanced insulin therapy and glucose monitoring',
      'Diabetic complication prevention and treatment',
      'Personalized diet and lifestyle counseling',
      'Regular monitoring and follow-up care',
      'Diabetic foot care and wound management',
      'Insurance coverage and cashless facility',
      'Patient education and self-management training',
    ],
    procedures: [
      'Blood Sugar Monitoring',
      'Insulin Therapy',
      'HbA1c Testing',
      'Diabetic Foot Care',
      'Retinal Screening',
      'Kidney Function Tests',
      'Lifestyle Counseling',
      'Complication Management',
    ],
    whyChooseUs: [
      'Experienced team of diabetologists and endocrinologists',
      'Comprehensive diabetes care and management programs',
      'Advanced glucose monitoring and insulin therapy',
      'Personalized treatment plans for each patient',
      'Diabetic complication prevention and management',
      'Patient education and self-care training',
      'Insurance assistance and cashless treatment',
      'Regular monitoring and follow-up care',
    ],
    doctors: [
      {
        name: 'Dr. Bhargava',
        qualification: 'MBBS, MD (Endocrinology)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/Dr-bhargava.webp',
        specialization: 'Diabetology & Endocrinology',
      },
      {
        name: 'Dr. Tagore',
        qualification: 'MBBS, MD (General Medicine)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/tagore.webp',
        specialization: 'Diabetes Care & Internal Medicine',
      },
    ],
    metaTitle: 'Best Diabetes Treatment in Hyderabad | Diabetology Specialist Madhapur',
    metaDescription: 'Expert diabetes care at Shri Sigma Hospitals. Comprehensive diabetology services, insulin therapy, diabetes management with experienced specialists.',
    keywords: 'diabetes treatment Hyderabad, diabetology specialist Madhapur, diabetes management, insulin therapy, endocrinologist Hyderabad, diabetes care',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}