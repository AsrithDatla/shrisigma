import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Physiotherapy Services in Hyderabad | Physical Therapy Madhapur',
  description: 'Expert physiotherapy at Shri Sigma Hospitals. Rehabilitation, pain management, movement therapy, sports physiotherapy with experienced therapists.',
  keywords: 'physiotherapy Hyderabad, physical therapy Madhapur, rehabilitation services, pain management, movement therapy, sports physiotherapy',
};

export default function PhysiotherapyPage() {
  const pageData = {
    title: 'Physiotherapy',
    subtitle: 'Comprehensive Rehabilitation Services',
    description: 'Complete physiotherapy and rehabilitation services including pain management, movement therapy, sports rehabilitation, and post-surgical recovery with experienced physiotherapists.',
    bannerImage: '/images/service/physiotherapy.webp',
    sideImage: '/images/service/physiotherapy.webp',
    features: [
      {
        title: 'Rehabilitation',
        description: 'Comprehensive rehabilitation programs for recovery',
        icon: '/images/home/Physiotherapy.png',
      },
      {
        title: 'Pain Management',
        description: 'Effective pain relief and management techniques',
        icon: '/images/home/Physiotherapy.png',
      },
      {
        title: 'Movement Therapy',
        description: 'Specialized movement and exercise therapy',
        icon: '/images/home/Physiotherapy.png',
      },
      {
        title: 'Sports Therapy',
        description: 'Sports injury rehabilitation and performance enhancement',
        icon: '/images/home/Physiotherapy.png',
      },
    ],
    benefits: [
      'Comprehensive rehabilitation and recovery programs',
      'Effective pain management and relief techniques',
      'Post-surgical rehabilitation and recovery',
      'Sports injury treatment and prevention',
      'Movement therapy and exercise programs',
      'Neurological rehabilitation services',
      'Pediatric and geriatric physiotherapy',
      'Home-based physiotherapy services available',
    ],
    procedures: [
      'Manual Therapy',
      'Exercise Therapy',
      'Electrotherapy',
      'Heat and Cold Therapy',
      'Ultrasound Therapy',
      'Laser Therapy',
      'Hydrotherapy',
      'Occupational Therapy',
    ],
    whyChooseUs: [
      'Experienced team of certified physiotherapists',
      'State-of-the-art physiotherapy equipment and facilities',
      'Personalized treatment plans for each patient',
      'Comprehensive approach to rehabilitation',
      'Sports injury specialists and sports physiotherapy',
      'Home-based physiotherapy services available',
      'Insurance coverage and affordable treatment',
      'Regular progress monitoring and assessment',
    ],
    doctors: [
      {
        name: 'Dr. Jahnavi',
        qualification: 'BPT, MPT (Orthopedics)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/jahnavi.webp',
        specialization: 'Orthopedic Physiotherapy',
      },
      {
        name: 'Dr. Bala',
        qualification: 'BPT, MPT (Neurology)',
        experience: '10+ Years',
        image: '/images/service/doctor-images/bala.webp',
        specialization: 'Neurological Physiotherapy',
      },
    ],
    metaTitle: 'Best Physiotherapy Services in Hyderabad | Physical Therapy Madhapur',
    metaDescription: 'Expert physiotherapy at Shri Sigma Hospitals. Rehabilitation, pain management, movement therapy, sports physiotherapy with experienced therapists.',
    keywords: 'physiotherapy Hyderabad, physical therapy Madhapur, rehabilitation services, pain management, movement therapy, sports physiotherapy',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}