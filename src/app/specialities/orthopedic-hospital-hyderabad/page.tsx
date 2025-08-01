import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Orthopedic Hospital in Hyderabad | Bone & Joint Specialist Madhapur',
  description: 'Expert orthopedic care at Shri Sigma Hospitals. Knee replacement, joint surgeries, sports injuries treatment with experienced orthopedic surgeons.',
  keywords: 'orthopedic hospital Hyderabad, knee replacement Madhapur, joint surgery, bone specialist, orthopedic surgeon Hyderabad, sports injury treatment',
};

export default function OrthopedicsPage() {
  const pageData = {
    title: 'Orthopedics',
    subtitle: 'Advanced Bone & Joint Care',
    description: 'Comprehensive orthopedic care including joint replacements, sports injury treatment, and advanced bone surgeries. Our expert orthopedic surgeons provide personalized treatment plans.',
    bannerImage: '/images/service/ortho.webp',
    sideImage: '/images/service/ortho.webp',
    features: [
      {
        title: 'Joint Replacement',
        description: 'Advanced knee and hip replacement surgeries',
        icon: '/images/home/Orthopedics.png',
      },
      {
        title: 'Sports Medicine',
        description: 'Specialized treatment for sports-related injuries',
        icon: '/images/home/Orthopedics.png',
      },
      {
        title: 'Minimally Invasive',
        description: 'Arthroscopic and minimally invasive procedures',
        icon: '/images/home/Orthopedics.png',
      },
      {
        title: 'Rehabilitation',
        description: 'Comprehensive physiotherapy and rehabilitation',
        icon: '/images/home/Orthopedics.png',
      },
    ],
    benefits: [
      'Advanced joint replacement surgeries',
      'Minimally invasive arthroscopic procedures',
      'Sports injury treatment and rehabilitation',
      'Fracture management and trauma care',
      'Spine surgery and treatment',
      'Comprehensive physiotherapy programs',
      'Quick recovery with modern techniques',
      'Insurance coverage available',
    ],
    procedures: [
      'Knee Replacement Surgery',
      'Hip Replacement Surgery',
      'Arthroscopic Surgery',
      'ACL Reconstruction',
      'Shoulder Surgery',
      'Spine Surgery',
      'Fracture Fixation',
      'Joint Arthroscopy',
    ],
    whyChooseUs: [
      'State-of-the-art orthopedic operation theaters',
      'Experienced orthopedic surgeons and specialists',
      'Advanced imaging and diagnostic facilities',
      'Comprehensive rehabilitation programs',
      'Minimally invasive surgical techniques',
      'Dedicated orthopedic ICU and recovery units',
      'Insurance assistance and cashless facility',
      'High success rates in joint replacement surgeries',
    ],
    doctors: [
      {
        name: 'Dr. Krishna Kishore Reddy',
        qualification: 'MBBS, MS (Orthopedics)',
        experience: '20+ Years',
        image: '/images/service/doctor-images/dr-krishna-kishore-reddy.jpg',
        specialization: 'Joint Replacement & Trauma Surgery',
      },
      {
        name: 'Dr. Raj Gopal',
        qualification: 'MBBS, MS (Orthopedics)',
        experience: '15+ Years',
        image: '/images/service/doctor-images/Raj-gopal.webp',
        specialization: 'Sports Medicine & Arthroscopy',
      },
    ],
    metaTitle: 'Best Orthopedic Hospital in Hyderabad | Bone & Joint Specialist Madhapur',
    metaDescription: 'Expert orthopedic care at Shri Sigma Hospitals. Knee replacement, joint surgeries, sports injuries treatment with experienced orthopedic surgeons.',
    keywords: 'orthopedic hospital Hyderabad, knee replacement Madhapur, joint surgery, bone specialist, orthopedic surgeon Hyderabad, sports injury treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}