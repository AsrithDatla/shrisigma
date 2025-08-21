'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Calendar, User, Clock, ArrowRight, Heart, Brain, Bone, Baby, Search, Filter, BookOpen, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');
  const [isHeroExpanded, setIsHeroExpanded] = useState(true);
  
  // Auto-collapse hero after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroExpanded(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <>
      <Head>
        <title>Healthcare Blog Hyderabad | Medical Insights & Health Tips</title>
        <meta name="description" content="Stay informed with the latest medical insights, health tips, and expert advice from our experienced doctors and healthcare professionals at Shri Sigma Hospitals." />
        <meta name="keywords" content="healthcare blog, medical insights, health tips, expert advice, doctors blog, medical articles, health information" />
      </Head>
      
      {/* Collapsible Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green text-white overflow-hidden transition-all duration-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className={`transition-all duration-500 ${isHeroExpanded ? 'py-12 sm:py-16 lg:py-20' : 'py-8 sm:py-12 lg:py-16'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
                <span className="text-xs sm:text-sm font-semibold">Health & Wellness</span>
              </div>

              <h1 className={`font-bold font-display mb-4 sm:mb-6 heading-no-break px-2 transition-all duration-500 ${
                isHeroExpanded 
                  ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl' 
                  : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              }`}>
                <span className="whitespace-nowrap">Healthcare</span>
                <span className="block text-hospital-yellow whitespace-nowrap">Blog</span>
              </h1>

              <p className={`opacity-90 leading-relaxed max-w-3xl mx-auto px-4 mb-6 transition-all duration-500 ${
                isHeroExpanded 
                  ? 'text-base sm:text-lg lg:text-xl mb-8 sm:mb-12' 
                  : 'text-sm sm:text-base lg:text-lg mb-6 sm:mb-8'
              }`}>
                Stay informed with the latest medical insights, health tips, and expert advice
                {isHeroExpanded && (
                  <span className="block mt-2">
                    from our experienced doctors and healthcare professionals
                  </span>
                )}
              </p>  
            {/* Expandable Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isHeroExpanded ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-hospital-yellow" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Articles</h3>
                    <p className="text-sm opacity-80">Doctor-written content</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-hospital-yellow" />
                    </div>
                    <h3 className="font-semibold mb-2">Health Tips</h3>
                    <p className="text-sm opacity-80">Wellness guidance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-hospital-yellow" />
                    </div>
                    <h3 className="font-semibold mb-2">Latest Updates</h3>
                    <p className="text-sm opacity-80">Medical advances</p>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-6">
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

              {/* Expand/Collapse Toggle */}
              <button
                onClick={() => setIsHeroExpanded(!isHeroExpanded)}
                className="group inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium mr-2">
                  {isHeroExpanded ? 'Show Less' : 'Show More'}
                </span>
                {isHeroExpanded ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts - Mobile Optimized Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter Buttons */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-blue" />
              <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Filter by Category</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-hospital-blue text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-gray-600">
              Showing <span className="font-bold text-hospital-blue">{filteredPosts.length}</span> articles
              {selectedCategory !== 'All Posts' && (
                <span> in <span className="font-semibold">{selectedCategory}</span></span>
              )}
            </p>
          </div>       
   
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <article key={post.id} className="group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Category Badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="flex items-center bg-hospital-blue/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {post.category}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {post.featured && (
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                            <span className="flex items-center bg-hospital-yellow/90 backdrop-blur-sm text-hospital-blue px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 flex flex-col min-h-[280px] sm:min-h-[320px]">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-hospital-blue transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Author & Meta Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-xs sm:text-sm text-gray-500">
                            <User className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="font-medium">{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.specialty}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <Link
                          href={`/healthcare-blog-hyderabad/${post.id}`}
                          className="inline-flex items-center text-hospital-blue hover:text-hospital-blue-dark font-semibold text-sm sm:text-base group/link transition-colors duration-300"
                        >
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
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
      </section>      {/* En
hanced CTA Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green text-white py-16 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-yellow" />
              <span className="text-xs sm:text-sm font-semibold">Expert Care</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 sm:mb-6">
              <span className="whitespace-nowrap">Need Medical</span>
              <span className="block text-hospital-yellow whitespace-nowrap">Consultation?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Our expert doctors are available for consultation and treatment.
              Get personalized healthcare advice from our specialists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="group inline-flex items-center bg-hospital-yellow text-hospital-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <User className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Consult Our Doctors
              </Link>
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call: +91 89777 63308
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">15+</div>
                <div className="text-xs sm:text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">50+</div>
                <div className="text-xs sm:text-sm opacity-80">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">25+</div>
                <div className="text-xs sm:text-sm opacity-80">Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold font-display text-hospital-yellow mb-1">24/7</div>
                <div className="text-xs sm:text-sm opacity-80">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}