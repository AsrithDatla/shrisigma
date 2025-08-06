'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, Phone } from 'lucide-react';

export default function StrokePreventionBlogPage() {
  const handleShare = async () => {
    const shareData = {
      title: '5 Essential Foods for Preventing Strokes: A Comprehensive Approach',
      text: 'Learn about stroke prevention through nutrition and lifestyle changes. Discover 5 essential foods that can help reduce stroke risk.',
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
    id: 'stroke-prevention-hyderabad',
    title: '5 – Essential Foods for Preventing Strokes: A Comprehensive Approach',
    excerpt: 'Preventing strokes is a critical aspect of maintaining overall health and well-being. Each year, a significant number of lives are tragically lost to strokes, making it imperative',
    author: 'Dr. Krishna Kishore Reddy',
    specialty: 'Cardiologist',
    date: '2024-02-25',
    readTime: '5 min read',
    image: '/images/service/blog-5.webp',
    category: 'Cardiology',
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
                  <span className="whitespace-nowrap">Stroke Prevention</span>
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
                  Preventing strokes is a critical aspect of maintaining overall health and well-being. Each year, a significant number of lives are tragically lost to strokes, making it imperative for individuals to understand the importance of timely identification and treatment. While certain factors like family history can predispose someone to strokes, there are numerous lifestyle and dietary changes that can be implemented to mitigate this risk effectively.
                </p>
              </div>

              {/* Nutrition Role Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">The Role of</span> <span className="whitespace-nowrap">Nutrition in</span> <span className="whitespace-nowrap">Stroke Prevention</span>
                </h3>
                
                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    As said by the best cardiologist in Hyderabad, adopting a balanced and nutritious diet stands out as a cornerstone in averting heart-related diseases and reducing the likelihood of strokes.
                  </p>
                </div>
              </div>

              {/* Leafy Greens Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Leafy Greens:</span> <span className="whitespace-nowrap">Nutritional Powerhouses</span>
                </h3>
                
                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Leafy greens, such as spinach, fenugreek, and kale, are renowned for their abundance of essential vitamins, minerals, and antioxidants. These vegetables are particularly rich in folate, a nutrient known for enhancing nervous system function and promoting heart health, thereby reducing the risk of stroke. Additionally, the presence of Vitamin B in leafy greens further contributes to stroke prevention, while their potassium content helps regulate blood pressure, a key factor in preventing strokes.
                  </p>
                </div>
              </div>

              {/* Berries Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Berries: Nature's</span> <span className="whitespace-nowrap">Antioxidant-Rich Treats</span>
                </h3>
                
                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Berries, including blueberries, strawberries, and raspberries, are hailed for their potent antioxidant properties, attributed to compounds like flavonoids and anthocyanins. These antioxidants combat oxidative stress and inflammation in the body, thereby promoting overall heart and brain health and reducing the risk of stroke. By incorporating these vibrant fruits into one's diet, individuals can harness their protective benefits against stroke and other cardiovascular diseases.
                  </p>
                </div>
              </div>

              {/* Whole Grains Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Whole Grains:</span> <span className="whitespace-nowrap">Heart-Healthy Staples</span>
                </h3>
                
                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Whole grains represent another essential component of a stroke-preventive diet. Varieties such as oats, oatmeal, popcorn, millet, quinoa, rye, and brown rice offer a wealth of fiber, vitamins, and minerals crucial for heart health. The soluble fiber found in whole grains helps control cholesterol levels, preventing the buildup of plaque in the arteries and reducing the risk of stroke. Moreover, by promoting satiety and stabilizing blood sugar levels, whole grains can help prevent obesity and high blood pressure, both of which are significant risk factors for stroke, as stated by the best cardiologist in Kukatpally.
                  </p>
                </div>
              </div>

              {/* Nuts and Seeds Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Nuts and Seeds:</span> <span className="whitespace-nowrap">Nutritional Powerhouses</span>
                </h3>
                
                <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Nuts and seeds are nutritional powerhouses that provide a plethora of heart-healthy benefits. Almonds, flax seeds, walnuts, and chia seeds are particularly noteworthy for their rich nutrient profiles, including minerals, vitamins, and omega-3 fatty acids. These essential fatty acids play a crucial role in reducing inflammation, improving blood circulation, and lowering the risk of stroke by preventing the formation of blood clots and maintaining optimal cholesterol levels.
                  </p>
                </div>
              </div>

              {/* Fatty Fish Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Fatty Fish:</span> <span className="whitespace-nowrap">Omega-3-Rich Delights</span>
                </h3>
                
                <div className="bg-white border border-hospital-blue/20 rounded-2xl p-6 sm:p-8 shadow-soft mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Incorporating fatty fish into one's diet is another effective strategy for stroke prevention. Fish like salmon, mackerel, and sardines are prized for their high omega-3 fatty acid content, which confers numerous cardiovascular benefits. Omega-3 fatty acids exhibit anti-inflammatory properties that help reduce the risk of blood clots, improve cholesterol levels, and enhance overall heart health. Regular consumption of fatty fish has been associated with a reduced risk of ischemic stroke, the most common type of stroke caused by a blockage in the blood vessels supplying the brain.
                  </p>
                </div>
              </div>

              {/* Lifestyle Modifications Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Lifestyle Modifications:</span> <span className="whitespace-nowrap">A Holistic</span> <span className="whitespace-nowrap">Approach</span>
                </h3>
                
                <div className="bg-gradient-to-r from-hospital-green/5 to-hospital-teal/5 rounded-2xl p-6 sm:p-8 mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    While dietary choices play a crucial role in stroke prevention, lifestyle modifications are equally essential. Engaging in regular physical activity, such as yoga and exercise, promotes cardiovascular health by strengthening the heart, improving circulation, and reducing the risk of obesity and hypertension, all of which are significant risk factors for stroke. Avoiding unhealthy habits like smoking and excessive alcohol consumption further supports heart health and reduces the likelihood of stroke.
                  </p>
                </div>
              </div>

              {/* Recognizing Symptoms Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Recognizing Symptoms</span> <span className="whitespace-nowrap">and Seeking</span> <span className="whitespace-nowrap">Timely Care</span>
                </h3>
                
                <div className="bg-hospital-yellow/10 border-l-4 border-hospital-yellow p-6 rounded-r-xl mb-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Recognizing the warning signs of stroke and seeking prompt medical attention is paramount. Symptoms such as sudden weakness or numbness in the face, arm, or leg, difficulty speaking or understanding speech, severe headache, dizziness, or loss of balance should not be ignored, as they could indicate a stroke. As said by the best cardiologist in Kachiguda, acting quickly and seeking emergency medical care can make a crucial difference in minimizing the long-term effects of a stroke and improving outcomes.
                  </p>
                </div>
              </div>

              {/* Conclusion Section */}
              <div className="mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-hospital-blue mb-6 heading-no-break">
                  <span className="whitespace-nowrap">Conclusion: Prioritizing</span> <span className="whitespace-nowrap">Heart Health</span>
                </h3>
                
                <div className="bg-gradient-to-br from-hospital-blue/10 via-hospital-green/5 to-hospital-teal/10 rounded-2xl p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    In conclusion, preventing strokes requires a comprehensive approach that encompasses both dietary and lifestyle factors. By adopting a diet rich in leafy greens, berries, whole grains, nuts, seeds, and fatty fish, coupled with regular physical activity and avoidance of harmful habits, individuals can significantly reduce their risk of stroke and safeguard their long-term health. Additionally, raising awareness about stroke symptoms and the importance of seeking timely medical attention can help save lives and prevent disability associated with strokes. Ultimately, prioritizing heart health through informed choices and proactive measures is key to reducing the burden of stroke and promoting overall well-being.
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
                      Expert Cardiology Care
                    </h4>
                    <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                      Our experienced cardiologists at Shri Sigma Hospitals provide comprehensive stroke prevention care, from lifestyle counseling to advanced cardiac treatments. Early prevention and regular check-ups are key to maintaining heart health and preventing strokes.
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