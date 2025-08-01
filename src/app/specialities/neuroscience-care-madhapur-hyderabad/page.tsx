import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Neuroscience Hospital in Madhapur | Brain & Spine Specialist Hyderabad',
  description: 'Advanced neuroscience care at Shri Sigma Hospitals. Expert neurologists, brain surgery, spine treatments, and comprehensive neurological care.',
  keywords: 'neuroscience hospital Madhapur, neurologist Hyderabad, brain surgery, spine treatment, neurosurgeon Madhapur, stroke treatment',
};

export default function NeurosciencePage() {
  const pageData = {
    title: 'Neuroscience',
    subtitle: 'Advanced Brain & Spine Care',
    description: 'Comprehensive neurological care including brain surgery, spine treatments, stroke management, and advanced neurological procedures with expert neurosurgeons.',
    bannerImage: '/images/service/neurosciences.webp',
    sideImage: '/images/service/neurosciences.webp',
    features: [
      {
        title: 'Brain Surgery',
        description: 'Advanced neurosurgical procedures and brain treatments',
        icon: '/images/home/Neurosciences.png',
      },
      {
        title: 'Spine Care',
        description: 'Comprehensive spine surgery and treatment options',
        icon: '/images/home/Neurosciences.png',
      },
      {
        title: 'Stroke Care',
        description: 'Emergency stroke treatment and rehabilitation',
        icon: '/images/home/Neurosciences.png',
      },
      {
        title: 'Neuro ICU',
        description: 'Specialized neurological intensive care unit',
        icon: '/images/home/Neurosciences.png',
      },
    ],
    benefits: [
      'Advanced brain and spine surgical procedures',
      'Emergency stroke treatment and thrombolysis',
      'Minimally invasive neurosurgical techniques',
      'Comprehensive neurological rehabilitation',
      'Advanced imaging and diagnostic facilities',
      'Specialized neuro-intensive care unit',
      'Multidisciplinary neurological team',
      'Insurance coverage and cashless facility',
    ],
    procedures: [
      'Brain Tumor Surgery',
      'Spine Surgery',
      'Stroke Treatment',
      'Aneurysm Repair',
      'Epilepsy Surgery',
      'Deep Brain Stimulation',
      'Spinal Fusion',
      'Disc Replacement',
    ],
    whyChooseUs: [
      'State-of-the-art neurosurgical operation theaters',
      'Experienced team of neurosurgeons and neurologists',
      'Advanced neuroimaging and diagnostic facilities',
      'Specialized neuro-intensive care unit',
      'Minimally invasive surgical techniques',
      'Comprehensive stroke care program',
      'Multidisciplinary approach to neurological care',
      'High success rates in complex neurosurgical procedures',
    ],
    doctors: [
      {
        name: 'Dr. Sanjay Paul',
        qualification: 'MBBS, MS, MCh (Neurosurgery)',
        experience: '18+ Years',
        image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
        specialization: 'Neurosurgery & Spine Surgery',
      },
      {
        name: 'Dr. Viswanath',
        qualification: 'MBBS, MD (Neurology)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/dr-viswanath.png',
        specialization: 'Neurology & Stroke Medicine',
      },
    ],
    metaTitle: 'Best Neuroscience Hospital in Madhapur | Brain & Spine Specialist Hyderabad',
    metaDescription: 'Advanced neuroscience care at Shri Sigma Hospitals. Expert neurologists, brain surgery, spine treatments, and comprehensive neurological care.',
    keywords: 'neuroscience hospital Madhapur, neurologist Hyderabad, brain surgery, spine treatment, neurosurgeon Madhapur, stroke treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}