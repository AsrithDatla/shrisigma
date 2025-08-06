import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
    title: 'Best Piles Hospital in Madhapur | Laser Piles Treatment Hyderabad',
    description: 'Get advanced laser piles treatment at Shri Sigma Hospitals, Madhapur. Painless, quick recovery with experienced specialists. Book consultation today.',
    keywords: 'piles treatment Madhapur, laser piles surgery Hyderabad, best piles hospital, hemorrhoids treatment, piles doctor Madhapur, painless piles treatment',
};

export default function PilesHospitalPage() {
    const pageData = {
        title: 'Laser Treatment for Piles / Hemorrhoids',
        subtitle: 'Painless Laser Surgery with Same-Day Discharge',
        description: 'Experience world-class piles treatment with our revolutionary laser technology. Get back to your normal life within 24 hours with minimal pain and maximum comfort at Shri Sigma Hospitals, Madhapur.',
        bannerImage: '/images/piles/banner.jpg',
        sideImage: '/images/piles/pilessideimage.jpg',
        heroStats: [
            { number: '20+', label: 'Best Doctors' },
            { number: '75+', label: 'Bedded Hospitals' },
            { number: '50000+', label: 'Happy Patients' }
        ],
        features: [
            {
                title: 'Advanced Laser Technology',
                description: 'State-of-the-art laser equipment for precise, painless treatment with minimal tissue damage',
                icon: '/images/piles/laser treatment.png',
            },
            {
                title: 'Same-Day Discharge',
                description: 'Walk in, get treated, and go home the same day with our minimally invasive procedures',
                icon: '/images/piles/recovery.webp',
            },
            {
                title: 'Expert Proctologists',
                description: 'Board-certified specialists with 15+ years of experience in advanced piles treatment',
                icon: '/images/piles/Experienced Surgeons.png',
            },
            {
                title: '99% Success Rate',
                description: 'Proven track record with minimal recurrence and maximum patient satisfaction',
                icon: '/images/piles/low-rate.png',
            },
        ],
        benefits: [
            '100% painless laser treatment with local anesthesia',
            'No cuts, no stitches, no scars - completely sutureless procedure',
            'Same-day discharge with immediate return to daily activities',
            'Complete healing within 3-5 days vs 4-6 weeks in traditional surgery',
            'Zero bleeding and minimal post-operative complications',
            'Less than 1% recurrence rate with our advanced techniques',
            'All major insurance coverage with cashless facility',
            'Dedicated post-operative care team for faster recovery',
            'FDA-approved laser technology for maximum safety',
            'Personalized treatment plans based on grade and severity',
        ],
        procedures: [
            'Laser Hemorrhoidoplasty (LHP) - Most Advanced',
            'Stapler Hemorrhoidopexy (MIPH) - Minimally Invasive',
            'Rubber Band Ligation - Non-surgical Option',
            'Sclerotherapy - Injection Treatment',
            'Infrared Coagulation - Heat Treatment',
            'DGHAL (Doppler Guided Hemorrhoidal Artery Ligation)',
            'Traditional Hemorrhoidectomy - When Required',
            'Combination Therapy for Complex Cases',
        ],
        whyChooseUs: [
            'Most advanced laser technology in Hyderabad with German precision equipment',
            'Team of board-certified proctologists with 15+ years specialized experience',
            'Comprehensive pre-operative assessment with digital proctoscopy and colonoscopy',
            'All major insurance partnerships with instant cashless approval facility',
            'Ultra-modern operation theaters with HEPA filtration and sterile environment',
            '24/7 emergency care with dedicated proctology helpline support',
            'Personalized treatment protocols based on individual patient needs and lifestyle',
            'Post-operative care package including diet consultation and follow-up visits',
            'Transparent pricing with no hidden costs and detailed treatment estimates',
            'Patient testimonials with 98% satisfaction rate and positive outcomes',
        ],
        doctors: [
            {
                name: 'Dr. Jahnavi Koneru',
                qualification: 'MS (Gen) FMAS FISCP',
                experience: '15+ Years',
                image: '/images/piles/d1.webp',
                specialization: 'Sr. Proctology Surgeon',
            },
            {
                name: 'Dr. Sarath Kumar Reddy A',
                qualification: 'MBBS, MS (Gen. Surgery), FMAS, MRCS (Edin), FIAGES, FRCS (UK) (Colorectal Surgery), FALS (Robotic Surgery), FALS (Surgical Oncology)',
                experience: '20+ Years',
                image: '/images/service/doctor-images/dr-sarath-kumar.webp',
                specialization: 'Sr. Consultant - Colorectal Oncosurgeon Laparoscopic & Robotic Surgeon',
            },
        ],
        proctologyInfo: {
            title: 'What is Proctology',
            subtitle: 'Expert Care in Proctology',
            description: 'At Sigma Hospital, we offer specialized proctology services with a focus on providing compassionate care for conditions affecting the colon, rectum, and anus. Our team is led by an experienced female surgeon who understands the unique needs of our patients.',
            image: '/images/piles/piles.webp',
            risksOfDelay: [
                'Significant Pain While Sitting',
                'Prolapsed Hemorrhoids',
                'Anal bleeding causing difficulty while defecating',
                'Increased risk of infections'
            ],
            laserBenefits: [
                '30-minute procedure',
                'Minimal Pain & No stitches',
                'Low recurrence rates',
                'Quicker recovery'
            ]
        },
        treatmentStats: [
            { number: '35+', label: 'Years of Experience' },
            { number: '50,000+', label: 'Patients Treated' },
            { number: '30', label: 'Minutes Procedure' },
            { number: '24 Hours', label: 'Back to Work in 24 Hours' }
        ],
        additionalFeatures: [
            'Plasma Sterilizer for 0% Infection rate',
            'Insurance Facility, 0% Interest EMI Available'
        ],
        proctologyServices: [
            'Piles Treatment',
            'Fistula Treatment',
            'Fissure Treatment',
            'Pilonidal Sinus',
            'Colorectal Surgery',
            'Hemorrhoid Removal'
        ],
        excellenceServices: [
            { title: 'Female Piles Specialist', icon: '/images/service/Female Piles Specialist.png' },
            { title: 'Insurance Assistance', icon: '/images/service/Insurance Assistance.png' },
            { title: 'Pre-Operative & Post-Operative Care', icon: '/images/service/pre and post.png' },
            { title: 'No Stitches & Minimal Pain', icon: '/images/service/No Stitches & Minimal Pain.png' },
            { title: 'Quick Recovery', icon: '/images/service/Quick Recovery.png' },
            { title: 'Complete Documentation Assistance', icon: '/images/service/documentation.png' }
        ],
        treatmentSteps: [
            {
                step: 'Step 1',
                title: 'Consultation with Expert Doctors',
                description: 'During the consultation, our specialist proctologists will assess your medical history and perform a thorough examination to determine the severity of your condition. Based on the diagnosis, they will recommend the most suitable treatment plan for you.',
                image: '/images/service/consultent.jpg'
            },
            {
                step: 'Step 2',
                title: 'Laser Surgery by Experienced Surgeons',
                description: 'Before the procedure begins, local anesthesia is administered to ensure a painless experience. The laser treatment precisely targets the affected area, shrinking hemorrhoids or sealing fistulas and fissures without any cuts or stitches. The procedure is completed in just 30 minutes with minimal bleeding and no scarring.',
                image: '/images/piles/surgery.webp'
            },
            {
                step: 'Step 3',
                title: 'Recovery and Post-Operative Care',
                description: 'After the procedure, patients may experience mild discomfort, which subsides within a day or two. Since there are no stitches, healing is faster, and most patients can resume normal activities within 24 hours. Following post-operative care instructions, such as maintaining a fiber-rich diet, staying hydrated, and avoiding heavy lifting, ensures a smooth recovery.',
                image: '/images/piles/recovery.webp'
            }
        ],
        testimonials: [
            {
                name: 'Anusha',
                review: 'Exceptional proctology care at Shri Sigma Hospital. The specialist team provided compassionate and expert treatment, ensuring a comfortable and successful outcome.',
                image: '/images/piles/rating.png'
            },
            {
                name: 'Mahesh',
                review: 'Outstanding piles surgery at Shri Sigma Hospital. The skilled surgeon and state-of-the-art facilities made the procedure smooth and recovery swift.',
                image: '/images/piles/rating.png'
            },
            {
                name: 'Sandeep',
                review: 'A Highly effective piles treatment at Shri Sigma Hospital. The laser procedure was quick and painless, with excellent post-operative care from the dedicated team.',
                image: '/images/piles/rating.png'
            },
            {
                name: 'Lakshmi',
                review: 'Comprehensive care for piles at Shri Sigma Hospital. The laser treatment was efficient, and the caring staff ensured a smooth and quick recovery.',
                image: '/images/piles/rating.png'
            }
        ],
        faqs: [
            {
                question: 'What is the recovery time after laser treatment for piles?',
                answer: 'Laser treatment for piles is a minimally invasive procedure that typically allows patients to resume normal activities within 24 hours. Recovery is quick, with minimal pain and no stitches required.'
            },
            {
                question: 'Do you offer insurance assistance for treatments?',
                answer: 'Yes, we provide complete insurance assistance, including documentation support. We also offer 0% interest EMI options for eligible patients.'
            },
            {
                question: 'How do I book an appointment at Sigma Hospital?',
                answer: 'You can schedule an appointment by calling us at +91 88582 34345, emailing info@shrisigmahospitals.com, or filling out the online appointment form on our website.'
            },
            {
                question: 'Do you have female proctology specialists?',
                answer: 'Yes, Sigma Hospital has an experienced female proctology surgeon who specializes in treating piles and other anorectal conditions with compassion and expertise.'
            },
            {
                question: 'What are the risks of delaying piles surgery?',
                answer: 'Delaying piles surgery can lead to severe pain, prolapsed hemorrhoids, anal bleeding, difficulty while defecating, and an increased risk of infections. Early intervention with laser treatment ensures a quicker and safer recovery.'
            }
        ],
        metaTitle: 'Best Piles Hospital in Madhapur | Laser Piles Treatment Hyderabad',
        metaDescription: 'Get advanced laser piles treatment at Shri Sigma Hospitals, Madhapur. Painless, quick recovery with experienced specialists. Book consultation today.',
        keywords: 'piles treatment Madhapur, laser piles surgery Hyderabad, best piles hospital, hemorrhoids treatment, piles doctor Madhapur, painless piles treatment',
    };

    return <SpecialtyPageTemplate {...pageData} />;
}