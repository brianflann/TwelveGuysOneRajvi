import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    // 1. Parse the incoming JSON body sent by Contentful
    const body = await request.json();

    // (Optional) Validate secret headers or tokens from Contentful
    // const authHeader = request.headers.get('x-contentful-webhook-secret');

    // 2. Add your custom logic here (e.g., clear cache, revalidate data, update state)
    console.log('Received Contentful Webhook Event:', body);

    // 3. Respond with a 200 OK status
    return json({ success: true, message: 'Webhook received' }, { status: 200 });
  } catch (error) {
    console.error('Error handling Contentful webhook:', error);
    return json({ success: false, error: 'Invalid payload' }, { status: 400 });
  }
}
