import { NextResponse } from 'next/server';
import landingSeo from '@/data/landing-seo.json';

const canonicalBase = landingSeo.canonical?.replace(/\/$/, '') || '';

export const dynamic = 'force-static';

export function GET() {
  const sitemapUrl = canonicalBase ? `${canonicalBase}/sitemap.xml` : '/sitemap.xml';

  const rules = ['User-agent: *', 'Allow: /', `Sitemap: ${sitemapUrl}`];

  return new NextResponse(rules.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
