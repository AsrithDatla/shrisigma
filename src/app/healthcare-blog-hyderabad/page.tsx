import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Heart, Brain, Bone, Baby } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Blog | Medical Tips & Health Information - Shri Sigma Hospitals',
  description: 'Read latest healthcare articles, medical tips, and health information from expert doctors at Shri Sigma Hospitals, Madhapur. Stay informed about your health.',
  keywords: 'healthcare blog, medical articles, health tips, medical information, health advice, wellness blog, medical news, healthcare insights Hyderabad',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: '10 Warning Signs of Heart Disease You Should Never Ignore',
      excerpt: 'Learn about the early warning signs of heart disease and when to seek immediate medical attention. Early detection can save lives.',
      author: 'Dr. Harish V Kumar',
      specialty: 'Cardiologist',
      date: '2024-03-15',
      readTime: '5 min read',
      image: '/images/service/blog1.webp',
      category: 'Cardiology',
      icon: Heart,
    },
    {
      id: 2,
      title: 'Understanding Knee Replacement Surgery: What to Expect',
      excerpt: 'A comprehensive guide to knee replacement surgery, including preparation, procedure, recovery, and long-term outcomes.',
      author: 'Dr. Krishna Kishore Reddy',
      specialty: 'Orthopedic Surgeon',
      date: '2024-03-10',
      readTime: '8 min read',
      image: '/images/service/blog-2.webp',
      category: 'Orthopedics',
      icon: Bone,
    },
    {
      id: 3,
      title: 'Pregnancy Care: Essential Tips for Expecting Mothers',
      excerpt: 'Important guidelines for a healthy pregnancy, including nutrition, exercise, and prenatal care recommendations.',
      author: 'Dr. Jyotika Waghray',
      specialty: 'Gynecologist',
      date: '2024-03-05',
      readTime: '6 min read',
      image: '/images/service/blog-3.webp',
      category: 'Gynecology',
      icon: Baby,
    },
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Managing Diabetes: Diet and Lifestyle Changes That Work',
      excerpt: 'Practical tips for managing diabetes through proper diet, exercise, and lifestyle modifications.',
      author: 'Dr. Bhargava',
      date: '2024-02-28',
      readTime: '7 min read',
      category: 'Diabetology',
    },
    {
      id: 5,
      title: 'Laser Treatment for Piles: Benefits and Recovery',
      excerpt: 'Everything you need to know about modern laser treatment for piles and hemorrhoids.',
      author: 'Dr. Krishna Patil',
      date: '2024-02-25',
      readTime: '5 min read',
      category: 'Proctology',
    },
    {
      id: 6,
      title: 'Brain Health: Preventing Stroke and Neurological Disorders',
      excerpt: 'Learn about maintaining brain health and preventing common neurological conditions.',
      author: 'Dr. Sanjay Paul',
      date: '2024-02-20',
      readTime: '6 min read',
      category: 'Neuroscience',
    },
    {
      id: 7,
      title: 'Kidney Stone Prevention: Diet and Hydration Tips',
      excerpt: 'Effective strategies to prevent kidney stones through proper diet and hydration.',
      author: 'Dr. Shareef',
      date: '2024-02-15',
      readTime: '4 min read',
      category: 'Urology',
    },
    {
      id: 8,
      title: 'ENT Health: Common Problems and Solutions',
      excerpt: 'Understanding common ear, nose, and throat problems and their treatments.',
      author: 'Dr. S. Shazia Farhana',
      date: '2024-02-10',
      readTime: '5 min read',
      category: 'ENT',
    },
    {
      id: 9,
      title: 'Critical Care: When Emergency Treatment is Needed',
      excerpt: 'Recognizing medical emergencies and understanding critical care services.',
      author: 'Dr. Santosh Kumar',
      date: '2024-02-05',
      readTime: '6 min read',
      category: 'Critical Care',
    },
  ];

  const categories = [
    'All Posts', 'Cardiology', 'Orthopedics', 'Gynecology', 'Neuroscience',
    'Urology', 'ENT', 'General Medicine', 'Diabetology', 'Critical Care'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Healthcare Blog
            </h1>
            <p className="mx-auto max-w-3xl text-xl">
              Stay informed with the latest medical insights, health tips, and expert advice 
              from our experienced doctors and healthcare professionals
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  index === 0
                    ? 'bg-hospital-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-hospital-blue hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Latest insights from our medical experts
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center rounded-full bg-hospital-blue px-3 py-1 text-sm text-white">
                        <IconComponent className="mr-1 h-4 w-4" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-hospital-blue line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                      <User className="mr-1 h-4 w-4" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="mr-1 h-4 w-4" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      href={`/healthcare-blog-hyderabad/${post.id}`}
                      className="inline-flex items-center text-hospital-blue hover:text-hospital-green"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Recent Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest health and medical content
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.id} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-3">
                  <span className="rounded-full bg-hospital-blue/10 px-3 py-1 text-sm text-hospital-blue">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="mb-3 text-lg font-semibold text-hospital-blue line-clamp-2">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="mb-4 flex items-center text-sm text-gray-500">
                  <User className="mr-1 h-4 w-4" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                
                <Link
                  href={`/healthcare-blog-hyderabad/${post.id}`}
                  className="inline-flex items-center text-hospital-blue hover:text-hospital-green"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-hospital-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Stay Updated with Health Tips
            </h2>
            <p className="mb-8 text-xl">
              Subscribe to our newsletter for the latest health articles and medical insights
            </p>
            
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-sm opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Popular Health Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore articles by medical specialty
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {categories.slice(1).map((category, index) => (
              <Link
                key={index}
                href={`/healthcare-blog-hyderabad/category/${category.toLowerCase()}`}
                className="rounded-lg bg-white p-4 text-center shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-2 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-hospital-blue/10">
                    <Heart className="h-6 w-6 text-hospital-blue" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
            Need Medical Consultation?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Our expert doctors are available for consultation and treatment
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/best-doctors-madhapur-hyderabad"
              className="inline-flex items-center justify-center rounded-lg bg-hospital-blue px-8 py-3 text-white transition-colors hover:bg-hospital-blue/90"
            >
              Consult Our Doctors
            </Link>
            <Link
              href="tel:+918977763308"
              className="inline-flex items-center justify-center rounded-lg border-2 border-hospital-blue px-8 py-3 text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
            >
              Call: +91 89777 63308
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}