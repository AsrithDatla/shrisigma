// WhatsApp Helper Utility for Cross-Platform Compatibility

export function openWhatsAppWithMessage(phone: string, message: string): void {
  // Clean phone number (remove spaces, + signs, etc.)
  const cleanPhone = phone.replace(/[\s+()-]/g, '');
  
  // Ensure phone number starts with country code
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  
  // Properly encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL - this format works on both mobile and desktop
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
  
  console.log('Opening WhatsApp with URL:', whatsappUrl); // Debug log
  
  // Open in new tab/window
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // Fallback if popup is blocked
  if (!newWindow) {
    window.location.href = whatsappUrl;
  }
}

// Alternative method for better desktop compatibility
export function openWhatsAppDesktopFriendly(phone: string, message: string): void {
  const cleanPhone = phone.replace(/[\s+()-]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
  
  // For desktop, try a more explicit approach
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Mobile - use standard WhatsApp API
    const mobileUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    window.open(mobileUrl, '_blank');
  } else {
    // Desktop - use WhatsApp Web with better formatting
    const desktopUrl = `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    const fallbackUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(message)}`;
    
    // Try WhatsApp Web first, fallback to regular API
    const newWindow = window.open(desktopUrl, '_blank');
    
    // If WhatsApp Web doesn't work, try regular API after a short delay
    setTimeout(() => {
      if (newWindow && newWindow.closed) {
        window.open(fallbackUrl, '_blank');
      }
    }, 1000);
  }
}