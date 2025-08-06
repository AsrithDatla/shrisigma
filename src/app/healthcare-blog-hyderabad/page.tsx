'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Heart, Brain, Bone, Baby, Search, Filter, BookOpen, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 'uti-treatment-hyderabad',
      title: 'UTI Awareness for Expecting Mothers: Symptoms, Prevention, and Management',
      excerpt: 'Urinary tract infections (UTIs) are bacterial infections that occur in any part of the urinary system, including the kidneys, ureters, bladder, and urethra.',
      author: 'Dr. Harish V Kumar',
      specialty: 'Urologist',
      date: '2024-03-15',
      readTime: '6 min read',
      image: '/images/service/blog1.webp',
      category: 'Urology',
      icon: Heart,
      featured: true,
    },
    {
      id: 'kidney-disease-hospital-hyderabad',
      title: 'Understanding Kidney Disease: A Comprehensive Exploration',
      excerpt: 'Kidney disease, a silent epidemic, silently creeps into the lives of millions worldwide, causing havoc to health and well-being. In the United States alone, its prevalence',
      author: 'Dr. Krishna Patil',
      specialty: 'Nephrologist',
      date: '2024-03-10',
      readTime: '8 min read',
      image: '/images/service/blog-2.webp',
      category: 'Nephrology',
      icon: Heart,
      featured: true,
    },
    {
      id: 'anal-fissure-treatment-madhapur-hyderabad',
      title: 'The Complete Guide to Anal Fissures: Symptoms, Causes, and Treatment Options',
      excerpt: 'Anal fissures, small tears or cuts in the mucous membrane lining of the anal canal, can be a source of considerable pain and discomfort, particularly during bowel movements.',
      author: 'Dr. Jahnavi Koneru',
      specialty: 'Proctology Surgeon',
      date: '2024-03-05',
      readTime: '7 min read',
      image: '/images/service/blog-3.webp',
      category: 'Proctology',
      icon: Heart,
      featured: true,
    },
    {
      id: 'pcos-treatment-hyderabad',
      title: 'Managing PCOS Naturally: Diet, Exercise, and Holistic Approaches',
      excerpt: 'Discover natural ways to manage PCOS through targeted diet plans, effective exercise routines, and holistic approaches that promote hormonal balance and overall well-being.',
      author: 'Dr. Sai Sharanya V',
      specialty: 'Gynecologist',
      date: '2024-02-28',
      readTime: '6 min read',
      image: '/images/service/blog-4.webp',
      category: 'Gynecology',
      icon: Baby,
      featured: false,
    },
    {
      id: 'stroke-prevention-hyderabad',
      title: '5 – Essential Foods for Preventing Strokes: A Comprehensive Approach',
      excerpt: 'Preventing strokes is a critical aspect of maintaining overall health and well-being. Each year, a significant number of lives are tragically lost to strokes, making it imperative',
      author: 'Dr. Krishna Kishore Reddy',
      specialty: 'Cardiologist',
      date: '2024-02-25',
      readTime: '5 min read',
      image: '/images/service/blog-5.webp',
      category: 'Cardiology',
      icon: Heart,
      featured: false,
    },
    {
      id: 'phlegm-causes-treatment-hyderabad',
      title: 'Decoding Your Phlegm : What It Says About Your Health',
      excerpt: 'Discover how the color and texture of your phlegm can offer valuable insights into your health. Understanding these signs can help you address potential issues and maintain better well-being.',
      author: 'Dr. M.M. Shareef',
      specialty: 'ENT Specialist',
      date: '2024-02-20',
      readTime: '4 min read',
      image: '/images/service/blog-6.webp',
      category: 'ENT',
      icon: Heart,
      featured: false,
    },
  ];

  const categories = [
    'All Posts', 'Urology', 'Nephrology', 'Proctology', 'Gynecology', 'Cardiology', 'ENT'
  ];

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
              <span className="text-xs sm:text-sm font-semibold">Health & Wellness</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 sm:mb-6 heading-no-break px-2">
              <span className="whitespace-nowrap">Healthcare</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Blog</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto px-4">
              Stay informed with the latest medical insights, health tips, and expert advice
              from our experienced doctors and healthcare professionals
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search health articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter - Mobile Optimized */}
      <section className="bg-white py-8 sm:py-12 -mt-6 sm:-mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-4">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-blue" />
                <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Filter by Category</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-hospital-blue heading-no-break">
                <span className="block whitespace-nowrap">Explore Health Topics</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-hospital-blue text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-hospital-blue/10 hover:text-hospital-blue border border-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Showing <span className="font-bold text-hospital-blue">{filteredPosts.length}</span> articles
                {selectedCategory !== 'All Posts' && (
                  <span> in <span className="font-bold text-hospital-green">{selectedCategory}</span></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts - Mobile Optimized Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <article key={post.id} className="group">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                      {/* Image Container */}
                      <div className="relative h-64 sm:h-72 lg:h-80">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="flex items-center bg-hospital-blue/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                            <IconComponent className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                            {post.category}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {post.featured && (
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                            <span className="flex items-center bg-hospital-yellow/90 backdrop-blur-sm text-hospital-blue px-3 py-1.5 rounded-full text-xs font-semibold">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 flex flex-col min-h-[280px] sm:min-h-[320px]">
                        <h3 className="card-title text-lg sm:text-xl mb-3 line-clamp-2 group-hover:text-hospital-green transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="card-excerpt text-sm sm:text-base mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Author & Meta Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-xs sm:text-sm text-gray-500">
                            <User className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="font-medium truncate">{post.author}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <Link
                          href={`/healthcare-blog-hyderabad/${post.id}`}
                          className="inline-flex items-center justify-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group/btn text-sm sm:text-base"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            /* No Results Message */
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
              <span className="text-xs sm:text-sm font-semibold">Expert Medical Care</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6 heading-no-break px-2">
              <span className="whitespace-nowrap">Need Medical</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Consultation?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto px-4">
              Our expert doctors are available for consultation and treatment.
              Get personalized healthcare advice from experienced specialists.
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-center px-4">
              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-hospital-blue font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl text-sm sm:text-base"
              >
                <User className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                Consult Our Doctors
              </Link>
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl text-sm sm:text-base"
              >
                <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: +91 89777 63308
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">21+</div>
                <div className="text-xs sm:text-sm opacity-90">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">14+</div>
                <div className="text-xs sm:text-sm opacity-90">Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">5000+</div>
                <div className="text-xs sm:text-sm opacity-90">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">24/7</div>
                <div className="text-xs sm:text-sm opacity-90">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}