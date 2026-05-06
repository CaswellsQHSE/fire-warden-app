# Caswells Group — Fire Warden Training App

A responsive web app for Fire Warden training. Works on any device, any browser, no login required.
Built with React. Hosted free on Vercel.

---

## Deployment (one-time setup, ~15 minutes)

### Step 1 — Get the code onto GitHub

1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click **New repository** → name it `caswells-fire-training` → **Create repository**
3. Download and install [GitHub Desktop](https://desktop.github.com) (easiest method)
4. In GitHub Desktop: **File → Add local repository** → select this project folder
5. Click **Publish repository** → uncheck "Keep this code private" if you want (the config file
   has no sensitive data) → **Publish**

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account (free)
2. Click **Add New → Project**
3. Select your `caswells-fire-training` repository
4. Click **Deploy** — Vercel detects React automatically
5. Wait ~2 minutes → your app is live at `https://caswells-fire-training.vercel.app`

### Step 3 — Set up EmailJS (completion notifications)

1. Go to [emailjs.com](https://www.emailjs.com) → create a free account
2. **Email Services** → Add a service → connect your email (Gmail, Outlook, etc.)
   Note the **Service ID** (e.g. `service_abc123`)
3. **Email Templates** → Create template with this content:
   ```
   Subject: Fire Warden Training Completed — {{name}}

   {{name}} ({{role}}) has completed Fire Warden Training.

   Site: {{site}}
   Score: {{score}}
   Date: {{date}}
   Reference: {{reference}}
   Refresher due: {{refresher_due}}
   ```
   Note the **Template ID** (e.g. `template_xyz789`)
4. **Account → API Keys** → copy your **Public Key**
5. Open `src/data/config.js` and update the `emailjs` section:
   ```js
   emailjs: {
     serviceId: "service_abc123",      // your Service ID
     templateId: "template_xyz789",    // your Template ID
     publicKey: "abcDEFghiJKL",        // your Public Key
     toEmail: "mike@caswellsgroup.com", // your email address
   },
   ```
6. Save, commit in GitHub Desktop, push — Vercel redeploys automatically in ~2 minutes

---

## Making permanent config changes

Edit `src/data/config.js` for:
- Organisation name, brand colours, logo URL
- Site details (address, assembly point, FRA actions, warden numbers)
- Assessment pass mark and max attempts
- Question bank (add, remove, edit questions)

After editing: save the file → commit in GitHub Desktop → push → Vercel redeploys automatically.

The in-app Admin panel allows **session-only** changes (useful for demos or quick checks).

---

## Adding your logo

1. Host your logo somewhere publicly accessible (e.g. upload to your website, or use a free
   image host like [imgur.com](https://imgur.com))
2. Copy the direct image URL (must end in .png, .jpg or .svg)
3. In `src/data/config.js`, set:
   ```js
   logoUrl: "https://your-site.com/caswells-logo.png",
   ```
4. Commit and push

---

## Updating the app after deployment

Any time you edit `src/data/config.js` and push to GitHub, Vercel automatically rebuilds
and redeploys within 2 minutes. The URL stays the same.

---

## Project structure

```
src/
  data/
    config.js          ← All configuration: branding, sites, questions, settings
  components/
    Sidebar.jsx        ← Navigation sidebar
    TopBar.jsx         ← Top navigation bar
    AdminPanel.jsx     ← Password-protected admin panel
    UI.jsx             ← Shared UI components (Card, Box, Table etc.)
    modules/
      index.jsx        ← All 13 course modules (Welcome through Certificate)
  App.jsx              ← Main app logic and state
  App.css              ← All styles (responsive, branded)
  index.js             ← React entry point
public/
  index.html           ← HTML shell
vercel.json            ← Vercel deployment config
package.json           ← Dependencies
```

---

## Admin panel

Access via the **Admin** button (top right) → enter password (`caswells2025` by default).

The admin panel allows session-only changes to:
- Branding (org name, colours, logo, QHSE manager name, password)
- EmailJS settings
- Site details for both Billingham and Macclesfield
- Question bank (add, edit, remove questions)
- Course settings (pass mark, max attempts)

To make changes permanent, update `src/data/config.js` and redeploy.

---

## RR(FS)O 2005 compliance

This course covers all requirements of Articles 15 and 21 of the Regulatory Reform
(Fire Safety) Order 2005 for Fire Warden training, including:
- Fire safety legislation (national and site-specific)
- Fire science (triangle, stages, spread mechanisms)
- Fire classification (Classes A–F)
- Prevention and housekeeping
- Extinguisher types and PASS technique
- Risk assessment principles
- Site-specific fire safety arrangements
- Fire Warden and Fire Marshal roles and responsibilities

The certificate generated on completion is suitable for inclusion in personnel training
files and satisfies the record-keeping requirements of Article 13.
