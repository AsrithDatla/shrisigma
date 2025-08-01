import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Urology Hospital in Madhapur | Kidney Stone Treatment Hyderabad',
  description: 'Expert urology care at Shri Sigma Hospitals. Kidney stone treatment, prostate surgery, urological procedures with experienced urologists.',
  keywords: 'urology hospital Madhapur, kidney stone treatment Hyderabad, urologist Madhapur, prostate surgery, urological care, bladder treatment',
};

export default function UrologyPage() {
  const pageData = {
    title: 'Urology',
    subtitle: 'Advanced Urological Care',
    description: 'Comprehensive urological services including kidney stone treatment, prostate care, bladder surgeries, and advanced minimally invasive urological procedures.',
    bannerImage: '/images/service/urology.webp',
    sideImage: '/images/service/urology.webp',
    features: [
      {
        title: 'Kidney Stone Treatment',
        description: 'Advanced laser and minimally invasive stone removal',
        icon: '/images/home/Urology.png',
      },
      {
        title: 'Prostate Care',
        description: 'Comprehensive prostate treatment and surgery',
        icon: '/images/home/Urology.png',
      },
      {
        title: 'Minimally Invasive',
        description: 'Laparoscopic and robotic urological procedures',
        icon: '/images/home/Urology.png',
      },
      {
        title: 'Reconstructive Surgery',
        description: 'Advanced reconstructive urological procedures',
        icon: '/images/home/Urology.png',
      },
    ],
    benefits: [
      'Advanced laser kidney stone treatment',
      'Minimally invasive urological procedures',
      'Comprehensive prostate care and surgery',
      'Bladder and urethral reconstruction',
      'Male fertility and erectile dysfunction treatment',
      'Pediatric urology services',
      'Urological cancer treatment',
      'Insurance coverage and cashless facility',
    ],
    procedures: [
      'Laser Kidney Stone Removal',
      'Prostatectomy',
      'Bladder Surgery',
      'Urethral Reconstruction',
      'Varicocele Surgery',
      'Circumcision',
      'Urological Cancer Surgery',
      'Incontinence Treatment',
    ],
    whyChooseUs: [
      'State-of-the-art laser technology for stone treatment',
      'Experienced team of urologists and surgeons',
      'Minimally invasive surgical techniques',
      'Advanced endoscopic and laparoscopic facilities',
      'Comprehensive male health and fertility care',
      'Dedicated urology operation theaters',
      'Insurance assistance and cashless treatment',
      'High success rates in urological procedures',
    ],
    doctors: [
      {
        name: 'Dr. Krishna Patil',
        qualification: 'MBBS, MS (Urology)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/dr-krishna-patil.jpg',
        specialization: 'Urology & Andrology',
      },
      {
        name: 'Dr. Shareef',
        qualification: 'MBBS, MS (Urology)',
        experience: '14+ Years',
        image: '/images/service/doctor-images/shareef.webp',
        specialization: 'Endourology & Laparoscopic Surgery',
      },
    ],
    metaTitle: 'Best Urology Hospital in Madhapur | Kidney Stone Treatment Hyderabad',
    metaDescription: 'Expert urology care at Shri Sigma Hospitals. Kidney stone treatment, prostate surgery, urological procedures with experienced urologists.',
    keywords: 'urology hospital Madhapur, kidney stone treatment Hyderabad, urologist Madhapur, prostate surgery, urological care, bladder treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}