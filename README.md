# 📊 Hasna N B — Professional Data Analyst Portfolio

A modern, premium, and fully responsive personal portfolio website designed for **Hasna N B**, an aspiring Data Analyst currently pursuing a Data Analytics course and working as an intern at **Softronics**.

---

## 🏛️ Design Identity & Visual System

- **Design Theme**: Corporate-inspired data analytics aesthetic combining trust, precision, and elegance.
- **Color Palette**:
  - **Deep Navy Blue** (`#0B1633`): Primary dark background and section contrast.
  - **Royal Navy** (`#14264B`): Cards, navigation surfaces, and timeline containers.
  - **Pure White** (`#FFFFFF`): Light section backgrounds and high-contrast text.
  - **Soft Ivory** (`#F7F8FC`): Alternating section surfaces for comfortable readability.
  - **Subtle Gold** (`#D4AF6A`): Refined highlights, borders, indicators, and buttons used sparingly.
  - **Slate Grey** (`#64748B` / `#94A3B8`): Supporting descriptions, text, and metadata.
- **Typography**:
  - Headings: **Playfair Display** (Refined serif communicating academic and corporate elegance)
  - Body & UI: **Inter** (Clean, highly legible sans-serif for numbers, code tags, and text)

---

## 📂 Project Structure

```text
portfolio/
├── index.html            # Main semantic HTML5 structure with Bootstrap 5 CDN
├── style.css             # Custom CSS design system (Navy & Subtle Gold palette)
├── script.js            # Client-side JavaScript (sticky navbar, validation, back-to-top)
├── assets/
│   └── images/          # Dedicated image assets directory
│       └── hasna-profile.jpg (Drop Hasna's actual photograph here)
└── README.md             # Complete documentation and customization guide
```

---

## 🌐 Website Sections

1. **Sticky Navigation Bar**:
   - Monogram logo (`HNB`), quick section links (Home, About, Experience, Skills, Services, Projects, Contact), and mobile-friendly hamburger menu.
2. **Hero Section**:
   - Status badge: *"Data Analytics Intern at Softronics"*.
   - Headline: *"Aspiring Data Analyst | Turning Data into Insights"*.
   - Professional tagline: *"Explore Data. Discover Insights. Drive Better Decisions."*.
   - Call-to-action buttons (*Explore My Skills* & *Let's Connect*).
   - Dedicated profile photograph frame with thin gold border.
3. **About Me**:
   - Clean, light ivory background with Hasna's exact personal introduction.
   - Three key highlight cards: **Analytical Thinking**, **Continuous Learning**, and **Data Storytelling**.
4. **Education & Experience (Timeline)**:
   - Navy timeline markers with delicate gold connecting lines.
   - **Data Analytics Intern at Softronics** (Present / Currently Interning).
   - **Data Analytics Course** (Currently Pursuing / In Progress).
   - **Higher Secondary Education** (Plus Two &bull; Science Stream).
5. **Technical Skills Dashboard**:
   - Organised into 4 clean categories:
     - *Programming & Data Analysis*: Python, SQL, Pandas, NumPy.
     - *Data Visualization*: Matplotlib, Seaborn, Power BI.
     - *Spreadsheet & Reporting*: Microsoft Excel, Dashboard creation, Data reporting.
     - *Analytical Competencies*: Data cleaning, EDA, Statistical analysis, Trend identification.
6. **Services ("How I Can Help with Data")**:
   - 5 structured cards: Data Cleaning & Preprocessing, Exploratory Data Analysis, Data Visualization, Interactive Dashboard Development, and Data Reporting & Insights.
   - Bottom CTA banner linking to contact.
7. **Projects ("My Projects")**:
   - Dedicated learning showcase with 3 clearly labeled future placeholders marked *"Project Coming Soon"*:
     1. Exploratory Data Analysis
     2. Interactive Power BI Dashboard
     3. SQL Data Analysis
8. **Contact ("Let's Connect")**:
   - Direct contact info: Email (`hasnanb113@gmail.com`), LinkedIn (`linkedin.com/in/hasnanb`), and location in Kozhikode, Kerala, India.
   - Accessible contact form with real-time field validation.
9. **Footer**:
   - Subtle gold accent divider, *"Designed with passion by Hasna N B"*, email/LinkedIn links, and dynamic calendar year.

---

## 🖥️ How to Preview & Run the Website

### Option 1: Using the Running Local Server
If running locally:
- Visit **`http://localhost:8080`** in your browser.

### Option 2: Direct File Open
- Open `c:\Users\DELL\Desktop\portfolio` in File Explorer.
- Double-click **`index.html`** to open directly in Google Chrome, Microsoft Edge, or any modern web browser.

---

## 📸 Step-by-Step Customization Guide for Hasna

### 1. Adding Hasna's Real Profile Photograph
To show Hasna's actual photograph:
1. Save the photo as `hasna-profile.jpg` inside the `assets/images/` directory.
2. In `index.html`, locate the profile box inside `<section id="home">` (around line 140) and replace the placeholder with:
```html
<img src="assets/images/hasna-profile.jpg" alt="Hasna N B Profile" class="img-fluid rounded-3" style="max-height: 380px; width: 100%; object-fit: cover;">
```

### 2. Updating Future Projects as They Are Completed
When Hasna completes a project (e.g. an EDA notebook or Power BI dashboard):
1. In `index.html` under `<section id="projects">`, replace the disabled button with a live link:
```html
<a href="https://github.com/hasnanb/your-project" target="_blank" class="btn btn-navy-gold w-100 py-2 rounded-2">
    <i class="fa-brands fa-github me-1"></i> View Project on GitHub
</a>
```
2. Replace the blueprint box `<div class="project-visual-box">` with an `<img>` tag showing a screenshot of your dashboard or chart visualization.

### 3. Connecting the Contact Form to Receive Emails
To have messages sent straight to `hasnanb113@gmail.com`:
1. Sign up for a free account at [https://formspree.io/](https://formspree.io/).
2. Create a form and copy your unique form URL (e.g., `https://formspree.io/f/xvongwep`).
3. Update the form tag in `index.html`:
```html
<form id="portfolioContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## ♿ Accessibility & Performance Standards

- **Semantic HTML5**: Appropriate landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Color Contrast**: Complies with WCAG AA guidelines for dark and light sections.
- **Keyboard Friendly**: Clear visible focus outlines on inputs, buttons, and links.
- **Responsive**: Fluid layout from small mobile phones (375px) to large desktop monitors (1920px+).
- **Reduced Motion**: Automatically honors user OS settings for `prefers-reduced-motion`.
