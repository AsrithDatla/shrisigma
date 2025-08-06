'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';

export default function PhlegmCausesBlogPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'Understanding Phlegm: What Different Types Indicate About Your Health',
      text: 'Learn about different types of phlegm and what they indicate about your health. Expert insights from pulmonologists.',
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
    id: 'phlegm-causes-treatment-hyderabad',
    title: 'Understanding Phlegm: What Different Types Indicate About Your Health',
    excerpt: 'Discover how the color and texture of your phlegm can offer valuable insights into your health. Understanding these signs can help you address potential issues and maintain better well-being.',
    author: 'Dr. M.M. Shareef',
    specialty: 'Pulmonologist',
    date: '2024-02-20',
    readTime: '4 min read',
    image: '/images/service/blog-6.webp',
    category: 'Pulmonology',
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
                  <span className="whitespace-nowrap">Phlegm | Types</span> <span className="whitespace-nowrap">and Health</span> <span className="whitespace-nowrap">Implications</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  Phlegm, also known as sputum, is a thick, sticky substance produced by the mucous membranes of the respiratory tract. It can be expelled through coughing, and its color and consistency can provide valuable insights into underlying health conditions. Here are some common types of phlegm and their potential causes.
                </p>
              </div>

              {/* Clear or White Phlegm Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Clear or</span> <span className="whitespace-nowrap">White Phlegm</span>
                </h3>

                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    <strong className="text-hospital-blue">Normal Mucus:</strong> Clear or white mucus is often normal and produced by the respiratory system to trap and eliminate particles, irritants, and microbes.
                  </p>
                </div>
              </div>

              {/* Yellow or Green Phlegm Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Yellow or</span> <span className="whitespace-nowrap">Green Phlegm</span>
                </h3>

                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    <strong className="text-hospital-blue">Infection:</strong> An increased presence of white blood cells in the mucus can cause it to appear yellow or green. This can be a sign of a bacterial infection, such as bronchitis or pneumonia.
                  </p>
                </div>
              </div>

              {/* Black or Brown-Colored Phlegm Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Black or</span> <span className="whitespace-nowrap">Brown-Colored Phlegm</span>
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Smoking:</strong> Smoking can lead to the production of brown or rust-colored phlegm due to the accumulation of tar and other substances in the lungs.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Environmental Exposures:</strong> Exposure to polluted air or certain occupational hazards can also contribute to discoloration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Red Phlegm Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Red Phlegm</span>
                </h3>

                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    <strong className="text-hospital-blue">Blood:</strong> Coughing up red-tinged phlegm may indicate the presence of blood. Causes can range from minor irritation to more serious conditions like tuberculosis, bronchitis, or lung cancer.
                  </p>
                </div>
              </div>

              {/* Excessive Phlegm Production Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Excessive Phlegm</span> <span className="whitespace-nowrap">Production</span>
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Allergies:</strong> Allergic reactions can lead to an increase in mucus production.
                    </p>
                  </div>

                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Asthma:</strong> People with asthma may experience excess mucus production and difficulty clearing it from the airways.
                    </p>
                  </div>
                </div>
              </div>

              {/* Thick and Sticky Phlegm Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Thick and</span> <span className="whitespace-nowrap">Sticky Phlegm</span>
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Dehydration:</strong> Inadequate hydration can lead to thicker and stickier mucus.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Certain Medications:</strong> Some medications may contribute to changes in mucus consistency.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  Phlegm itself is a natural and necessary component of the respiratory system, helping to trap and eliminate foreign particles, irritants, and microbes. In many cases, the presence of phlegm is a normal response to respiratory infections, allergies, or environmental factors.
                </p>
              </div>

              {/* Health Complications Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Health Complications</span> <span className="whitespace-nowrap">Associated with</span> <span className="whitespace-nowrap">Phlegm</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  Persistent or excessive phlegm production can be a symptom of an underlying health issue, and certain conditions associated with phlegm may lead to complications, such as:
                </p>

                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Respiratory Infections:</strong> Conditions like bronchitis or pneumonia can cause increased phlegm. If untreated, these infections can lead to respiratory failure or spread to other body parts.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Chronic Obstructive Pulmonary Disease (COPD):</strong> Includes conditions like chronic bronchitis and emphysema, causing chronic inflammation and mucus production, leading to difficulty breathing and reduced lung function.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Asthma:</strong> Excessive mucus production can contribute to airway obstruction, leading to asthma attacks and decreased quality of life.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Chronic Sinusitis:</strong> Associated with persistent drainage of mucus down the throat, causing throat irritation and coughing.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Inhalation of Foreign Substances:</strong> Prolonged exposure to certain substances or irritants can lead to chronic respiratory issues and persistent phlegm.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-hospital-blue">Aspiration Pneumonia:</strong> If phlegm is not effectively cleared, it may contribute to aspiration pneumonia, where foreign material is accidentally breathed into the lungs.
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  It's important to note that phlegm itself is not a disease but rather a symptom of an underlying issue. If you experience persistent or concerning symptoms related to phlegm, such as changes in color, difficulty breathing, chest pain, or persistent coughing, it's crucial to seek medical attention as per the best pulmonologist in Kukatpally.
                </p>
              </div>

              {/* Conclusion Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Conclusion: Monitoring</span> <span className="whitespace-nowrap">and Managing</span> <span className="whitespace-nowrap">Phlegm</span>
                </h3>

                <div className="bg-gradient-to-br from-hospital-blue/10 via-hospital-green/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    The presence of phlegm doesn't always indicate a serious problem. However, if you experience persistent or concerning symptoms, such as changes in phlegm color, difficulty breathing, chest pain, or persistent coughing, it's essential to consult a healthcare professional for a thorough evaluation and appropriate diagnosis. Shri Sigma Hospital, located in Madhapur, is committed to providing exceptional pulmonology care and support for patients with respiratory concerns.
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
                      Expert Pulmonology Care
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Our experienced pulmonologists at Shri Sigma Hospitals provide comprehensive respiratory care, from diagnostic evaluations to advanced treatment options. Understanding your phlegm can be the first step toward better respiratory health.
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
                Consult Dr. {blogPost.author.split(' ')[2]}
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