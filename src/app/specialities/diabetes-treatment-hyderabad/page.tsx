import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Advanced Diabetes Treatment Care | Shri Sigma',
  description: 'Shri Sigma offers expert diabetes treatment in Hyderabad with personalized plans, lifestyle support, and advanced diagnostics for all types of diabetes.',
  keywords: 'Best Diabetes Treatment in Madhapur Hyderabad, Best Diabetes Services in Madhapur Hyderabad, Diabetes Clinic in Madhapur Hyderabad, Top Diabetes Specialist in Madhapur, Diabetes Doctor Near Madhapur Hyderabad, Best Endocrinologist in Madhapur Hyderabad',
};

export default function DiabetologyPage() {
  const pageData = {
    title: 'Diabetology',
    subtitle: 'Best Diabetology Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Diabetology Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in diabetes management.',
    bannerImage: '/images/service/diabatology.webp',
    
    specialtyInfo: {
      title: 'Top Diabetes Specialists in Hyderabad',
      description: 'The Diabetology Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in diabetes management. We have the best diabetes specialists in Hyderabad | Top diabetes care experts. Our team of highly skilled diabetes specialists focuses on managing and treating diabetes, offering comprehensive care plans tailored to individual needs. Recognized as the best diabetology hospital in Hyderabad, Shri Sigma Hospital is committed to helping patients achieve optimal health and enhance their quality of life. Trust Sigma Hospital for all your diabetes care needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'Diabetology is a specialized field of medicine focused on the diagnosis, treatment, and management of diabetes. This branch of medicine aims to provide comprehensive care for individuals with diabetes through advanced treatments, lifestyle modifications, and continuous monitoring. Diabetologists work closely with patients to develop personalized care plans that include dietary advice, exercise recommendations, and medication management to control blood sugar levels and prevent complications associated with diabetes.',
      image: '/images/service/diabatology.webp',
      doctorProfiles: [
        {
          name: 'Dr. Bhargava Talluri',
          qualification: 'MBBS, MD (Internal Medicine)',
          designation: 'Sr.Consultant Internal Medicine & Diabetes Specialist',
          image: '/images/service/doctor-images/Dr-bhargava.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Type 1 Diabetes',
        description: 'A chronic condition where the pancreas produces little or no insulin.',
      },
      {
        title: 'Type 2 Diabetes',
        description: 'A condition that affects the way the body processes blood sugar (glucose).',
      },
      {
        title: 'Gestational Diabetes',
        description: 'Diabetes diagnosed during pregnancy that can affect the health of both mother and baby.',
      },
      {
        title: 'Diabetic Neuropathy',
        description: 'Nerve damage that occurs due to high blood sugar levels.',
      },
      {
        title: 'Diabetic Retinopathy',
        description: 'A diabetes complication that affects the eyes.',
      },
      {
        title: 'Diabetic Foot Ulcers',
        description: 'Open sores or wounds that occur in diabetic patients due to poor circulation and neuropathy.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Blood Glucose Tests',
        description: 'Regular monitoring of blood sugar levels to assess the patient\'s condition.',
      },
      {
        title: 'HbA1c Test',
        description: 'Measures the average blood glucose levels over the past three months.',
      },
      {
        title: 'Urine Tests',
        description: 'Used to check for the presence of glucose or ketones in the urine.',
      },
      {
        title: 'Eye Exams',
        description: 'Regular eye examinations to monitor and manage diabetic retinopathy.',
      },
      {
        title: 'Foot Exams',
        description: 'Regular examinations to detect and prevent diabetic foot complications.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Insulin Therapy',
        description: 'Regular insulin injections to manage blood sugar levels.',
      },
      {
        title: 'Oral Medications',
        description: 'Medications that help control blood sugar levels.',
      },
      {
        title: 'Dietary Management',
        description: 'Personalized diet plans to manage diabetes effectively.',
      },
      {
        title: 'Exercise Programs',
        description: 'Tailored exercise routines to help maintain healthy blood sugar levels.',
      },
      {
        title: 'Continuous Glucose Monitoring (CGM)',
        description: 'Devices that track blood sugar levels throughout the day.',
      },
    ],

    rehabilitation: [
      {
        title: 'Physical Therapy',
        description: 'Tailored exercises to improve physical strength and mobility.',
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on diets to support recovery and overall health.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of diabetes.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in Diabetes Care',
      content: 'At Shri Sigma Hospital, we lead the way in diabetes care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in diabetology, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our Diabetes Care Services?\nComprehensive benefits and procedures available for your diabetes treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Advanced Diabetes Treatment Care | Shri Sigma',
    metaDescription: 'Shri Sigma offers expert diabetes treatment in Hyderabad with personalized plans, lifestyle support, and advanced diagnostics for all types of diabetes.',
    keywords: 'Best Diabetes Treatment in Madhapur Hyderabad, Best Diabetes Services in Madhapur Hyderabad, Diabetes Clinic in Madhapur Hyderabad, Top Diabetes Specialist in Madhapur, Diabetes Doctor Near Madhapur Hyderabad, Best Endocrinologist in Madhapur Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}