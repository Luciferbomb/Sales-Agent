# SalesAI - AI-Powered Sales Assistant

This project implements an AI-powered sales assistant using Next.js, Twilio, ElevenLabs, and WebSocket for real-time voice communication.

## Prerequisites

- Node.js 16+ installed
- Twilio account with an active phone number
- ElevenLabs account with a configured Conversational Agent
- ngrok for local development

## Setup

1. Clone the repository and install dependencies:
```bash
cd salesai
npm install
```

2. Configure environment variables:
Copy `.env.example` to `.env` and fill in your credentials:
```
ELEVENLABS_AGENT_ID=your_agent_id_here
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
NGROK_URL=your_ngrok_url_here
PORT=8000
```

3. Start ngrok:
```bash
ngrok http 8000
```

4. Update your Twilio webhook URL:
- Go to the Twilio Console
- Navigate to Phone Numbers → Manage → Active numbers
- Select your phone number
- Under "Voice Configuration", set the webhook for incoming calls to: `https://your-ngrok-url.ngrok.app/incoming-call-eleven`
- Set the HTTP method to POST

## Running the Application

1. Start the server:
```bash
node server.js
```

2. In a new terminal, start the Next.js development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter the lead's name and phone number in the web interface
2. Click "Start Call" to initiate the call
3. The AI agent will handle the conversation using ElevenLabs' voice synthesis

## Features

- Real-time voice communication using WebSocket
- Integration with ElevenLabs' Conversational AI
- Beautiful UI for managing sales calls
- Twilio integration for phone calls

## Important Notes

- Make sure your ElevenLabs agent is configured with the correct audio format (μ-law 8000 Hz)
- Keep your environment variables secure and never commit them to version control
- Monitor your Twilio and ElevenLabs usage to manage costs
