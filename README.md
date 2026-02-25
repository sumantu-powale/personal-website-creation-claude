# Sumantu Powale - Portfolio Website

A clean, single-page portfolio website showcasing Product Management case studies and professional experience.

# Sumantu Powale - Portfolio Website

A clean, single-page portfolio website showcasing Product Management case studies and professional experience.

## 🚀 COMPLETE! All 5 Pages Built

### What's Working:
- ✅ Top navigation with hash-based routing
- ✅ Home page with hero, avatar, CTAs, LinkedIn
- ✅ About Me with interests grid and personal story
- ✅ Education & Certifications with expandable accordions
- ✅ Skills & Tools with hover effects
- ✅ Case Studies with modal popups
- ✅ Fully responsive (desktop + mobile)
- ✅ Smooth animations and transitions

### Current Files:
```
portfolio/
├── index.html       (Complete HTML with all 5 pages + modals)
├── styles.css       (All styling - 600+ lines, fully responsive)
├── script.js        (Navigation + modal + accordion logic)
└── README.md        (This file)
```

---

## 💻 How to Run Locally

### Method 1: Simple Double-Click (Recommended for now)
1. Just **double-click `index.html`**
2. It will open in your default browser
3. Click the navigation links to test page switching

### Method 2: Using Python (If double-click doesn't work)
1. Open Terminal/Command Prompt
2. Navigate to the portfolio folder:
   ```bash
   cd path/to/portfolio
   ```
3. Run a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # OR Python 2
   python -m SimpleHTTPServer 8000
   ```
4. Open browser and go to: `http://localhost:8000`

### Method 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 🧪 Testing the Navigation

Try these in your browser:
- Click "About Me" → URL becomes `#about`
- Click "Education" → URL becomes `#education`
- Use browser back/forward buttons → Pages change correctly
- Refresh page → Stays on same page
- Share URL like `file:///path/to/portfolio/index.html#case-studies` → Opens directly to that page

---


## 🚀 Deployment Instructions

### Option 1: Netlify (Recommended - Easiest)

**Step 1: Prepare Files**
1. Put all 4 files (`index.html`, `styles.css`, `script.js`, `README.md`) in a folder
2. Optional: Add your images to an `assets/images/` subfolder

**Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com) and create free account
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your `portfolio` folder into the upload area
4. Wait 10 seconds... Done! 🎉

**Your site will be live at:** `https://random-name-12345.netlify.app`

**To customize the URL:**
1. Go to Site settings → Change site name
2. Pick something like: `sumantu-pm-portfolio`
3. Your new URL: `https://sumantu-pm-portfolio.netlify.app`

**To update content later:**
1. Edit your local files
2. Go to Netlify → Deploys → Drag new folder
3. Your changes go live instantly

---

### Option 2: GitHub Pages

**Step 1: Create GitHub Repository**
```bash
# In your portfolio folder:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: Deploy from branch "main"
4. Save

**Your site will be live at:** `https://YOUR-USERNAME.github.io/portfolio`

---

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repo (or drag folder)
4. Click "Deploy"
5. Live at: `https://your-project.vercel.app`

---

## 🎨 Customization Guide

### Replace Your Personal Information:

**1. Hero Image:**
Open `index.html` and find line ~48:
```html
<img src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&h=400&fit=crop" 
```
Replace the URL with your own seascape photo URL, or upload an image to the `assets/images/` folder and use:
```html
<img src="assets/images/hero-seascape.jpg"
```

**2. Avatar Photo:**
Find line ~57 in `index.html`:
```html
<div class="avatar-circle">SP</div>
```
Replace with:
```html
<img src="assets/images/avatar.jpg" alt="Sumantu Powale" class="avatar-image">
```

**3. Contact Information:**
- **Phone:** Line ~84 - Replace `+353 89 263 4899` with your number
- **Email:** Line ~94 - Replace `ssp19298@gmail.com` with your email

**4. LinkedIn URL:**
Find line ~137:
```html
<a href="https://www.linkedin.com/in/sumantupowale"
```
Replace with your LinkedIn profile URL.

**5. Introduction Text:**
Lines ~62-78 contain your intro paragraphs. Edit them to match your story.

**6. Case Study PDF Links:**

Find these lines in `index.html` (search for "TODO: Replace # with actual PDF URL"):

```html
<!-- In the case study cards -->
<a href="#" target="_blank" class="btn-secondary">
    Download PDF
</a>

<!-- In the modals -->
<a href="#" target="_blank" class="btn-primary">Download Full Case Study (PDF)</a>
```

Replace `#` with links to your actual PDFs. You have 3 options:

**Option A: Upload PDFs to assets folder**
```html
<a href="assets/case-studies/case-study-1.pdf" target="_blank">
```

**Option B: Use Google Drive**
1. Upload PDF to Google Drive
2. Right-click → Share → Get link → Anyone with link can view
3. Use that link:
```html
<a href="https://drive.google.com/file/d/YOUR-FILE-ID/view" target="_blank">
```

**Option C: Use your deployed case study files**
Once you deploy, your PDFs will have URLs like:
```html
<a href="https://your-site.netlify.app/Case_Study_1_B2B_SaaS_Support_Ticket_Reduction.pdf" target="_blank">
```

### Change Colors:
Open `styles.css` and edit the `:root` variables at the top:
```css
:root {
    --accent-blue: #0066cc;    /* Change this to your preferred color */
    --text-primary: #37352f;   /* Main text color */
}
```

### Change Navigation Labels:
Open `index.html` and find the `<nav class="top-nav">` section:
```html
<li><a href="#home" class="nav-link active" data-page="home">Home</a></li>
<!-- Change "Home" to whatever you want -->
```

---

## ✅ All Done! What's Next?

Your portfolio is complete and ready to share with recruiters! Here are suggested enhancements:

### Phase 1: Content Polish (Do Before Sharing)
1. **Replace placeholder images:**
   - Upload your hero seascape photo
   - Add your headshot for avatar
   - Upload banner images for About/Education/Skills pages

2. **Update personal info:**
   - Phone number and email
   - LinkedIn URL
   - Intro text (make it YOUR voice)

3. **Upload case study PDFs:**
   - You already have 3 professional case studies created
   - Upload them to assets folder or Google Drive
   - Update the PDF links in index.html

4. **Test everything:**
   - Click every nav link
   - Open every modal
   - Expand every certification
   - Test on mobile (Chrome DevTools → Toggle device toolbar)

### Phase 2: Advanced Features (Optional)
1. **Add animations:**
   - Scroll-triggered fade-ins
   - Number counters for metrics
   - Typing effect for intro

2. **Analytics:**
   - Add Google Analytics to track visitors
   - See which case studies get most views

3. **Contact form:**
   - Add Formspree or Netlify Forms
   - Let recruiters message you directly

4. **AI Chat widget:**
   - Add a "Ask me anything" bot
   - Answer common PM questions
   - Show off your AI product skills!

5. **Blog section:**
   - Add a /blog page
   - Write about PM topics
   - Show thought leadership

### Phase 3: Promotion
1. **LinkedIn post:**
   - "Just launched my PM portfolio! Check out my case studies on..."
   - Include screenshot and link

2. **Add to resume:**
   - Put portfolio URL prominently

3. **Email signature:**
   - Add: "Portfolio: yoursite.netlify.app"

4. **Job applications:**
   - Always include portfolio link in cover letter
   - "I've created case studies specifically demonstrating..."

---

## 🐛 Troubleshooting

**Navigation not working?**
- Check browser console (F12) for errors
- Make sure all 3 files (HTML, CSS, JS) are in the same folder

**Styles not loading?**
- Check that `styles.css` is in the same folder as `index.html`
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**JavaScript not running?**
- Check that `script.js` is in the same folder
- Make sure browser allows local JavaScript (it should by default)

---

Questions? Let me know!
