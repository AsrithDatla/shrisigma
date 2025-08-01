import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best General Surgery Hospital in Hyderabad | Laparoscopic Surgery Madhapur',
  description: 'Expert general surgery at Shri Sigma Hospitals. Laparoscopic surgery, emergency surgery, trauma care with experienced general surgeons.',
  keywords: 'general surgery hospital Hyderabad, laparoscopic surgery Madhapur, general surgeon Hyderabad, emergency surgery, trauma care, minimally invasive surgery',
};

export default function GeneralSurgeryPage() {
  const pageData = {
    title: 'General Surgery',
    subtitle: 'Advanced Surgical Care',
    description: 'Comprehensive general surgery services including laparoscopic procedures, emergency surgery, trauma care, and minimally invasive surgical techniques with experienced surgeons.',
    bannerImage: '/images/service/general-surgery.webp',
    sideImage: '/images/service/general-surgery.webp',
    features: [
      {
        title: 'Laparoscopic Surgery',
        description: 'Minimally invasive laparoscopic surgical procedures',
        icon: '/images/home/General Surgery.png',
      },
      {
        title: 'Emergency Surgery',
        description: '24/7 emergency surgical care and trauma management',
        icon: '/images/home/General Surgery.png',
      },
      {
        title: 'Minimally Invasive',
        description: 'Advanced minimally invasive surgical techniques',
        icon: '/images/home/General Surgery.png',
      },
      {
        title: 'Trauma Care',
        description: 'Comprehensive trauma surgery and emergency care',
        icon: '/images/home/General Surgery.png',
      },
    ],
    benefits: [
      'Advanced laparoscopic and minimally invasive surgery',
      'Emergency surgical care available 24/7',
      'Comprehensive trauma surgery and management',
      'Faster recovery with minimally invasive techniques',
      'Experienced team of general surgeons',
      'State-of-the-art surgical facilities',
      'Insurance coverage and cashless facility',
      'Multidisciplinary surgical team approach',
    ],
    procedures: [
      'Laparoscopic Surgery',
      'Appendectomy',
      'Hernia Repair',
      'Gallbladder Surgery',
      'Bowel Surgery',
      'Trauma Surgery',
      'Emergency Surgery',
      'Endoscopic Procedures',
    ],
    whyChooseUs: [
      'State-of-the-art surgical operation theaters',
      'Experienced team of general surgeons',
      'Advanced laparoscopic and endoscopic facilities',
      'Comprehensive trauma and emergency care',
      'Minimally invasive surgical techniques',
      'Dedicated surgical ICU and recovery units',
      'Insurance assistance and cashless treatment',
      'High success rates in surgical procedures',
    ],
    doctors: [
      {
        name: 'Dr. Krishna Patil',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '18+ Years',
        image: '/images/service/doctor-images/dr-krishna-patil.jpg',
        specialization: 'General Surgery & Laparoscopy',
      },
      {
        name: 'Dr. Sanjay Paul',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
        specialization: 'General Surgery & Trauma Care',
      },
    ],
    metaTitle: 'Best General Surgery Hospital in Hyderabad | Laparoscopic Surgery Madhapur',
    metaDescription: 'Expert general surgery at Shri Sigma Hospitals. Laparoscopic surgery, emergency surgery, trauma care with experienced general surgeons.',
    keywords: 'general surgery hospital Hyderabad, laparoscopic surgery Madhapur, general surgeon Hyderabad, emergency surgery, trauma care, minimally invasive surgery',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}