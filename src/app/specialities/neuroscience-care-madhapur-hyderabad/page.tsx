import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Neurosciences Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top neurology specialists in Hyderabad at Shri Sigma Hospital. Expert brain and spine care with advanced neurological treatments and neurosurgery.',
  keywords: 'neuroscience hospital Madhapur, neurologist Hyderabad, brain surgery, spine treatment, neurosurgeon Madhapur, stroke treatment',
};

export default function NeurosciencePage() {
  const pageData = {
    title: 'Neurosciences',
    subtitle: 'Best Neurosciences Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Neurosciences Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in neurological conditions.',
    bannerImage: '/images/service/neurosciences.webp',
    
    specialtyInfo: {
      title: 'Top Neurology Specialists in Hyderabad',
      description: 'The Neurosciences Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in neurological conditions. We have the best neurology specialists in Hyderabad | Top neurological care experts. Our team of highly skilled neurology specialists focuses on diagnosing, treating, and managing a wide range of neurological disorders. Recognized as the best neurosciences hospital in Hyderabad, Shri Sigma Hospital is committed to helping patients achieve optimal health and enhance their quality of life. Trust Sigma Hospital for all your neurological care needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'Neurosciences is a specialized field of medicine focused on the diagnosis, treatment, and management of diseases and disorders affecting the brain, spinal cord, and nervous system. This branch of medicine combines advanced technology and expertise to address complex neurological conditions, providing comprehensive care to improve patient outcomes.',
      image: '/images/service/neurosciences.webp',
      doctorProfiles: [
        {
          name: 'Dr. Chakravarthi Avula',
          qualification: 'MBBS, MS-General Surgery, M.Ch-Neurosurgery',
          designation: 'Sr Consultant Neurosurgeon',
          experience: '20+ Years',
          image: '/images/service/doctor-images/chakravarthi.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Stroke',
        description: 'A medical emergency where blood flow to the brain is interrupted or reduced.',
      },
      {
        title: 'Epilepsy',
        description: 'A neurological disorder characterized by recurrent seizures.',
      },
      {
        title: 'Multiple Sclerosis (MS)',
        description: 'A disease that affects the central nervous system, causing physical and cognitive impairments.',
      },
      {
        title: 'Parkinson\'s Disease',
        description: 'A progressive disorder that affects movement and coordination.',
      },
      {
        title: 'Alzheimer\'s Disease',
        description: 'A progressive neurological disorder that leads to memory loss and cognitive decline.',
      },
      {
        title: 'Migraines',
        description: 'Severe, recurring headaches often accompanied by nausea and sensitivity to light and sound.',
      },
    ],

    diagnosticTools: [
      {
        title: 'MRI and CT Scans',
        description: 'Imaging techniques to visualize brain and spinal cord structures.',
      },
      {
        title: 'Electroencephalogram (EEG)',
        description: 'A test to detect electrical activity in the brain.',
      },
      {
        title: 'Nerve Conduction Studies (NCS)',
        description: 'Tests to measure the speed and strength of signals traveling through the nerves.',
      },
      {
        title: 'Lumbar Puncture',
        description: 'A procedure to collect cerebrospinal fluid for testing.',
      },
      {
        title: 'Blood Tests',
        description: 'Used to detect infections, inflammation, or genetic conditions.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Medication',
        description: 'Prescription drugs to manage symptoms and treat neurological conditions.',
      },
      {
        title: 'Physical Therapy',
        description: 'Rehabilitation to improve mobility and function.',
      },
      {
        title: 'Occupational Therapy',
        description: 'Assistance in performing daily activities independently.',
      },
      {
        title: 'Surgical Interventions',
        description: 'Procedures to correct or treat neurological issues.',
      },
      {
        title: 'Neurostimulation',
        description: 'Techniques like deep brain stimulation (DBS) to manage symptoms of neurological disorders.',
      },
    ],

    rehabilitation: [
      {
        title: 'Speech Therapy',
        description: 'Treatment to improve speech and communication skills.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to address emotional and mental health issues related to neurological conditions.',
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on diets to support brain health and overall wellness.',
      },
      {
        title: 'Cognitive Rehabilitation',
        description: 'Exercises and activities to improve cognitive function and memory.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in Neurological Care',
      content: 'At Shri Sigma Hospital, we lead the way in neurological care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in neurosciences, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our Neurological Care Services?\nComprehensive benefits and procedures available for your neurological treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best Neurosciences Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top neurology specialists in Hyderabad at Shri Sigma Hospital. Expert brain and spine care with advanced neurological treatments and neurosurgery.',
    keywords: 'neuroscience hospital Madhapur, neurologist Hyderabad, brain surgery, spine treatment, neurosurgeon Madhapur, stroke treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}