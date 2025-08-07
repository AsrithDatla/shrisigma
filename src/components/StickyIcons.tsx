'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { openWhatsAppWithMessage } from '@/utils/whatsappHelper';

const StickyIcons = () => {
  return (
    <>
      {/* Desktop Sticky Icons */}
      <div className="fixed bottom-1/2 right-0 z-40 hidden transform translate-y-1/2 flex-col md:flex">
        <Link href="tel:+918977763308" className="group mb-3">
          <div className="flex items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-l-full bg-hospital-blue text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <Phone className="h-6 w-6" />
            </div>
            <span className="ml-2 hidden whitespace-nowrap rounded-l-lg bg-hospital-blue px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 group-hover:block">
              Call Now
            </span>
          </div>
        </Link>
        <button
          onClick={() => {
            // Send via secure API route
            fetch('/api/whatsapp', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: 'Welcome to Shri Sigma Hospitals. I want to know more about your care services.',
              }),
            }).catch(() => {});
            // Always open WhatsApp for user experience
            const message = 'Welcome to Shri Sigma Hospitals. I want to know more about your care services.';
            openWhatsAppWithMessage('918977763302', message);
          }}
          className="group"
        >
          <div className="flex items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-l-full bg-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
              <MessageCircle className="h-6 w-6" />
            </div>
            <span className="ml-2 hidden whitespace-nowrap rounded-l-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 group-hover:block">
              WhatsApp
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="grid grid-cols-2">
          <Link
            href="tel:+918977763308"
            className="flex items-center justify-center bg-hospital-blue py-4 text-white transition-colors hover:bg-hospital-blue/90"
          >
            <Phone className="mr-2 h-5 w-5" />
            <span className="font-semibold">Call Now</span>
          </Link>
          <button
            onClick={() => {
              // Send via secure API route
              fetch('/api/whatsapp', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  message: 'Welcome to Shri Sigma Hospitals. I want to know more about your care services.',
                }),
              }).catch(() => {});
              // Always open WhatsApp for user experience
              const message = 'Welcome to Shri Sigma Hospitals. I want to know more about your care services.';
              openWhatsAppWithMessage('918977763302', message);
            }}
            className="flex items-center justify-center bg-green-600 py-4 text-white transition-colors hover:bg-green-700 w-full"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            <span className="font-semibold">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Padding */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default StickyIcons;