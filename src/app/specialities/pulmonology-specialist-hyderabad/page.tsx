import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Pulmonology Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top pulmonology specialists in Hyderabad at Shri Sigma Hospital. Expert lung and respiratory care with advanced treatments and diagnostics.',
  keywords: 'pulmonology specialist Hyderabad, lung care Madhapur, respiratory therapy, sleep studies, asthma treatment, pulmonologist Hyderabad',
};

export default function PulmonologyPage() {
  const pageData = {
    title: 'Pulmonology',
    subtitle: 'Best Pulmonology Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Pulmonology Department at Shri Sigma Hospital in Madhapur - Hyderabad specializes in diagnosing and treating a wide range of respiratory and lung conditions.',
    bannerImage: '/images/service/pulmonology.webp',
    
    specialtyInfo: {
      title: 'Top Pulmonologists in Hyderabad',
      description: 'The Pulmonology Department at Shri Sigma Hospital in Madhapur - Hyderabad specializes in diagnosing and treating a wide range of respiratory and lung conditions. Our expert pulmonologists provide comprehensive care to address issues such as asthma, chronic obstructive pulmonary disease (COPD), and lung infections. With a focus on advanced diagnostic tools and personalized treatment plans, we are dedicated to improving respiratory health and overall quality of life. As a leading pulmonology clinic in Hyderabad, Shri Sigma Hospital is your trusted partner for all pulmonary health needs.',
      additionalInfo: 'Pulmonology is a medical specialty focused on the diagnosis, treatment, and management of respiratory and lung conditions. Pulmonologists are trained to handle a variety of issues related to the respiratory system, including chronic diseases such as asthma and COPD, as well as acute conditions like pneumonia and bronchitis. The field encompasses the evaluation of lung function, imaging studies, and advanced therapies to address respiratory health concerns. Pulmonologists use a range of diagnostic tools, including spirometry, chest X-rays, and CT scans, to accurately assess lung function and identify underlying conditions. Treatment may involve medication management, lifestyle modifications, and, in some cases, surgical interventions. The goal of pulmonology is to improve breathing, manage symptoms, and enhance overall lung health.',
      image: '/images/service/pulmonology.webp',
      doctorProfiles: [
        // Note: The HTML doesn't specify doctor profiles, so we'll use the existing ones
      ],
    },

    commonConditions: [
      {
        title: 'Asthma',
        description: 'A chronic condition causing inflammation and narrowing of the airways.',
      },
      {
        title: 'Chronic Obstructive Pulmonary Disease (COPD)',
        description: 'A progressive disease that obstructs airflow and causes breathing difficulties.',
      },
      {
        title: 'Pneumonia',
        description: 'An infection causing inflammation in the lungs.',
      },
      {
        title: 'Bronchitis',
        description: 'Inflammation of the bronchial tubes, often resulting in a cough and mucus production.',
      },
      {
        title: 'Sleep Apnea',
        description: 'A disorder characterized by interrupted breathing during sleep.',
      },
      {
        title: 'Interstitial Lung Disease',
        description: 'A group of disorders affecting the lung tissue and causing scarring.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Spirometry',
        description: 'A test that measures lung function and airflow.',
      },
      {
        title: 'Chest X-rays',
        description: 'Imaging to visualize the lungs and detect abnormalities.',
      },
      {
        title: 'CT Scans',
        description: 'Detailed imaging to assess lung conditions.',
      },
      {
        title: 'Bronchoscopy',
        description: 'A procedure to examine the airways and collect samples.',
      },
      {
        title: 'Pulse Oximetry',
        description: 'Measures the oxygen levels in the blood.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Prescribing drugs to manage symptoms and control diseases.',
      },
      {
        title: 'Inhalers and Nebulizers',
        description: 'Devices to deliver medication directly to the lungs.',
      },
      {
        title: 'Oxygen Therapy',
        description: 'Providing supplemental oxygen for patients with low blood oxygen levels.',
      },
      {
        title: 'Lifestyle Modifications',
        description: 'Recommendations for diet, exercise, and smoking cessation.',
      },
      {
        title: 'Pulmonary Rehabilitation',
        description: 'A program to improve lung function and overall health.',
      },
    ],

    rehabilitation: [
      {
        title: 'Pulmonary Rehabilitation',
        description: 'A comprehensive program including exercise, education, and support to improve lung function.',
      },
      {
        title: 'Breathing Exercises',
        description: 'Techniques to enhance respiratory efficiency.',
      },
      {
        title: 'Patient Education',
        description: 'Teaching patients about their condition and management strategies.',
      },
      {
        title: 'Chronic Disease Management',
        description: 'Ongoing care and support for chronic respiratory conditions.',
      },
      {
        title: 'Support Groups',
        description: 'Providing emotional and social support for patients with respiratory issues.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Pulmonology',
      content: 'At Shri Sigma Hospital, we are committed to providing exceptional pulmonology care with a focus on accurate diagnosis, effective treatment, and compassionate support. Our team of skilled pulmonologists is dedicated to improving your respiratory health and overall well-being, making us a leading choice for pulmonology services in Hyderabad.',
      description: 'Treatment Benefits\nWhy Choose Our Pulmonology Services?\nComprehensive benefits and procedures available for your pulmonology treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best Pulmonology Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top pulmonology specialists in Hyderabad at Shri Sigma Hospital. Expert lung and respiratory care with advanced treatments and diagnostics.',
    keywords: 'pulmonology specialist Hyderabad, lung care Madhapur, respiratory therapy, sleep studies, asthma treatment, pulmonologist Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}