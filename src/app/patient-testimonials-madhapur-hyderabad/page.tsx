import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, Heart, Award, Users, ThumbsUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Patient Testimonials | Shri Sigma Hospitals Madhapur Hyderabad Reviews',
    description: 'Read genuine patient testimonials and reviews about Shri Sigma Hospitals, Madhapur. Real experiences from satisfied patients across all medical specialties.',
    keywords: 'patient testimonials, hospital reviews Madhapur, patient experiences, Shri Sigma Hospitals reviews, healthcare testimonials Hyderabad, patient feedback',
};

export default function TestimonialsPage() {
    const testimonials = [
        {
            name: 'Rajesh Patel',
            age: 58,
            treatment: 'Knee Replacement Surgery',
            department: 'Orthopedics',
            doctor: 'Dr. Krishna Kishore Reddy',
            rating: 5,
            date: 'March 2024',
            text: 'I had been suffering from severe knee pain for years. Dr. Krishna Kishore Reddy and his team at Shri Sigma Hospitals performed my knee replacement surgery with exceptional skill. The entire staff was caring and professional. I can now walk without pain and have returned to my normal activities. Highly recommend this hospital for orthopedic treatments.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Priya Reddy',
            age: 42,
            treatment: 'Laser Piles Treatment',
            department: 'Proctology',
            doctor: 'Dr. Krishna Patil',
            rating: 5,
            date: 'February 2024',
            text: 'I was suffering from piles for over 3 years and was hesitant about surgery. Dr. Krishna Patil explained the laser treatment procedure thoroughly and made me feel comfortable. The treatment was completely painless, and I recovered within just 2 days. The nursing staff was excellent, and the hospital facilities are world-class. Thank you for giving me my life back!',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Suresh Kumar',
            age: 65,
            treatment: 'Heart Bypass Surgery',
            department: 'Cardiology',
            doctor: 'Dr. Harish V Kumar',
            rating: 5,
            date: 'January 2024',
            text: 'Dr. Harish V Kumar is an exceptional cardiologist. When I was diagnosed with multiple blockages, he explained everything clearly and performed a successful bypass surgery. The cardiac care team monitored me 24/7, and the ICU facilities are outstanding. I am now leading a healthy life thanks to the expert care at Shri Sigma Hospitals.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Lakshmi Devi',
            age: 32,
            treatment: 'Normal Delivery',
            department: 'Gynecology',
            doctor: 'Dr. Jyotika Waghray',
            rating: 5,
            date: 'December 2023',
            text: 'Dr. Jyotika Waghray and her team provided exceptional care throughout my pregnancy and delivery. The maternity ward is well-equipped, and the nursing staff was incredibly supportive. My baby and I received the best possible care. The hospital environment is clean and comfortable. I would definitely recommend Shri Sigma for maternity care.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Ramesh Sharma',
            age: 48,
            treatment: 'Brain Tumor Surgery',
            department: 'Neuroscience',
            doctor: 'Dr. Sanjay Paul',
            rating: 5,
            date: 'November 2023',
            text: 'When I was diagnosed with a brain tumor, I was terrified. Dr. Sanjay Paul\'s expertise and reassuring manner gave me confidence. The neurosurgery was successful, and the post-operative care was excellent. The entire neuroscience team worked together to ensure my complete recovery. I am grateful to be alive and healthy today.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Anitha Rao',
            age: 35,
            treatment: 'Kidney Stone Removal',
            department: 'Urology',
            doctor: 'Dr. Shareef',
            rating: 5,
            date: 'October 2023',
            text: 'Dr. Shareef performed laser kidney stone removal for me. The procedure was quick and painless. I was amazed at how advanced the technology is at Shri Sigma Hospitals. The staff was friendly and professional throughout my stay. I was discharged the same day and recovered completely within a week. Excellent experience!',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Venkat Reddy',
            age: 55,
            treatment: 'Diabetes Management',
            department: 'Diabetology',
            doctor: 'Dr. Bhargava',
            rating: 5,
            date: 'September 2023',
            text: 'Dr. Bhargava has been managing my diabetes for the past year. His approach is comprehensive, covering diet, medication, and lifestyle changes. The diabetes care program at Shri Sigma is excellent. Regular monitoring and follow-ups have helped me maintain good blood sugar control. The nutritionist also provided valuable guidance.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
        {
            name: 'Meera Patel',
            age: 28,
            treatment: 'Sinus Surgery',
            department: 'ENT',
            doctor: 'Dr. S. Shazia Farhana',
            rating: 5,
            date: 'August 2023',
            text: 'I had chronic sinusitis for years. Dr. S. Shazia Farhana performed endoscopic sinus surgery that completely resolved my problem. The procedure was minimally invasive, and recovery was quick. I can now breathe freely and sleep peacefully. The ENT department has excellent facilities and caring staff.',
            image: '/images/service/consultent.jpg',
            verified: true,
        },
    ];

    const stats = [
        { number: '4.8/5', label: 'Average Rating', icon: Star },
        { number: '500+', label: 'Patient Reviews', icon: Users },
        { number: '95%', label: 'Satisfaction Rate', icon: ThumbsUp },
        { number: '5000+', label: 'Happy Patients', icon: Heart },
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-4 w-4 ${index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            Patient Testimonials
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl">
                            Read genuine experiences from our satisfied patients who have received
                            world-class healthcare at Shri Sigma Hospitals
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="mb-4 flex justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hospital-blue/10">
                                            <IconComponent className="h-8 w-8 text-hospital-blue" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-hospital-blue">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
                            What Our Patients Say
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real experiences from real patients across all our medical specialties
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex items-center">
                                        <div className="relative mr-4 h-16 w-16 overflow-hidden rounded-full">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <h3 className="text-lg font-semibold text-hospital-blue">
                                                    {testimonial.name}
                                                </h3>
                                                {testimonial.verified && (
                                                    <Award className="ml-2 h-4 w-4 text-green-500" title="Verified Patient" />
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600">Age: {testimonial.age}</p>
                                            <div className="flex items-center">
                                                {renderStars(testimonial.rating)}
                                                <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Quote className="h-8 w-8 text-hospital-blue/20" />
                                </div>

                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="rounded-full bg-hospital-blue/10 px-3 py-1 text-sm text-hospital-blue">
                                            {testimonial.treatment}
                                        </span>
                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                                            {testimonial.department}
                                        </span>
                                    </div>
                                </div>

                                <blockquote className="mb-4 text-gray-700 italic">
                                    "{testimonial.text}"
                                </blockquote>

                                <div className="border-t pt-4">
                                    <p className="text-sm text-gray-600">
                                        <strong>Treated by:</strong> {testimonial.doctor}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Google Reviews Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="rounded-lg bg-white p-8 shadow-lg">
                        <div className="text-center">
                            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
                                Google Reviews
                            </h2>
                            <div className="mb-6 flex justify-center">
                                <div className="flex items-center">
                                    {renderStars(5)}
                                    <span className="ml-2 text-2xl font-bold text-hospital-blue">4.4/5</span>
                                </div>
                            </div>
                            <p className="mb-6 text-lg text-gray-600">
                                Based on 500+ verified Google reviews from our patients
                            </p>
                            <Link
                                href="https://www.google.com/search?q=Shri+Sigma+Hospitals+Madhapur+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg bg-hospital-blue px-8 py-3 text-white transition-colors hover:bg-hospital-blue/90"
                            >
                                View All Google Reviews
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Share Your Experience */}
            <section className="bg-hospital-blue py-16 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold">
                        Share Your Experience
                    </h2>
                    <p className="mb-8 text-xl">
                        Help others by sharing your experience with Shri Sigma Hospitals
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="https://www.google.com/search?q=Shri+Sigma+Hospitals+Madhapur+reviews#lrd=0x0:0x0,3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
                        >
                            <Star className="mr-2 h-5 w-5" />
                            Write a Google Review
                        </Link>
                        <Link
                            href="/contact-us-madhapur-hyderabad"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
                        Experience World-Class Healthcare
                    </h2>
                    <p className="mb-8 text-lg text-gray-600">
                        Join thousands of satisfied patients who have trusted us with their health
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/best-doctors-madhapur-hyderabad"
                            className="inline-flex items-center justify-center rounded-lg bg-hospital-blue px-8 py-3 text-white transition-colors hover:bg-hospital-blue/90"
                        >
                            Meet Our Doctors
                        </Link>
                        <Link
                            href="tel:+918977763308"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-hospital-blue px-8 py-3 text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}