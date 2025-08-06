'use client';

import { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What services are offered at Shri Sigma Hospitals as a multispecialty hospital?",
      answer: "At Shri Sigma Hospitals, we provide a wide range of medical services across multiple specialties, including cardiology, orthopedics, neurology, gastroenterology, gynecology, oncology, pediatrics, and more. We offer comprehensive diagnostic procedures, advanced treatments, surgeries, and personalized care to address various healthcare needs."
    },
    {
      question: "Are there emergency services available at Shri Sigma Hospitals?",
      answer: "Yes, Shri Sigma Hospitals provides 24/7 emergency services. Our well-equipped emergency department is staffed with experienced healthcare professionals who are trained to handle critical situations promptly. We ensure immediate medical attention and care for emergencies such as accidents, heart attacks, strokes, and other life-threatening conditions."
    },
    {
      question: "Are there any support services available for patients and their families?",
      answer: "Shri Sigma Hospitals prioritizes holistic patient care and understands the importance of emotional support for patients and their families. We provide various support services, including counseling, patient education programs, and support groups. Our aim is to ensure that patients and their families feel well-informed, comfortable, and supported throughout their healthcare journey."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept all major insurance providers and offer cashless treatment facilities. Our insurance desk can help verify your coverage and assist with pre-authorization processes. We work with over 20 insurance companies to ensure you get the best possible care without financial stress."
    },
    {
      question: "How can I book an appointment with a specialist?",
      answer: "You can book an appointment through multiple channels: call our helpline at +91 89777 63308, use our online booking system, visit our hospital directly, or WhatsApp us. Our patient care coordinators will help you schedule an appointment with the right specialist based on your medical needs."
    },
    {
      question: "What makes Shri Sigma Hospitals different from other hospitals?",
      answer: "We combine advanced medical technology with compassionate care. Our state-of-the-art facilities, experienced medical team, personalized treatment plans, and patient-centric approach set us apart. We also offer comprehensive post-treatment care and follow-up services to ensure complete recovery."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-hospital-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-hospital-blue/10 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-hospital-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-hospital-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services, facilities, and patient care
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft border border-hospital-gray-100 overflow-hidden transition-all duration-300 hover:shadow-medium"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-hospital-blue focus:ring-inset transition-colors duration-200 hover:bg-hospital-gray-50"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems.includes(index)}
                >
                  <span className="text-lg font-semibold text-hospital-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-6 h-6 text-hospital-blue transition-transform duration-200" />
                    ) : (
                      <Plus className="w-6 h-6 text-hospital-blue transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItems.includes(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-hospital-gray-100">
                      <p className="text-hospital-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-hospital-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918977763308"
                className="inline-flex items-center justify-center px-8 py-4 bg-hospital-blue text-white font-semibold rounded-xl hover:bg-hospital-blue-dark transition-colors duration-200 shadow-medium hover:shadow-large"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="/contact-us-madhapur-hyderabad"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-hospital-blue font-semibold rounded-xl border-2 border-hospital-blue hover:bg-hospital-blue hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;