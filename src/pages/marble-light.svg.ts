import { marbleLight } from '../lib/marble';

// Astro genera este archivo como /marble-light.svg al compilar.
export const GET = () => new Response(marbleLight, { headers: { 'Content-Type': 'image/svg+xml' } });
