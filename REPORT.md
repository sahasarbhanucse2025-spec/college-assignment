# Project Report — Modern College Event Management & Pass Portal

**Course:** PCCCS382 — IT Workshop  
**Department:** Computer Science & Engineering (AIML), Institute of Engineering & Management, Kolkata  
**Technologies:** HTML5, CSS3, JavaScript (Vanilla ES6+, No external runtime frameworks)

---

## 1. Project Objective
To design and build an advanced, visually stunning, and highly responsive single-page web portal for the Department of CSE (AIML), IEM Kolkata. The portal enables students across all engineering branches to discover upcoming hackathons and workshops, filter events dynamically, view real-time countdowns, register online with instant validation, generate verified digital e-passes with scan-ready SVG QR codes, view high-definition gallery photographs in an interactive lightbox, and access comprehensive department details.

---

## 2. Architecture & Design System

### 2.1 Aesthetic & Visual Standards
- **Color Palette:**
  - Primary Brand: Bengal Deep Indigo (`#090d20`, `#10163a`, `#182154`)
  - Accent / Highlights: Electric Amber & Marigold (`#f59e0b`, `#fbbf24`), Cyber Cyan (`#06b6d4`)
  - Light Mode: Warm editorial paper (`#f8fafc`) with frosted glassmorphism panels
  - Dark Mode: Cosmic deep navy (`#070a18`, `#0e142e`) with glowing borders and ambient lighting
- **Typography:**
  - Display / Headings: `Outfit` (weights 600, 700, 800) for a crisp, futuristic university aesthetic
  - Body / UI: `Plus Jakarta Sans` (weights 400, 500, 600, 700) for high legibility
- **Glassmorphism & Micro-Interactions:**
  - Backdrop blur effects (`backdrop-filter: blur(16px)`) on navigation, hero cards, and modals
  - Smooth card elevation transitions and subtle glow hover effects

---

## 3. Implemented Features & Technical Highlights

1. **Interactive AI Neural Network Particle Background (`<canvas id="neuralCanvas">`):**
   - Renders 55 connected floating neural nodes and synaptic lines on an HTML5 canvas in the hero section.
   - Calculates real-time distance vectors and attracts nodes toward the cursor, giving a signature AIML department atmosphere.
   - Automatically pauses or adheres to `prefers-reduced-motion` for accessibility.

2. **Flagship Events Engine & Discovery Controls:**
   - Real-time search filter with query matching on title, description, and campus venue.
   - Dynamic category filter chips (`All`, `Technical`, `Workshops`, `Cultural`, `Lectures`) with live counter pills.
   - View mode switcher: Instant toggle between **Grid Card View** and **Chronological Timeline View**.
   - Quick-View Modal: Displays detailed session agendas, team size constraints, prizes, and direct registration links.
   - "Add to Google Calendar" button generating structured event URLs.

3. **Digital Pass & E-Ticket Generator (Massive Interactive Highlight):**
   - Form validation enforcing IEM 10-digit numeric roll numbers, valid email patterns, and required fields.
   - Generates a holographic electronic pass modal upon submission containing:
     - Student Full Name, Roll Number, Academic Department
     - Event Name, Scheduled Date/Time, and Venue
     - Unique Ticket ID (`IEM-26-XXXX`)
     - Pure client-side **SVG QR Code generator** module based on a 21x21 matrix simulation
     - Print / Download button invoking `window.print()`
   - Celebratory canvas confetti explosion on pass generation.

4. **Persistent Pass Storage ("My Passes"):**
   - Stores all student registrations in browser `localStorage`.
   - Dedicated "My Passes" drawer in the navigation bar displaying active registrations.

5. **Live Countdown & IST Clock:**
   - Dynamically selects the next upcoming event from the `EVENTS` dataset.
   - Second-by-second countdown with tabular numerals.
   - Real-time India Standard Time clock (`Asia/Kolkata`).

6. **Interactive Gallery & Fullscreen Lightbox:**
   - High-definition event photography.
   - Category filtering and fullscreen modal preview with keyboard navigation (Esc, Arrow keys).

7. **AI Laboratories & FAQ Accordions:**
   - Detailed infrastructure showcase for GPU AI Lab, IoT & Robotics Arena, and Research Cells.
   - Interactive FAQ accordion with smooth open/collapse transitions.

---

## 4. Verification & Testing
- Validated HTML5 semantic structure, ARIA accessibility attributes, and responsive layouts across Desktop, Tablet, and Mobile devices.
- Validated form validation regexes for name formatting, 10-digit roll numbers, email, and 10-digit mobile phone numbers.
- Verified local storage persistence and theme switching.
