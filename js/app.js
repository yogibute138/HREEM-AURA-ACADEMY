/**
 * HREEM AURA ACADEMY — Application Controller & Dynamic Router
 */

// Comprehensive 25 Course Dataset with full detail metadata
const COURSES_DATA = [
  { slug: 'lal-kitab', title: 'Lal Kitab', cat: 'numerology', icon: 'fa-book-quran', badge: 'POPULAR', desc: 'Ancient astrological science of quick remedies, planetary analysis, and practical solutions.', fullDesc: 'Lal Kitab is a unique set of books on palmistry and astrology. It introduces a brand new style of horoscope analysis with quick, effective, and non-cumbersome remedies.' },
  { slug: 'vastu', title: 'Vastu', cat: 'vastu', icon: 'fa-compass-drafting', badge: 'MASTER', desc: 'Harmonize residential and commercial living spaces for health, wealth, and spiritual peace.', fullDesc: 'Vastu Shastra is the traditional Indian system of architecture. This course covers spatial geometry, directional energies, five element balance, and non-demolition corrective remedies.' },
  { slug: 'mobile-numerology', title: 'Mobile Numerology', cat: 'numerology', icon: 'fa-mobile-screen-button', badge: 'BESTSELLER', desc: 'Align your personal mobile phone number frequency with wealth and career growth luck.', fullDesc: 'Your mobile phone number is an active daily acoustic and electromagnetic frequency magnet. Learn how to calculate, choose, and correct your mobile number for prosperity.' },
  { slug: 'mobile-yantra', title: 'Mobile Yantra', cat: 'remedies', icon: 'fa-kaaba', badge: 'REMEDY', desc: 'Sacred geometric digital yantras for mobile wallpaper activation and energy shield protection.', fullDesc: 'Discover the power of sacred geometry applied to modern digital screens. Consecrate mobile yantras to protect your aura and attract favorable synchronicities.' },
  { slug: 'money-magic-wallet', title: 'Money Magic Wallet', cat: 'remedies', icon: 'fa-wallet', badge: 'PROSPERITY', desc: 'Secrets of magnetizing money through wallet consecration, color frequencies, and sacred herbs.', fullDesc: 'Transform your wallet into an active money attractor. Learn color vibrational alignment, sacred herbal inserts, and energetic wallet discipline.' },
  { slug: 'akshat-kalash', title: 'Akshat Kalash', cat: 'remedies', icon: 'fa-jar', badge: 'SACRED', desc: 'Vedic pot ritual activation for household wealth retention and continuous divine grace.', badge: 'SACRED', fullDesc: 'Akshat Kalash is an ancient consecration ritual using energized rice, copper, and sacred herbs to stabilize wealth and invoke Goddess Lakshmi in your home.' },
  { slug: 'coin-currency-prediction', title: 'Coin Currency Prediction', cat: 'divination', icon: 'fa-coins', badge: 'ADVANCED', desc: 'Intuitive forecasting techniques using ancient currency symbols and planetary energies.', fullDesc: 'Master the art of coin divination for intuitive guidance on financial decisions, business partnerships, and market timing.' },
  { slug: 'color-therapy', title: 'Color Therapy', cat: 'healing', icon: 'fa-palette', badge: 'HEALING', desc: 'Balance chakra energy channels using specialized color frequency wavelengths and clothing.', fullDesc: 'Color therapy (Chromotherapy) uses light and color to balance energy wherever our bodies are lacking, whether physically, emotionally, or spiritually.' },
  { slug: 'crystal-therapy', title: 'Crystal Therapy', cat: 'remedies', icon: 'fa-gem', badge: 'POPULAR', desc: 'Harness high-vibrational gemstone grids for aura shield, stress reduction, and healing.', fullDesc: 'Comprehensive guide to selecting, cleansing, energizing, and programming crystals for body layouts, home grids, and wearable aura shields.' },
  { slug: 'ganesha-blessing-cards', title: 'Ganesha Blessing Cards', cat: 'divination', icon: 'fa-square-poll-vertical', badge: 'DIVINE', desc: 'Divine oracle card reading techniques to invoke Lord Ganesha for removing life obstacles.', fullDesc: 'Learn how to read and interpret sacred Lord Ganesha oracle cards for obstacle removal, new beginnings, and daily divine guidance.' },
  { slug: 'house-numerology', title: 'House Numerology', cat: 'numerology', icon: 'fa-house-chimney-window', badge: 'VASTU', desc: 'Evaluate house number vibrations to ensure harmony, family happiness, and abundance.', fullDesc: 'Every home carries a numerical vibration that influences resident relationships, peace, and financial stability. Learn how to calculate and remedy house numbers.' },
  { slug: 'money-reiki', title: 'Money Reiki', cat: 'healing', icon: 'fa-sack-dollar', badge: 'BESTSELLER', desc: 'High-frequency Reiki energy attunement specifically engineered for clearing money blocks.', fullDesc: 'Money Reiki focuses specifically on the Spiritual Energy of Money. Learn attunements, symbols, and distance healing to clear financial karma and negative beliefs.' },
  { slug: 'mojo-bag', title: 'Mojo Bag', cat: 'remedies', icon: 'fa-bag-shopping', badge: 'TALISMAN', desc: 'Creation and consecration of personalized talismanic pouch remedies for luck and shielding.', fullDesc: 'A Mojo Bag is a prayer in a bag—a personalized talisman pouch filled with botanical, mineral, and symbolic items consecrated for protection, luck, or love.' },
  { slug: 'maha-remedy', title: 'Maha Remedy', cat: 'remedies', icon: 'fa-sun', badge: 'MASTER', desc: 'Master level Vedic remedies combining herbs, yantras, and mantras for rapid life transformation.', fullDesc: 'The ultimate synthesis of Vedic remedies. Combines herbology, yantra activation, mantra recitation, and planetary timing for intense situation resolution.' },
  { slug: 'reiki-grand-master', title: 'Reiki Grand Master', cat: 'healing', icon: 'fa-crown', badge: 'GRAND MASTER', desc: 'Complete mastership in Usui Reiki, attunement passing, distance healing, and teacher level training.', fullDesc: 'The highest level of Usui Reiki training. Master the attunement processes, advanced secret symbols, student training methodologies, and deep spiritual mastery.' },
  { slug: 'rudraksha', title: 'Rudraksha', cat: 'remedies', icon: 'fa-circle-dot', badge: 'SACRED', desc: 'Mystical science of 1 to 14 Mukhi Rudraksha selection, purification, and aura alignment.', fullDesc: 'Discover the electromagnetic power of sacred Rudraksha beads. Learn mukhi classifications, planetary associations, wearing rules, and authentic testing.' },
  { slug: 'runes-prediction', title: 'Runes Prediction', cat: 'divination', icon: 'fa-scroll', badge: 'DIVINATION', desc: 'Ancient Nordic symbols divination for intuitive insight, protection, and decision making.', fullDesc: 'Explore Elder Futhark rune casting. Learn the esoteric meanings of all 24 runes, casting layouts, and how to combine rune wisdom with personal intuition.' },
  { slug: 'shiv-sharva', title: 'Shiv Sharva', cat: 'healing', icon: 'fa-om', badge: 'DIVINE', desc: 'Lord Shiva divine energy invocation practices for deep spiritual transcendence and karmic cleansing.', fullDesc: 'Sacred meditative and mantra practices dedicated to Lord Shiva for destroying negative karmic patterns, physical healing, and ultimate spiritual liberation.' },
  { slug: 'tarot-card', title: 'Tarot Card', cat: 'divination', icon: 'fa-layer-group', badge: 'BESTSELLER', desc: 'Intuitive 78-card archetypal divination masterclass for revealing past, present, and future.', fullDesc: 'Complete masterclass covering Major and Minor Arcana, court cards, intuitive interpretation, client consultation ethics, and multi-card spreads.' },
  { slug: 'vehicle-numerology', title: 'Vehicle Numerology', cat: 'numerology', icon: 'fa-car-side', badge: 'NEW', desc: 'Discover the relationship between vehicle numbers, numerological vibrations and personal energy through practical numerology guidance.', fullDesc: 'Your vehicle number plate carries continuous motion energy. Learn how vehicle numbers affect safety, travel ease, breakdowns, and personal wealth alignment.' },
  { slug: 'vision-board', title: 'Vision Board', cat: 'remedies', icon: 'fa-chart-pie', badge: 'MANIFESTATION', desc: 'Subconscious mind programming and sacred geometry manifestation vision board creation.', fullDesc: 'Combine modern neuro-plasticity principles with sacred geometry and elemental placement to build high-potency manifestation vision boards that yield results.' },
  { slug: 'matichi-matki-rituals', title: 'Matichi Matki Rituals', cat: 'remedies', icon: 'fa-vessel-filled', badge: 'RITUAL', desc: 'Traditional earthen pot remedies for absorbing household negative energy and debt relief.', fullDesc: 'Sacred earthen pot (matki) rituals rooted in traditional rural remedies for absorbing family strife, neutralizing evil eye, and stabilizing financial debt.' },
  { slug: 'vastu-reiki', title: 'Vastu Reiki', cat: 'healing', icon: 'fa-house-signal', badge: 'VASTU HEALING', desc: 'Infusing spatial structures with distance Reiki energy for clearing land doshas.', fullDesc: 'A powerful hybrid practice using high-vibrational Reiki energy to cleanse residential and commercial space land memory, structural stress, and earth energies.' },
  { slug: 'bath-salt-making', title: 'Bath Salt Making', cat: 'remedies', icon: 'fa-shower', badge: 'AURA CLEANSE', desc: 'Crafting custom herbal and crystal-infused aura cleansing bath salts for stress release.', fullDesc: 'Learn the formulation of ritual bath salts using Himalayan pink salt, essential oils, dried herbs, and crystal charges for aura cleansing and psychic relief.' },
  { slug: 'digital-marketing-course', title: 'Digital Marketing Course', cat: 'numerology', icon: 'fa-bullhorn', badge: 'BUSINESS', desc: 'Grow your spiritual practice, consultation business, and social media presence effectively.', fullDesc: 'A tailored course specifically for spiritual healers, astrologers, and tarot readers to build their online brand, social media, website presence, and client funnel.' }
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
  initCourseDetailRouter();
});

// Render 25 Courses into Grid
function renderCourses(courses) {
  const container = document.getElementById('courses-container');
  if (!container) return;

  container.innerHTML = courses.map(course => `
    <div class="course-card glass-card" data-category="${course.cat}" data-slug="${course.slug}">
      <div class="course-header">
        <div class="course-icon-wrapper">
          <i class="fa-solid ${course.icon}"></i>
        </div>
        <span class="course-badge">${course.badge}</span>
      </div>
      <h3 class="course-title">${course.title}</h3>
      <p class="course-description">${course.desc}</p>
      <div class="course-footer">
        <span class="course-action">VIEW DETAILS <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');

  // Re-bind click listeners to open Course Detail Page
  document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      const slug = card.getAttribute('data-slug');
      openCourseDetail(slug);
    });
  });

  init3DTiltEffect();
}

// Course Detail Page Router & Modal Controller
function initCourseDetailRouter() {
  const modal = document.getElementById('course-detail-modal');
  const closeBtn = document.getElementById('course-detail-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      history.pushState('', document.title, window.location.pathname + window.location.search);
    });
  }

  // Handle hash changes like #course/vehicle-numerology
  window.addEventListener('hashchange', checkHashRoute);
  checkHashRoute();
}

function checkHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#course/')) {
    const slug = hash.replace('#course/', '');
    openCourseDetail(slug, false);
  }
}

function openCourseDetail(slug, updateHash = true) {
  const course = COURSES_DATA.find(c => c.slug === slug);
  if (!course) return;

  if (updateHash) {
    window.location.hash = `course/${slug}`;
  }

  const modal = document.getElementById('course-detail-modal');
  const content = document.getElementById('course-detail-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="course-hero-badge"><i class="fa-solid ${course.icon}"></i> ${course.badge}</div>
    <h2 class="course-detail-title">${course.title}</h2>
    <p class="course-detail-intro">${course.desc}</p>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-book-open text-subtle-gold"></i> About This Course</h3>
      <p class="about-text">${course.fullDesc}</p>
    </div>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-lightbulb text-subtle-gold"></i> What You Will Learn</h3>
      <div class="learn-grid">
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Fundamentals & Core Philosophy</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Core Concepts & Principles</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Practical Hands-on Techniques</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Real-world Applications & Case Studies</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Advanced Remedies & Consecrations</span></div>
        <div class="learn-item"><i class="fa-solid fa-circle-check text-subtle-gold"></i> <span>Practical Mastery & Client Guidance</span></div>
      </div>
    </div>

    <div class="course-section-block">
      <h3 class="course-section-title"><i class="fa-solid fa-list-check text-subtle-gold"></i> Course Details & Format</h3>
      <div class="course-meta-grid">
        <div class="meta-box"><div class="meta-label">Mode</div><div class="meta-val">Live Online & Video</div></div>
        <div class="meta-box"><div class="meta-label">Duration</div><div class="meta-val">Flexible / Intensive</div></div>
        <div class="meta-box"><div class="meta-label">Language</div><div class="meta-val">Hindi / English</div></div>
        <div class="meta-box"><div class="meta-label">Certification</div><div class="meta-val">Certified by Hreem Aura Academy</div></div>
      </div>
    </div>

    <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
      <a href="https://wa.me/919552122933?text=Hello%20HREEM%20AURA%20ACADEMY,%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(course.title)}%20course." target="_blank" class="btn btn-gold">
        <i class="fa-brands fa-whatsapp"></i> WHATSAPP US TO ENQUIRE
      </a>
      <button class="btn btn-outline open-booking-modal-with-course" data-course="${course.title}">
        <i class="fa-solid fa-calendar-check"></i> BOOK CONSULTATION
      </button>
    </div>
  `;

  modal.classList.add('open');

  // Bind booking modal trigger button inside detail view
  const bookBtn = content.querySelector('.open-booking-modal-with-course');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      openModalWithService(course.title);
    });
  }
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
    const scrollPosition = window.scrollY + 200;

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
  onScrollSpy();
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

  setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonial(currentIndex);
  }, 6000);
}

// GSAP ScrollTrigger Animations
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out'
  });

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

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
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
