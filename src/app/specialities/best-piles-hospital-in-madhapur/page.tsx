import type { Metadata } from 'next';
import SpecialtyPageTemplate from '@/components/SpecialtyPageTemplate';

export const metadata: Metadata = {
    title: 'Best Piles Hospital in Madhapur | Laser Piles Treatment Hyderabad',
    description: 'Get advanced laser piles treatment at Shri Sigma Hospitals, Madhapur. Painless, quick recovery with experienced specialists. Book consultation today.',
    keywords: 'piles treatment Madhapur, laser piles surgery Hyderabad, best piles hospital, hemorrhoids treatment, piles doctor Madhapur, painless piles treatment',
};

export default function PilesHospitalPage() {
    const pageData = {
        title: 'Piles Treatment',
        subtitle: 'Advanced Laser Treatment for Piles',
        description: 'Get world-class piles treatment with our advanced laser technology. Painless procedure, quick recovery, and experienced specialists at Shri Sigma Hospitals.',
        bannerImage: '/images/piles/banner.jpg',
        sideImage: '/images/piles/pilessideimage.jpg',
        features: [
            {
                title: 'Laser Treatment',
                description: 'Advanced laser technology for painless and precise treatment',
                icon: '/images/piles/laser treatment.png',
            },
            {
                title: 'Quick Recovery',
                description: 'Minimal downtime with faster healing process',
                icon: '/images/piles/recovery.webp',
            },
            {
                title: 'Experienced Surgeons',
                description: 'Expert surgeons with years of experience in piles treatment',
                icon: '/images/piles/Experienced Surgeons.png',
            },
            {
                title: 'Low Recurrence Rate',
                description: 'Advanced techniques ensure minimal chances of recurrence',
                icon: '/images/piles/low-rate.png',
            },
        ],
        benefits: [
            'Painless laser treatment with minimal discomfort',
            'No cuts, no stitches required',
            'Same-day discharge possible',
            'Quick recovery within 2-3 days',
            'Minimal bleeding and complications',
            'High success rate with low recurrence',
            'Insurance coverage available',
            'Experienced team of specialists',
        ],
        procedures: [
            'Laser Hemorrhoidoplasty',
            'Stapler Hemorrhoidopexy',
            'Rubber Band Ligation',
            'Sclerotherapy',
            'Infrared Coagulation',
            'Traditional Hemorrhoidectomy',
        ],
        whyChooseUs: [
            'State-of-the-art laser technology for precise treatment',
            'Experienced team of proctologists and surgeons',
            'Comprehensive pre and post-operative care',
            'Insurance assistance and cashless facility',
            'Modern operation theaters with advanced equipment',
            '24/7 emergency care and support',
            'Personalized treatment plans for each patient',
            'High patient satisfaction and success rates',
        ],
        doctors: [
            {
                name: 'Dr. Krishna Patil',
                qualification: 'MBBS, MS (General Surgery)',
                experience: '15+ Years',
                image: '/images/service/doctor-images/dr-krishna-patil.jpg',
                specialization: 'Laser Proctology & General Surgery',
            },
            {
                name: 'Dr. Sanjay Paul',
                qualification: 'MBBS, MS (General Surgery)',
                experience: '12+ Years',
                image: '/images/service/doctor-images/dr-sanjay-paul .jpg',
                specialization: 'Proctology & Minimally Invasive Surgery',
            },
        ],
        metaTitle: 'Best Piles Hospital in Madhapur | Laser Piles Treatment Hyderabad',
        metaDescription: 'Get advanced laser piles treatment at Shri Sigma Hospitals, Madhapur. Painless, quick recovery with experienced specialists. Book consultation today.',
        keywords: 'piles treatment Madhapur, laser piles surgery Hyderabad, best piles hospital, hemorrhoids treatment, piles doctor Madhapur, painless piles treatment',
    };

    return <SpecialtyPageTemplate {...pageData} />;
}