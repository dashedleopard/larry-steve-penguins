const twilio = require('twilio');

// Penguin messages for each day of the week
const dailyMessages = {
  0: "🐧 Happy Sunday from Larry & Steve! Time for a lazy penguin day! 🎉",
  1: "🐧 Happy Monday from Larry & Steve! Starting the week with a waddle! 🎉",
  2: "🐧 Happy Tuesday from Larry & Steve! Keep swimming strong! 🎉",
  3: "🐧 Happy Wednesday from Larry & Steve! Halfway through the week! 🎉",
  4: "🐧 Happy Thursday from Larry & Steve! Almost to the weekend! 🎉",
  5: "🐧 Happy Friday from Larry & Steve! Time to celebrate! 🎉🎊",
  6: "🐧 Happy Saturday from Larry & Steve! Weekend waddles! 🎉"
};

module.exports = async (req, res) => {
  // Verify this is called by Vercel Cron or allow manual trigger with auth
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET || 'default-secret';

  if (authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
    const recipientNumber = process.env.RECIPIENT_PHONE_NUMBER;

    if (!accountSid || !authToken || !twilioNumber || !recipientNumber) {
      throw new Error('Missing required environment variables');
    }

    const client = twilio(accountSid, authToken);

    // Get today's day of week (0 = Sunday, 6 = Saturday)
    const today = new Date().getDay();
    const message = dailyMessages[today];

    // Send SMS
    const result = await client.messages.create({
      body: message,
      from: twilioNumber,
      to: recipientNumber
    });

    return res.status(200).json({
      success: true,
      messageSid: result.sid,
      message: message,
      sentAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error sending SMS:', error);
    return res.status(500).json({
      error: 'Failed to send SMS',
      details: error.message
    });
  }
};
