import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best ENT Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top ENT specialists in Hyderabad at Shri Sigma Hospital. Expert ear, nose, throat care with advanced treatments and experienced ENT doctors.',
  keywords: 'ENT hospital Madhapur, ear nose throat specialist Hyderabad, ENT doctor Madhapur, sinus surgery, hearing problems, throat surgery, otolaryngology',
};

export default function ENTPage() {
  const pageData = {
    title: 'ENT',
    subtitle: 'Best ENT Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The ENT Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care for ear, nose, and throat conditions.',
    bannerImage: '/images/service/ent.webp',
    
    specialtyInfo: {
      title: 'Top ENT Specialists in Hyderabad',
      description: 'The ENT Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care for ear, nose, and throat conditions. We have the best ENT specialists in Hyderabad | Top ear, nose, and throat experts. Our team of highly skilled ENT specialists specializes in diagnosing and treating a wide range of conditions affecting the ear, nose, throat, and related structures of the head and neck. Our multidisciplinary team works collaboratively to develop personalized treatment plans aimed at achieving the best possible outcomes. Recognized as the best ENT hospital in Hyderabad, Shri Sigma Hospital is committed to helping patients achieve optimal health and enhance their quality of life. Trust Sigma Hospital for all your ENT needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'ENT, or Otolaryngology, is a specialized field of medicine that manages patients with conditions related to the ear, nose, and throat, as well as related structures of the head and neck. This branch of medicine utilizes sophisticated technology and treatment modalities to manage conditions such as hearing loss, sinus problems, voice disorders, and head and neck cancers. ENT specialists provide comprehensive care from diagnosis to treatment and rehabilitation.',
      image: '/images/service/ent.webp',
      doctorProfiles: [
        {
          name: 'Dr. Shareef.M.M',
          qualification: 'MBBS, MS-ENT, MRCS (UK), DLO',
          designation: 'Sr Consultant-ENT/otorhinolaryngologist',
          experience: '15+ Years',
          image: '/images/service/doctor-images/shareef.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Hearing Loss & Ear Disorders',
        description: 'Conductive and sensorineural hearing loss, ear infections, tinnitus, and balance disorders requiring medical or surgical intervention.',
      },
      {
        title: 'Chronic Sinusitis',
        description: 'Long-term inflammation or infection of the sinuses causing persistent pain, congestion, and breathing difficulties.',
      },
      {
        title: 'Throat & Voice Disorders',
        description: 'Conditions affecting the throat, larynx, and vocal cords including voice disorders, throat infections, and swallowing difficulties.',
      },
      {
        title: 'Nasal & Breathing Problems',
        description: 'Deviated septum, nasal polyps, chronic rhinitis, and other conditions affecting nasal breathing and function.',
      },
      {
        title: 'Head and Neck Tumors',
        description: 'Benign and malignant tumors affecting the ear, nose, throat, and related structures of the head and neck region.',
      },
      {
        title: 'Sleep Disorders',
        description: 'Sleep apnea, snoring, and other sleep-related breathing disorders that affect quality of life and health.',
      },
      {
        title: 'Allergic Rhinitis',
        description: 'Seasonal and perennial allergies affecting the nose and throat, causing congestion, runny nose, and related symptoms.',
      },
      {
        title: 'Pediatric ENT Conditions',
        description: 'Childhood ENT problems including tonsillitis, adenoid enlargement, ear infections, and hearing issues in children.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Comprehensive Audiometry',
        description: 'Complete hearing tests including pure tone audiometry, speech audiometry, and tympanometry to assess hearing function and ear health.',
      },
      {
        title: 'Advanced Imaging Studies',
        description: 'High-resolution CT scans, MRI, and specialized imaging to diagnose complex conditions of the ear, nose, throat, and head-neck region.',
      },
      {
        title: 'Nasal Endoscopy',
        description: 'Minimally invasive procedure using flexible or rigid endoscopes to examine nasal passages, sinuses, and detect abnormalities.',
      },
      {
        title: 'Laryngoscopy & Videostroboscopy',
        description: 'Direct and indirect examination of the larynx and vocal cords using advanced scopes to assess voice disorders and throat conditions.',
      },
      {
        title: 'Sleep Study & Polysomnography',
        description: 'Comprehensive sleep studies to diagnose sleep apnea, snoring disorders, and other sleep-related breathing problems.',
      },
      {
        title: 'Allergy Testing',
        description: 'Skin prick tests and blood tests to identify specific allergens causing ENT symptoms and allergic reactions.',
      },
      {
        title: 'Balance & Vestibular Testing',
        description: 'Specialized tests to evaluate balance disorders, dizziness, and inner ear problems affecting equilibrium.',
      },
      {
        title: 'Tissue Biopsy & Pathology',
        description: 'Precise tissue sampling and histopathological examination for accurate diagnosis of tumors and suspicious lesions.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Endoscopic Sinus Surgery',
        description: 'Minimally invasive surgery using endoscopes to treat chronic sinusitis, nasal polyps, and sinus blockages with faster recovery.',
      },
      {
        title: 'Tonsillectomy & Adenoidectomy',
        description: 'Surgical removal of tonsils and adenoids for recurrent infections, sleep apnea, and breathing difficulties in children and adults.',
      },
      {
        title: 'Hearing Restoration Procedures',
        description: 'Advanced surgical techniques including tympanoplasty, mastoidectomy, and stapedectomy to restore hearing function.',
      },
      {
        title: 'Voice & Laryngeal Surgery',
        description: 'Microsurgical procedures for vocal cord lesions, voice disorders, and laryngeal conditions to restore normal voice function.',
      },
      {
        title: 'Head & Neck Cancer Surgery',
        description: 'Comprehensive surgical treatment for head and neck tumors with reconstruction and rehabilitation for optimal outcomes.',
      },
      {
        title: 'Sleep Apnea Treatment',
        description: 'CPAP therapy, oral appliances, and surgical options including UPPP and other procedures to treat sleep-related breathing disorders.',
      },
      {
        title: 'Hearing Aid Fitting & Cochlear Implants',
        description: 'Advanced hearing devices and surgical implants for severe hearing loss with comprehensive audiological support.',
      },
      {
        title: 'Allergy Management',
        description: 'Comprehensive allergy treatment including medications, immunotherapy, and environmental control measures for long-term relief.',
      },
    ],

    rehabilitation: [
      {
        title: 'Comprehensive Hearing Rehabilitation',
        description: 'Audiological rehabilitation including hearing aid training, cochlear implant programming, and communication strategies for optimal hearing outcomes.',
      },
      {
        title: 'Voice & Speech Therapy',
        description: 'Specialized voice therapy with speech-language pathologists to restore normal voice function and improve communication skills.',
      },
      {
        title: 'Swallowing Rehabilitation',
        description: 'Dysphagia therapy and swallowing exercises for patients recovering from throat surgeries or neurological conditions affecting swallowing.',
      },
      {
        title: 'Balance & Vestibular Rehabilitation',
        description: 'Specialized therapy for balance disorders, dizziness, and vestibular problems to improve stability and reduce fall risk.',
      },
      {
        title: 'Post-Surgical Care & Recovery',
        description: 'Comprehensive post-operative care including wound management, pain control, and gradual return to normal activities.',
      },
      {
        title: 'Lifestyle & Preventive Counseling',
        description: 'Education on hearing protection, voice hygiene, allergy management, and lifestyle modifications to prevent ENT problems.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Lifeline in ENT Care',
      content: 'At Shri Sigma Hospital, we lead the way in ENT care, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in ENT care, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.',
      description: 'Treatment Benefits\nWhy Choose Our ENT Care Services?\nComprehensive benefits and procedures available for your ENT treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best ENT Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top ENT specialists in Hyderabad at Shri Sigma Hospital. Expert ear, nose, throat care with advanced treatments and experienced ENT doctors.',
    keywords: 'ENT hospital Madhapur, ear nose throat specialist Hyderabad, ENT doctor Madhapur, sinus surgery, hearing problems, throat surgery, otolaryngology',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}