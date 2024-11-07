import { NextResponse } from 'next/server';

const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email) return { isValid: false, message: "Email is required." };
  if (email.length > 254) return { isValid: false, message: "Email is too long." };
  if (!re.test(email)) return { isValid: false, message: "Invalid email format." };
  if (email.startsWith('.') || email.endsWith('.')) return { isValid: false, message: "Invalid email format." };
  
  // Check for common disposable email domains
  const disposableDomains = ['tempmail.com', 'throwawaymail.com'];
  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) {
    return { isValid: false, message: "Please use a valid non-disposable email." };
  }

  return { isValid: true, message: "" };
};

export async function POST(request: Request) {
  try {
    const { email, utm_source, utm_medium, utm_channel, utm_campaign } = await request.json();

    // Validate email before proceeding
    const validation = validateEmail(email);
    if (!validation.isValid) {
      return NextResponse.json({ 
        success: false, 
        message: validation.message 
      }, { status: 400 });
    }

    console.log('Received request body:', { email, utm_source, utm_medium, utm_channel, utm_campaign });

    const apiEndpoint = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`;
    const apiKey = process.env.BEEHIIV_API_KEY;

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: utm_source || 'your_website',
        utm_medium: utm_medium || 'custom_form',
        utm_channel,
        utm_campaign
      })
    });

    const data = await response.json();
    console.log('Beehiiv API response:', response.status, data);

    if (response.ok) {
      return NextResponse.json({ 
        success: true,
        message: 'Subscribed successfully!' 
      }, { status: 200 });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: data.message || 'Subscription failed. Please try again.' 
      }, { status: response.status });
    }
  } catch (error) {
    console.error('Error in subscribe route:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An error occurred. Please try again later.' 
    }, { status: 500 });
  }
}
