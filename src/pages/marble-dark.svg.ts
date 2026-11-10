import { marbleDark } from '../lib/marble';

// Astro genera este archivo como /marble-dark.svg al compilar.
export const GET = () => new Response(marbleDark, { headers: { 'Content-Type': 'image/svg+xml' } });
