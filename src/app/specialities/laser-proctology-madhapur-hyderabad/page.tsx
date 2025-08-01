import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Laser Proctology in Madhapur | Anorectal Treatment Hyderabad',
  description: 'Advanced laser proctology at Shri Sigma Hospitals. Painless treatment for piles, fissures, fistula with laser technology and experienced proctologists.',
  keywords: 'laser proctology Madhapur, anorectal treatment Hyderabad, laser piles surgery, fissure treatment, fistula surgery, proctologist Madhapur',
};

export default function LaserProctologyPage() {
  const pageData = {
    title: 'Laser Proctology',
    subtitle: 'Advanced Laser Treatment for Anorectal Disorders',
    description: 'Comprehensive laser proctology services including painless treatment for piles, fissures, fistula, and other anorectal conditions with advanced laser technology.',
    bannerImage: '/images/service/laser-proctology.webp',
    sideImage: '/images/service/laser-proctology.webp',
    features: [
      {
        title: 'Laser Technology',
        description: 'Advanced laser treatment for precise and painless procedures',
        icon: '/images/home/Laser Proctology.png',
      },
      {
        title: 'Painless Treatment',
        description: 'Minimal pain and discomfort during and after treatment',
        icon: '/images/home/Laser Proctology.png',
      },
      {
        title: 'Quick Recovery',
        description: 'Faster healing and recovery with laser procedures',
        icon: '/images/home/Laser Proctology.png',
      },
      {
        title: 'No Stitches',
        description: 'Stitch-free procedures with minimal scarring',
        icon: '/images/home/Laser Proctology.png',
      },
    ],
    benefits: [
      'Painless laser treatment with minimal discomfort',
      'No cuts, no stitches, minimal bleeding',
      'Same-day discharge in most cases',
      'Quick recovery within 2-3 days',
      'Minimal risk of infection and complications',
      'High success rate with low recurrence',
      'Insurance coverage and cashless facility',
      'Experienced team of proctologists',
    ],
    procedures: [
      'Laser Piles Treatment',
      'Laser Fissure Treatment',
      'Laser Fistula Surgery',
      'Pilonidal Sinus Treatment',
      'Rectal Prolapse Treatment',
      'Anal Skin Tag Removal',
      'Hemorrhoidoplasty',
      'Sphincterotomy',
    ],
    whyChooseUs: [
      'State-of-the-art laser technology for precise treatment',
      'Experienced team of proctologists and surgeons',
      'Painless procedures with minimal discomfort',
      'Quick recovery and same-day discharge',
      'Comprehensive pre and post-operative care',
      'Insurance assistance and cashless facility',
      'High success rates with minimal complications',
      'Patient-friendly treatment approach',
    ],
    doctors: [
      {
        name: 'Dr. Krishna Patil',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/dr-krishna-patil.jpg',
        specialization: 'Laser Proctology & General Surgery',
      },
      {
        name: 'Dr. Sanjay Paul',
        qualification: 'MBBS, MS (General Surgery)',
        experience: '14+ Years',
        image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
        specialization: 'Proctology & Minimally Invasive Surgery',
      },
    ],
    metaTitle: 'Best Laser Proctology in Madhapur | Anorectal Treatment Hyderabad',
    metaDescription: 'Advanced laser proctology at Shri Sigma Hospitals. Painless treatment for piles, fissures, fistula with laser technology and experienced proctologists.',
    keywords: 'laser proctology Madhapur, anorectal treatment Hyderabad, laser piles surgery, fissure treatment, fistula surgery, proctologist Madhapur',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}