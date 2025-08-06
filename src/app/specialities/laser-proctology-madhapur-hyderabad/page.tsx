import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Leading Laser Proctology Clinic in Madhapur, Hyderabad-Telangana',
  description: 'Top laser proctology specialists in Hyderabad at Shri Sigma Hospital. Advanced rectal care with laser technology for painless treatment.',
  keywords: 'laser proctology Madhapur, anorectal treatment Hyderabad, laser piles surgery, fissure treatment, fistula surgery, proctologist Madhapur',
};

export default function LaserProctologyPage() {
  const pageData = {
    title: 'Laser Proctology',
    subtitle: 'Leading Laser Proctology Clinic in Madhapur, Hyderabad-Telangana',
    description: 'The Laser Proctology Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing advanced care for rectal conditions using cutting-edge laser technology.',
    bannerImage: '/images/service/laser-proctology.webp',
    
    specialtyInfo: {
      title: 'Top Laser Proctology Specialists in Hyderabad',
      description: 'The Laser Proctology Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing advanced care for rectal conditions using cutting-edge laser technology. We offer top laser proctologists in Hyderabad | Advanced rectal care with laser technology. Our team of specialists focuses on diagnosing and treating a range of rectal issues with minimal invasiveness and maximum effectiveness. As the leading laser proctology clinic in Hyderabad, Shri Sigma Hospital ensures superior care and recovery through advanced treatment options.',
      additionalInfo: 'Laser Proctology is a modern medical procedure that uses laser technology to treat various rectal conditions. This minimally invasive technique is employed for conditions such as hemorrhoids, fissures, and fistulas. By using a laser, the procedure minimizes damage to surrounding tissues, reduces bleeding, and promotes faster recovery compared to traditional surgical methods. Laser proctology offers precise treatment with reduced pain and shorter hospital stays, making it an effective option for patients seeking relief from rectal disorders.',
      image: '/images/service/laser-proctology.webp',
      doctorProfiles: [
        {
          name: 'Dr. Jahnavi Koneru',
          qualification: 'MS (Gen) FMAS FISCP',
          designation: 'Sr. Proctology Surgery',
          experience: '12+ Years',
          image: '/images/service/doctor-images/jahnavi.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Hemorrhoids',
        description: 'Swollen veins in the rectal area that can cause pain and bleeding.',
      },
      {
        title: 'Anal Fissures',
        description: 'Small tears in the lining of the anus that can cause severe pain.',
      },
      {
        title: 'Rectal Fistulas',
        description: 'Abnormal connections between the rectum and other structures, often resulting from infections.',
      },
      {
        title: 'Prolapsed Hemorrhoids',
        description: 'Hemorrhoids that have protruded outside the anus and are difficult to manage with conservative treatments.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Rectal Examination',
        description: 'Physical examination to detect abnormalities in the rectal area.',
      },
      {
        title: 'Anoscopy',
        description: 'Examination of the anal canal and lower rectum using an anoscope.',
      },
      {
        title: 'Sigmoidoscopy',
        description: 'Procedure to view the inside of the rectum and lower part of the colon using a sigmoidoscope.',
      },
      {
        title: 'Colonoscopy',
        description: 'Comprehensive examination of the entire colon to rule out other conditions.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Laser Treatment',
        description: 'Non-invasive procedure using laser technology to treat rectal conditions.',
      },
      {
        title: 'Medications',
        description: 'Prescriptions for pain management and infection control.',
      },
      {
        title: 'Minimally Invasive Surgery',
        description: 'Techniques to treat rectal conditions with minimal disruption.',
      },
      {
        title: 'Conservative Management',
        description: 'Dietary and lifestyle changes to manage symptoms and improve health.',
      },
    ],

    rehabilitation: [
      {
        title: 'Post-Surgical Care',
        description: 'Follow-up care to ensure proper healing and prevent complications after laser treatment.',
      },
      {
        title: 'Physical Therapy',
        description: 'Exercises and therapies to support recovery and enhance comfort.',
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on diet to support healing and overall health.',
      },
      {
        title: 'Pain Management',
        description: 'Techniques to manage any discomfort following treatment.',
      },
      {
        title: 'Emotional Support',
        description: 'Counseling to address any psychological aspects of rectal conditions and treatment.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Advanced Rectal Care',
      content: 'At Shri Sigma Hospital, we are dedicated to providing exceptional care for rectal conditions with advanced laser technology. Our team of skilled proctologists and healthcare professionals is committed to delivering effective treatments with a focus on patient comfort and recovery. Trust Shri Sigma Hospital for cutting-edge laser proctology services and experience excellence in medical care.',
      description: 'Treatment Benefits\nWhy Choose Our Laser Proctology Services?\nComprehensive benefits and procedures available for your laser proctology treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Leading Laser Proctology Clinic in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top laser proctology specialists in Hyderabad at Shri Sigma Hospital. Advanced rectal care with laser technology for painless treatment.',
    keywords: 'laser proctology Madhapur, anorectal treatment Hyderabad, laser piles surgery, fissure treatment, fistula surgery, proctologist Madhapur',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}