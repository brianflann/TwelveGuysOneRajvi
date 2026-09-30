import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';

// Initialize Resend with your environment API key
const resend = new Resend(RESEND_API_KEY);

// Helper function to send email via Resend
async function sendEmailToList({ subject, body, recipients }) {
  const data = await resend.emails.send({
    from: 'onboarding@resend.dev', // Replace with your verified custom domain once configured (e.g., 'updates@yourdomain.com')
    to: recipients,
    subject: subject,
    text: body
  });

  if (data.error) {
    throw new Error(data.error.message);
  }

  return data;
}
export async function POST({ request }) {
  try {
    // 1. Parse incoming JSON from Contentful
    const body = await request.json();

    // 2. Safely extract fields
    const fields = body?.fields || {};
    const title = fields.title?.['en-US'] || fields.title || 'Untitled Post';
    const author = fields.author?.['en-US'] || fields.author || 'Anonymous';

    // 3. Send email using Resend
    await sendEmailToList({
      subject: `New Blog Post: ${title}`,
      body: `A new blog post by ${author} has been published!`,
      recipients: ['bflannery7089@gmail.com']
    });

    return json({ success: true, message: 'Webhook processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling Contentful webhook:', error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
  }
}
