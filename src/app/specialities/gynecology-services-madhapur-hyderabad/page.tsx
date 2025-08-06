import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
  title: 'Best Gynecology Hospital in Madhapur, Hyderabad-Telangana',
  description: 'Top gynecology specialists in Hyderabad at Shri Sigma Hospital. Comprehensive women\'s health care with expert gynecologists and advanced treatments.',
  keywords: 'gynecology hospital Madhapur, women health specialist Hyderabad, maternity care, fertility treatment, gynecologist Madhapur, pregnancy care',
};

export default function GynecologyPage() {
  const pageData = {
    title: 'Gynecology',
    subtitle: 'Best Gynecology Hospital in Madhapur, Hyderabad-Telangana',
    description: 'The Gynecology Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing expert care for a wide range of women\'s health issues.',
    bannerImage: '/images/service/gynecology.webp',
    
    specialtyInfo: {
      title: 'Top Gynecology Specialists in Hyderabad',
      description: 'The Gynecology Department at Shri Sigma Hospital in Madhapur - Hyderabad is dedicated to providing expert care for a wide range of women\'s health issues. We offer top gynecologists in Hyderabad | Comprehensive women\'s health care. Our team of experienced specialists focuses on the diagnosis, treatment, and management of gynecological conditions, ensuring compassionate and effective care. As the best gynecology hospital in Hyderabad, Shri Sigma Hospital is committed to enhancing the health and well-being of women at every stage of life. Trust Sigma Hospital for your gynecology needs in Madhapur-Hyderabad and experience superior healthcare excellence.',
      additionalInfo: 'Gynecology is a specialized field of medicine focused on the health and diseases of the female reproductive system. Gynecologists are experts in managing a wide range of conditions affecting the uterus, ovaries, fallopian tubes, and vagina. They provide comprehensive care that includes preventive services, diagnosis, and treatment of reproductive health issues. This includes routine care such as Pap smears, pelvic exams, and breast exams, as well as the management of menstrual disorders, hormonal imbalances, infections, and sexually transmitted diseases. Gynecologists also play a crucial role in family planning, offering contraception advice and services, and managing pregnancy-related issues alongside obstetricians. In addition to managing routine and acute gynecological conditions, gynecologists are skilled in performing various surgical procedures. These include minimally invasive surgeries like laparoscopy for conditions such as endometriosis or ovarian cysts, as well as major surgeries like hysterectomies for uterine fibroids or cancer. Gynecologists also specialize in reproductive health issues such as infertility, providing treatments and referrals to reproductive endocrinologists when necessary. Their holistic approach to women\'s health encompasses not only physical health but also psychological and emotional well-being, ensuring that patients receive comprehensive and compassionate care throughout their lives.',
      image: '/images/service/gynecology.webp',
      doctorProfiles: [
        {
          name: 'Dr. Vijaya Laxmi A',
          qualification: 'MBBS, Diploma (OBG), Infertility (Fellow)',
          designation: 'Sr Consultant Obstetrics & Gynaecology',
          experience: '15+ Years',
          image: '/images/service/doctor-images/vijaya.webp',
        },
      ],
    },

    commonConditions: [
      {
        title: 'Menstrual Disorders',
        description: 'Abnormalities in menstrual cycles, including heavy bleeding and irregular periods.',
      },
      {
        title: 'Polycystic Ovary Syndrome (PCOS)',
        description: 'A hormonal disorder affecting ovulation and menstrual cycles.',
      },
      {
        title: 'Endometriosis',
        description: 'A condition where tissue similar to the lining of the uterus grows outside the uterus.',
      },
      {
        title: 'Uterine Fibroids',
        description: 'Noncancerous growths in the uterus that can cause pain and heavy bleeding.',
      },
      {
        title: 'Pelvic Inflammatory Disease (PID)',
        description: 'An infection of the female reproductive organs.',
      },
      {
        title: 'Ovarian Cysts',
        description: 'Fluid-filled sacs on the ovaries that can cause discomfort and other symptoms.',
      },
      {
        title: 'Pregnancy-Related Care',
        description: 'Monitoring and managing health during pregnancy, including prenatal care and delivery.',
      },
    ],

    diagnosticTools: [
      {
        title: 'Ultrasound',
        description: 'Imaging to visualize reproductive organs and detect abnormalities.',
      },
      {
        title: 'Pap Smear',
        description: 'Screening test for cervical cancer and other abnormalities.',
      },
      {
        title: 'Colposcopy',
        description: 'Examination of the cervix, vagina, and vulva using a colposcope.',
      },
      {
        title: 'Hysteroscopy',
        description: 'Procedure to examine the inside of the uterus using a hysteroscope.',
      },
      {
        title: 'Laparoscopy',
        description: 'Minimally invasive procedure to view the abdominal organs through small incisions.',
      },
    ],

    treatmentOptions: [
      {
        title: 'Medications',
        description: 'Treatments for hormonal imbalances, infections, and other gynecological conditions.',
      },
      {
        title: 'Hormone Therapy',
        description: 'Treatment for conditions like menopause and PCOS.',
      },
      {
        title: 'Minimally Invasive Surgery',
        description: 'Procedures using small incisions for conditions like fibroids and cysts.',
      },
      {
        title: 'Hysterectomy',
        description: 'Surgical removal of the uterus for various medical conditions.',
      },
      {
        title: 'Infertility Treatments',
        description: 'Interventions and therapies for couples experiencing difficulty conceiving.',
      },
    ],

    rehabilitation: [
      {
        title: 'Post-Surgical Care',
        description: 'Comprehensive care following gynecological surgery to ensure optimal recovery.',
      },
      {
        title: 'Physical Therapy',
        description: 'Support to recover strength and function after gynecological procedures.',
      },
      {
        title: 'Nutritional Support',
        description: 'Dietary advice to support health and recovery.',
      },
      {
        title: 'Pain Management',
        description: 'Strategies to manage and alleviate post-treatment discomfort.',
      },
      {
        title: 'Emotional Support',
        description: 'Counseling and support to help cope with the emotional aspects of gynecological conditions.',
      },
    ],

    hospitalMessage: {
      title: 'Shri Sigma Hospital: Your Partner in Women\'s Health',
      content: 'At Shri Sigma Hospital, we are committed to providing exceptional gynecology care with a focus on personalized and compassionate treatment. Our team of expert gynecologists and healthcare professionals is dedicated to addressing all aspects of women\'s health, ensuring each patient receives the highest level of care and support. Trust Shri Sigma Hospital for comprehensive gynecology services and experience unparalleled medical excellence.',
      description: 'Treatment Benefits\nWhy Choose Our Gynecology Services?\nComprehensive benefits and procedures available for your gynecology treatment at Shri Sigma Hospital',
    },

    metaTitle: 'Best Gynecology Hospital in Madhapur, Hyderabad-Telangana',
    metaDescription: 'Top gynecology specialists in Hyderabad at Shri Sigma Hospital. Comprehensive women\'s health care with expert gynecologists and advanced treatments.',
    keywords: 'gynecology hospital Madhapur, women health specialist Hyderabad, maternity care, fertility treatment, gynecologist Madhapur, pregnancy care',
  };

  return <SpecialtyPageTemplate {...pageData} />;
}