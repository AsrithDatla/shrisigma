// WhatsApp WATI API Integration
const WATI_API_ENDPOINT = process.env.NEXT_PUBLIC_WATI_API_ENDPOINT || 'https://live-mt-server.wati.io/479177';
const WATI_ACCESS_TOKEN = process.env.WATI_ACCESS_TOKEN || '';
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '918977763302';

export interface WhatsAppMessage {
  phone: string;
  message: string;
  templateName?: string;
  parameters?: string[];
}

// Send WhatsApp message via WATI API
export async function sendWhatsAppMessage(data: WhatsAppMessage): Promise<boolean> {
  try {
    const response = await fetch(`${WATI_API_ENDPOINT}/api/v1/sendSessionMessage/${data.phone}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': WATI_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        messageText: data.message,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return false;
  }
}

// Generate WhatsApp click handler for buttons
export function handleWhatsAppClick(phone: string, message: string) {
  return async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Format phone number (remove + and spaces)
    const formattedPhone = phone.replace(/[\s+]/g, '');
    
    try {
      // Try to send via WATI API first
      const success = await sendWhatsAppMessage({
        phone: formattedPhone,
        message: message,
      });

      if (success) {
        // If API call successful, still open WhatsApp for user experience
        window.open(`https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`, '_blank');
      } else {
        // Fallback to direct WhatsApp link
        window.open(`https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`, '_blank');
      }
    } catch (error) {
      // Fallback to direct WhatsApp link
      window.open(`https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`, '_blank');
    }
  };
}

// Generate WhatsApp URL with WATI integration
export function getWhatsAppUrl(phone: string, message: string): string {
  const formattedPhone = phone.replace(/[\s+]/g, '');
  
  // Ensure proper encoding for both mobile and desktop
  const encodedMessage = encodeURIComponent(message);
  
  // Use the standard WhatsApp API URL that works on both mobile and desktop
  return `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
}

// Enhanced WhatsApp URL generator with better desktop compatibility
export function openWhatsApp(phone: string, message: string): void {
  const formattedPhone = phone.replace(/[\s+]/g, '');
  const encodedMessage = encodeURIComponent(message);
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
}

// WhatsApp button component props
export interface WhatsAppButtonProps {
  phone?: string;
  message: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}