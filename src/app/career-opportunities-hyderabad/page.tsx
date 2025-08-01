import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Users, Award, Heart, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career Opportunities at Shri Sigma Hospitals | Jobs in Healthcare Hyderabad',
  description: 'Join our team at Shri Sigma Hospitals, Madhapur. Explore career opportunities for doctors, nurses, technicians, and healthcare professionals in Hyderabad.',
  keywords: 'careers Shri Sigma Hospitals, healthcare jobs Hyderabad, medical jobs Madhapur, hospital careers, nursing jobs, doctor positions, healthcare opportunities',
};

export default function CareersPage() {
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with performance-based incentives and regular appraisals.',
      icon: Award,
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, skill development programs, and career advancement.',
      icon: Briefcase,
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working hours, adequate leave policies, and supportive work environment.',
      icon: Heart,
    },
    {
      title: 'Team Environment',
      description: 'Collaborative and inclusive workplace with experienced healthcare professionals.',
      icon: Users,
    },
  ];

  const openPositions = [
    {
      title: 'Senior Consultant - Cardiology',
      department: 'Cardiology',
      type: 'Full-time',
      experience: '10+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'We are looking for an experienced cardiologist to join our cardiac care team.',
      requirements: ['MBBS, MD/DM in Cardiology', '10+ years of experience', 'Valid medical license'],
    },
    {
      title: 'Staff Nurse - ICU',
      department: 'Critical Care',
      type: 'Full-time',
      experience: '3+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'Experienced ICU nurse required for our critical care department.',
      requirements: ['BSc Nursing or equivalent', '3+ years ICU experience', 'Valid nursing license'],
    },
    {
      title: 'Physiotherapist',
      department: 'Physiotherapy',
      type: 'Full-time',
      experience: '2+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'Join our rehabilitation team to help patients recover and improve their quality of life.',
      requirements: ['BPT/MPT degree', '2+ years experience', 'Valid physiotherapy license'],
    },
    {
      title: 'Lab Technician',
      department: 'Laboratory',
      type: 'Full-time',
      experience: '1+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'Skilled lab technician required for our diagnostic laboratory.',
      requirements: ['Diploma in Medical Lab Technology', '1+ years experience', 'Knowledge of lab equipment'],
    },
    {
      title: 'Pharmacist',
      department: 'Pharmacy',
      type: 'Full-time',
      experience: '2+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'Licensed pharmacist needed for our hospital pharmacy operations.',
      requirements: ['B.Pharm/D.Pharm degree', '2+ years experience', 'Valid pharmacy license'],
    },
    {
      title: 'Administrative Assistant',
      department: 'Administration',
      type: 'Full-time',
      experience: '1+ Years',
      location: 'Madhapur, Hyderabad',
      description: 'Support our administrative operations and patient services.',
      requirements: ['Graduate degree', '1+ years admin experience', 'Good communication skills'],
    },
  ];

  const departments = [
    'Cardiology', 'Orthopedics', 'Gynecology', 'Neuroscience',
    'Urology', 'ENT', 'General Medicine', 'General Surgery',
    'Critical Care', 'Emergency Medicine', 'Radiology', 'Laboratory',
    'Pharmacy', 'Physiotherapy', 'Nursing', 'Administration'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-blue to-hospital-green py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Join Our Healthcare Team
              </h1>
              <p className="mb-6 text-xl">
                Build a rewarding career in healthcare with Shri Sigma Hospitals. 
                Make a difference in people's lives while growing professionally.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#positions"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
                >
                  View Open Positions
                </Link>
                <Link
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-xl lg:h-full">
                <Image
                  src="/images/hiring1.webp"
                  alt="Healthcare Careers at Shri Sigma Hospitals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Why Choose Shri Sigma Hospitals?
            </h2>
            <p className="text-lg text-gray-600">
              Join a team that values excellence, compassion, and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start rounded-lg bg-white p-6 shadow-lg">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-hospital-blue">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities across various departments
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {openPositions.map((position, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-hospital-blue">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="rounded bg-hospital-blue/10 px-2 py-1">
                        {position.department}
                      </span>
                      <span className="rounded bg-green-100 px-2 py-1">
                        {position.type}
                      </span>
                      <span className="rounded bg-yellow-100 px-2 py-1">
                        {position.experience}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mb-4 text-gray-700">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-800">Requirements:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="mr-2 text-hospital-blue">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {position.location}
                  </div>
                  <Link
                    href="#apply"
                    className="rounded bg-hospital-blue px-4 py-2 text-sm text-white transition-colors hover:bg-hospital-blue/90"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-hospital-blue">
                Apply for a Position
              </h2>
              <p className="text-lg text-gray-600">
                Submit your application and join our healthcare team
              </p>
            </div>

            <form className="rounded-lg bg-white p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="position" className="mb-2 block text-sm font-medium text-gray-700">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  >
                    <option value="">Select Position</option>
                    {openPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="mb-2 block text-sm font-medium text-gray-700">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 Years</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5-10">5-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="resume" className="mb-2 block text-sm font-medium text-gray-700">
                  Upload Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                </p>
              </div>

              <div className="mt-6">
                <label htmlFor="coverLetter" className="mb-2 block text-sm font-medium text-gray-700">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  className="w-full rounded border border-gray-300 px-3 py-2 focus:border-hospital-blue focus:outline-none"
                  placeholder="Tell us why you want to join our team..."
                ></textarea>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-hospital-blue px-6 py-3 text-white transition-colors hover:bg-hospital-blue/90"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="bg-hospital-blue py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Have Questions About Careers?
          </h2>
          <p className="mb-6 text-xl">
            Contact our HR department for more information about career opportunities
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="mailto:hr@shrisigmahospitals.com"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-hospital-blue transition-colors hover:bg-gray-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              hr@shrisigmahospitals.com
            </Link>
            <Link
              href="tel:+918977763308"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-white transition-colors hover:bg-white hover:text-hospital-blue"
            >
              <Phone className="mr-2 h-5 w-5" />
              +91 89777 63308
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}