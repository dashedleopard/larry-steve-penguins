# Larry & Steve Penguins 🐧

A festive webpage featuring animated penguins that celebrate daily at 1:26 PM with automated SMS notifications via Twilio!

## Features

- Daily penguin celebration at 1:26 PM
- Animated penguins with daily variations (colors and actions change by day of week)
- Fireworks and sound effects
- Browser notifications
- **Automated daily SMS texts via Twilio**

## Setup

### 1. Verify Phone Number in Twilio

For trial accounts, verify the recipient phone number:
1. Go to https://console.twilio.com/us1/develop/phone-numbers/manage/verified
2. Click "Add a new Caller ID"
3. Enter the recipient's phone number
4. Complete the verification process

### 2. Deploy to Vercel

```bash
vercel deploy
```

### 3. Set Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
RECIPIENT_PHONE_NUMBER=recipient_number
CRON_SECRET=random_secret_string
```

### 4. Redeploy

After setting environment variables, redeploy:

```bash
vercel --prod
```

## How It Works

- The webpage displays Larry & Steve celebrating at 1:26 PM
- A Vercel cron job triggers daily at 1:26 PM (13:26 UTC)
- The `/api/send-daily-text` endpoint sends an SMS via Twilio
- Each day has a unique penguin-themed message

## Local Testing

To test the SMS function locally:

```bash
curl -X POST http://localhost:3000/api/send-daily-text \
  -H "Authorization: Bearer your_cron_secret"
```

## License

MIT
