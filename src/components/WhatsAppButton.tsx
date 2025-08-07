'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppWithMessage } from '@/utils/whatsappHelper';

interface WhatsAppButtonProps {
  message: string;
  phone?: string;
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phone = '+918977763302',
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
    openWhatsAppWithMessage(phone, message);
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