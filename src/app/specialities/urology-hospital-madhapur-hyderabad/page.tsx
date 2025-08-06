import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Urology Hospital in Madhapur | Kidney Stone Treatment Hyderabad',
  description: 'Expert urology care at Shri Sigma Hospitals. Kidney stone treatment, prostate surgery, urological procedures with experienced urologists.',
  keywords: 'urology hospital Madhapur, kidney stone treatment Hyderabad, urologist Madhapur, prostate surgery, urological care, bladder treatment',
};

export default function UrologyPage() {
  const pageData = {
    title: 'Urology',
    subtitle: 'Top Urology Clinic in Madhapur, Hyderabad-Telangana',
    description: 'The Urology Department at Shri Sigma Hospital in Madhapur - Hyderabad specializes in diagnosing and treating a broad range of urological conditions.',
    bannerImage: '/images/service/urology.webp',
    
    specialtyInfo: {
      title: 'Top Urologists in Hyderabad',
      description: 'The Urology Department at Shri Sigma Hospital in Madhapur - Hyderabad specializes in diagnosing and treating a broad range of urological conditions. Our expert urologists offer comprehensive care for conditions affecting the urinary tract and male reproductive system. With state-of-the-art diagnostic tools and a commitment to personalized treatment, we provide the highest standard of urological care. As a leading urology clinic in Hyderabad, Shri Sigma Hospital is dedicated to addressing all your urological health needs.',
      additionalInfo: 'Urology is a medical specialty focused on the diagnosis, treatment, and management of conditions related to the urinary tract and male reproductive system. Urologists are trained to address a wide variety of issues, including urinary tract infections, kidney stones, prostate problems, and bladder disorders. The field involves both medical and surgical interventions to improve patient outcomes and quality of life.',
      image: '/images/service/urology.webp',
      doctorProfiles: [
        {
          name: 'Dr. G. V. Raj Gopal',
          qualification: 'MBBS, MS (General Surgery), MCh (Genito Urinary Surgery)',
          designation: 'Sr. Consultant Urologist and Andrologist',
          experience: '20+ Years',
          image: '/images/service/doctor-images/Raj-gopal.webp',
        },
        {
          name: 'Dr. A. Santhosh Kumar',
          qualification: 'MBBS, DNB (General Surgery), FMAS, DrNB (Urology & Andrology)',
          designation: 'Sr. Consultant Urologist & Andrologist, Renal Transplant Surgeon',
          experience: '15+ Years',
          image: '/images/service/doctor-images/santosh-kumaR.webp',
        }
      ]
    },
    commonConditions: [
      {
        title: 'Urinary Tract Infections (UTIs)',
        description: 'Infections affecting any part of the urinary system.'
      },
      {
        title: 'Kidney Stones',
        description: 'Hard deposits formed in the kidneys that can cause pain and discomfort.'
      },
      {
        title: 'Benign Prostatic Hyperplasia (BPH)',
        description: 'An enlarged prostate that can lead to urinary difficulties.'
      },
      {
        title: 'Prostate Cancer',
        description: 'Cancer that occurs in the prostate gland.'
      },
      {
        title: 'Bladder Disorders',
        description: 'Conditions affecting the bladder, including incontinence and interstitial cystitis.'
      },
      {
        title: 'Infertility',
        description: 'Issues affecting male reproductive health and fertility.'
      }
    ],
    diagnosticTools: [
      {
        title: 'Ultrasound',
        description: 'Imaging to visualize the urinary tract and reproductive organs.'
      },
      {
        title: 'Cystoscopy',
        description: 'A procedure to examine the bladder and urethra using a small camera.'
      },
      {
        title: 'CT Scan',
        description: 'Detailed imaging to assess kidney stones and other urological conditions.'
      },
      {
        title: 'Urodynamics',
        description: 'Tests to evaluate bladder function and urinary flow.'
      },
      {
        title: 'Prostate-Specific Antigen (PSA) Test',
        description: 'Blood test to screen for prostate issues.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Prescribing drugs to manage symptoms and treat conditions.'
      },
      {
        title: 'Minimally Invasive Procedures',
        description: 'Techniques such as laser therapy and endoscopic surgery.'
      },
      {
        title: 'Surgical Interventions',
        description: 'Procedures to address conditions such as kidney stones and prostate problems.'
      },
      {
        title: 'Lifestyle Modifications',
        description: 'Recommendations for diet, hydration, and exercise to support urological health.'
      },
      {
        title: 'Urological Rehabilitation',
        description: 'Programs to improve urinary function and manage chronic conditions.'
      }
    ],
    rehabilitation: [
      {
        title: 'Urological Rehabilitation',
        description: 'Comprehensive programs including physical therapy and education to improve function.'
      },
      {
        title: 'Behavioral Therapy',
        description: 'Techniques to manage symptoms of urinary incontinence and other disorders.'
      },
      {
        title: 'Patient Education',
        description: 'Teaching patients about their condition and management strategies.'
      },
      {
        title: 'Support Groups',
        description: 'Providing emotional and social support for patients with urological conditions.'
      }
    ],
    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Urology',
      content: 'At Shri Sigma Hospital, we are dedicated to providing exceptional urology care with a focus on accurate diagnosis, effective treatment, and compassionate support. Our team of skilled urologists is committed to enhancing your urological health and overall well-being, making us a top choice for urology services in Hyderabad.',
      description: 'Treatment Benefits\nWhy Choose Our Urology Services?\nComprehensive benefits and procedures available for your urology treatment at Shri Sigma Hospital',
    },
    metaTitle: 'Best Urology Hospital in Madhapur | Kidney Stone Treatment Hyderabad',
    metaDescription: 'Expert urology care at Shri Sigma Hospitals. Kidney stone treatment, prostate surgery, urological procedures with experienced urologists.',
    keywords: 'urology hospital Madhapur, kidney stone treatment Hyderabad, urologist Madhapur, prostate surgery, urological care, bladder treatment',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}