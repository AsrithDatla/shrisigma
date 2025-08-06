import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Top Physiotherapy Clinic in Madhapur, Hyderabad-Telangana',
  description: 'Expert physiotherapy services in Hyderabad at Shri Sigma Hospital. Comprehensive physiotherapy care for recovery and rehabilitation.',
  keywords: 'physiotherapy Hyderabad, physical therapy Madhapur, rehabilitation services, pain management, movement therapy, sports physiotherapy',
};

export default function PhysiotherapyPage() {
  const pageData = {
    title: 'Physiotherapy',
    subtitle: 'Top Physiotherapy Clinic in Madhapur, Hyderabad-Telangana',
    description: 'The Physiotherapy Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing comprehensive physiotherapy care for a range of conditions.',
    bannerImage: '/images/service/physiotherapy.webp',
    
    specialtyInfo: {
      title: 'Top Physiotherapists in Hyderabad',
      description: 'The Physiotherapy Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing comprehensive physiotherapy care for a range of conditions. We offer expert physiotherapy services in Hyderabad to help you recover from injuries, manage pain, and improve mobility. Our team of skilled physiotherapists uses evidence-based practices to develop personalized treatment plans aimed at enhancing physical function and overall well-being. As the best physiotherapy clinic in Hyderabad, Shri Sigma Hospital is committed to delivering exceptional care tailored to your individual needs.',
      additionalInfo: 'Physiotherapy is a healthcare profession focused on restoring movement and function to individuals affected by injury, illness, or disability. Physiotherapists use a range of techniques, including exercise therapy, manual therapy, and modalities such as heat and cold therapy, to alleviate pain, improve mobility, and enhance overall physical function. Physiotherapy also emphasizes preventive measures and education to help patients manage their conditions and prevent future injuries.',
      image: '/images/service/physiotherapy.webp',
      doctorProfiles: [
        {
          name: 'Dr. M. Arathi Kameswari',
          qualification: 'Bachelor Of Physiotherapy (BPT)',
          designation: 'Sr Consultant-Physiotherapist',
          experience: '10+ Years',
          image: '/images/service/doctor-images/arathi-kumar.png',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Back Pain',
        description: 'Pain affecting the lower, middle, or upper back.',
      },
      {
        title: 'Sports Injuries',
        description: 'Injuries related to physical activity or sports, including strains and sprains.',
      },
      {
        title: 'Post-Surgical Rehabilitation',
        description: 'Recovery support following surgical procedures.',
      },
      {
        title: 'Joint Pain',
        description: 'Pain in various joints, including shoulders, knees, and hips.',
      },
      {
        title: 'Neck Pain',
        description: 'Discomfort or pain in the neck region.',
      },
      {
        title: 'Muscle Strains',
        description: 'Injuries to muscle fibers due to overstretching or overuse.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Physical Assessment',
        description: 'Evaluating range of motion, strength, and flexibility.',
      },
      {
        title: 'Functional Testing',
        description: 'Assessing functional abilities and limitations.',
      },
      {
        title: 'Postural Analysis',
        description: 'Examining posture and alignment to identify potential issues.',
      },
      {
        title: 'Gait Analysis',
        description: 'Evaluating walking patterns to diagnose abnormalities.',
      },
      {
        title: 'Ultrasound Therapy',
        description: 'Using sound waves to assess and treat soft tissue injuries.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Exercise Therapy',
        description: 'Customized exercise programs to improve strength, flexibility, and mobility.',
      },
      {
        title: 'Manual Therapy',
        description: 'Hands-on techniques to alleviate pain and restore function.',
      },
      {
        title: 'Modalities',
        description: 'Use of heat, cold, and electrical stimulation for pain management.',
      },
      {
        title: 'Posture Correction',
        description: 'Techniques to improve posture and prevent strain.',
      },
      {
        title: 'Ergonomic Advice',
        description: 'Recommendations to create a safe and efficient work environment.',
      },
    ],

    rehabilitation: [
      {
        title: 'Physical Therapy',
        description: 'Comprehensive therapy to restore function and mobility.',
      },
      {
        title: 'Occupational Therapy',
        description: 'Assistance with daily activities and adaptive techniques.',
      },
      {
        title: 'Pain Management',
        description: 'Strategies to alleviate and manage pain effectively.',
      },
      {
        title: 'Health Education',
        description: 'Guidance on exercise, posture, and lifestyle changes.',
      },
      {
        title: 'Recovery Support',
        description: 'Ongoing support to ensure optimal recovery and prevent recurrence of injuries.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Physiotherapy',
      content: 'At Shri Sigma Hospital, we are committed to providing exceptional physiotherapy care with a focus on individualized treatment plans and advanced therapeutic techniques. Our physiotherapists are dedicated to improving your quality of life through expert care and supportive rehabilitation, making us a top choice for physiotherapy services in Hyderabad.',
      description: 'Treatment Benefits\nWhy Choose Our Physiotherapy Services?\nComprehensive benefits and procedures available for your physiotherapy treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Top Physiotherapy Clinic in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Expert physiotherapy services in Hyderabad at Shri Sigma Hospital. Comprehensive physiotherapy care for recovery and rehabilitation.',
    keywords: 'physiotherapy Hyderabad, physical therapy Madhapur, rehabilitation services, pain management, movement therapy, sports physiotherapy',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}