import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best General Surgery Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top general surgery specialists in Hyderabad at Shri Sigma Hospital. Expert surgical care with advanced laparoscopic and robotic surgery techniques.',
  keywords: 'general surgery hospital Hyderabad, laparoscopic surgery Madhapur, general surgeon Hyderabad, emergency surgery, trauma care, minimally invasive surgery',
};

export default function GeneralSurgeryPage() {
  const pageData = {
    title: 'General Surgery',
    subtitle: 'Best General Surgery Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The General Surgery Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive surgical care for a wide range of medical conditions.',
    bannerImage: '/images/service/general-surgery.webp',
    
    specialtyInfo: {
      title: 'Top General Surgery Specialists in Hyderabad',
      description: 'The General Surgery Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing comprehensive surgical care for a wide range of medical conditions. We have the best general surgeons in Hyderabad | Top experts in surgical procedures. Our team of highly skilled surgeons focuses on the diagnosis, treatment, and management of surgical conditions. As the best general surgery hospital in Hyderabad, Shri Sigma Hospital is dedicated to ensuring optimal surgical outcomes and enhancing the quality of life for our patients. Trust Sigma Hospital for all your surgical needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'General Surgery is a medical specialty that focuses on the diagnosis, preoperative, operative, and postoperative management of patients with a wide range of surgical conditions. General surgeons are trained to perform a variety of procedures, from common surgeries like appendectomies and hernia repairs to more complex operations involving the gastrointestinal tract, endocrine system, and other major organ systems. Their expertise extends to areas such as trauma surgery, where they address acute injuries, and critical care surgery, where they manage patients with life-threatening conditions. General surgeons also play a vital role in cancer treatment, often performing surgeries to remove tumors or affected tissues. In addition to their technical skills, general surgeons are adept at managing complex preoperative and postoperative care. They work closely with other healthcare professionals, including anesthesiologists, nurses, and specialists, to ensure that patients receive comprehensive and coordinated care. This includes assessing patients\' overall health and readiness for surgery, managing potential complications, and providing follow-up care to promote recovery and prevent recurrence. The broad scope of general surgery requires a deep understanding of anatomy, pathology, and surgical techniques, allowing these surgeons to address a wide variety of medical issues and improve patient outcomes across diverse clinical settings.',
      image: '/images/service/general-surgery.webp',
      doctorProfiles: [
        {
          name: 'Dr. Jahnavi Koneru',
          qualification: 'MS (Gen) FMAS FISCP',
          designation: 'Sr General & Proctology Surgeon (Female Specialist)',
          experience: '12+ Years',
          image: '/images/service/doctor-images/jahnavi.webp',
        },
        {
          name: 'Dr. Sarath Kumar Reddy A',
          qualification: 'MBBS, MS (Gen. Surgery), FMAS, MRCS (Edin), FIAGES, FRCS (UK) (Colorectal Surgery), FALS (Robotic Surgery), FALS (Surgical Oncology)',
          designation: 'Sr. Consultant - Colorectal Oncosurgeon Laparoscopic & Robotic Surgeon',
          experience: '18+ Years',
          image: '/images/service/doctor-images/dr-sarath-kumar.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Appendicitis',
        description: 'Inflammation of the appendix requiring surgical removal.',
      },
      {
        title: 'Gallbladder Disease',
        description: 'Conditions such as gallstones that may require cholecystectomy.',
      },
      {
        title: 'Hernias',
        description: 'Protrusion of an organ through the muscle wall requiring repair.',
      },
      {
        title: 'Breast Surgery',
        description: 'Procedures for benign and malignant breast conditions.',
      },
      {
        title: 'Thyroid Surgery',
        description: 'Treatment for thyroid disorders.',
      },
      {
        title: 'Skin and Soft Tissue Surgery',
        description: 'Removal of cysts, tumors, and other growths.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Ultrasound',
        description: 'Imaging to visualize internal organs and structures.',
      },
      {
        title: 'CT Scan',
        description: 'Detailed cross-sectional images to diagnose surgical conditions.',
      },
      {
        title: 'MRI',
        description: 'Magnetic resonance imaging for detailed internal images.',
      },
      {
        title: 'Biopsy',
        description: 'Sampling of tissue for diagnostic purposes.',
      },
      {
        title: 'Endoscopy',
        description: 'Internal examination using a scope for diagnostic and therapeutic purposes.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Minimally Invasive Surgery',
        description: 'Procedures using small incisions and specialized instruments.',
      },
      {
        title: 'Open Surgery',
        description: 'Traditional surgical techniques with larger incisions.',
      },
      {
        title: 'Laparoscopic Surgery',
        description: 'Minimally invasive technique using a laparoscope.',
      },
      {
        title: 'Robotic Surgery',
        description: 'Advanced surgical techniques using robotic systems.',
      },
      {
        title: 'Emergency Surgery',
        description: 'Urgent surgical interventions for acute conditions.',
      },
    ],

    rehabilitation: [
      {
        title: 'Post-Surgical Care',
        description: 'Comprehensive care following surgery to ensure optimal recovery.',
      },
      {
        title: 'Physical Therapy',
        description: 'Rehabilitation to restore function and mobility.',
      },
      {
        title: 'Nutritional Support',
        description: 'Dietary guidance to support recovery and overall health.',
      },
      {
        title: 'Pain Management',
        description: 'Strategies to manage pain and enhance recovery.',
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of surgery.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in General Surgery Care',
      content: 'At Shri Sigma Hospital, we lead the way in general surgery care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in general surgery care, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our General Surgery Care Services?\nComprehensive benefits and procedures available for your general surgery treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best General Surgery Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top general surgery specialists in Hyderabad at Shri Sigma Hospital. Expert surgical care with advanced laparoscopic and robotic surgery techniques.',
    keywords: 'general surgery hospital Hyderabad, laparoscopic surgery Madhapur, general surgeon Hyderabad, emergency surgery, trauma care, minimally invasive surgery',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}