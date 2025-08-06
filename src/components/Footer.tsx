'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/footer-logo.png"
              alt="Shri Sigma Hospitals"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-300">
              Leading multispecialty hospital in Madhapur, Hyderabad, providing
              world-class healthcare services with experienced specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-hospital-madhapur-hyderabad" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/best-doctors-madhapur-hyderabad" className="text-gray-300 hover:text-white">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/career-opportunities-hyderabad" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/healthcare-blog-hyderabad" className="text-gray-300 hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/best-piles-hospital-in-madhapur" className="text-gray-300 hover:text-white">
                  Piles Treatment
                </Link>
              </li>
              <li>
                <Link href="/cardiology-hospital-madhapur-hyderabad" className="text-gray-300 hover:text-white">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/orthopedic-hospital-hyderabad" className="text-gray-300 hover:text-white">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/gynecology-services-madhapur-hyderabad" className="text-gray-300 hover:text-white">
                  Gynecology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <MapPin className="mr-2 h-4 w-4" />
                Madhapur, Hyderabad
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="mr-2 h-4 w-4" />
                <Link href="tel:+918977763308" className="hover:text-white">
                  +91 89777 63308
                </Link>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="mr-2 h-4 w-4" />
                <Link href="mailto:info@shrisigmahospitals.com" className="hover:text-white">
                  info@shrisigmahospitals.com
                </Link>
              </p>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
              <ul className="social-icons flex space-x-3">
                <li>
                  <Link href="https://www.instagram.com/shrisigma_hospitals/" target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-hospital-blue hover:text-white transition-all">
                    <i className="fa-brands fa-instagram text-sm"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/ShriSigmaHospital/" target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-hospital-blue hover:text-white transition-all">
                    <i className="fa-brands fa-facebook text-sm"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@SigmaHospitals" target="_blank" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 text-gray-300 hover:bg-hospital-blue hover:text-white transition-all">
                    <i className="fa-brands fa-youtube text-sm"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-300">
              © 2024 Shri Sigma Hospitals. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;