import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'k0h5hc4q', // Replace with your actual Sanity project ID
  dataset: 'production',
  useCdn: true, // `false` if you need fresh data
  apiVersion: '2024-02-24', // Use a recent API version
});

// Image URL builder function
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).auto('format').fit('max'); 
}

export default client;
