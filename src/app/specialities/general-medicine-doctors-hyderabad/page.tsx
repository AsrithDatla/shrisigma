import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best General Medicine Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top general medicine specialists in Hyderabad at Shri Sigma Hospital. Comprehensive internal medicine care with expert physicians and advanced diagnostics.',
  keywords: 'general medicine doctors Hyderabad, internal medicine specialist Madhapur, physician Hyderabad, chronic disease treatment, preventive healthcare',
};

export default function GeneralMedicinePage() {
  const pageData = {
    title: 'General Medicine',
    subtitle: 'Best General Medicine Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The General Medicine Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive healthcare for a wide range of medical conditions.',
    bannerImage: '/images/service/general-medicine.webp',
    
    specialtyInfo: {
      title: 'Top General Medicine Specialists in Hyderabad',
      description: 'The General Medicine Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive healthcare for a wide range of medical conditions. We have the best general medicine specialists in Hyderabad | Top experts in internal medicine. Our team of highly skilled physicians focuses on the diagnosis, treatment, and prevention of complex diseases. As the best general medicine hospital in Hyderabad, Shri Sigma Hospital is dedicated to ensuring optimal health and enhancing the quality of life for our patients. Trust Sigma Hospital for all your general medicine needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'General Medicine, also known as Internal Medicine, is a branch of medicine focused on the comprehensive management of adult patients with a broad spectrum of acute and chronic illnesses. General physicians, or internists, are experts in diagnosing and treating complex conditions that often involve multiple organ systems. They are skilled in identifying and managing a wide range of medical issues, from common illnesses to rare and complex diseases. Internal medicine practitioners take a holistic approach to patient care, addressing not only the immediate symptoms but also the underlying causes of health issues. Their training emphasizes the importance of thorough evaluation, evidence-based treatment, and long-term management strategies to improve overall health outcomes. In addition to acute and chronic disease management, general physicians play a crucial role in preventive care, health promotion, and patient education. They work closely with patients to develop personalized care plans, which may include lifestyle modifications, medications, and ongoing monitoring. General internists often serve as primary care providers, coordinating with specialists and other healthcare professionals to ensure comprehensive and cohesive care. Their ability to integrate various aspects of medical knowledge and patient care makes them essential in navigating complex health scenarios and improving patients\' quality of life.',
      image: '/images/service/general-medicine.webp',
      doctorProfiles: [
        {
          name: 'Dr. Bhargava Talluri',
          qualification: 'MBBS, MD (Internal Medicine)',
          designation: 'Sr.Consultant Internal Medicine & Diabetes Specialist',
          experience: '15+ Years',
          image: '/images/service/doctor-images/Dr-bhargava.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Diabetes',
        description: 'Chronic condition characterized by high blood sugar levels.',
      },
      {
        title: 'Hypertension',
        description: 'High blood pressure requiring ongoing management.',
      },
      {
        title: 'Infections',
        description: 'Bacterial, viral, and other types of infections requiring medical intervention.',
      },
      {
        title: 'Respiratory Disorders',
        description: 'Conditions affecting the lungs and airways.',
      },
      {
        title: 'Cardiovascular Diseases',
        description: 'Heart and blood vessel disorders.',
      },
      {
        title: 'Gastrointestinal Issues',
        description: 'Conditions affecting the digestive system.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Blood Tests',
        description: 'Comprehensive analysis of blood samples for various markers.',
      },
      {
        title: 'Imaging Studies',
        description: 'X-rays, CT scans, and MRIs to diagnose internal conditions.',
      },
      {
        title: 'ECG',
        description: 'Electrocardiogram to assess heart function.',
      },
      {
        title: 'Endoscopy',
        description: 'Examination of the digestive tract using a scope.',
      },
      {
        title: 'Pulmonary Function Tests',
        description: 'Tests to assess lung function.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Prescription drugs to manage various conditions.',
      },
      {
        title: 'Lifestyle Modifications',
        description: 'Diet, exercise, and other lifestyle changes to improve health.',
      },
      {
        title: 'Physical Therapy',
        description: 'Therapy to improve mobility and function.',
      },
      {
        title: 'Surgical Interventions',
        description: 'Surgeries for conditions that cannot be managed with medications alone.',
      },
      {
        title: 'Preventive Care',
        description: 'Regular check-ups and screenings to prevent diseases.',
      },
    ],

    rehabilitation: [
      {
        title: 'Cardiac Rehabilitation',
        description: 'Program to improve cardiovascular health after a heart event.',
      },
      {
        title: 'Diabetes Education',
        description: 'Training and support for managing diabetes.',
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on diets to support recovery and overall health.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of chronic illnesses.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in General Medicine Care',
      content: 'At Shri Sigma Hospital, we lead the way in general medicine care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in general medicine care, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our General Medicine Care Services?\nComprehensive benefits and procedures available for your general medicine treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best General Medicine Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top general medicine specialists in Hyderabad at Shri Sigma Hospital. Comprehensive internal medicine care with expert physicians and advanced diagnostics.',
    keywords: 'general medicine doctors Hyderabad, internal medicine specialist Madhapur, physician Hyderabad, chronic disease treatment, preventive healthcare',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}