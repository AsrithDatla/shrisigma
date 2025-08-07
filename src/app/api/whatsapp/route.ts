import { NextRequest, NextResponse } from 'next/server';

const WATI_API_ENDPOINT = process.env.NEXT_PUBLIC_WATI_API_ENDPOINT || 'https://live-mt-server.wati.io/479177';
const WATI_ACCESS_TOKEN = process.env.WATI_ACCESS_TOKEN || '';
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '918977763302';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!WATI_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'WATI API not configured' },
        { status: 500 }
      );
    }

    // Send message via WATI API
    const response = await fetch(`${WATI_API_ENDPOINT}/api/v1/sendSessionMessage/${WHATSAPP_PHONE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': WATI_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        messageText: message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.text();
      console.error('WATI API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}