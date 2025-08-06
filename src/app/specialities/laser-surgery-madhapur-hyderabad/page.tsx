import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Advanced Laser Surgery Services in Hyderabad',
  description: 'Cutting-edge laser surgery in Hyderabad at Shri Sigma Hospital. Minimally invasive procedures with precision and faster recovery.',
  keywords: 'laser surgery Madhapur, minimally invasive surgery Hyderabad, laser procedures, precision surgery, laser treatment Hyderabad',
};

export default function LaserSurgeryPage() {
  const pageData = {
    title: 'Laser Surgery',
    subtitle: 'Advanced Laser Surgery Services in Hyderabad',
    description: 'At Shri Sigma Hospital in Hyderabad, we specialize in advanced laser surgery techniques to provide patients with precise and minimally invasive treatment options.',
    bannerImage: '/images/service/laser-surgery.webp',
    
    specialtyInfo: {
      title: 'Cutting-Edge Laser Surgery in Hyderabad',
      description: 'At Shri Sigma Hospital in Hyderabad, we specialize in advanced laser surgery techniques to provide patients with precise and minimally invasive treatment options. Our laser surgery services include a variety of procedures designed to reduce recovery times and improve outcomes. As leaders in laser surgery in Hyderabad, we are committed to delivering the highest standard of care with cutting-edge technology.',
      additionalInfo: 'Laser Surgery utilizes focused light beams to perform precise surgical procedures. This method allows for minimal damage to surrounding tissues, resulting in reduced bleeding, swelling, and recovery times. Laser surgery can be applied to a range of conditions and specialties, offering advantages such as lower risk of infection, less postoperative pain, and quicker healing compared to traditional surgical methods.',
      image: '/images/service/laser-surgery.webp',
      doctorProfiles: [
        {
          name: 'Dr. Tagore Mohan Grandhi',
          qualification: 'MBBS, MS, FRCS (UK), DLS (France)',
          designation: 'Sr. Consultant General, Gastrointestinal, Bariatric & Advanced Laparoscopic Surgery',
          experience: '20+ Years',
          image: '/images/service/doctor-images/tagore.webp',
        },
        {
          name: 'Dr. Jahnavi Koneru',
          qualification: 'MS (Gen) FMAS FISCP',
          designation: 'Sr General & Proctology Surgeon (Female Specialist)',
          experience: '12+ Years',
          image: '/images/service/doctor-images/jahnavi.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Laser Eye Surgery',
        description: 'Corrects vision issues like myopia, hyperopia, and astigmatism through laser correction of the cornea.',
      },
      {
        title: 'Laser Skin Resurfacing',
        description: 'Treats skin conditions such as wrinkles, scars, and blemishes by removing damaged skin layers.',
      },
      {
        title: 'Laser Urological Surgery',
        description: 'Addresses urological issues such as kidney stones and prostate enlargement with precision.',
      },
      {
        title: 'Laser Gynecological Surgery',
        description: 'Treats conditions like abnormal bleeding and fibroids with minimal invasiveness.',
      },
      {
        title: 'Bariatric Surgery',
        description: 'Surgical procedures to help with weight loss.',
      },
      {
        title: 'Gastrointestinal Surgery',
        description: 'Treatment of disorders in the digestive tract.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Imaging Tests',
        description: 'Techniques such as MRI or CT scans to assess the area requiring surgery.',
      },
      {
        title: 'Endoscopy',
        description: 'Visual examination of internal areas using an endoscope for accurate diagnosis.',
      },
      {
        title: 'Pre-Surgical Assessments',
        description: 'Comprehensive evaluations to ensure suitability for laser procedures.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Laser Treatment',
        description: 'Direct application of laser light to treat various conditions with high precision.',
      },
      {
        title: 'Preoperative Care',
        description: 'Preparation and assessments to optimize patient readiness for laser surgery.',
      },
      {
        title: 'Postoperative Care',
        description: 'Follow-up care to monitor recovery and manage any potential side effects.',
      },
      {
        title: 'Minimally Invasive Techniques',
        description: 'Advanced surgical approaches that minimize tissue damage and promote faster healing.',
      },
    ],

    rehabilitation: [
      {
        title: 'Recovery Monitoring',
        description: 'Regular check-ups to ensure proper healing and address any concerns.',
      },
      {
        title: 'Pain Management',
        description: 'Strategies to minimize discomfort during the recovery period.',
      },
      {
        title: 'Nutritional Guidance',
        description: 'Recommendations for diet to support healing and overall health.',
      },
      {
        title: 'Physical Therapy',
        description: 'Exercises and therapies to enhance recovery and restore function.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Leading the Way in Laser Surgery',
      content: 'At Shri Sigma Hospital, we are dedicated to advancing the field of laser surgery with state-of-the-art technology and expert care. Our skilled surgeons provide precision treatments with a focus on achieving optimal results while ensuring patient comfort. Trust Shri Sigma Hospital for unparalleled laser surgery services and a commitment to excellence in your surgical care.',
      description: 'Treatment Benefits\nWhy Choose Our Laser Surgery Services?\nComprehensive benefits and procedures available for your laser surgery treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Advanced Laser Surgery Services in Hyderabad',
    metaDescription: 'Cutting-edge laser surgery in Hyderabad at Shri Sigma Hospital. Minimally invasive procedures with precision and faster recovery.',
    keywords: 'laser surgery Madhapur, minimally invasive surgery Hyderabad, laser procedures, precision surgery, laser treatment Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}