import { json } from '@sveltejs/kit';

// If you have an external email function, import it here:
// import { sendEmailToList } from '$lib/email'; 

export async function POST({ request }) {
  try {
    // 1. Parse the incoming JSON body sent by Contentful
    const body = await request.json();

    // 2. Extract fields safely from Contentful's webhook payload
    // Adjust field names ('title', 'author') based on your Contentful entry schema
    const fields = body?.fields || {};
    const title = fields.title?.['en-US'] || fields.title || 'Untitled Post';
    const author = fields.author?.['en-US'] || fields.author || 'Anonymous';

    // 3. Send email to your email list
    // Ensure sendEmailToList is imported or defined
    await sendEmailToList({
      subject: `New Blog Post: ${title}`,
      body: `A new blog post by ${author} has been published!`,
      recipients: ['bflannery7089@gmail.com']
    });

    // 4. Return a successful SvelteKit response
    return json({ success: true, message: 'Webhook processed successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling Contentful webhook:', error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}
