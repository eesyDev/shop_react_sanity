import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'q6ekmf7t',
  dataset: 'production',
  apiVersion: '2023-12-05',
  useCdn: true,
  token: 'skUKs0vepcjjVXwpXzAO54Lg18DqHbhWTFe73cLYe8ZQbaspGxX1kG1ByymbWeFVqLftcA8JS3SorrwVoTNrNVbysFMcPnyUwBIEdvyisRO6MhyMaQJhzo7Rjz8rC4rYD749t44TjHGGSb6PMEtlBzhPB7sMv4L89722U04khQWHf7JgZeYw'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);