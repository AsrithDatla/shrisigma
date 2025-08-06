import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Top Plastic Surgery Clinic in Madhapur, Hyderabad-Telangana',
  description: 'Advanced aesthetic and reconstructive procedures at Shri Sigma Hospital. Expert plastic surgeons providing comprehensive plastic surgery services in Hyderabad.',
  keywords: 'plastic surgery Hyderabad, cosmetic surgery Madhapur, reconstructive surgery, aesthetic procedures, plastic surgeon Hyderabad, cosmetic treatments',
};

export default function PlasticSurgeryPage() {
  const pageData = {
    title: 'Plastic Surgery',
    subtitle: 'Top Plastic Surgery Clinic in Madhapur, Hyderabad-Telangana',
    description: 'The Plastic Surgery Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing advanced aesthetic and reconstructive procedures.',
    bannerImage: '/images/service/plastic-surgery.webp',
    
    specialtyInfo: {
      title: 'Top Plastic Surgeons in Hyderabad',
      description: 'The Plastic Surgery Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing advanced aesthetic and reconstructive procedures. Our experienced plastic surgeons offer a wide range of surgical and non-surgical treatments to enhance and restore both function and appearance. We are committed to delivering personalized care and achieving the best possible outcomes for our patients. As a leading plastic surgery clinic in Hyderabad, Shri Sigma Hospital is your trusted partner in achieving your aesthetic goals.',
      additionalInfo: 'Plastic surgery is a medical specialty focused on reconstructive and aesthetic procedures to enhance or restore appearance and function. This field encompasses a wide range of surgeries, including those aimed at correcting congenital defects, injuries, or conditions that affect physical appearance or functionality. Plastic surgeons use advanced techniques to achieve natural-looking results and improve patients\' quality of life.',
      image: '/images/service/plastic-surgery.webp',
      doctorProfiles: [
        {
          name: 'Dr. K. Balasubramanyam',
          qualification: 'MBBS, MS, MCh (Plastic Surgery)',
          designation: 'Sr. Consultant Plastic Reconstructive & Cosmetic Surgeon',
          experience: '15+ Years',
          image: '/images/service/doctor-images/bala.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Breast Augmentation',
        description: 'Enhancing the size and shape of the breasts using implants or fat transfer.',
      },
      {
        title: 'Rhinoplasty',
        description: 'Reshaping the nose for aesthetic or functional improvement.',
      },
      {
        title: 'Liposuction',
        description: 'Removing excess fat deposits to contour the body.',
      },
      {
        title: 'Facelift',
        description: 'Rejuvenating the face by tightening the skin and underlying tissues.',
      },
      {
        title: 'Abdominoplasty (Tummy Tuck)',
        description: 'Removing excess skin and fat from the abdomen to improve contour.',
      },
      {
        title: 'Blepharoplasty',
        description: 'Correcting drooping eyelids and improving appearance.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Skin Grafting',
        description: 'Transferring skin from one part of the body to another to repair damaged areas.',
      },
      {
        title: 'Flap Surgery',
        description: 'Using tissue from a nearby area to reconstruct or repair damaged skin and underlying structures.',
      },
      {
        title: 'Burn Reconstruction',
        description: 'Restoring appearance and function after severe burns.',
      },
      {
        title: 'Post-Mastectomy Reconstruction',
        description: 'Rebuilding the breast after mastectomy due to cancer.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Botox and Dermal Fillers',
        description: 'Non-surgical treatments to reduce wrinkles and restore volume.',
      },
      {
        title: 'Laser Resurfacing',
        description: 'Using lasers to improve skin texture and appearance.',
      },
      {
        title: 'Microdermabrasion',
        description: 'Exfoliating the skin to enhance its appearance.',
      },
      {
        title: 'Chemical Peels',
        description: 'Applying a chemical solution to improve skin texture and tone.',
      },
      {
        title: 'Reconstructive Procedures',
        description: 'Advanced reconstructive surgeries to restore function and appearance.',
      },
    ],

    rehabilitation: [
      {
        title: 'Post-Surgical Care',
        description: 'Comprehensive care following plastic surgery procedures to ensure optimal healing.',
      },
      {
        title: 'Scar Management',
        description: 'Specialized treatments to minimize scarring and improve aesthetic outcomes.',
      },
      {
        title: 'Recovery Monitoring',
        description: 'Regular follow-up appointments to track healing progress and address concerns.',
      },
      {
        title: 'Patient Education',
        description: 'Guidance on post-operative care, activity restrictions, and long-term maintenance.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling and support to help patients adjust to changes and enhance confidence.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Plastic Surgery',
      content: 'At Shri Sigma Hospital, we strive to deliver exceptional plastic surgery care with a focus on achieving your aesthetic and reconstructive goals. Our skilled plastic surgeons use the latest techniques and personalized treatment plans to ensure the best results for every patient.',
      description: 'Treatment Benefits\nWhy Choose Our Plastic Surgery Services?\nComprehensive benefits and procedures available for your plastic surgery treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Top Plastic Surgery Clinic in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Advanced aesthetic and reconstructive procedures at Shri Sigma Hospital. Expert plastic surgeons providing comprehensive plastic surgery services in Hyderabad.',
    keywords: 'plastic surgery Hyderabad, cosmetic surgery Madhapur, reconstructive surgery, aesthetic procedures, plastic surgeon Hyderabad, cosmetic treatments',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}