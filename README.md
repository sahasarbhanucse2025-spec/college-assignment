# IEM Events Portal — Department of CSE (AIML)
### Institute of Engineering & Management, Kolkata

A modern, high-performance, and responsive single-page web portal designed for discovering events, registering online, generating verified digital e-passes, and celebrating student innovations across the Department of Computer Science & Engineering (AIML).

Built with **vanilla HTML5, CSS3, and JavaScript** (zero external frameworks or runtime dependencies required).

---

## 🚀 Live Features & Capabilities

1. **Interactive AI Neural Mesh Canvas**
   - Dynamic real-time particle and synapse network rendered on HTML5 Canvas in the Hero section, responding smoothly to mouse movement.
2. **Flagship Events Discovery Engine**
   - Real-time instant search by title, topic, or campus venue.
   - Dynamic category filter chips (`All`, `Technical`, `Workshops`, `Cultural`, `Lectures`) with live count badges.
   - Layout Switcher: Toggle seamlessly between modern card **Grid View** and chronological **Timeline View**.
   - Quick-View Modal: Detailed agenda, eligibility, prizes, and coordinator info.
3. **Instant Digital E-Ticket & Pass Generator (with QR Code)**
   - Live form validation (Name, 10-digit IEM Roll Number, Email, Mobile, Department, Gender).
   - Generates an authentic holographic **Electronic Event Pass** upon registration with unique ticket ID (e.g. `IEM-26-XXXX`).
   - Pure client-side SVG QR Code generator and barcode rendering.
   - Interactive confetti burst animation on pass generation.
   - 1-click Download / Print Pass function (`window.print()`).
4. **Local Pass Vault ("My Passes")**
   - Stores all booked event passes securely in `localStorage`.
   - Access saved passes anytime from the persistent navigation bar.
5. **Real-time Event Countdown & IST Clock**
   - High-tech glassmorphic countdown widget tracking days, hours, minutes, and seconds until the next upcoming event.
   - Live Asia/Kolkata clock and 1-click "Add to Google Calendar" button.
6. **Gallery with Fullscreen Lightbox**
   - High-resolution event photographs covering Hackathons, Tech Fest, AI Bootcamps, Robotics, and Cultural Galas.
   - Filter photos by category and inspect in a fullscreen modal with keyboard navigation (Arrows & Esc).
7. **AI Laboratories & Excellence Showcase**
   - Highlight cards for NVIDIA RTX GPU Compute Lab, IoT & Robotics Arena, Research & Patent Cell, and Alumni Mentorship.
8. **Interactive FAQ Accordion & Campus Helpdesk**
   - Collapsible answers for common student inquiries.
   - Campus directions for Gurukul Campus, Sector V, Salt Lake, with Google Maps link and metro connectivity guide.
9. **Dark & Light Mode**
   - Smooth theme toggle remembered across browser visits in `localStorage`.
10. **Reading Progress & Floating Scroll Ring**
    - Smooth scroll indicator bar at top and back-to-top button with circular SVG progress meter.

---

## 📁 Project Structure

```
college-event-site/
├── index.html          # Semantic HTML5 architecture & accessible modals
├── css/style.css       # Complete design system, glassmorphism, animations, dark mode
├── js/script.js        # Interactive neural canvas, live search, e-ticket engine, QR code
├── images/             # Real event photography & official IEM department logo
│   ├── logo.png
│   ├── hackathon.jpg
│   ├── tech-fest.jpg
│   ├── workshop.jpg
│   ├── cultural-night.jpg
│   ├── robotics.jpg
│   └── guest-lecture.jpg
├── README.md           # Project documentation & features overview
└── REPORT.md           # IT Workshop (PCCCS382) academic report
```

---

## 💻 How to Run Locally

Simply double-click `index.html` to open it in any modern browser (Chrome, Firefox, Edge, Safari).

Alternatively, run a simple local web server:
```bash
# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000`.
