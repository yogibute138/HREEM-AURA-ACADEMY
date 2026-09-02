/**
 * HREEM AURA ACADEMY — Application Controller & GSAP Animation Pipeline
 * Features: Dynamic 25 Course Universe rendering, 3D card tilt micro-interactions,
 * GSAP ScrollTrigger reveals, 3D Testimonial Carousel, Modal Dialogs, Filtering,
 * and Form Submissions.
 */

// Comprehensive 25 Required Courses Data Dataset
const COURSES_DATA = [
  { id: 1, title: 'Reiki', cat: 'healing', icon: 'fa-hands-holding-circle', desc: 'Master traditional Usui Reiki energy healing for physical, mental, and emotional rejuvenation.', badge: 'FOUNDATIONAL' },
  { id: 2, title: 'Lal Kitab', cat: 'numerology', icon: 'fa-book-quran', desc: 'Ancient astrological science of quick remedies, planetary analysis, and practical solutions.', badge: 'POPULAR' },
  { id: 3, title: 'Vastu', cat: 'vastu', icon: 'fa-compass-drafting', desc: 'Harmonize residential and commercial living spaces for health, wealth, and spiritual peace.', badge: 'MASTER' },
  { id: 4, title: 'Mobile Numerology', cat: 'numerology', icon: 'fa-mobile-screen-button', desc: 'Align your personal mobile phone number frequency with wealth and career growth luck.', badge: 'BESTSELLER' },
  { id: 5, title: 'Mobile Yantra', cat: 'remedies', icon: 'fa-kaaba', desc: 'Sacred geometric digital yantras for mobile wallpaper activation and energy shield protection.', badge: 'REMEDY' },
  { id: 6, title: 'Money Magic Wallet', cat: 'remedies', icon: 'fa-wallet', desc: 'Secrets of magnetizing money through wallet consecration, color frequencies, and sacred herbs.', badge: 'PROSPERITY' },
  { id: 7, title: 'Akshat Kalash', cat: 'remedies', icon: 'fa-jar', desc: 'Vedic pot ritual activation for household wealth retention and continuous divine grace.', badge: 'SACRED' },
  { id: 8, title: 'Coin Currency Prediction', cat: 'divination', icon: 'fa-coins', desc: 'Intuitive forecasting techniques using ancient currency symbols and planetary energies.', badge: 'ADVANCED' },
  { id: 9, title: 'Color Therapy', cat: 'healing', icon: 'fa-palette', desc: 'Balance chakra energy channels using specialized color frequency wavelengths and clothing.', badge: 'HEALING' },
  { id: 10, title: 'Crystal Therapy', cat: 'remedies', icon: 'fa-gem', desc: 'Harness high-vibrational gemstone grids for aura shield, stress reduction, and healing.', badge: 'POPULAR' },
  { id: 11, title: 'Ganesha Blessing Cards', cat: 'divination', icon: 'fa-square-poll-vertical', desc: 'Divine oracle card reading techniques to invoke Lord Ganesha for removing life obstacles.', badge: 'DIVINE' },
  { id: 12, title: 'House Numerology', cat: 'numerology', icon: 'fa-house-chimney-window', desc: 'Evaluate house number vibrations to ensure harmony, family happiness, and abundance.', badge: 'VASTU' },
  { id: 13, title: 'Money Reiki', cat: 'healing', icon: 'fa-sack-dollar', desc: 'High-frequency Reiki energy attunement specifically engineered for clearing money blocks.', badge: 'BESTSELLER' },
  { id: 14, title: 'Mojo Bag', cat: 'remedies', icon: 'fa-bag-shopping', desc: 'Creation and consecration of personalized talismanic pouch remedies for luck and shielding.', badge: 'TALISMAN' },
  { id: 15, title: 'Maha Remedy', cat: 'remedies', icon: 'fa-sun', desc: 'Master level Vedic remedies combining herbs, yantras, and mantras for rapid life transformation.', badge: 'MASTER' },
  { id: 16, title: 'Tarot', cat: 'divination', icon: 'fa-layer-group', desc: 'Intuitive 78-card archetypal divination masterclass for revealing past, present, and future.', badge: 'BESTSELLER' },
  { id: 17, title: 'Angel Therapy', cat: 'healing', icon: 'fa-feather', desc: 'Connect with archangels for divine guidance, karmic cleansing, and angelic protection.', badge: 'ANGELIC' },
  { id: 18, title: 'Astrology', cat: 'numerology', icon: 'fa-star-of-david', desc: 'Vedic horoscope reading, planetary dasha transit calculation, and chart interpretation.', badge: 'FOUNDATIONAL' },
  { id: 19, title: 'Numerology', cat: 'numerology', icon: 'fa-hashtag', desc: 'Life path number, destiny number, and name correction science for personal success.', badge: 'POPULAR' },
  { id: 20, title: 'Crystal Healing', cat: 'healing', icon: 'fa-wand-magic-sparkles', desc: 'Advanced crystal layout placement for physical ailments and metaphysical aura expansion.', badge: 'HEALING' },
  { id: 21, title: 'Reiki Healing', cat: 'healing', icon: 'fa-hand-sparkles', desc: 'Hands-on and distance healing techniques for emotional trauma and physical recovery.', badge: 'CORE' },
  { id: 22, title: 'Spiritual Protection', cat: 'healing', icon: 'fa-shield-halved', desc: 'Construct psychic energy shields to safeguard yourself and family from negative energy.', badge: 'ESSENTIAL' },
  { id: 23, title: 'Chakra Healing', cat: 'healing', icon: 'fa-dharmachakra', desc: 'Deep realignment and opening of the 7 main energy centers for radiant health.', badge: 'TRANSFORMATIVE' },
  { id: 24, title: 'Meditation', cat: 'healing', icon: 'fa-spa', desc: 'Guided mindfulness, dhyana practices, and cosmic energy absorption techniques.', badge: 'MIND' },
  { id: 25, title: 'Advanced Spiritual Practices', cat: 'healing', icon: 'fa-crown', desc: 'High-level esoteric energy work, kundalini awakening safety, and spiritual leadership.', badge: 'GRAND MASTER' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderCourses(COURSES_DATA);
  initNavbarScroll();
  initMobileMenu();
  init3DTiltEffect();
  initGSAPAnimations();
  initTestimonialsCarousel();
  initModals();
  initFormHandlers();
  initProductFiltering();
  initProductInquiryHandlers();
  initScrollSpy();
});

// Render 25 Courses into Grid
function renderCourses(courses) {
  const container = document.getElementById('courses-container');
  if (!container) return;

  container.innerHTML = courses.map(course => `
    <div class="course-card glass-card" data-category="${course.cat}" data-title="${course.title}">
      <div class="course-header">
        <div class="course-icon-wrapper">
          <i class="fa-solid ${course.icon}"></i>
        </div>
        <span class="course-badge">${course.badge}</span>
      </div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.desc}</p>
      <div class="course-footer">
        <span class="course-action">EXPLORE COURSE <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');

  // Re-bind modal click listeners on newly rendered course cards
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      const courseTitle = card.getAttribute('data-title');
      openModalWithService(courseTitle);
    });
  });

  // Re-bind tilt effects
  init3DTiltEffect();
}

// Course Category Filtering
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.getAttribute('data-filter');
    if (filter === 'all') {
      renderCourses(COURSES_DATA);
    } else {
      const filtered = COURSES_DATA.filter(item => item.cat === filter);
      renderCourses(filtered);
    }
  }
});

// Product Filtering System
function initProductFiltering() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('prod-filter-btn')) {
      document.querySelectorAll('.prod-filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      const filter = e.target.getAttribute('data-prod-filter');
      const productCards = document.querySelectorAll('.products-grid .product-card');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });
}

// Product WhatsApp Direct Inquiry Handler
function initProductInquiryHandlers() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.inquire-product-btn');
    if (btn) {
      e.preventDefault();
      const productName = btn.getAttribute('data-product') || 'Sacred Product';
      const waMessage = `Hello HREEM AURA ACADEMY,\n\nI am interested in acquiring the following product and would like to know the details:\n*Product:* ${productName}`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(waMessage)}`;

      showToast(`Opening WhatsApp inquiry for ${productName}...`);
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 800);
    }
  });
}

// 3D Card Tilt Micro-Interactions
function init3DTiltEffect() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Navbar Scroll Effect & ScrollSpy
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Active Navigation Link Highlighting on Scroll (ScrollSpy)
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-menu-link');
  const sections = document.querySelectorAll('section[id]');

  const onScrollSpy = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200; // offset for fixed header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', onScrollSpy);
  onScrollSpy(); // Run once on load
}

// Mobile Menu
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const close = document.getElementById('mobile-close');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.add('open'));
  }
  if (close && menu) {
    close.addEventListener('click', () => menu.classList.remove('open'));
  }

  // Close menu when clicking link
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// Testimonials 3D Carousel
function initTestimonialsCarousel() {
  const cards = document.querySelectorAll('.testimonial-card');
  let currentIndex = 0;

  const showTestimonial = (index) => {
    cards.forEach((card, idx) => {
      card.classList.remove('active');
      if (idx === index) {
        card.classList.add('active');
      }
    });
  };

  const nextBtn = document.getElementById('next-testimonial');
  const prevBtn = document.getElementById('prev-testimonial');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showTestimonial(currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showTestimonial(currentIndex);
    });
  }

  // Auto transition every 6s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonial(currentIndex);
  }, 6000);
}

// GSAP ScrollTrigger Animations
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Reveal Animation
  gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Section Headers Reveal
  gsap.utils.toArray('.section-tag, .section-title, .section-subtitle').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  });

  // About Section Image Reveal
  gsap.from('.about-image-wrapper', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 75%'
    },
    scale: 0.85,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });

  // Services Cards Reveal
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });
}

// Modal Dialog Handlers
function initModals() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('.open-booking-modal, .open-webinar-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}

function openModalWithService(serviceName) {
  const modal = document.getElementById('booking-modal');
  const select = document.getElementById('service-select');
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
  }
  if (modal) modal.classList.add('open');
}

// Form Handlers & WhatsApp Inquiry Redirection
function initFormHandlers() {
  const mainForm = document.getElementById('main-contact-form');
  const modalForm = document.getElementById('modal-form');

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('full-name')?.value || '';
      const phone = document.getElementById('phone')?.value || '';
      const service = document.getElementById('service-select')?.value || 'Spiritual Consultation';
      const msg = document.getElementById('message')?.value || '';

      const waMessage = `Hello HREEM AURA ACADEMY,\n\nI would like to book a consultation.\n*Name:* ${name}\n*Phone:* ${phone}\n*Service/Course:* ${service}\n*Message:* ${msg}`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(waMessage)}`;

      showToast('Redirecting to WhatsApp for instant booking...');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        mainForm.reset();
      }, 800);
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = modalForm.querySelectorAll('.form-input');
      const name = inputs[0]?.value || '';
      const phone = inputs[1]?.value || '';
      const datetime = inputs[2]?.value || '';

      const waMessage = `Hello HREEM AURA ACADEMY,\n\nI would like to book a consultation session.\n*Name:* ${name}\n*Phone/WhatsApp:* ${phone}\n*Preferred Date/Time:* ${datetime}`;
      const waUrl = `https://wa.me/919552122933?text=${encodeURIComponent(waMessage)}`;

      showToast('Booking Request Received! Opening WhatsApp...');
      document.getElementById('booking-modal').classList.remove('open');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        modalForm.reset();
      }, 800);
    });
  }
}

// Notification Toast Utility
function showToast(message) {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      padding: 1.25rem 2rem;
      background: rgba(18, 2, 5, 0.95);
      border: 1px solid var(--gold-primary);
      border-radius: 16px;
      color: var(--cream);
      font-family: var(--font-heading);
      box-shadow: 0 15px 35px rgba(0,0,0,0.8), 0 0 20px var(--gold-glow);
      z-index: 3000;
      transition: all 0.4s ease;
      transform: translateY(100px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-subtle-gold"></i> ${message}`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 4500);
}
