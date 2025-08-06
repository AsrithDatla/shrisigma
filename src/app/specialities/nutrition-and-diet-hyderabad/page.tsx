import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Expert Nutrition Services in Hyderabad',
  description: 'Personalized nutrition for optimal health at Shri Sigma Hospital. Expert dietitians providing comprehensive nutrition services in Hyderabad.',
  keywords: 'nutrition specialist Hyderabad, dietitian Madhapur, diet counseling, weight management, therapeutic nutrition, diet planning Hyderabad',
};

export default function NutritionPage() {
  const pageData = {
    title: 'Nutrition',
    subtitle: 'Expert Nutrition Services in Hyderabad',
    description: 'At Shri Sigma Hospital in Hyderabad, we offer comprehensive nutrition services designed to promote overall health and well-being.',
    bannerImage: '/images/service/nutrition.webp',
    
    specialtyInfo: {
      title: 'Personalized Nutrition for Optimal Health',
      description: 'At Shri Sigma Hospital in Hyderabad, we offer comprehensive nutrition services designed to promote overall health and well-being. Our expert dietitians work closely with you to create personalized dietary plans tailored to your individual needs and health goals. Whether you\'re looking to manage a chronic condition, improve your fitness, or simply eat healthier, we\'re here to guide you every step of the way.',
      additionalInfo: 'Nutrition is a vital field focused on the science of food and its relationship to health. Nutritionists and dietitians are experts in understanding how nutrients affect the body, and they use this knowledge to help individuals make informed dietary choices. They assess patients\' nutritional needs, develop personalized meal plans, and provide guidance on healthy eating habits to prevent and manage a wide range of health conditions, including obesity, diabetes, heart disease, and digestive disorders.',
      image: '/images/service/nutrition.webp',
      doctorProfiles: [
        // Note: The HTML doesn't specify doctor profiles, so we'll use generic ones
      ],
    },

    commonConditions: [
      {
        title: 'Personalized Diet Plans',
        description: 'Customized meal plans based on your health needs, lifestyle, and dietary preferences.',
      },
      {
        title: 'Weight Management',
        description: 'Guidance and support for achieving and maintaining a healthy weight.',
      },
      {
        title: 'Chronic Disease Management',
        description: 'Nutritional strategies to manage conditions such as diabetes, hypertension, and heart disease.',
      },
      {
        title: 'Sports Nutrition',
        description: 'Specialized advice for athletes and active individuals to optimize performance and recovery.',
      },
      {
        title: 'Children\'s Nutrition',
        description: 'Balanced diets and nutritional education for growing children and teenagers.',
      },
      {
        title: 'Pregnancy Nutrition',
        description: 'Nutritional support for expecting mothers to ensure a healthy pregnancy.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Enhanced Energy Levels',
        description: 'Improve overall vitality and energy through proper nutrition.',
      },
      {
        title: 'Immune Function Support',
        description: 'Support immune function and reduce the risk of chronic diseases.',
      },
      {
        title: 'Healthy Growth Promotion',
        description: 'Promote healthy growth and development in children.',
      },
      {
        title: 'Mental Well-being',
        description: 'Improve mental well-being and cognitive function.',
      },
      {
        title: 'Weight Management Aid',
        description: 'Aid in weight management and support a healthy body composition.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Initial Consultation',
        description: 'An in-depth assessment of your dietary habits, health history, and goals.',
      },
      {
        title: 'Ongoing Support',
        description: 'Regular follow-up appointments to track progress and make adjustments to your plan as needed.',
      },
      {
        title: 'Educational Workshops',
        description: 'Group sessions on various nutrition topics to increase awareness and knowledge.',
      },
      {
        title: 'Personalized Meal Planning',
        description: 'Customized nutrition plans based on individual health requirements and preferences.',
      },
    ],

    rehabilitation: [
      {
        title: 'Expert Dietitians',
        description: 'Our team of experienced dietitians provides evidence-based recommendations tailored to your unique needs.',
      },
      {
        title: 'Personalized Approach',
        description: 'We believe in creating customized plans that align with your lifestyle and health goals.',
      },
      {
        title: 'Comprehensive Care',
        description: 'We offer holistic support, including dietary advice, lifestyle changes, and ongoing motivation.',
      },
      {
        title: 'Continuous Monitoring',
        description: 'Regular assessment and adjustment of nutrition plans to ensure optimal results.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Nutrition',
      content: 'At Shri Sigma Hospital, we are dedicated to helping you achieve optimal health through personalized nutrition services. Our expert team is committed to providing you with the tools and support needed to make lasting, positive changes in your diet and overall well-being. Trust us to be your partner in health and nutrition.',
      description: 'Treatment Benefits\nWhy Choose Our Nutrition Services?\nComprehensive benefits and procedures available for your nutrition treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Expert Nutrition Services in Hyderabad',
    metaDescription: 'Personalized nutrition for optimal health at Shri Sigma Hospital. Expert dietitians providing comprehensive nutrition services in Hyderabad.',
    keywords: 'nutrition specialist Hyderabad, dietitian Madhapur, diet counseling, weight management, therapeutic nutrition, diet planning Hyderabad',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}