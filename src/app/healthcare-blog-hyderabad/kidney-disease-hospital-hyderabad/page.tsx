'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';


export default function KidneyDiseaseBlogPage() {
  const handleShare = async () => {
    const shareData = {
      title: 'Understanding Kidney Disease: Comprehensive Guide',
      text: 'Learn about kidney disease risk factors, symptoms, and management from expert nephrologists.',
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
    id: 'kidney-disease-hospital-hyderabad',
    title: 'Understanding Kidney Disease: A Comprehensive Exploration',
    excerpt: 'Kidney disease, a silent epidemic, silently creeps into the lives of millions worldwide, causing havoc to health and well-being. In the United States alone, its prevalence',
    author: 'Dr. Krishna Patil',
    specialty: 'Nephrologist',
    date: '2024-03-10',
    readTime: '8 min read',
    image: '/images/service/blog-2.webp',
    category: 'Nephrology',
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
                  <span className="whitespace-nowrap">Kidney Disease</span> | <span className="whitespace-nowrap">Risk Factors</span> <span className="whitespace-nowrap">for Kidney</span> <span className="whitespace-nowrap">Disease</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  Kidney disease, a silent epidemic, silently creeps into the lives of millions worldwide, causing havoc to health and well-being. In the United States alone, its prevalence is staggering, with approximately one-third of adults facing the looming risk of developing this condition. While it often remains undetectable until it reaches an advanced stage, the consequences can be dire, necessitating invasive treatments like dialysis or transplantation. However, armed with knowledge and proactive measures, individuals can safeguard their kidney health and mitigate the impact of this insidious disease as explained by the best nephrologists at Shri Sigma Hospital, Madhapur.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  In this comprehensive exploration, we delve deeper into the intricate facets of kidney disease, from its fundamental mechanisms to practical steps for prevention and management. By understanding the complexities of kidney function, assessing individual risk factors, recognizing subtle symptoms, undergoing essential diagnostic tests, embracing healthy lifestyle habits, and accessing ongoing education and support, individuals can empower themselves to take charge of their kidney health and improve their overall well-being.
                </p>
              </div>

              {/* Understanding Kidney Function Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Understanding Kidney</span> <span className="whitespace-nowrap">Function</span>
                </h3>

                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                    To comprehend the significance of kidney health, one must grasp the multifaceted roles these vital organs play in maintaining physiological equilibrium. The kidneys serve as the body's primary filtration system, responsible for removing waste products, excess fluids, and toxins from the bloodstream through the production of urine. Additionally, they regulate electrolyte balance, control blood pressure, stimulate red blood cell production, and activate vitamin D to support bone health.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    The intricate structure of the kidneys consists of millions of tiny filtering units called nephrons, each composed of a glomerulus and a tubule. The glomerulus acts as a sieve, allowing small molecules like water, glucose, and waste products to pass through while retaining larger molecules like proteins and blood cells. The filtered fluid then travels through the tubules, where essential substances are reabsorbed into the bloodstream, and excess waste products are excreted as urine.
                  </p>
                </div>
              </div>

              {/* Risk Factors Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Assessing Individual</span> <span className="whitespace-nowrap">Risk Factors</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  While kidney disease can affect anyone, certain risk factors predispose individuals to a higher likelihood of developing this condition. Diabetes and hypertension (high blood pressure) rank among the leading causes of kidney disease, collectively accounting for a significant portion of cases. Other risk factors include obesity, cardiovascular disease, a family history of kidney disorders, age, ethnicity (African Americans, Hispanics, and Native Americans are at higher risk), smoking, and certain medications or toxins.
                </p>

                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    <strong className="text-hospital-blue">Important:</strong> Individuals with preexisting health conditions such as diabetes or hypertension should be particularly vigilant about monitoring their kidney function regularly. Additionally, those with a family history of kidney disease or other predisposing factors should undergo periodic screenings to assess their risk and detect any early signs of kidney dysfunction.
                  </p>
                </div>
              </div>

              {/* Symptoms Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Recognizing Subtle</span> <span className="whitespace-nowrap">Symptoms</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                  According to the best nephrologists at Shri Sigma Hospital, Madhapur, one of the challenges in diagnosing kidney disease lies in its asymptomatic nature, especially in the early stages. However, as the condition progresses, certain signs and symptoms may begin to manifest, signaling underlying kidney dysfunction. These symptoms can vary depending on the specific type and severity of kidney disease but may include:
                </p>

                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Fatigue and weakness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Swelling (edema)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Changes in urinary habits</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Pelvic discomfort or pressure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Persistent itching</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Nausea and vomiting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Diagnostic Tests Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Undergoing Essential</span> <span className="whitespace-nowrap">Diagnostic Tests</span>
                </h3>

                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Early detection is critical in managing kidney disease effectively. For individuals at risk or exhibiting symptoms, undergoing specific diagnostic tests is essential for accurate diagnosis and timely intervention. These tests may include blood tests, urine tests, imaging studies, and kidney biopsy, depending on the individual's condition.
                  </p>
                </div>
              </div>

              {/* Lifestyle Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Embracing Healthy</span> <span className="whitespace-nowrap">Lifestyle Habits</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  While certain risk factors for kidney disease, such as genetics or preexisting health conditions, may be beyond one's control, adopting a healthy lifestyle can significantly reduce the risk and slow the progression of kidney disease. Key lifestyle modifications include maintaining a healthy diet, managing blood pressure, controlling blood sugar, staying hydrated, avoiding tobacco and excessive alcohol consumption, exercising regularly, and maintaining a healthy weight.
                </p>
              </div>

              {/* Education and Support Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Accessing Ongoing</span> <span className="whitespace-nowrap">Education and</span> <span className="whitespace-nowrap">Support</span>
                </h3>

                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  Education and support are crucial components of effective kidney disease management. By staying informed about the latest advances in kidney health, individuals can make informed decisions about their care and treatment options. Additionally, connecting with support groups, online communities, and healthcare professionals specializing in kidney disease can provide valuable resources, encouragement, and emotional support throughout the journey.
                </p>
              </div>

              {/* Conclusion Section */}
              <div className="mb-12">
                <div className="bg-gradient-to-br from-hospital-blue/10 via-hospital-green/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Shri Sigma Hospital, located in Madhapur, is committed to providing exceptional care and support for patients with kidney disease. Through awareness, education, preventive measures, and early intervention, individuals can take proactive steps to protect their kidney health and improve their overall quality of life.
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
                      Expert Nephrology Care
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Our experienced nephrologists at Shri Sigma Hospitals provide comprehensive kidney care, from early detection to advanced treatment options. Don't wait for symptoms to worsen - early intervention is key to preserving kidney function.
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