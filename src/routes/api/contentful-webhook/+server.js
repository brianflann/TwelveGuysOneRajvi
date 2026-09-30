import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    // 1. Parse the incoming JSON body sent by Contentful
    const body = await request.json();
    
    // 3. Send email to your email list using your email provider SDK
  await sendEmailToList({
    subject: `New Blog Post: ${title}`,
    body: `A new blog post by ${author} has been published!`,
    recipients: ['bflannery7089@gmail.com']
  });

  }
}
