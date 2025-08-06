'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';

export default function PCOSTreatmentBlogPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'Managing PCOS Naturally: Diet, Exercise, and Holistic Approaches',
      text: 'Comprehensive guide to PCOS management covering symptoms, causes, types, complications, and natural treatment approaches.',
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
    id: 'pcos-treatment-hyderabad',
    title: 'Managing PCOS Naturally: Diet, Exercise, and Holistic Approaches',
    excerpt: 'Discover natural ways to manage PCOS through targeted diet plans, effective exercise routines, and holistic approaches that promote hormonal balance and overall well-being.',
    author: 'Dr. Sai Sharanya V',
    specialty: 'Gynecologist',
    date: '2024-02-28',
    readTime: '6 min read',
    image: '/images/service/blog-4.webp',
    category: 'Gynecology',
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
                  <span className="block whitespace-nowrap">Polycystic Ovary Syndrome (PCOS)</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder that affects women of reproductive age. This condition is characterized by irregular menstrual periods, excessive levels of male hormones (androgens), and polycystic ovaries that contain numerous small cysts. PCOS can have a profound impact on a woman's health, influencing everything from fertility and menstruation to overall physical and emotional well-being.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  This comprehensive guide aims to provide a deeper understanding of PCOS by exploring its symptoms, causes, types, complications, prevention strategies, and treatment options. Armed with this knowledge, individuals can better manage their symptoms, improve their quality of life, and seek appropriate medical care.
                </p>
              </div>

              {/* Symptoms Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Common Symptoms</span> <span className="whitespace-nowrap">of PCOS</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  The symptoms of PCOS can vary from mild to severe and may manifest differently in each individual. Some of the most common symptoms include:
                </p>

                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Irregular menstrual cycles or absence of periods</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Excessive hair growth (hirsutism) on the face, chest, or back</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Acne or oily skin</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Weight gain or difficulty losing weight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Thinning hair or hair loss from the scalp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Darkening of the skin, particularly around the neck, groin, or under the breasts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Polycystic ovaries visible on ultrasound</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Causes Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Causes of</span> <span className="whitespace-nowrap">PCOS</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  While the exact cause of PCOS remains unclear, several factors are thought to contribute to its development, including:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Genetics:</strong> A family history of PCOS may increase the risk of developing the condition.
                    </p>
                  </div>

                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Insulin resistance:</strong> Many women with PCOS have insulin resistance, leading to elevated insulin levels that may affect ovarian function.
                    </p>
                  </div>

                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Hormonal imbalance:</strong> High levels of androgens (male hormones) interfere with ovulation, leading to irregular menstrual cycles.
                    </p>
                  </div>

                  <div className="bg-white border border-hospital-blue/20 rounded-xl p-4 sm:p-6 shadow-soft">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Low-grade inflammation:</strong> Women with PCOS may have low-grade inflammation that stimulates the ovaries to produce androgens.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Types of</span> <span className="whitespace-nowrap">PCOS</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  PCOS can present in different forms, categorized based on the symptoms and underlying causes. These include:
                </p>

                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Insulin-resistant PCOS:</strong> The most common type, characterized by insulin resistance and high insulin levels.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Inflammatory PCOS:</strong> Linked to chronic inflammation, this type presents with elevated inflammatory markers.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Post-Pill PCOS:</strong> Occurs after discontinuing birth control pills, particularly in those predisposed to PCOS.
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        <strong className="text-hospital-blue">Adrenal PCOS:</strong> Caused by an overproduction of androgens by the adrenal glands, usually due to stress or adrenal disorders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complications Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Complications of</span> <span className="whitespace-nowrap">PCOS</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  Without proper management, PCOS can lead to several complications, including:
                </p>

                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Infertility or difficulty conceiving</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Type 2 diabetes or prediabetes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">High blood pressure and heart disease</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Sleep apnea</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Depression and anxiety</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Endometrial cancer due to prolonged lack of ovulation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Treatment Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Treatment Options</span> <span className="whitespace-nowrap">for PCOS</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  The treatment of PCOS often involves a combination of lifestyle changes, medications, and sometimes surgery, depending on the symptoms and individual needs:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Medications:</strong> Birth control pills, anti-androgens, and insulin-sensitizing agents are commonly used to regulate periods, reduce androgen levels, and improve insulin sensitivity.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Lifestyle changes:</strong> Regular exercise, healthy diet, and weight management are fundamental to managing PCOS symptoms.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Fertility treatments:</strong> For women struggling with infertility, treatments like ovulation induction or in vitro fertilization (IVF) may be recommended.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      <strong className="text-hospital-blue">Surgery:</strong> In rare cases, laparoscopic ovarian drilling may be considered to stimulate ovulation.
                    </p>
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
                    PCOS is a complex condition that requires a multi-faceted approach to manage effectively. By understanding the symptoms, causes, types, complications, and treatment options, individuals can take proactive steps to manage PCOS and improve their quality of life. Consulting with healthcare professionals, embracing healthy lifestyle habits, and seeking support from peers and support groups can be pivotal in navigating the challenges associated with PCOS. Shri Sigma Hospital, located in Madhapur, is committed to providing exceptional gynecological care and support for women with PCOS.
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
                      Expert Gynecological Care
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Our experienced gynecologists at Shri Sigma Hospitals provide comprehensive PCOS management, from lifestyle counseling to advanced fertility treatments. Early diagnosis and proper management can significantly improve quality of life and reproductive outcomes.
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