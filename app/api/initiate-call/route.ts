import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const { name, phoneNumber } = await request.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const ngrokUrl = process.env.NGROK_URL;

    if (!accountSid || !authToken || !twilioPhoneNumber || !ngrokUrl) {
      return NextResponse.json(
        { error: 'Missing required environment variables' },
        { status: 500 }
      );
    }

    const client = twilio(accountSid, authToken);
    
    const call = await client.calls.create({
      to: phoneNumber,
      from: twilioPhoneNumber,
      url: `${ngrokUrl}/incoming-call-eleven`,
      record: true,
    });

    return NextResponse.json({ success: true, callSid: call.sid });
  } catch (error) {
    console.error('Error initiating call:', error);
    return NextResponse.json(
      { error: 'Failed to initiate call' },
      { status: 500 }
    );
  }
} 