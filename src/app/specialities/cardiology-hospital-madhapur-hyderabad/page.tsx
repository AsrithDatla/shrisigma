import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Cardiology Hospital in Madhapur | Heart Specialist Hyderabad',
  description: 'Expert cardiology care at Shri Sigma Hospitals, Madhapur. Advanced heart treatments, experienced cardiologists, and state-of-the-art cardiac facilities.',
  keywords: 'cardiology hospital Madhapur, heart specialist Hyderabad, cardiac care, heart treatment, cardiologist Madhapur, heart surgery Hyderabad',
};

export default function CardiologyPage() {
  const pageData = {
    title: 'Cardiology',
    subtitle: 'Best Heart and Cardiology Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Cardiology Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in cardiology. We have the best cardiologists in Hyderabad | Top heart specialists.',
    bannerImage: '/images/service/cardio.webp',
    sideImage: '/images/service/cardio.webp',
    heroStats: [
      { number: '25+', label: 'Expert Cardiologists' },
      { number: '75+', label: 'Bedded Hospital' },
      { number: '5000+', label: 'Heart Procedures' }
    ],
    features: [
      {
        title: 'Advanced Diagnostics',
        description: 'State-of-the-art cardiac diagnostic equipment including ECG, Echocardiogram, and Stress Tests',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: 'Expert Cardiologists',
        description: 'Experienced team of cardiac specialists and interventional cardiologists',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: '24/7 Emergency Care',
        description: 'Round-the-clock cardiac emergency services with immediate response',
        icon: '/images/home/Cardiology.png',
      },
      {
        title: 'Modern Facilities',
        description: 'Advanced cardiac catheterization lab, ICU, and surgical facilities',
        icon: '/images/home/Cardiology.png',
      },
    ],
    benefits: [
      'Comprehensive cardiac evaluation and diagnosis with advanced imaging',
      'Minimally invasive cardiac procedures with faster recovery',
      'Advanced angioplasty and stenting with latest technology',
      'Cardiac rehabilitation programs for complete recovery',
      'Preventive cardiology consultations and lifestyle guidance',
      'Emergency cardiac care available 24/7 with expert team',
      'All major insurance coverage with cashless facility',
      'Experienced cardiac surgical team with proven track record',
      'State-of-the-art cardiac catheterization laboratory',
      'Personalized treatment plans for optimal outcomes',
    ],
    procedures: [
      'Coronary Angiography',
      'Angioplasty and Stenting',
      'Bypass Surgery (CABG)',
      'Valve Replacement Surgery',
      'Pacemaker Implantation',
      'Echocardiography',
      'Stress Testing',
      'Holter Monitoring',
      'CT Angiography',
      'Cardiac Catheterization',
    ],
    whyChooseUs: [
      'State-of-the-art cardiac catheterization laboratory',
      'Experienced team of interventional cardiologists',
      'Advanced cardiac surgical facilities',
      'Comprehensive cardiac rehabilitation programs',
      'Emergency cardiac care available 24/7',
      'Insurance assistance and cashless treatment',
      'Personalized treatment plans for each patient',
      'High success rates in cardiac procedures',
    ],
    doctors: [
      {
        name: 'Dr. Viswanath',
        qualification: 'MD, PGDCC, FCCS (USA)',
        experience: '20+ Years',
        image: '/images/service/doctor-images/dr-viswanath.png',
        specialization: 'Sr. Consultant Cardiologist & CEO',
      },
      {
        name: 'Dr. Harish V Kumar',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience: '18+ Years',
        image: '/images/service/doctor-images/dr- harish-v-kumar .jpg',
        specialization: 'Interventional Cardiology',
      },
    ],
    specialtyInfo: {
      title: 'Top Cardiologist Doctors in Hyderabad',
      description: 'The Cardiology Department at Shri Sigma Hospital in Madhapur - Hyderabad is renowned for providing exceptional care in cardiology. We have the best cardiologists in Hyderabad | Top heart specialists. Our team of highly skilled cardiologists specializes in diagnosing and treating a wide range of cardiovascular conditions, including coronary artery disease, heart failure, arrhythmias, and hypertension. Our multidisciplinary team works collaboratively to develop personalized care plans aimed at achieving the best possible outcomes. Recognized as the best cardiology hospital in Hyderabad, Shri Sigma Hospital is committed to helping patients achieve optimal heart health and enhance their quality of life. Trust Sigma Hospital for all your cardiology needs in Madhapur-Hyderabad and experience unparalleled healthcare excellence.',
      additionalInfo: 'Cardiology is a branch of internal medicine that deals with studying the cardiovascular system. It deals with studying and treating the disorders associated with the Cardiovascular system. A cardiovascular system is a combination of heart and blood vessels which include arteries and veins. The heart pumps oxygenated blood to the whole body through arteries while the veins carry deoxygenated blood from other body parts to the heart. There is a slight difference between heart disease and cardiovascular diseases. Heart diseases are specifically related to the heart, while cardiovascular diseases include the heart and blood vessels.',
      image: '/images/service/cardio.webp',
      doctorProfiles: [
        {
          name: 'Dr. Viswanath',
          qualification: 'MD, PGDCC, FCCS (USA) CEO',
          experience: '20+ Years',
          image: '/images/service/doctor-images/dr-viswanath.png',
          specialization: 'Sr. Consultant Cardiologist',
        }
      ]
    },
    commonConditions: [
      {
        title: 'Coronary Artery Disease (CAD)',
        description: 'Narrowing or blockage of coronary arteries, leading to chest pain (angina) or heart attack.'
      },
      {
        title: 'Heart Failure',
        description: 'A condition where the heart cannot pump blood effectively'
      },
      {
        title: 'Arrhythmias',
        description: 'Irregular heartbeats, including atrial fibrillation, tachycardia, and bradycardia.'
      },
      {
        title: 'Hypertension',
        description: 'High blood pressure, a major risk factor for heart disease and stroke.'
      },
      {
        title: 'Valvular Heart Disease',
        description: 'Problems with heart valves affecting blood flow through the heart.'
      },
      {
        title: 'Cardiomyopathy',
        description: 'Disease of the heart muscle affecting its ability to pump blood.'
      },
      {
        title: 'Congenital Heart Defects',
        description: 'Heart abnormalities present from birth.'
      }
    ],
    diagnosticTools: [
      {
        title: 'Electrocardiogram (ECG)',
        description: 'Records the electrical activity of the heart to detect arrhythmias and other heart conditions.'
      },
      {
        title: 'Echocardiogram',
        description: 'Uses ultrasound waves to create images of the heart, assessing its structure and function.'
      },
      {
        title: 'Stress Tests',
        description: 'Measures the heart\'s response to physical exertion, often using a treadmill or medication.'
      },
      {
        title: 'Cardiac Catheterization',
        description: 'Involves inserting a catheter into the heart\'s blood vessels to diagnose and treat cardiovascular conditions.'
      },
      {
        title: 'Holter Monitor',
        description: 'A portable device worn by the patient to continuously monitor heart activity over 24-48 hours.'
      },
      {
        title: 'CT Angiography',
        description: 'A non-invasive imaging technique to visualize coronary arteries.'
      },
      {
        title: 'Blood Tests',
        description: 'Check for markers of heart disease, such as cholesterol levels and troponin.'
      }
    ],
    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Includes antihypertensives, anticoagulants, antiarrhythmics, beta-blockers, and statins to manage heart conditions.'
      },
      {
        title: 'Lifestyle Changes',
        description: 'Dietary modifications, regular exercise, smoking cessation, and weight management.'
      },
      {
        title: 'Interventional Procedures',
        description: 'Angioplasty and stent placement to open blocked arteries.'
      },
      {
        title: 'Surgery',
        description: 'Coronary artery bypass grafting (CABG), valve repair or replacement, and heart transplant in severe cases.'
      },
      {
        title: 'Pacemakers and Defibrillators',
        description: 'Devices implanted to manage arrhythmias and improve heart function.'
      }
    ],
    rehabilitation: [
      {
        title: 'Cardiac Rehabilitation',
        description: 'Includes monitored exercise training, education on heart-healthy living, and counseling to reduce stress.'
      },
      {
        title: 'Physical Therapy',
        description: 'Tailored exercises to improve cardiovascular fitness and overall health.'
      },
      {
        title: 'Nutritional Counseling',
        description: 'Guidance on heart-healthy diets to manage weight and cholesterol levels.'
      },
      {
        title: 'Psychological Support',
        description: 'Counseling to help cope with the emotional impact of heart disease and encourage lifestyle changes.'
      }
    ],
    hospitalMessage: {
      title: 'Shri Sigma Hospital: Secure Your Heart\'s Health',
      description: 'At Shri Sigma Hospital, we lead the way in cardiology, renowned for our steadfast dedication to patient-centric care and cutting-edge treatment modalities. As a beacon of excellence in cardiovascular healthcare, Shri Sigma Hospital is committed to advancing medical innovation, ensuring every patient receives exceptional care with compassion and expertise.'
    },
    metaTitle: 'Best Cardiology Hospital in Madhapur | Heart Specialist Hyderabad',
    metaDescription: 'Expert cardiology care at Shri Sigma Hospitals, Madhapur. Advanced heart treatments, experienced cardiologists, and state-of-the-art cardiac facilities.',
    keywords: 'cardiology hospital Madhapur, heart specialist Hyderabad, cardiac care, heart treatment, cardiologist Madhapur, heart surgery Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}