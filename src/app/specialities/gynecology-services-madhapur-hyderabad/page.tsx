import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Gynecology Hospital in Madhapur | Women\'s Health Specialist Hyderabad',
  description: 'Comprehensive women\'s healthcare at Shri Sigma Hospitals. Expert gynecologists, maternity care, fertility treatments, and women\'s health services.',
  keywords: 'gynecology hospital Madhapur, women health specialist Hyderabad, maternity care, fertility treatment, gynecologist Madhapur, pregnancy care',
};

export default function GynecologyPage() {
  const pageData = {
    title: 'Gynecology',
    subtitle: 'Comprehensive Women\'s Healthcare',
    description: 'Complete women\'s health services including maternity care, fertility treatments, gynecological surgeries, and preventive care with experienced female specialists.',
    bannerImage: '/images/service/gynecology.webp',
    sideImage: '/images/service/gynecology.webp',
    features: [
      {
        title: 'Maternity Care',
        description: 'Complete pregnancy care from conception to delivery',
        icon: '/images/home/gynecology.png',
      },
      {
        title: 'Fertility Treatment',
        description: 'Advanced fertility treatments and reproductive care',
        icon: '/images/home/gynecology.png',
      },
      {
        title: 'Minimally Invasive',
        description: 'Laparoscopic and minimally invasive gynecological surgeries',
        icon: '/images/home/gynecology.png',
      },
      {
        title: 'Preventive Care',
        description: 'Regular health screenings and preventive gynecological care',
        icon: '/images/home/gynecology.png',
      },
    ],
    benefits: [
      'Comprehensive maternity and pregnancy care',
      'Advanced fertility treatments and IVF',
      'Minimally invasive gynecological surgeries',
      'High-risk pregnancy management',
      'PCOS and hormonal disorder treatment',
      'Cancer screening and preventive care',
      'Dedicated women\'s health specialists',
      'Modern labor and delivery facilities',
    ],
    procedures: [
      'Normal Delivery',
      'Cesarean Section',
      'Laparoscopic Surgery',
      'Hysterectomy',
      'Ovarian Cyst Removal',
      'Fibroid Treatment',
      'Fertility Treatments',
      'PCOS Management',
    ],
    whyChooseUs: [
      'Experienced team of female gynecologists',
      'State-of-the-art maternity and delivery facilities',
      'Advanced fertility treatment options',
      'Minimally invasive surgical techniques',
      'Comprehensive prenatal and postnatal care',
      'Dedicated NICU for newborn care',
      'Insurance coverage and cashless facility',
      'Personalized care for women of all ages',
    ],
    doctors: [
      {
        name: 'Dr. Jyotika Waghray',
        qualification: 'MBBS, MS (Gynecology)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/dr-jyotika-waghray .jpg',
        specialization: 'Obstetrics & Gynecology',
      },
      {
        name: 'Dr. Sai Sharanya V',
        qualification: 'MBBS, MS (Gynecology)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/Dr.Sai Sharanya.V.png',
        specialization: 'High-Risk Pregnancy & Fertility',
      },
    ],
    metaTitle: 'Best Gynecology Hospital in Madhapur | Women\'s Health Specialist Hyderabad',
    metaDescription: 'Comprehensive women\'s healthcare at Shri Sigma Hospitals. Expert gynecologists, maternity care, fertility treatments, and women\'s health services.',
    keywords: 'gynecology hospital Madhapur, women health specialist Hyderabad, maternity care, fertility treatment, gynecologist Madhapur, pregnancy care',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}