'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';

export default function AnalFissureBlogPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'The Complete Guide to Anal Fissures: Symptoms, Causes, and Treatment Options',
      text: 'Comprehensive guide to anal fissures covering symptoms, causes, types, complications, prevention, and treatment options.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    }
  };

  const blogPost = {
    id: 'anal-fissure-treatment-madhapur-hyderabad',
    title: 'The Complete Guide to Anal Fissures: Symptoms, Causes, and Treatment Options',
    excerpt: 'Anal fissures, small tears or cuts in the mucous membrane lining of the anal canal, can be a source of considerable pain and discomfort, particularly during bowel movements.',
    author: 'Dr. Jahnavi Koneru',
    specialty: 'Proctology Surgeon',
    date: '2024-03-05',
    readTime: '7 min read',
    image: '/images/service/blog-3.webp',
    category: 'Proctology',
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
                  <span className="whitespace-nowrap">Anal Fissure</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  Anal fissures, small tears or cuts in the mucous membrane lining of the anal canal, can be a source of considerable pain and discomfort, particularly during bowel movements. This long-format exploration aims to delve deeply into the nuances of anal fissures, providing a comprehensive understanding of their symptoms, causes, types, complications, preventive measures, and treatment strategies.
                </p>
              </div>

              {/* Symptoms Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Symptoms</span>
                </h3>

                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Pain:</strong> One of the hallmark symptoms of anal fissures is pain. Individuals often describe a sharp or burning sensation during and after bowel movements, making routine activities such as passing stool an agonizing ordeal.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Bleeding:</strong> Bright red blood on toilet paper or in the stool is a common indicator of anal fissures. This bleeding occurs due to the tears in the delicate anal tissue.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Itching and Irritation:</strong> Persistent itching and irritation around the anal area are additional symptoms associated with anal fissures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Causes Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Causes</span>
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Constipation:</strong> Anal fissures often result from constipation, a condition marked by straining during bowel movements and the passage of hard stools.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Diarrhea:</strong> Chronic or frequent episodes of diarrhea can also lead to the development of anal fissures.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Trauma:</strong> Direct injury or trauma to the anal region, such as a fall or injury during childbirth, can contribute to the formation of anal fissures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Types</span>
                </h3>

                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Acute Fissure:</strong> An acute fissure is characterized by a recent tear in the anal lining, typically leading to sudden onset symptoms.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Chronic Fissure:</strong> A chronic fissure extends beyond six weeks, marked by persistent or recurring tears.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complications Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Complications</span>
                </h3>

                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Infection:</strong> Anal fissures pose a risk of bacterial infection in the affected area due to the open tear in the anal lining.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Chronic Pain:</strong> Individuals with anal fissures may experience the development of persistent, long-term pain.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Anal Abscess or Fistula:</strong> Anal fissures can lead to the formation of an anal abscess or fistula—an abnormal tunnel connecting the anal canal to the skin near the anus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prevention Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Prevention</span>
                </h3>

                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">High-Fiber Diet:</strong> Embracing a high-fiber diet is a key preventive measure for anal fissures.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Adequate Hydration:</strong> Maintaining adequate hydration is essential in preventing constipation, a contributing factor to anal fissures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Treatment</span>
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Topical Medications:</strong> The application of creams or ointments to the affected area is a common treatment approach for anal fissures.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Sitz Baths:</strong> Soothing warm baths, known as sitz baths, are an effective and non-invasive treatment modality for anal fissures.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Fiber Supplements:</strong> Dietary changes, including the addition of fiber supplements, play a pivotal role in the management of anal fissures.
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Botox Injections:</strong> In some cases, Botox injections may be recommended to relax the sphincter muscles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Surgery Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Surgery in</span> <span className="whitespace-nowrap">Chronic Anal</span> <span className="whitespace-nowrap">Fissures</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  Surgery is considered an option for the treatment of chronic anal fissures when conservative measures and medications fail to provide relief. Options include:
                </p>

                <div className="bg-gradient-to-br from-hospital-blue/10 via-hospital-green/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Lateral Internal Sphincterotomy (LIS):</strong> A small cut in the internal anal sphincter muscle to reduce spasms and promote healing.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Fissurectomy:</strong> Surgical removal of the affected tissue of the fissure.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Advancement Flap Surgery:</strong> Using healthy tissue from the rectum to cover the fissure.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Laser Surgery:</strong> Use of a focused laser beam to make precise incisions or vaporize tissue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Conclusion</span>
                </h3>

                <div className="bg-gradient-to-br from-hospital-blue/10 via-hospital-green/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    A broad understanding of anal fissures is vital for individuals seeking to manage and prevent this condition effectively. By recognizing the symptoms, causes, types, and potential complications associated with anal fissures, individuals can make informed decisions about their healthcare. Shri Sigma Hospital, located in Madhapur, is committed to providing exceptional proctology care and support for patients with anal fissures.
                  </p>
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
                      Expert Proctology Care
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Our experienced proctologists at Shri Sigma Hospitals provide comprehensive care for anal fissures, from conservative treatment to advanced surgical options. Early consultation can prevent complications and ensure faster healing.
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