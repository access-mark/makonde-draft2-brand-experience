# Makonde SEO launch checklist — Draft 1.5

## Critical deployment gate
The metadata, canonicals, sitemap and robots.txt in this package target **https://www.makondeinvest.co.za/**. Do **not** publish this as an indexable GitHub Pages staging site while the public site is still on `access-mark.github.io/Makonde-RC2/` or another address. Confirm DNS, HTTPS and the preferred www/non-www hostname first. GitHub Pages staging must remain non-indexable (ideally password-protected or access-restricted; `noindex` is only a request, not access control). Ensure the live domain serves this package from the root, not a repository subpath.

## SEO implementation
- Unique page titles and descriptions for all 13 existing pages.
- Canonical URLs, Open Graph and Twitter Card tags; locally generated social preview artwork.
- Schema.org Organization, WebSite, WebPage, BreadcrumbList and three Service entities, without invented testimonials, ratings, certifications or locations.
- XML sitemap, production robots.txt and a custom 404 page.
- Existing internal navigation and links retained. No fabricated articles or unverified sector references.

## Before indexing
1. Verify domain ownership, choose www/non-www, configure 301 redirects from other hostnames, enable HTTPS and confirm canonical matches the final live URL.
2. Approve every page including privacy, terms, accessibility and technology-partner statements. Remove or replace the 'Draft website' footer language only after approvals.
3. Confirm FormSubmit mailbox activation and real delivery, consent/POPIA compliance, spam handling and success/error messages.
4. Verify all 13 pages, all internal links, image loading, mobile navigation and contact flow in Chrome, Edge, Firefox and Safari. Test keyboard focus and contrast.
5. Connect Google Search Console for the verified domain; submit `/sitemap.xml`; inspect indexing and canonical selection. GA4 only after consent/privacy decisions and approved implementation.
6. Run PageSpeed Insights and Lighthouse on actual deployed URLs (mobile and desktop); review LCP, INP, CLS, accessibility and best practices. No scores claimed here.
7. Confirm partner websites and permission to use OEM names and logos; ensure no unapproved claims are published.
8. Build a real editorial programme with reviewed articles, dates, authors, source attribution and useful original insights; do not publish placeholder content as articles.
9. Confirm social card preview in social link validators, plus image cache invalidation after changes.
10. Verify search engine crawl rules at the live root, especially `/robots.txt` and `/sitemap.xml`.

## Deployment note
If GitHub Pages continues to be hosted under a `/Makonde-RC2/` project path, relative assets can load, but the canonical and sitemap target a different root domain; this is intentionally configured for **production**, not for that staging path. Do not submit the staging URL for indexing.

## Security and verification
Static HTML, CSS, JS, PNG, SVG, XML, Markdown and TXT only. No external runtime libraries added. ZIP integrity and local reference checks are not antivirus or browser testing. Run Microsoft Defender before extraction; do not disable protection.
