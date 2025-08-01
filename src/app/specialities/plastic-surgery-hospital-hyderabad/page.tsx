import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Plastic Surgery Hospital in Hyderabad | Cosmetic Surgery Madhapur',
  description: 'Expert plastic and cosmetic surgery at Shri Sigma Hospitals. Reconstructive surgery, aesthetic procedures, cosmetic treatments with experienced surgeons.',
  keywords: 'plastic surgery Hyderabad, cosmetic surgery Madhapur, reconstructive surgery, aesthetic procedures, plastic surgeon Hyderabad, cosmetic treatments',
};

export default function PlasticSurgeryPage() {
  const pageData = {
    title: 'Plastic Surgery',
    subtitle: 'Advanced Cosmetic & Reconstructive Surgery',
    description: 'Comprehensive plastic surgery services including cosmetic procedures, reconstructive surgery, aesthetic treatments, and advanced surgical techniques with experienced plastic surgeons.',
    bannerImage: '/images/service/plastic-surgery.webp',
    sideImage: '/images/service/plastic-surgery.webp',
    features: [
      {
        title: 'Cosmetic Surgery',
        description: 'Advanced cosmetic and aesthetic surgical procedures',
        icon: '/images/home/Plastic Surgery.png',
      },
      {
        title: 'Reconstructive Surgery',
        description: 'Reconstructive procedures for trauma and congenital defects',
        icon: '/images/home/Plastic Surgery.png',
      },
      {
        title: 'Aesthetic Procedures',
        description: 'Non-surgical aesthetic treatments and procedures',
        icon: '/images/home/Plastic Surgery.png',
      },
      {
        title: 'Minimally Invasive',
        description: 'Minimally invasive techniques for better outcomes',
        icon: '/images/home/Plastic Surgery.png',
      },
    ],
    benefits: [
      'Advanced cosmetic and reconstructive surgery',
      'Minimally invasive surgical techniques',
      'Natural-looking aesthetic results',
      'Comprehensive pre and post-operative care',
      'State-of-the-art surgical facilities',
      'Experienced team of plastic surgeons',
      'Insurance coverage for reconstructive procedures',
      'Personalized treatment plans for each patient',
    ],
    procedures: [
      'Rhinoplasty (Nose Surgery)',
      'Breast Surgery',
      'Liposuction',
      'Tummy Tuck',
      'Facelift',
      'Hair Transplant',
      'Scar Revision',
      'Burn Reconstruction',
    ],
    whyChooseUs: [
      'Experienced team of board-certified plastic surgeons',
      'State-of-the-art surgical facilities and equipment',
      'Comprehensive approach to cosmetic and reconstructive surgery',
      'Natural-looking results with minimal scarring',
      'Advanced surgical techniques and technology',
      'Personalized consultation and treatment planning',
      'Insurance assistance for reconstructive procedures',
      'High patient satisfaction and safety standards',
    ],
    doctors: [
      {
        name: 'Dr. Chakravarthi',
        qualification: 'MBBS, MS, MCh (Plastic Surgery)',
        experience: '16+ Years',
        image: '/images/service/doctor-images/chakravarthi.webp',
        specialization: 'Plastic & Reconstructive Surgery',
      },
      {
        name: 'Dr. Arathi Kumar',
        qualification: 'MBBS, MS (Plastic Surgery)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/arathi-kumar.png',
        specialization: 'Cosmetic & Aesthetic Surgery',
      },
    ],
    metaTitle: 'Best Plastic Surgery Hospital in Hyderabad | Cosmetic Surgery Madhapur',
    metaDescription: 'Expert plastic and cosmetic surgery at Shri Sigma Hospitals. Reconstructive surgery, aesthetic procedures, cosmetic treatments with experienced surgeons.',
    keywords: 'plastic surgery Hyderabad, cosmetic surgery Madhapur, reconstructive surgery, aesthetic procedures, plastic surgeon Hyderabad, cosmetic treatments',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}