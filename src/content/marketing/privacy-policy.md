---
title: 'Privacy Policy'
description: 'How Disbug collects, uses, stores, and shares data — including exactly what the Disbug Chrome extension captures and how to control it.'
type: 'marketing'
url: '/privacy-policy/'
legacy_url: 'https://disbug.io/privacy-policy/'
canonical_url: 'https://disbug.io/privacy-policy/'
published_at: ''
updated_at: ''
author: ''
author_slug: ''
tags: []
tag_slugs: []
image: '/static/marketing/images/refund-policy-disbug-meta-img-c7c88ac0025c-55d3738ad727.jpg'
---

**Last updated: 26 July 2026**

This Privacy Policy explains how **Disbug Ltd** ("Disbug", "we", "us") collects, uses, stores, shares, and
deletes information when you use:

- the Disbug website at [disbug.io](https://disbug.io) and our marketing pages;
- the Disbug web application (dashboard, projects, sessions, and reports);
- the **Disbug Chrome extension**;
- the optional Disbug feedback widget / browser SDK that a customer may embed in their own website;
- the Disbug CLI and API.

If you only want to know what the Chrome extension collects and how to switch parts of it off, read the sections
titled **"What the Chrome extension collects"** and **"Your controls in the Chrome extension"** below.

Questions, requests, or complaints: **[team@disbug.io](mailto:team@disbug.io)**.

## Summary

- Disbug is a bug-reporting tool for software teams. Its purpose is to capture the technical context of a bug —
  a screenshot, a short session replay, console logs, network activity, and environment details — so a developer
  or an AI coding agent can reproduce and fix it.
- The Chrome extension **only captures when you deliberately start a capture**. It does not run in the
  background, does not follow your browsing, and does not collect your browsing history.
- Diagnostics capture (console logs, network requests, user actions, and Instant Replay) is **off by default on
  every website** and must be switched on by you, per site, through an explicit in-page dialog.
- Everything the extension captures is sent **only to Disbug's own servers**. It is not sent to advertisers, data
  brokers, or AI model providers.
- **We do not sell your data, we do not use it for advertising, and we do not use it to train AI models.**

## Who this policy is for

Disbug is a business-to-business product used by software development teams. There are two very different groups
of people whose information may reach us, and we treat them differently:

**1. Disbug users (our customers).** People who create a Disbug account: developers, QA engineers, designers, and
product managers. They sign in to Disbug and use the dashboard, the CLI, and the Chrome extension. **The Chrome
extension is available only to these signed-in users** — it requires an authenticated Disbug session and will not
capture or upload anything for someone who is not signed in.

**2. Reporters using a customer's embedded widget.** A customer can embed the Disbug widget in their own product
so that their own users or testers can submit feedback. Those people never install the Chrome extension. Where
this happens, our customer is the data controller for that feedback and Disbug acts as their processor; the
customer's own privacy notice governs that collection.

## Information we collect

### Account and team information

When you create an account or are invited to a team, we collect and store: your name, email address, password
(stored only as a salted hash), profile image if you upload one, language preference, team name and team
membership, role, and your invitation and sign-in history. If you sign in through a third-party identity
provider, we receive your name, email address, and profile image from that provider.

### Billing information

If your team subscribes to a paid plan, we collect the billing name, billing email, plan, subscription status,
invoice history, and the country and tax information needed to invoice you. **Card numbers never reach Disbug's
servers** — payments are processed by Stripe, and we store only Stripe's customer, subscription, and payment
identifiers along with the last four digits and card brand that Stripe returns to us.

### Bug report content

This is the core of the product. When a Disbug user captures a bug, we store the report and its attachments
against that user's team and project. A report can contain the written feedback the user typed, the URL and page
title of the page being reported on, and the attachments described in the next section.

### Support and communications

If you email us, chat with us, or comment inside the app, we keep those messages and any attachments so we can
answer you and keep a record of the request.

### Website and service operation data

- **Server logs.** Our servers record IP address, user agent, requested URL, referrer, and timestamp for security,
  abuse prevention, and debugging. These logs are kept for a short period and are not used to build a profile of
  you.
- **Cookies.** We set a session cookie to keep you signed in and a CSRF cookie to protect forms against
  cross-site request forgery. These are strictly necessary. We do not use advertising or cross-site tracking
  cookies.
- **Marketing site analytics.** On our public marketing pages we may use privacy-oriented analytics (Cloudflare)
  and, where enabled, Google Analytics, to understand aggregate traffic. This does not run inside the Chrome
  extension.
- **Product analytics and error monitoring.** We use PostHog to understand use of the service and capture
  application errors. An event or error report can include
  the URL, a stack trace, and the identifier of the signed-in user so we can diagnose the fault.

## What the Chrome extension collects

The Disbug Chrome extension holds broad host permissions because a bug can happen on any page of the web
application your team is building — we cannot know that address in advance. Broad permission is **not** broad
collection. This section describes exactly what is captured, when, and what it is used for.

**Nothing is captured until you start a capture.** You start one by clicking the Disbug toolbar icon, which opens
the Disbug overlay on the current tab. Nothing is uploaded until you save the report. If you close the overlay
without saving, the data stays on your device and is discarded.

When you save a report, the following may be attached:

- **Screenshot.** An image of the **visible area of the active tab only**. Not your other tabs, not your desktop,
  not your camera.
- **Session replay ("Instant Replay").** A recording of the last few seconds of activity on that page, captured
  with rrweb. It records the page's DOM structure and changes, mouse movement, scrolling, and clicks so the bug
  can be replayed. **Values typed into form fields are masked by default** (`maskAllInputs`), the Disbug overlay
  itself is excluded from the recording, any element your team marks with the `disbug-ignore` class is excluded,
  and canvas contents are not recorded unless explicitly enabled. This is a reconstruction of the page, not a
  video of your screen.
- **Console logs.** Messages your application writes to the browser console — errors, warnings, and debug output
  — with their level and timestamp.
- **Network activity.** Requests the page made: method, URL, status code, timing, and request/response
  headers and bodies. Before anything leaves your browser, values whose key matches
  `authorization`, `cookie`, `csrf`, `jwt`, `password`, `passwd`, `secret`, `session`, `token`, `api_key`,
  `access_key`, or `refresh_token` are replaced with `[redacted]`, and bodies larger than 256 KB are truncated.
- **User actions.** Clicks and form interactions on the page, recorded as a CSS selector and a description of the
  element (and, where detectable, the front-end component), so a developer can see which control was used.
- **Local storage snapshot.** A snapshot of the `localStorage` of the page you are reporting on, which commonly
  holds the application state a developer needs to reproduce a bug. It is limited to the first 200 keys, each
  value is truncated at 5,000 characters, and any key matching the sensitive pattern listed above is replaced
  with `[redacted]`. This attachment can be switched off — see below.
- **Environment details.** Page URL, page title, browser name and version, operating system, viewport size,
  screen size, device pixel ratio, language/locale, and the time of capture.
- **Your written feedback**, and any comments you add to the report.

The extension also:

- **Reads one cookie: the `sessionid` cookie for `disbug.io`** (and, in local development, a localhost address),
  purely to confirm you are signed in and to authenticate the upload. It does **not** read, collect, or transmit
  cookies belonging to the website you are reporting on, or to any other website.
- **Copies to your clipboard** when you press the copy button, so you can paste a report into your editor or
  agent.
- **Downloads a file to your computer** when you export a report locally.
- **Stores settings and in-progress captures on your own device**, using the browser's extension storage and
  IndexedDB. In-progress data is removed once a report is saved or discarded.

The extension talks to **`disbug.io` and no other server**. It contains no advertising SDK, no analytics SDK, and
no remotely-loaded code — all code it runs is bundled in the package Google reviews.

### What the extension never does

- It does not record your browsing history, the list of sites you visit, or your activity on pages where you have
  not started a capture.
- It does not record your screen outside the active tab, your microphone, or your camera.
- It does not read the passwords stored in your browser or your browser profile data.
- It does not collect health, financial, or biometric information, and it does not track your location.
- It does not send anything to a third party, an advertiser, or an AI model provider.
- It does not use anything it captures to train machine-learning models.

## Your controls in the Chrome extension

Disbug is built to be pointed at **the application your team is developing**, and the recommended way to use it
is against your **staging, test, or development environments, signed in with test accounts**. Used that way, the
diagnostics Disbug captures — console output, network calls, application state in local storage — describe test
data, not real people's data. That is the intended workflow, and we recommend teams standardise on it.

We know bugs also happen in production. So every diagnostic layer is optional and under your control:

- **Diagnostics are off by default on every site.** Console logs, network requests, user actions, and Instant
  Replay are not captured on any website until you explicitly enable diagnostics for that specific site. The
  first time you open Disbug on a site, it asks you — in a dialog on the page — whether to enable diagnostics
  there, and tells you what enabling means. You can decline and still use Disbug to capture a screenshot and your
  written feedback. Your choice is remembered per site, and applies only to that site.
- **Each attachment has its own switch.** In the extension's settings panel you can independently turn off
  Screenshot, Session replay, Console logs, Network requests, User events, and Local storage. Turning one off
  means it is not captured or uploaded at all.
- **We recommend that when you capture on a production application, you either leave diagnostics off, or turn off
  the Local storage and Network requests attachments** — so that no real end-user data is included in the report.
- **Exclude sensitive elements from replay.** Add the `disbug-ignore` class to any element in your application,
  and it will be excluded from session replay.
- **Review before you send.** The report is assembled in the overlay and only uploaded when you choose to save
  it. You can discard it instead.
- **Remove the extension at any time.** Uninstalling it deletes the settings and any in-progress captures stored
  on your device.

## How we use information

We use the information described above only to:

- provide the service: create and store bug reports, render session replays, and show reports to the members of
  your team and to the tools and agents you connect;
- authenticate you, keep you signed in, and enforce team and project access controls;
- operate, secure, monitor, and debug the service, and prevent abuse;
- take payment and provide invoices for paid plans;
- respond to your support requests;
- send transactional email you need (account verification, password reset, invitations, billing notices) and, if
  you have opted in, occasional product news you can unsubscribe from at any time;
- comply with law and enforce our Terms of Service.

Where the GDPR or UK GDPR applies, our legal bases are: **performance of a contract** (providing the service to
your team), **legitimate interests** (securing and improving the service, preventing abuse), **consent** (marketing
email, non-essential analytics, and enabling diagnostics on a site), and **legal obligation** (tax and accounting
records).

## What we do not do

- We **do not sell** personal information, and we do not share it for cross-context behavioural advertising.
- We **do not use** bug report content, session replays, console logs, network logs, or local storage snapshots
  to train, fine-tune, or evaluate any machine-learning or AI model — ours or anyone else's.
- We **do not send** your data to any AI or large-language-model provider. Disbug structures the context of a bug
  and makes it available to _you_; if you choose to pass a report to an AI coding agent, that transfer is made by
  your own tool, running under your own control and your own agreement with that provider.
- We **do not** use your data for advertising, profiling, or automated decision-making that has legal effects on
  you.

## How we share information

We share information only in these circumstances:

**With your own team.** A report you capture is visible to the members of the Disbug team and project it belongs
to. That is the purpose of the product.

**With service providers who operate the service on our behalf.** Each is bound by contract to process data only
on our instructions, and only for these purposes:

- **Hetzner Online GmbH** (Germany) — hosting of our application servers and database.
- **Cloudflare, Inc.** — object storage (Cloudflare R2, EU region) for screenshots, replays, logs, and other
  attachments; DNS, CDN, and protection against attack; aggregate analytics on our marketing pages.
- **Stripe, Inc.** — payment processing and subscription billing for paid plans.
- **Resend, Inc.** — delivery of transactional email.
- **PostHog, Inc.** — product analytics and application error monitoring.
- **Google LLC (Google Analytics)** — aggregate traffic analytics on our public marketing pages only, where
  enabled. This is not present in the Chrome extension or in the application's authenticated pages.

**With destinations you choose.** If you connect Disbug to another tool, or export a report through the CLI, API,
or the extension's copy and download features, the data goes where you direct it. Those transfers are under your
control and governed by your agreement with that destination.

**For legal reasons.** If we are required to by law, court order, or a valid legal request, or where we need to
establish, exercise, or defend legal claims, or protect the rights and safety of our users or the public.

**In a business transfer.** If Disbug is acquired, merged, or reorganised, information may transfer to the
successor entity, which will remain bound by this policy or give you notice of any change.

## Chrome Web Store Limited Use disclosure

Disbug's use of information received from Google APIs and from the Chrome extension adheres to the
[Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq/),
including the **Limited Use** requirements. Specifically:

1. We collect and use the data described in the section **"What the Chrome extension collects"** above **only to
   provide and improve the single purpose of the extension**: capturing the technical context of a bug so that it
   can be reproduced and fixed.
2. We **do not transfer** that data to third parties except to the service providers listed above who host and
   operate Disbug on our behalf, to destinations you explicitly choose, or where required by law or in connection
   with a merger or acquisition as described above.
3. We **do not use or transfer** that data for serving advertisements, for advertising personalisation, or for
   any form of credit-worthiness or lending assessment.
4. We **do not sell** that data, and we do not use it to train or improve generalised machine-learning or
   artificial-intelligence models.
5. We do not allow humans to read that data unless: you give specific consent (for example, you send us a report
   as part of a support request); it is necessary for security purposes such as investigating abuse or a
   vulnerability; it is necessary to comply with applicable law; or the data is aggregated and de-identified and
   used for internal operations such as capacity planning.

## Where your data is stored and how we protect it

Bug report attachments are stored in Cloudflare R2 object storage in the **European Union**. Application data is
stored in a PostgreSQL database on servers hosted in the EU.

Our safeguards include: encryption in transit using TLS for all traffic between the extension, the application,
and our servers; access to production systems restricted to authorised personnel using multi-factor
authentication; upload URLs that are pre-signed, scoped to a single bug report attachment, and expire; team- and
project-level access controls on every request so one customer cannot read another's data; passwords stored only
as salted hashes; and redaction of sensitive values in the extension **before** they leave your browser.

No system is perfectly secure. If we become aware of a breach affecting your personal information, we will notify
you and the relevant supervisory authority as required by law.

## How long we keep data

- **Account and team data** — for as long as your account exists, and then as needed for our legal, tax, and
  accounting obligations.
- **Bug reports and their attachments** — for as long as your team keeps them. You can delete a session or report
  from the application or API at any time.
- **Server and security logs** — a short retention period, typically no more than 90 days.
- **Billing records** — as long as required by tax and accounting law.
- **On-device data in the extension** — until the report is saved or discarded, or until you uninstall the
  extension.

You can ask us to delete your account and all associated data by emailing
**[team@disbug.io](mailto:team@disbug.io)**. We will action a verified deletion request within **30 days**,
including the attachments held in object storage, except where we must retain specific records to comply with
law. Residual copies may persist in encrypted backups for a limited period before those backups expire.

## Your rights

Depending on where you live, you may have the right to: **access** the personal information we hold about you;
**correct** it; **delete** it; **export** it in a portable format; **restrict** or **object to** our processing of
it; **withdraw consent** you previously gave; and **not be discriminated against** for exercising these rights.

To exercise any of these, email **[team@disbug.io](mailto:team@disbug.io)** from the address on your account, or
write to us at the address below. We will respond within 30 days. We do not charge for this, and we will not
degrade your service because you asked.

If a bug report about you was captured by a Disbug customer using their own account, that customer controls it —
we will point you to them, or pass your request on to them, so it can be actioned at the source.

If you are in the EEA or UK and you believe we have not handled your request properly, you may lodge a complaint
with your local data protection authority. If you are in California, you may exercise the rights described above
under the CCPA/CPRA; note again that we do not sell personal information and do not share it for cross-context
behavioural advertising.

## International transfers

We are based outside the European Union and use service providers in several countries, including the United
States. Where personal information is transferred out of the EEA or UK, we rely on appropriate safeguards such as
the European Commission's Standard Contractual Clauses, together with the safeguards our providers publish.

## Children

Disbug is a tool for software professionals and is not directed at children. We do not knowingly collect personal
information from anyone under 16. If you believe a child has provided us with personal information, contact us
and we will delete it.

## Changes to this policy

We may update this policy as the product changes or the law requires. When we make a material change, we will
update the "Last updated" date at the top, and — if the change materially affects how we handle information you
have already given us — we will notify account holders by email or through the application before it takes
effect. Continuing to use Disbug after a change takes effect means you accept the updated policy.

## Contact us

**Disbug Ltd**
Email: **[team@disbug.io](mailto:team@disbug.io)**

For privacy requests, please put "Privacy request" in the subject line so we can route it quickly.
