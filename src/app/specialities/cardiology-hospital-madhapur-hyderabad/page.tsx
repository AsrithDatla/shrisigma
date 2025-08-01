import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Cardiology Hospital in Madhapur | Heart Specialist Hyderabad',
  description: 'Expert cardiology care at Shri Sigma Hospitals, Madhapur. Advanced heart treatments, experienced cardiologists, and state-of-the-art cardiac facilities.',
  keywords: 'cardiology hospital Madhapur, heart specialist Hyderabad, cardiac care, heart treatment, cardiologist Madhapur, heart surgery Hyderabad',
};

export default function CardiologyPage() {
  const pageData = {
    title: 'Cardiology',
    subtitle: 'Comprehensive Heart Care Services',
    description: 'Advanced cardiac care with state-of-the-art technology and experienced cardiologists. From preventive care to complex heart surgeries, we provide complete cardiovascular solutions.',
    bannerImage: '/images/service/cardio.webp',
    sideImage: '/images/service/cardio.webp',
    features: [
      {
        title: 'Advanced Diagnostics',
        description: 'State-of-the-art cardiac diagnostic equipment and procedures',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: 'Expert Cardiologists',
        description: 'Experienced team of cardiac specialists and surgeons',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: '24/7 Emergency Care',
        description: 'Round-the-clock cardiac emergency services',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: 'Modern Facilities',
        description: 'Advanced cardiac catheterization lab and ICU',
        icon: '/images/home/Cardiology.png',
      },
    ],
    benefits: [
      'Comprehensive cardiac evaluation and diagnosis',
      'Minimally invasive cardiac procedures',
      'Advanced angioplasty and stenting',
      'Cardiac rehabilitation programs',
      'Preventive cardiology consultations',
      'Emergency cardiac care 24/7',
      'Insurance coverage and cashless facility',
      'Experienced cardiac surgical team',
    ],
    procedures: [
      'Coronary Angiography',
      'Angioplasty and Stenting',
      'Bypass Surgery (CABG)',
      'Valve Replacement Surgery',
      'Pacemaker Implantation',
      'Echocardiography',
      'Stress Testing',
      'Holter Monitoring',
    ],
    whyChooseUs: [
      'State-of-the-art cardiac catheterization laboratory',
      'Experienced team of interventional cardiologists',
      'Advanced cardiac surgical facilities',
      'Comprehensive cardiac rehabilitation programs',
      'Emergency cardiac care available 24/7',
      'Insurance assistance and cashless treatment',
      'Personalized treatment plans for each patient',
      'High success rates in cardiac procedures',
    ],
    doctors: [
      {
        name: 'Dr. Harish V Kumar',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience: '18+ Years',
        image: '/images/service/doctor-images/dr- harish-v-kumar .jpg',
        specialization: 'Interventional Cardiology',
      },
      {
        name: 'Dr. Sarath Kumar',
        qualification: 'MBBS, MD (Medicine)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/dr-sarath-kumar.webp',
        specialization: 'Cardiology & Internal Medicine',
      },
    ],
    metaTitle: 'Best Cardiology Hospital in Madhapur | Heart Specialist Hyderabad',
    metaDescription: 'Expert cardiology care at Shri Sigma Hospitals, Madhapur. Advanced heart treatments, experienced cardiologists, and state-of-the-art cardiac facilities.',
    keywords: 'cardiology hospital Madhapur, heart specialist Hyderabad, cardiac care, heart treatment, cardiologist Madhapur, heart surgery Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}