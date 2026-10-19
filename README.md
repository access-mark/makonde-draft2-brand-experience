# Makonde Investments — Draft 1.1 (polished review build)

A dependency-free static HTML/CSS/JavaScript website prototype. Open `index.html` locally or deploy the directory to GitHub Pages for private review.

## Brand
- `assets/makonde-logo-transparent.png`: new transparent logo supplied/approved in the conversation, best on light backgrounds.
- `assets/makonde-logo-light.png`: adapted silver/white treatment for dark header and footer; verify visually with Makonde.
- The previous dark-background logo is not used by the pages.

## Structure
Home, About, Solutions overview, three solution pages, Industries, Technology Partners, Insights, Contact, Privacy, Terms and Accessibility.

## Important: draft, not production-ready
- Contact form prepares a `mailto:` message in the visitor's email application; it does not submit data to a server. Configure authenticated delivery and test before launch.
- All pages intentionally have `noindex,nofollow`; `robots.txt` disallows crawling while the site is a draft. Remove these only after launch approval.
- Partner agreements, logos, endorsements, case studies and any B-BBEE level / registrations / accreditations must be verified before publishing.
- Privacy, terms and accessibility pages are draft copy requiring review.
- No tracking or third-party JavaScript is installed.
- All functionality should be browser-tested on desktop/mobile and verified in staging before launch.

## Security
- No executable binaries, PowerShell, batch scripts, external script dependencies, or remote embeds are included.
- The archive was created afresh from the locally available Draft 1 rebuilt source, not from the previously Defender-flagged archive.
- A successful ZIP integrity test is not an antivirus clearance. Scan locally before extraction and keep Defender enabled.

## Draft 1.2 executive refinement
- Desktop content max-width expanded to 1440px, with responsive fallbacks.
- Header wordmark, navigation, hero typography, priority panels, solution cards and section spacing increased.
- Home solution summaries rewritten around outcomes; each dedicated solution page has five explanatory capability cards and a three-part outcome band.
- No backend changes: contact form remains mailto-based and is not a verified submission service.
- Editorial and design changes require human review. Browser and mobile acceptance testing is not claimed.


## Draft 1.4 — FormSubmit enquiry integration
- Contact form POSTs via `fetch` to `https://formsubmit.co/ajax/elaine.kgosana@makondeinvest.co.za`. No Google Forms, Apps Script, custom backend or mailto submission.
- Includes required fields, consent, HTML validation, hidden bot-trap, FormSubmit CAPTCHA setting, loading state, server-response success handling and a non-destructive error message.
- **Activation required:** Elaine must receive and approve FormSubmit's activation email. Until she activates the address, live delivery is NOT VERIFIED.
- **End-to-end acceptance required:** test a real submission from the published GitHub Pages domain; confirm mailbox receipt, junk filtering, reply-to behaviour, spam controls, CAPTCHA behaviour, and mobile. Browser-based delivery was NOT VERIFIED in this build.
- **Privacy:** FormSubmit is a third-party data processor; obtain Makonde's approval of the provider, POPIA notices and retention/processing arrangements before going live. The privacy page is draft wording, not legal advice.
- The `_captcha` field is included but its behaviour with AJAX must be confirmed in a live browser. Do not assume it is effective without verification.
- No credentials, access tokens or private keys are embedded in this site. The recipient email address is public.


## Draft 1.5 — SEO implementation
See `SEO-LAUNCH-CHECKLIST.md` for SEO features, deployment gating and verification. Metadata targets the intended public www domain; GitHub Pages staging should not be indexed.


## Draft 2.0 — Brand & Experience (19 October 2026)
- Based on Draft 1.5 (SEO + FormSubmit), retaining its files and functionality.
- Uses imagery supplied within the Makonde Website Experience Mockup Deck. Images are illustrative concepts, **not photographs of Makonde personnel or actual customer sites**. Confirm rights and approval before publication.
- Brand proposition: Global technology. Local accountability.
- Redesigned homepage and specialist solution heroes, stronger cards, South African sector context, four-step solution journeys, prominent direct contact.
- FormSubmit destination remains subject to Elaine's activation and real delivery verification.
- SEO canonical domain remains configured for www.makondeinvest.co.za; verify production DNS and redirects before allowing indexing.
- Partner names, status and any logos remain subject to approval.
- Legal pages remain drafts and require review.
- Automated structural checks are not substitutes for browser, mobile, accessibility, performance or malware testing.
