import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: '24x7 Critical Care Hospital | Shri Sigma',
  description: 'Best Critical Care Hospital in Madhapur, Hyderabad-Telangana. Top critical care specialists in Hyderabad with advanced ICU services and intensive care.',
  keywords: 'critical care hospital Hyderabad, ICU services Madhapur, intensive care unit, critical care specialists Hyderabad, emergency care',
};

export default function CriticalCarePage() {
  const pageData = {
    title: 'Critical Care',
    subtitle: 'Best Critical Care Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Critical Care Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in critical situations.',
    bannerImage: '/images/service/critical-care.webp',

    specialtyInfo: {
      title: 'Top Critical Care Specialists in Hyderabad',
      description: 'The Critical Care Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in critical situations. We have the best critical care specialists in Hyderabad | Top intensive care experts. Our team of highly skilled critical care specialists specializes in managing severe, life-threatening conditions that require comprehensive and intensive medical attention. Our multidisciplinary team works collaboratively to develop personalized care plans aimed at achieving the best possible outcomes. Recognized as the best critical care hospital in Hyderabad, Shri Sigma Hospital is committed to helping patients achieve optimal health and enhance their quality of life. Trust Sigma Hospital for all your critical care needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'Critical care, or intensive care, is a specialized field of medicine that manages patients with severe, life-threatening conditions requiring continuous monitoring and advanced support. This branch of medicine utilizes sophisticated technology and life support systems to sustain vital functions, while a team of specially trained healthcare professionals provides round-the-clock care. Critical care units (ICUs) are equipped to handle complex medical situations such as severe trauma, acute respiratory failure, severe infections, and major cardiac or neurological events, ensuring that patients receive the intensive treatment necessary for their recovery or stabilization.',
      image: '/images/service/critical-care.webp',
      doctorProfiles: [
        {
          name: 'Dr. Srinivas Jakkinaboina',
          qualification: 'MBBS (Osm), MD (NIMS), DM (CCM), EDIC (UK)',
          experience: '15+ Years',
          designation: 'Sr. Consultant - Physician & Critical Care Specialist',
          image: '/images/service/doctor-images/doc-srinivas.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Severe Infections',
        description: 'Life-threatening infections that require intensive care and monitoring.',
      },
      {
        title: 'Respiratory Failure',
        description: 'A condition where the lungs cannot provide enough oxygen to the body.',
      },
      {
        title: 'Multiple Organ Failure',
        description: 'Simultaneous failure of multiple organ systems requiring comprehensive support.',
      },
      {
        title: 'Trauma',
        description: 'Severe injuries from accidents or violence that necessitate intensive care.',
      },
      {
        title: 'Post-Surgical Complications',
        description: 'Serious complications following major surgery.',
      },
      {
        title: 'Sepsis',
        description: 'A life-threatening response to infection that can lead to tissue damage, organ failure, and death.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Blood Tests',
        description: 'Regular monitoring of blood parameters to assess the patient\'s condition.',
      },
      {
        title: 'Imaging Studies',
        description: 'X-rays, CT scans, and MRIs to diagnose internal conditions.',
      },
      {
        title: 'Electrocardiogram (ECG)',
        description: 'Continuous monitoring of heart activity.',
      },
      {
        title: 'Arterial Blood Gases (ABG)',
        description: 'Measurement of oxygen and carbon dioxide levels in the blood.',
      },
      {
        title: 'Hemodynamic Monitoring',
        description: 'Continuous assessment of the cardiovascular system\'s function.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Ventilatory Support',
        description: 'Use of mechanical ventilation to assist or replace spontaneous breathing.',
      },
      {
        title: 'Medications',
        description: 'Includes antibiotics, vasopressors, sedatives, and pain management drugs.',
      },
      {
        title: 'Dialysis',
        description: 'For patients with kidney failure to remove waste products and excess fluid from the blood.',
      },
      {
        title: 'Surgical Interventions',
        description: 'Emergency surgeries to treat life-threatening conditions.',
      },
      {
        title: 'Nutrition Support',
        description: 'Providing adequate nutrition through feeding tubes or intravenous methods.',
      },
    ],

    rehabilitation: [
      {
        title: 'Physical Therapy',
        description: 'Tailored exercises to improve physical strength and mobility.',
      },
      {
        title: 'Occupational Therapy',
        description: 'Helps patients regain the ability to perform daily activities.',
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on diets to support recovery and overall health.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of critical illness.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in Critical Times',
      content: 'At Shri Sigma Hospital, we lead the way in critical care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in intensive care, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our Critical Care Services?\nComprehensive benefits and procedures available for your critical care treatment at Shri Sigma Hospital',
    },

    metaTitle: '24x7 Critical Care Hospital | Shri Sigma',
    metaDescription: 'Best Critical Care Hospital in Madhapur, Hyderabad-Telangana. Top critical care specialists in Hyderabad with advanced ICU services and intensive care.',
    keywords: 'critical care hospital Hyderabad, ICU services Madhapur, intensive care unit, critical care specialists Hyderabad, emergency care',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}