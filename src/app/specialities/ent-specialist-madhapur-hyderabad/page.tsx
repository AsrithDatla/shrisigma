import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best ENT Hospital in Madhapur | Ear Nose Throat Specialist Hyderabad',
  description: 'Expert ENT care at Shri Sigma Hospitals. Ear, nose, throat treatments, sinus surgery, hearing problems, and ENT procedures with experienced specialists.',
  keywords: 'ENT hospital Madhapur, ear nose throat specialist Hyderabad, ENT doctor Madhapur, sinus surgery, hearing problems, throat surgery',
};

export default function ENTPage() {
  const pageData = {
    title: 'ENT (Ear, Nose & Throat)',
    subtitle: 'Comprehensive ENT Care',
    description: 'Complete ear, nose, and throat care including sinus treatments, hearing disorders, throat surgeries, and advanced ENT procedures with experienced specialists.',
    bannerImage: '/images/service/ent.webp',
    sideImage: '/images/service/ent.webp',
    features: [
      {
        title: 'Sinus Treatment',
        description: 'Advanced sinus surgery and treatment options',
        icon: '/images/home/ent.png',
      },
      {
        title: 'Hearing Care',
        description: 'Comprehensive hearing evaluation and treatment',
        icon: '/images/home/ent.png',
      },
      {
        title: 'Throat Surgery',
        description: 'Advanced throat and voice disorder treatments',
        icon: '/images/home/ent.png',
      },
      {
        title: 'Endoscopic Surgery',
        description: 'Minimally invasive endoscopic ENT procedures',
        icon: '/images/home/ent.png',
      },
    ],
    benefits: [
      'Comprehensive ear, nose, and throat evaluation',
      'Advanced sinus surgery and treatment',
      'Hearing loss evaluation and management',
      'Voice and speech disorder treatment',
      'Minimally invasive endoscopic procedures',
      'Pediatric ENT care and treatment',
      'Sleep apnea and snoring treatment',
      'Insurance coverage and cashless facility',
    ],
    procedures: [
      'Sinus Surgery',
      'Tonsillectomy',
      'Adenoidectomy',
      'Ear Surgery',
      'Nasal Surgery',
      'Throat Surgery',
      'Hearing Aid Fitting',
      'Voice Therapy',
    ],
    whyChooseUs: [
      'Experienced team of ENT specialists',
      'Advanced endoscopic surgical equipment',
      'Comprehensive hearing and balance testing',
      'Minimally invasive surgical techniques',
      'Pediatric ENT care and treatment',
      'Voice and speech therapy services',
      'Insurance assistance and cashless treatment',
      'High success rates in ENT procedures',
    ],
    doctors: [
      {
        name: 'Dr. S. Shazia Farhana',
        qualification: 'MBBS, MS (ENT)',
        experience: '14+ Years',
        image: '/images/service/doctor-images/Dr. S. Shazia Farhana.png',
        specialization: 'ENT & Head-Neck Surgery',
      },
      {
        name: 'Dr. Naveen Chandra Acharya',
        qualification: 'MBBS, MS (ENT)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/Dr.Naveen Chandra Acharya.png',
        specialization: 'Otolaryngology & Endoscopic Surgery',
      },
    ],
    metaTitle: 'Best ENT Hospital in Madhapur | Ear Nose Throat Specialist Hyderabad',
    metaDescription: 'Expert ENT care at Shri Sigma Hospitals. Ear, nose, throat treatments, sinus surgery, hearing problems, and ENT procedures with experienced specialists.',
    keywords: 'ENT hospital Madhapur, ear nose throat specialist Hyderabad, ENT doctor Madhapur, sinus surgery, hearing problems, throat surgery',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}