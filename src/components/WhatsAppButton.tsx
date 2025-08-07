'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  phone?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phone = '+918977763308',
  className = '',
  children,
  showIcon = true,
}) => {
  const handleWhatsAppClick = async () => {
    try {
      // Send via secure API route
      await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
        }),
      });
    } catch (error) {
      console.log('WATI API call failed, using fallback');
    }

    // Always open WhatsApp for user experience
    const formattedPhone = phone.replace(/[\s+]/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={className}
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
      {children || 'WhatsApp Us'}
    </button>
  );
};

export default WhatsAppButton;