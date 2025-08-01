import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Laser Surgery in Madhapur | Minimally Invasive Surgery Hyderabad',
  description: 'Advanced laser surgery at Shri Sigma Hospitals. Minimally invasive laser procedures, precision surgery with faster healing and recovery.',
  keywords: 'laser surgery Madhapur, minimally invasive surgery Hyderabad, laser procedures, precision surgery, laser treatment Hyderabad',
};

export default function LaserSurgeryPage() {
  const pageData = {
    title: 'Laser Surgery',
    subtitle: 'Advanced Minimally Invasive Laser Procedures',
    description: 'Comprehensive laser surgery services including minimally invasive procedures, precision surgery, and advanced laser treatments with faster healing and minimal scarring.',
    bannerImage: '/images/service/laser-surgery.webp',
    sideImage: '/images/service/laser-surgery.webp',
    features: [
      {
        title: 'Precision Surgery',
        description: 'Highly precise laser surgery with minimal tissue damage',
        icon: '/images/home/Laser-surgery.png',
      },
      {
        title: 'Minimal Scarring',
        description: 'Reduced scarring and better cosmetic outcomes',
        icon: '/images/home/Laser-surgery.png',
      },
      {
        title: 'Faster Healing',
        description: 'Quicker recovery and healing process',
        icon: '/images/home/Laser-surgery.png',
      },
      {
        title: 'Less Pain',
        description: 'Reduced pain and discomfort during and after surgery',
        icon: '/images/home/Laser-surgery.png',
      },
    ],
    benefits: [
      'Minimally invasive laser surgical procedures',
      'Precision surgery with minimal tissue damage',
      'Reduced bleeding and faster healing',
      'Minimal scarring and better cosmetic results',
      'Less pain and discomfort',
      'Shorter hospital stay and recovery time',
      'Insurance coverage and cashless facility',
      'Experienced team of laser surgery specialists',
    ],
    procedures: [
      'Laser Skin Surgery',
      'Laser Tumor Removal',
      'Laser Varicose Vein Treatment',
      'Laser Gallbladder Surgery',
      'Laser Hernia Repair',
      'Laser Appendectomy',
      'Laser Cyst Removal',
      'Laser Wound Treatment',
    ],
    whyChooseUs: [
      'State-of-the-art laser surgical equipment',
      'Experienced team of laser surgery specialists',
      'Minimally invasive surgical techniques',
      'Precision surgery with better outcomes',
      'Comprehensive pre and post-operative care',
      'Advanced laser technology and equipment',
      'Insurance assistance and cashless treatment',
      'High success rates with minimal complications',
    ],
    doctors: [
      {
        name: 'Dr. Krishna Patil',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '17+ Years',
        image: '/images/service/doctor-images/dr-krishna-patil.jpg',
        specialization: 'Laser Surgery & General Surgery',
      },
      {
        name: 'Dr. Sridar',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '13+ Years',
        image: '/images/service/doctor-images/sridar.webp',
        specialization: 'Laser Surgery & Minimally Invasive Procedures',
      },
    ],
    metaTitle: 'Best Laser Surgery in Madhapur | Minimally Invasive Surgery Hyderabad',
    metaDescription: 'Advanced laser surgery at Shri Sigma Hospitals. Minimally invasive laser procedures, precision surgery with faster healing and recovery.',
    keywords: 'laser surgery Madhapur, minimally invasive surgery Hyderabad, laser procedures, precision surgery, laser treatment Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}