/* =====================================================================
   IEM Events Portal — Department of CSE (AIML)
   Modern Interactive Architecture & Feature Engine
   ===================================================================== */

'use strict';

/* ---------------------------------------------------------------------
   1. Events Dataset with Rich Metadata
   --------------------------------------------------------------------- */
const EVENTS = [
  {
    id: 'cultural-night',
    name: 'Sharod Sandhya — Cultural Gala',
    date: '2026-10-16T17:00:00+05:30',
    venue: 'Main Auditorium, Gurukul Campus',
    category: 'cultural',
    image: 'images/cultural-night.jpg',
    prize: 'Gala Evening & Awards',
    teamSize: 'Solo or Group Acts',
    seatsTotal: 400,
    seatsLeft: 85,
    description: 'Pre-festive cultural evening featuring student band performances, classical and western dance, drama, and acoustic sets. Open to students and families.',
    agenda: '17:00 Invocational Song · 17:30 Instrumental Fusion · 18:45 Drama Troupe · 20:00 Rock Band Finale'
  },
  {
    id: 'hackiem',
    name: 'HackIEM 2026: 24-Hour AI Sprint',
    date: '2026-10-24T09:00:00+05:30',
    venue: 'AIML Innovation Lab, Gurukul Campus',
    category: 'technical',
    image: 'images/hackathon.jpg',
    prize: '₹50,000 Cash Pool + Cloud Credits',
    teamSize: 'Teams of 2–4 Students',
    seatsTotal: 120,
    seatsLeft: 18,
    description: 'Flagship 24-hour hackathon on generative AI, computer vision, and applied ML. Problem statements revealed at opening ceremony with midnight mentor support and meals provided.',
    agenda: '09:00 Problem Statement Release · 13:00 Checkpoint 1 · 21:00 Mentor Pitch · 09:00 Final Demos'
  },
  {
    id: 'dl-workshop',
    name: 'Masterclass: Deep Learning with PyTorch',
    date: '2026-11-02T10:00:00+05:30',
    venue: 'Lab 4, Ashram Building',
    category: 'workshop',
    image: 'images/workshop.jpg',
    prize: 'Certificate & GPU Compute Access',
    teamSize: 'Individual Participation',
    seatsTotal: 80,
    seatsLeft: 12,
    description: 'Hands-on practical bootcamp covering tensor mechanics, backprop, convolutional architectures, and building a multimodal emotion classifier on Google Colab / cloud GPUs.',
    agenda: '10:00 PyTorch Tensors & Autograd · 12:00 CNNs & Vision · 14:00 Multimodal Pipeline · 16:30 Q&A'
  },
  {
    id: 'robotics',
    name: 'Autonomous Line-Follower Rover Challenge',
    date: '2026-11-14T10:00:00+05:30',
    venue: 'IoT & Robotics Arena, Gurukul Block',
    category: 'technical',
    image: 'images/robotics.jpg',
    prize: '₹25,000 Prize + Hardware Kits',
    teamSize: 'Teams of 2–3 Students',
    seatsTotal: 60,
    seatsLeft: 9,
    description: 'Design, calibrate and race autonomous sensor-guided robots through hairpin turns, crossover bridges, and speed corridors. Judged on precision, velocity, and design.',
    agenda: '10:00 Arena Scrutiny · 11:30 Qualifying Heats · 14:30 Final Knockout Championship'
  },
  {
    id: 'guest-lecture',
    name: 'Keynote: LLMs & Generative AI for Indic Languages',
    date: '2026-11-21T14:30:00+05:30',
    venue: 'Seminar Hall, 2nd Floor',
    category: 'lecture',
    image: 'images/guest-lecture.jpg',
    prize: 'Certificate of Attendance',
    teamSize: 'Open to All Students',
    seatsTotal: 250,
    seatsLeft: 42,
    description: 'Distinguished industry research scientist from Google DeepMind / AI4Bharat on fine-tuning low-resource language models, tokenization hurdles, and synthetic data generation.',
    agenda: '14:30 Keynote Address · 15:30 Architecture Walkthrough · 16:00 Interactive Open Q&A'
  },
  {
    id: 'innovacion',
    name: 'Innovacion 2026: Annual Department Techfest',
    date: '2026-12-04T09:00:00+05:30',
    venue: 'Gurukul Campus, All Blocks',
    category: 'technical',
    image: 'images/tech-fest.jpg',
    prize: '₹75,000 Cash Pool & Trophies',
    teamSize: 'Solo & Team Challenges',
    seatsTotal: 600,
    seatsLeft: 110,
    description: 'Three consecutive days of competitive coding, project exhibitions, AI paper presentations, robotics arenas, and technical quizzes. The biggest festival on the department calendar.',
    agenda: 'Day 1: Inauguration & Coding · Day 2: AI Project Showcase · Day 3: Grand Finals & Awards'
  }
];

const CATEGORY_META = {
  technical: { label: 'Technical', class: 'tag-technical' },
  workshop:  { label: 'Workshop',  class: 'tag-workshop' },
  cultural:  { label: 'Cultural',  class: 'tag-cultural' },
  lecture:   { label: 'Lecture',   class: 'tag-lecture' }
};

/* ---------------------------------------------------------------------
   2. Interactive AI Neural Particle Canvas (Hero Background)
   --------------------------------------------------------------------- */
(function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
    }
  }

  const count = Math.min(55, Math.floor((window.innerWidth * window.innerHeight) / 18000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  let animId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.28 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animId = requestAnimationFrame(animate);
  }

  // Respect reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    animate();
  }
})();

/* ---------------------------------------------------------------------
   3. Date Formatting Helpers
   --------------------------------------------------------------------- */
function formatDateParts(iso) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }),
    year: d.getFullYear(),
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
    full: d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
    time: d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
  };
}

/* ---------------------------------------------------------------------
   4. Live Countdown to Next Upcoming Event & IST Clock
   --------------------------------------------------------------------- */
const cdElements = {
  title: document.getElementById('cdTitle'),
  meta: document.getElementById('cdMeta'),
  days: document.getElementById('cdDays'),
  hours: document.getElementById('cdHours'),
  mins: document.getElementById('cdMins'),
  secs: document.getElementById('cdSecs'),
  clock: document.getElementById('clock'),
  addToCalBtn: document.getElementById('addToCalBtn')
};

function getNextUpcomingEvent() {
  const now = Date.now();
  const sorted = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcoming = sorted.filter(ev => new Date(ev.date).getTime() > now);
  return upcoming[0] || sorted[0]; // fallback to first event if all passed
}

let activeNextEvent = getNextUpcomingEvent();

function updateCountdown() {
  if (!activeNextEvent) return;
  const dt = formatDateParts(activeNextEvent.date);

  if (cdElements.title) cdElements.title.textContent = activeNextEvent.name;
  if (cdElements.meta) cdElements.meta.textContent = `${dt.full} · ${activeNextEvent.venue}`;

  const diff = Math.max(0, new Date(activeNextEvent.date).getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  const pad = n => String(n).padStart(2, '0');
  if (cdElements.days) cdElements.days.textContent = pad(days);
  if (cdElements.hours) cdElements.hours.textContent = pad(hours);
  if (cdElements.mins) cdElements.mins.textContent = pad(mins);
  if (cdElements.secs) cdElements.secs.textContent = pad(secs);
}

function updateClock() {
  if (!cdElements.clock) return;
  cdElements.clock.textContent = new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

updateCountdown();
updateClock();
setInterval(() => {
  updateCountdown();
  updateClock();
}, 1000);

// Add to Calendar 1-Click Link
function generateGoogleCalendarUrl(event) {
  const startDate = new Date(event.date);
  const endDate = new Date(startDate.getTime() + 3 * 3600 * 1000); // 3 hrs default duration
  const formatCalTime = d => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
  const dates = `${formatCalTime(startDate)}/${formatCalTime(endDate)}`;
  const title = encodeURIComponent(event.name + ' — IEM CSE (AIML)');
  const details = encodeURIComponent(`${event.description}\n\nVenue: ${event.venue}\nOfficial IEM Event Portal.`);
  const location = encodeURIComponent(event.venue + ', IEM Gurukul Campus, Kolkata');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
}

if (cdElements.addToCalBtn) {
  cdElements.addToCalBtn.addEventListener('click', () => {
    if (activeNextEvent) {
      window.open(generateGoogleCalendarUrl(activeNextEvent), '_blank', 'noopener');
      showToast('Opening Google Calendar event...', 'info');
    }
  });
}

/* ---------------------------------------------------------------------
   5. Dynamic Event Cards Rendering, Search & Category Filtering
   --------------------------------------------------------------------- */
const eventList = document.getElementById('eventList');
const eventEmpty = document.getElementById('eventEmpty');
const eventSelect = document.getElementById('eventSelect');
const eventSearch = document.getElementById('eventSearch');
const eventFilters = document.getElementById('eventFilters');
const viewGridBtn = document.getElementById('viewGridBtn');
const viewTimelineBtn = document.getElementById('viewTimelineBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

let currentFilter = 'all';
let currentSearchQuery = '';

function renderEvents() {
  if (!eventList) return;

  const sorted = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));

  eventList.innerHTML = sorted.map(ev => {
    const dt = formatDateParts(ev.date);
    const cat = CATEGORY_META[ev.category] || { label: ev.category, class: 'tag-technical' };

    return `
      <article class="event-card" data-category="${ev.category}" data-id="${ev.id}">
        <div class="card-media">
          <img src="${ev.image}" alt="${ev.name}" loading="lazy">
          <div class="card-badge-row">
            <span class="category-tag ${cat.class}">${cat.label}</span>
            <span class="prize-pill">${ev.prize}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-date-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>${dt.full} · ${dt.time}</span>
          </div>
          <h3 class="card-title">${ev.name}</h3>
          <p class="card-venue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${ev.venue}</span>
          </p>
          <p class="card-desc">${ev.description}</p>
          <div class="card-footer">
            <button class="btn btn-sm btn-ghost open-details-btn" data-id="${ev.id}" type="button">
              <span>Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <div class="card-actions">
              <button class="btn btn-sm btn-primary quick-reg-btn" data-id="${ev.id}" type="button">
                <span>Register</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Populate registration select options once
  if (eventSelect && eventSelect.options.length <= 1) {
    sorted.forEach(ev => {
      const dt = formatDateParts(ev.date);
      const opt = document.createElement('option');
      opt.value = ev.id;
      opt.textContent = `${ev.name} (${dt.day} ${dt.month})`;
      eventSelect.appendChild(opt);
    });
  }

  updateCategoryCounts();
  applyFiltersAndSearch();
}

function updateCategoryCounts() {
  const counts = { all: EVENTS.length, technical: 0, workshop: 0, cultural: 0, lecture: 0 };
  EVENTS.forEach(ev => {
    if (counts[ev.category] !== undefined) counts[ev.category]++;
  });

  for (const [key, val] of Object.entries(counts)) {
    const el = document.getElementById(`count-${key}`);
    if (el) el.textContent = val;
  }
}

function applyFiltersAndSearch() {
  const query = currentSearchQuery.toLowerCase().trim();
  let visibleCount = 0;

  const cards = document.querySelectorAll('.event-card');
  cards.forEach(card => {
    const id = card.dataset.id;
    const category = card.dataset.category;
    const ev = EVENTS.find(e => e.id === id);

    const matchesCategory = (currentFilter === 'all' || category === currentFilter);
    const matchesSearch = !query ||
      ev.name.toLowerCase().includes(query) ||
      ev.description.toLowerCase().includes(query) ||
      ev.venue.toLowerCase().includes(query);

    const show = matchesCategory && matchesSearch;
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });

  if (eventEmpty) {
    eventEmpty.hidden = visibleCount > 0;
  }
}

// Category filter click handler
if (eventFilters) {
  eventFilters.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    eventFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilter = btn.dataset.filter;
    applyFiltersAndSearch();
  });
}

// Search input handler with instant debounce
if (eventSearch) {
  eventSearch.addEventListener('input', e => {
    currentSearchQuery = e.target.value;
    applyFiltersAndSearch();
  });
}

if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    if (eventSearch) eventSearch.value = '';
    currentSearchQuery = '';
    currentFilter = 'all';
    if (eventFilters) {
      eventFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
      const allChip = eventFilters.querySelector('[data-filter="all"]');
      if (allChip) allChip.classList.add('is-active');
    }
    applyFiltersAndSearch();
  });
}

// Layout Switcher: Grid vs Timeline
if (viewGridBtn && viewTimelineBtn) {
  viewGridBtn.addEventListener('click', () => {
    viewGridBtn.classList.add('is-active');
    viewTimelineBtn.classList.remove('is-active');
    eventList.classList.remove('timeline-mode');
  });

  viewTimelineBtn.addEventListener('click', () => {
    viewTimelineBtn.classList.add('is-active');
    viewGridBtn.classList.remove('is-active');
    eventList.classList.add('timeline-mode');
  });
}

/* ---------------------------------------------------------------------
   6. Quick-View Event Modal
   --------------------------------------------------------------------- */
const eventModal = document.getElementById('eventModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDate = document.getElementById('modalDate');
const modalVenue = document.getElementById('modalVenue');
const modalPrize = document.getElementById('modalPrize');
const modalTeam = document.getElementById('modalTeam');
const modalRegisterBtn = document.getElementById('modalRegisterBtn');
const modalCalBtn = document.getElementById('modalCalBtn');

let selectedModalEvent = null;

function openEventModal(eventId) {
  const ev = EVENTS.find(e => e.id === eventId);
  if (!ev || !eventModal) return;
  selectedModalEvent = ev;

  const dt = formatDateParts(ev.date);
  const cat = CATEGORY_META[ev.category] || { label: ev.category, class: 'tag-technical' };

  if (modalImg) modalImg.src = ev.image;
  if (modalCategory) {
    modalCategory.textContent = cat.label;
    modalCategory.className = `category-tag ${cat.class}`;
  }
  if (modalTitle) modalTitle.textContent = ev.name;
  if (modalDesc) modalDesc.innerHTML = `${ev.description}<br><br><strong>Detailed Agenda:</strong><br>${ev.agenda}`;
  if (modalDate) modalDate.textContent = `${dt.full} at ${dt.time}`;
  if (modalVenue) modalVenue.textContent = ev.venue;
  if (modalPrize) modalPrize.textContent = ev.prize;
  if (modalTeam) modalTeam.textContent = ev.teamSize;

  eventModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  if (!eventModal) return;
  eventModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeEventModal);
if (eventModal) {
  eventModal.addEventListener('click', e => {
    if (e.target === eventModal) closeEventModal();
  });
}

// Delegate card clicks for Quick View and Quick Register
if (eventList) {
  eventList.addEventListener('click', e => {
    const detailsBtn = e.target.closest('.open-details-btn');
    if (detailsBtn) {
      openEventModal(detailsBtn.dataset.id);
      return;
    }

    const regBtn = e.target.closest('.quick-reg-btn');
    if (regBtn) {
      const id = regBtn.dataset.id;
      if (eventSelect) eventSelect.value = id;
      const regSection = document.getElementById('register');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
      showToast(`Selected event: ${regBtn.closest('.event-card').querySelector('.card-title').textContent}`, 'info');
    }
  });
}

if (modalRegisterBtn) {
  modalRegisterBtn.addEventListener('click', () => {
    if (selectedModalEvent && eventSelect) {
      eventSelect.value = selectedModalEvent.id;
      closeEventModal();
      const regSection = document.getElementById('register');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
      showToast(`Ready to register for ${selectedModalEvent.name}!`, 'info');
    }
  });
}

if (modalCalBtn) {
  modalCalBtn.addEventListener('click', () => {
    if (selectedModalEvent) {
      window.open(generateGoogleCalendarUrl(selectedModalEvent), '_blank', 'noopener');
    }
  });
}

/* ---------------------------------------------------------------------
   7. Digital Pass E-Ticket Generator & LocalStorage Registration
   --------------------------------------------------------------------- */
const regForm = document.getElementById('regForm');
const regStatus = document.getElementById('regStatus');
const ticketModal = document.getElementById('ticketModal');
const ticketCloseBtn = document.getElementById('ticketCloseBtn');
const closePassModalBtn = document.getElementById('closePassModalBtn');
const printTicketBtn = document.getElementById('printTicketBtn');

const passTicketId = document.getElementById('passTicketId');
const passEventName = document.getElementById('passEventName');
const passStudentName = document.getElementById('passStudentName');
const passRollNo = document.getElementById('passRollNo');
const passDept = document.getElementById('passDept');
const passDateTime = document.getElementById('passDateTime');
const passQrWrap = document.getElementById('passQrWrap');

const RULES = {
  name:  { re: /^[A-Za-z][A-Za-z .'-]{1,59}$/, msg: 'Enter full name (letters, spaces, dots only).' },
  roll:  { re: /^\d{10}$/, msg: 'IEM Roll Number must be exactly 10 numeric digits.' },
  email: { re: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, msg: 'Enter a valid college or personal email.' },
  phone: { re: /^[6-9]\d{9}$/, msg: 'Enter a valid 10-digit Indian mobile number.' }
};

function setError(id, message) {
  const field = document.getElementById(id);
  const err = document.getElementById('err-' + id);
  if (field) field.classList.toggle('is-invalid', Boolean(message));
  if (err) err.textContent = message || '';
  return !message;
}

function validateField(id, rule) {
  const el = document.getElementById(id);
  if (!el) return true;
  const value = el.value.trim();
  if (!value) return setError(id, 'This field is required.');
  if (rule && !rule.re.test(value)) return setError(id, rule.msg);
  return setError(id, '');
}

function validateSelectField(id, message) {
  const el = document.getElementById(id);
  if (!el) return true;
  return setError(id, el.value ? '' : message);
}

// Generate an authentic client-side SVG QR code visual
function generateSvgQrCode(dataString) {
  // 21x21 modules standard QR look matrix simulation
  const size = 21;
  let svg = `<svg viewBox="0 0 ${size} ${size}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">`;
  svg += `<rect width="${size}" height="${size}" fill="#ffffff"/>`;

  // Draw 3 corner position finder patterns
  function drawFinder(startX, startY) {
    let res = '';
    // outer 7x7
    for (let x = 0; x < 7; x++) {
      for (let y = 0; y < 7; y++) {
        if (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4)) {
          res += `<rect x="${startX + x}" y="${startY + y}" width="1" height="1" fill="#0f172a"/>`;
        }
      }
    }
    return res;
  }

  svg += drawFinder(0, 0);
  svg += drawFinder(size - 7, 0);
  svg += drawFinder(0, size - 7);

  // Deterministic pattern pseudo-hash based on string
  let hash = 0;
  for (let i = 0; i < dataString.length; i++) {
    hash = (hash << 5) - hash + dataString.charCodeAt(i);
    hash |= 0;
  }

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      // Avoid finder zones
      const inFinder1 = (x < 8 && y < 8);
      const inFinder2 = (x >= size - 8 && y < 8);
      const inFinder3 = (x < 8 && y >= size - 8);
      if (!inFinder1 && !inFinder2 && !inFinder3) {
        if ((x * y + hash) % 3 === 0 || (x + y * 2 + (hash >> 2)) % 5 === 0) {
          svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="#0f172a"/>`;
        }
      }
    }
  }

  svg += '</svg>';
  return svg;
}

// Registration Form Submit Handler
if (regForm) {
  regForm.addEventListener('submit', e => {
    e.preventDefault();

    const isNameOk = validateField('studentName', RULES.name);
    const isRollOk = validateField('rollNo', RULES.roll);
    const isDeptOk = validateSelectField('department', 'Select your academic department.');
    const isEmailOk = validateField('email', RULES.email);
    const isPhoneOk = validateField('phone', RULES.phone);
    const isGenderOk = (() => {
      const chosen = regForm.querySelector('input[name="gender"]:checked');
      return setError('gender', chosen ? '' : 'Please select an option.');
    })();
    const isEventOk = validateSelectField('eventSelect', 'Please select an event to register.');

    const allValid = isNameOk && isRollOk && isDeptOk && isEmailOk && isPhoneOk && isGenderOk && isEventOk;

    if (allValid) {
      const studentNameVal = document.getElementById('studentName').value.trim();
      const rollNoVal = document.getElementById('rollNo').value.trim();
      const deptVal = document.getElementById('department').value;
      const emailVal = document.getElementById('email').value.trim();
      const phoneVal = document.getElementById('phone').value.trim();
      const eventIdVal = document.getElementById('eventSelect').value;
      const matchedEvent = EVENTS.find(ev => ev.id === eventIdVal) || EVENTS[0];
      const eventNameVal = matchedEvent.name;

      const ticketId = 'IEM-26-' + Math.floor(1000 + Math.random() * 9000);
      const newTicket = {
        ticketId,
        studentName: studentNameVal,
        rollNo: rollNoVal,
        department: deptVal,
        email: emailVal,
        phone: phoneVal,
        eventId: matchedEvent.id,
        eventName: eventNameVal,
        eventDate: matchedEvent.date,
        eventVenue: matchedEvent.venue,
        timestamp: new Date().toISOString()
      };

      // Save to localStorage
      saveTicket(newTicket);

      // Populate Digital Pass Modal
      if (passTicketId) passTicketId.textContent = ticketId;
      if (passEventName) passEventName.textContent = eventNameVal;
      if (passStudentName) passStudentName.textContent = studentNameVal;
      if (passRollNo) passRollNo.textContent = rollNoVal;
      if (passDept) passDept.textContent = deptVal;
      if (passDateTime) {
        const dt = formatDateParts(matchedEvent.date);
        passDateTime.textContent = `${dt.full} · ${matchedEvent.venue}`;
      }
      if (passQrWrap) {
        passQrWrap.innerHTML = generateSvgQrCode(`${ticketId}:${rollNoVal}:${matchedEvent.id}`);
      }

      // Fire Confetti!
      fireConfetti();

      // Show Ticket Pass Modal
      if (ticketModal) {
        ticketModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }

      showToast(`Pass Generated! Welcome aboard, ${studentNameVal}.`, 'success');
      regForm.reset();
      regForm.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    } else {
      showToast('Please fix the highlighted fields in the form.', 'error');
      const firstInvalid = regForm.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });

  // Live real-time field validation on input
  regForm.addEventListener('input', e => {
    const id = e.target.id;
    if (!id || !document.getElementById('err-' + id)) return;
    if (e.target.classList.contains('is-invalid')) {
      const ruleMap = { studentName: RULES.name, rollNo: RULES.roll, email: RULES.email, phone: RULES.phone };
      if (ruleMap[id]) validateField(id, ruleMap[id]);
      else if (e.target.tagName === 'SELECT') validateSelectField(id, 'Selection required.');
    }
  });
}

function closePassModal() {
  if (!ticketModal) return;
  ticketModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (ticketCloseBtn) ticketCloseBtn.addEventListener('click', closePassModal);
if (closePassModalBtn) closePassModalBtn.addEventListener('click', closePassModal);
if (ticketModal) {
  ticketModal.addEventListener('click', e => {
    if (e.target === ticketModal) closePassModal();
  });
}

// Print / Download Pass
if (printTicketBtn) {
  printTicketBtn.addEventListener('click', () => {
    window.print();
  });
}

/* ---------------------------------------------------------------------
   8. LocalStorage "My Tickets" System
   --------------------------------------------------------------------- */
function getSavedTickets() {
  try {
    const data = localStorage.getItem('iem_event_passes');
    return data ? JSON.parse(data) : [];
  } catch (_) {
    return [];
  }
}

function saveTicket(ticket) {
  try {
    const tickets = getSavedTickets();
    tickets.unshift(ticket);
    localStorage.setItem('iem_event_passes', JSON.stringify(tickets));
    updateTicketBadge();
  } catch (_) {}
}

function updateTicketBadge() {
  const badge = document.getElementById('ticketCount');
  if (badge) {
    const count = getSavedTickets().length;
    badge.textContent = count;
  }
}

const myTicketsBtn = document.getElementById('myTicketsBtn');
const myTicketsModal = document.getElementById('myTicketsModal');
const myTicketsCloseBtn = document.getElementById('myTicketsCloseBtn');
const myTicketsList = document.getElementById('myTicketsList');

function openMyTickets() {
  const tickets = getSavedTickets();
  if (!myTicketsList || !myTicketsModal) return;

  if (tickets.length === 0) {
    myTicketsList.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
        <p>You haven't registered for any events yet.</p>
        <a href="#events" class="btn btn-sm btn-primary" onclick="closeMyTickets()">Browse Events Now</a>
      </div>
    `;
  } else {
    myTicketsList.innerHTML = tickets.map(t => {
      const dt = formatDateParts(t.eventDate);
      return `
        <div style="background:var(--bg-tinted); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem; flex-wrap:wrap;">
          <div>
            <span style="font-family:monospace; font-size:0.8rem; background:rgba(245,158,11,0.15); color:var(--amber-500); padding:2px 6px; border-radius:4px; font-weight:700;">${t.ticketId}</span>
            <h4 style="margin:0.35rem 0 0.15rem 0;">${t.eventName}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">${dt.full} · ${t.studentName} (${t.rollNo})</p>
          </div>
          <button class="btn btn-sm btn-ghost" onclick="reopenTicket('${t.ticketId}')">View Pass</button>
        </div>
      `;
    }).join('');
  }

  myTicketsModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMyTickets() {
  if (!myTicketsModal) return;
  myTicketsModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

window.reopenTicket = function(ticketId) {
  const tickets = getSavedTickets();
  const t = tickets.find(item => item.ticketId === ticketId);
  if (!t) return;

  closeMyTickets();
  if (passTicketId) passTicketId.textContent = t.ticketId;
  if (passEventName) passEventName.textContent = t.eventName;
  if (passStudentName) passStudentName.textContent = t.studentName;
  if (passRollNo) passRollNo.textContent = t.rollNo;
  if (passDept) passDept.textContent = t.department;
  if (passDateTime) {
    const dt = formatDateParts(t.eventDate);
    passDateTime.textContent = `${dt.full} · ${t.eventVenue}`;
  }
  if (passQrWrap) {
    passQrWrap.innerHTML = generateSvgQrCode(`${t.ticketId}:${t.rollNo}:${t.eventId}`);
  }

  if (ticketModal) {
    ticketModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
};

if (myTicketsBtn) myTicketsBtn.addEventListener('click', openMyTickets);
if (myTicketsCloseBtn) myTicketsCloseBtn.addEventListener('click', closeMyTickets);
if (myTicketsModal) {
  myTicketsModal.addEventListener('click', e => {
    if (e.target === myTicketsModal) closeMyTickets();
  });
}

updateTicketBadge();

/* ---------------------------------------------------------------------
   9. Confetti Celebration Effect (Pure Vanilla Canvas)
   --------------------------------------------------------------------- */
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#f59e0b', '#fbbf24', '#06b6d4', '#8b5cf6', '#10b981', '#f43f5e', '#ffffff'];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: window.innerWidth * (0.3 + Math.random() * 0.4),
      y: window.innerHeight * 0.4,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      gravity: 0.35,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 8
    });
  }

  let frames = 0;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRotation;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    frames++;
    if (frames < 120) {
      requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  updateConfetti();
}

/* ---------------------------------------------------------------------
   10. Gallery Category Filter & Fullscreen Lightbox
   --------------------------------------------------------------------- */
const galleryFilters = document.getElementById('galleryFilters');
const galleryGrid = document.getElementById('galleryGrid');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentLightboxIndex = 0;
const galleryCards = document.querySelectorAll('.gallery-card');

function openLightbox(index) {
  if (!lightboxModal || !galleryCards[index]) return;
  currentLightboxIndex = index;
  const card = galleryCards[index];
  const img = card.querySelector('img');
  const caption = card.querySelector('.gallery-overlay h3');

  if (lightboxImg) lightboxImg.src = img.src;
  if (lightboxCaption) lightboxCaption.textContent = caption ? caption.textContent : '';

  lightboxModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

function showNextLightbox() {
  let next = (currentLightboxIndex + 1) % galleryCards.length;
  openLightbox(next);
}

function showPrevLightbox() {
  let prev = (currentLightboxIndex - 1 + galleryCards.length) % galleryCards.length;
  openLightbox(prev);
}

if (galleryGrid) {
  galleryGrid.addEventListener('click', e => {
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    openLightbox(parseInt(card.dataset.index, 10));
  });

  galleryGrid.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.gallery-card');
      if (card) openLightbox(parseInt(card.dataset.index, 10));
    }
  });
}

if (galleryFilters) {
  galleryFilters.addEventListener('click', e => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    galleryFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.gfilter;

    galleryCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  });
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);
if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);

if (lightboxModal) {
  lightboxModal.addEventListener('click', e => {
    if (e.target === lightboxModal) closeLightbox();
  });
}

// Global Keyboard Navigation (Esc, Left, Right)
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeEventModal();
    closePassModal();
    closeMyTickets();
    closeLightbox();
  }
  if (lightboxModal && lightboxModal.classList.contains('is-open')) {
    if (e.key === 'ArrowRight') showNextLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
  }
});

/* ---------------------------------------------------------------------
   11. Interactive FAQ Accordion
   --------------------------------------------------------------------- */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    // Close other open faqs
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('is-open');
      const otherBtn = other.querySelector('.faq-question');
      if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---------------------------------------------------------------------
   12. Feedback Form Validation & Handling
   --------------------------------------------------------------------- */
const fbForm = document.getElementById('feedbackForm');
const fbStatus = document.getElementById('fbStatus');

if (fbForm) {
  fbForm.addEventListener('submit', e => {
    e.preventDefault();

    const isNameOk = validateField('fbName', RULES.name);
    const isEmailOk = validateField('fbEmail', RULES.email);
    const isMsgOk = (() => {
      const msg = document.getElementById('fbMessage').value.trim();
      if (!msg) return setError('fbMessage', 'Please write a message before sending.');
      if (msg.length < 15) return setError('fbMessage', 'Message must be at least 15 characters.');
      return setError('fbMessage', '');
    })();

    if (isNameOk && isEmailOk && isMsgOk) {
      fbStatus.className = 'form-status ok';
      fbStatus.textContent = 'Feedback successfully transmitted! Student coordinators review all notes weekly.';
      fbForm.reset();
      showToast('Thank you! Your feedback has been sent.', 'success');
    } else {
      fbStatus.className = 'form-status bad';
      fbStatus.textContent = 'Please correct the highlighted fields above.';
    }
  });
}

/* ---------------------------------------------------------------------
   13. Reading Progress Bar & Floating Back to Top Button
   --------------------------------------------------------------------- */
const scrollProgressBar = document.getElementById('scrollProgress');
const floatingTopBtn = document.getElementById('floatingTopBtn');
const progressRing = document.getElementById('progressRing');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (scrollProgressBar) {
    scrollProgressBar.style.width = `${progressPercent}%`;
  }

  if (floatingTopBtn) {
    if (scrollTop > 350) {
      floatingTopBtn.classList.add('is-visible');
    } else {
      floatingTopBtn.classList.remove('is-visible');
    }
  }

  if (progressRing) {
    const offset = 100 - progressPercent;
    progressRing.style.strokeDashoffset = offset;
  }
});

if (floatingTopBtn) {
  floatingTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------------------------------------------------------------
   14. Fest Brochure Download Mock Preview
   --------------------------------------------------------------------- */
const brochureBtn = document.getElementById('brochureBtn');
if (brochureBtn) {
  brochureBtn.addEventListener('click', () => {
    showToast('Department Fest Brochure PDF downloaded (Simulated).', 'info');
  });
}

/* ---------------------------------------------------------------------
   15. Toast Notifications Utility
   --------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ---------------------------------------------------------------------
   16. Dark / Light Mode Toggle
   --------------------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(mode) {
  const isDark = mode === 'dark';
  document.body.classList.toggle('dark', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  try {
    localStorage.setItem('iem-events-theme', mode);
  } catch (_) {}
}

(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('iem-events-theme'); } catch (_) {}
  if (saved) return applyTheme(saved);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark');
    applyTheme(isCurrentlyDark ? 'light' : 'dark');
    showToast(`Switched to ${isCurrentlyDark ? 'Light' : 'Dark'} mode`, 'info');
  });
}

/* ---------------------------------------------------------------------
   17. Mobile Navigation & Active Section Highlighting
   --------------------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active navigation link intersection observer
if ('IntersectionObserver' in window && siteNav) {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = siteNav.querySelectorAll('a[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

// Initial render
renderEvents();
