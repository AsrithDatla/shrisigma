import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Orthopedic Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top orthopedic specialists in Hyderabad at Shri Sigma Hospital. Expert bone and joint care with advanced surgical techniques and rehabilitation.',
  keywords: 'orthopedic hospital Hyderabad, knee replacement Madhapur, joint surgery, bone specialist, orthopedic surgeon Hyderabad, sports injury treatment',
};

export default function OrthopedicsPage() {
  const pageData = {
    title: 'Orthopedic',
    subtitle: 'Best Orthopedic Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Orthopedics Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive orthopedic care for a wide range of musculoskeletal conditions.',
    bannerImage: '/images/service/ortho.webp',
    
    specialtyInfo: {
      title: 'Top Orthopedic Specialists in Hyderabad',
      description: 'The Orthopedics Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive orthopedic care for a wide range of musculoskeletal conditions. We have the best orthopedic surgeons in Hyderabad | Top experts in orthopedic procedures. Our team of highly skilled orthopedic specialists focuses on the diagnosis, treatment, and management of bone, joint, and muscle conditions. As the best orthopedic hospital in Hyderabad, Shri Sigma Hospital is dedicated to ensuring optimal outcomes and enhancing the quality of life for our patients. Trust Sigma Hospital for all your orthopedic needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'Orthopedics is a branch of medicine that focuses on the diagnosis, treatment, and prevention of disorders related to the musculoskeletal system. This includes conditions affecting the bones, joints, muscles, tendons, and ligaments. Orthopedic surgeons are trained to perform a variety of procedures, from treating fractures and dislocations to performing complex joint replacements and reconstructive surgeries. They use a range of diagnostic tools and techniques to assess and manage musculoskeletal conditions, aiming to restore function, alleviate pain, and improve quality of life for patients. In addition to surgical interventions, orthopedic care often includes non-surgical treatments such as physical therapy, medications, and lifestyle modifications. Orthopedic surgeons work closely with other healthcare professionals to develop comprehensive treatment plans tailored to each patient\'s needs. The goal is to address the root cause of the problem, manage symptoms effectively, and support patients in their recovery and rehabilitation.',
      image: '/images/service/ortho.webp',
      doctorProfiles: [
        {
          name: 'Dr. Madan Mohan V',
          qualification: 'MBBS, MS (Orthopedics)',
          designation: 'Sr. Consultant Orthopaedist & Spine Surgeon',
          experience: '18+ Years',
          image: '/images/service/doctor-images/madhan.webp',
        },
        {
          name: 'Dr. Sridhar Musthyala',
          qualification: 'MBBS, Diploma in Orthopedics, FRCS (UK)',
          designation: 'Sr. Consultant - Orthopaedist & Trauma Surgeon',
          experience: '20+ Years',
          image: '/images/service/doctor-images/sridar.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Fractures',
        description: 'Broken bones requiring medical intervention.',
      },
      {
        title: 'Arthritis',
        description: 'Inflammation of the joints causing pain and stiffness.',
      },
      {
        title: 'Sports Injuries',
        description: 'Injuries related to physical activity, including sprains and strains.',
      },
      {
        title: 'Joint Replacement',
        description: 'Surgical procedure to replace a damaged joint with an artificial one.',
      },
      {
        title: 'Back Pain',
        description: 'Pain originating from the spine or surrounding structures.',
      },
      {
        title: 'Spinal Disorders',
        description: 'Conditions affecting the spine, such as herniated discs.',
      },
    ],

    diagnosticTools: [
      {
        title: 'X-Ray',
        description: 'Imaging to view bone structure and identify fractures or abnormalities.',
      },
      {
        title: 'CT Scan',
        description: 'Detailed cross-sectional images for assessing complex fractures or joint issues.',
      },
      {
        title: 'MRI',
        description: 'Magnetic resonance imaging for detailed images of soft tissues and joints.',
      },
      {
        title: 'Bone Scintigraphy',
        description: 'Scintigraphic imaging to evaluate bone metabolism and detect abnormalities.',
      },
      {
        title: 'Arthroscopy',
        description: 'Minimally invasive procedure to examine and treat joint issues.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Non-Surgical Treatment',
        description: 'Includes physical therapy, medications, and lifestyle changes.',
      },
      {
        title: 'Minimally Invasive Surgery',
        description: 'Procedures using small incisions for quicker recovery.',
      },
      {
        title: 'Joint Replacement',
        description: 'Surgery to replace damaged joints with prosthetic implants.',
      },
      {
        title: 'Arthroscopic Surgery',
        description: 'Using a small camera to diagnose and treat joint conditions.',
      },
      {
        title: 'Reconstructive Surgery',
        description: 'Procedures to restore function and appearance after injury or disease.',
      },
    ],

    rehabilitation: [
      {
        title: 'Physical Therapy',
        description: 'Rehabilitation to restore strength, flexibility, and function.',
      },
      {
        title: 'Occupational Therapy',
        description: 'Assistance with daily activities and adaptive techniques.',
      },
      {
        title: 'Nutritional Support',
        description: 'Guidance to support overall health and recovery.',
      },
      {
        title: 'Pain Management',
        description: 'Strategies to control pain and enhance comfort during recovery.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of orthopedic conditions and recovery.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Orthopedic Care',
      content: 'At Shri Sigma Hospital, we are dedicated to providing top-tier orthopedic care with a focus on personalized treatment and advanced surgical techniques. Our orthopedic specialists are committed to enhancing your quality of life through expert care and compassionate support, making us a leading choice for orthopedic services in Hyderabad.',
      description: 'Treatment Benefits\nWhy Choose Our Orthopedic Care Services?\nComprehensive benefits and procedures available for your orthopedic treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best Orthopedic Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top orthopedic specialists in Hyderabad at Shri Sigma Hospital. Expert bone and joint care with advanced surgical techniques and rehabilitation.',
    keywords: 'orthopedic hospital Hyderabad, knee replacement Madhapur, joint surgery, bone specialist, orthopedic surgeon Hyderabad, sports injury treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}