import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Nutrition & Diet Specialist in Hyderabad | Dietitian Madhapur',
  description: 'Expert nutrition and diet counseling at Shri Sigma Hospitals. Weight management, therapeutic nutrition, diet planning with experienced dietitians.',
  keywords: 'nutrition specialist Hyderabad, dietitian Madhapur, diet counseling, weight management, therapeutic nutrition, diet planning Hyderabad',
};

export default function NutritionPage() {
  const pageData = {
    title: 'Nutrition & Diet',
    subtitle: 'Comprehensive Nutrition Counseling',
    description: 'Complete nutrition and diet services including weight management, therapeutic nutrition, personalized diet planning, and lifestyle counseling with experienced dietitians.',
    bannerImage: '/images/service/nutrition.webp',
    sideImage: '/images/service/nutrition.webp',
    features: [
      {
        title: 'Diet Planning',
        description: 'Personalized diet plans for optimal health and wellness',
        icon: '/images/home/Nutrition.png',
      },
      {
        title: 'Weight Management',
        description: 'Comprehensive weight loss and weight gain programs',
        icon: '/images/home/Nutrition.png',
      },
      {
        title: 'Therapeutic Nutrition',
        description: 'Medical nutrition therapy for various health conditions',
        icon: '/images/home/Nutrition.png',
      },
      {
        title: 'Lifestyle Counseling',
        description: 'Healthy lifestyle and eating habit counseling',
        icon: '/images/home/Nutrition.png',
      },
    ],
    benefits: [
      'Personalized diet plans based on individual needs',
      'Comprehensive weight management programs',
      'Medical nutrition therapy for chronic diseases',
      'Healthy eating habit development',
      'Nutritional assessment and counseling',
      'Sports nutrition and performance enhancement',
      'Family nutrition education and support',
      'Regular monitoring and follow-up care',
    ],
    procedures: [
      'Nutritional Assessment',
      'Diet Planning',
      'Weight Management Programs',
      'Therapeutic Diet Counseling',
      'Sports Nutrition',
      'Pediatric Nutrition',
      'Geriatric Nutrition',
      'Lifestyle Modification',
    ],
    whyChooseUs: [
      'Experienced team of certified dietitians and nutritionists',
      'Personalized nutrition plans for each individual',
      'Comprehensive approach to health and wellness',
      'Medical nutrition therapy for various conditions',
      'Regular monitoring and support throughout the journey',
      'Evidence-based nutrition counseling',
      'Family-friendly nutrition education programs',
      'Affordable nutrition counseling services',
    ],
    doctors: [
      {
        name: 'Ms. Anvitha',
        qualification: 'MSc (Clinical Nutrition)',
        experience: '10+ Years',
        image: '/images/service/doctor-images/ms-anvitha.png',
        specialization: 'Clinical Nutrition & Dietetics',
      },
      {
        name: 'Dr. Vijaya',
        qualification: 'MBBS, MD (Community Medicine)',
        experience: '12+ Years',
        image: '/images/service/doctor-images/vijaya.webp',
        specialization: 'Nutrition & Preventive Medicine',
      },
    ],
    metaTitle: 'Best Nutrition & Diet Specialist in Hyderabad | Dietitian Madhapur',
    metaDescription: 'Expert nutrition and diet counseling at Shri Sigma Hospitals. Weight management, therapeutic nutrition, diet planning with experienced dietitians.',
    keywords: 'nutrition specialist Hyderabad, dietitian Madhapur, diet counseling, weight management, therapeutic nutrition, diet planning Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}