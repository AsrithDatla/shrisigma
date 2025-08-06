'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';

export default function UTITreatmentBlogPage() {
    const handleShare = async () => {
        const shareData = {
            title: 'UTI Awareness for Expecting Mothers: Symptoms, Prevention, and Management',
            text: 'Learn about UTI symptoms, prevention, and management during pregnancy from expert gynecologists.',
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            // Fallback: copy to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            } catch (clipboardError) {
                console.error('Clipboard error:', clipboardError);
            }
        }
    };

    const blogPost = {
        id: 'uti-treatment-hyderabad',
        title: 'UTI Awareness for Expecting Mothers: Symptoms, Prevention, and Management',
        excerpt: 'Urinary tract infections (UTIs) are bacterial infections that occur in any part of the urinary system, including the kidneys, ureters, bladder, and urethra.',
        author: 'Dr. Harish V Kumar',
        specialty: 'Urologist',
        date: '2024-03-15',
        readTime: '6 min read',
        image: '/images/service/blog1.webp',
        category: 'Urology',
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/healthcare-blog-hyderabad"
                            className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300 mb-6"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to Blog
                        </Link>

                        {/* Category Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <Heart className="w-4 h-4 mr-2 text-hospital-yellow" />
                            <span className="text-sm font-semibold">{blogPost.category}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 heading-no-break leading-tight">
                            {blogPost.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90 mb-8">
                            <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span className="font-medium">{blogPost.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{blogPost.readTime}</span>
                            </div>
                        </div>

                        {/* Share Button */}
                        <button
                            onClick={handleShare}
                            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-xl transition-colors duration-300"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Article
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Image - Full Display */}
            <section className="py-8 sm:py-12 bg-white -mt-6 sm:-mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-50">
                            <Image
                                src={blogPost.image}
                                alt={blogPost.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain"
                                priority
                                style={{ maxHeight: 'none' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">

                            {/* Introduction Section */}
                            <div className="mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold font-display text-hospital-blue mb-6 heading-no-break">
                                    <span className="block whitespace-nowrap">UTI During Pregnancy</span>
                                </h2>

                                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                                    Urinary tract infections (UTIs) are bacterial infections that occur in any part of the urinary system, including the kidneys, ureters, bladder, and urethra. During pregnancy, women are at an increased risk of developing UTIs due to hormonal changes, the growing uterus putting pressure on the bladder, and changes in urinary tract function as said by Best Gynecologist in Hyderabad.
                                </p>
                            </div>

                            {/* Symptoms Section */}
                            <div className="mb-12">
                                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                                    Signs and symptoms of UTIs during pregnancy may include:
                                </h3>

                                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg">Frequent urge to urinate</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg">Pain or burning sensation during urination</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg">Cloudy or strong-smelling urine</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg">Pelvic discomfort or pressure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-blue rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg">Blood in the urine (hematuria)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="w-2 h-2 bg-hospital-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <span className="text-base sm:text-lg font-semibold text-hospital-red">Fever or chills (may indicate a kidney infection)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                        <strong className="text-hospital-blue">Important:</strong> It's essential for pregnant women to promptly seek medical attention if they experience any symptoms of a UTI, as untreated infections can lead to complications such as kidney infections and preterm birth.
                                    </p>
                                </div>
                            </div>

                            {/* Recognition Section */}
                            <div className="mb-12">
                                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                                    <span className="whitespace-nowrap">Recognizing the Signs</span> <span className="whitespace-nowrap">and Symptoms</span> <span className="whitespace-nowrap">of Urinary Tract</span> <span className="whitespace-nowrap">Infections During</span> <span className="whitespace-nowrap">Pregnancy</span>
                                </h3>

                                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                                    Urinary tract infections (UTIs) are common during pregnancy and can cause discomfort and potential complications if left untreated. Recognizing the signs and symptoms of UTIs is crucial for timely intervention and management.
                                </p>

                                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                                    <h4 className="text-lg sm:text-xl font-bold text-hospital-green mb-4">
                                        Know the Symptoms:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                        As per Best Gynecologist in Kachiguda, familiarize yourself with the symptoms of UTIs, which may include a frequent urge to urinate, pain or burning during urination, cloudy or foul-smelling urine, and pelvic discomfort. If you experience any of these symptoms, contact your healthcare provider promptly for evaluation and treatment.
                                    </p>
                                </div>
                            </div>

                            {/* Conclusion Section */}
                            <div className="mb-12">
                                <div className="bg-gradient-to-br from-hospital-green/10 via-hospital-blue/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                                        <span className="whitespace-nowrap">Key Takeaways</span>
                                    </h3>

                                    <div className="space-y-4 text-gray-700">
                                        <p className="text-base sm:text-lg leading-relaxed">
                                            In conclusion, urinary tract infections are common during pregnancy but can be prevented with proper hygiene, hydration, and lifestyle choices.
                                        </p>

                                        <p className="text-base sm:text-lg leading-relaxed">
                                            Regular prenatal check-ups allow healthcare providers to monitor urinary tract health and address any concerns early on. Prompt diagnosis and treatment of UTIs during pregnancy are crucial for ensuring the health and well-being of both the mother and the baby.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Expert Consultation Box */}
                            <div className="bg-gradient-to-r from-hospital-green to-hospital-teal rounded-2xl p-6 sm:p-8 text-white mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold mb-3">
                                            Expert Medical Advice
                                        </h4>
                                        <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                                            If you're experiencing any symptoms of UTI during pregnancy, don't wait. Our experienced gynecologists at Shri Sigma Hospitals are here to provide comprehensive care and ensure the health of both you and your baby.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container mx-auto px-4 text-center relative">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 sm:mb-6 heading-no-break">
                            <span className="whitespace-nowrap">Need Expert</span>
                            <span className="block text-hospital-yellow whitespace-nowrap">Medical Advice?</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
                            Consult with Dr. {blogPost.author}, our expert {blogPost.specialty}, for personalized treatment and care.
                        </p>

                        <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-center px-4">
                            <Link
                                href="/best-doctors-madhapur-hyderabad"
                                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-hospital-blue font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl text-sm sm:text-base"
                            >
                                <User className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                                Consult Dr. {blogPost.author.split(' ')[1]}
                            </Link>
                            <Link
                                href="tel:+918977763308"
                                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl text-sm sm:text-base"
                            >
                                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                                Call: +91 89777 63308
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}