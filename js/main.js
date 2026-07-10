(function () {
  'use strict';

  /* ---- Gallery image lists ---- */
  const MONUMENTS = [
    'photo_1_2026-07-09_17-49-16.jpg',
    'photo_2_2026-07-09_17-49-16.jpg',
    'photo_3_2026-07-09_17-49-16.jpg',
    'photo_4_2026-07-09_17-49-16.jpg',
    'photo_5_2026-07-09_17-49-16.jpg',
    'photo_6_2026-07-09_17-49-16.jpg',
    'photo_7_2026-07-09_17-49-16.jpg',
    'photo_8_2026-07-09_17-49-16.jpg',
    'photo_9_2026-07-09_17-49-16.jpg',
    'photo_10_2026-07-09_17-49-16.jpg',
    'photo_11_2026-07-09_17-49-16.jpg',
    'photo_12_2026-07-09_17-49-16.jpg',
    'photo_13_2026-07-09_17-49-16.jpg',
    'photo_14_2026-07-09_17-49-16.jpg',
    'photo_15_2026-07-09_17-49-16.jpg',
    'photo_16_2026-07-09_17-49-16.jpg',
    'photo_17_2026-07-09_17-49-16.jpg',
    'photo_18_2026-07-09_17-49-16.jpg',
    'photo_19_2026-07-09_17-49-16.jpg',
    'photo_20_2026-07-09_17-49-16.jpg',
  ];

  const COMPLEXES = [
    'photo_1_2026-07-09_17-46-32.jpg',
    'photo_2_2026-07-09_17-46-32.jpg',
    'photo_3_2026-07-09_17-46-32.jpg',
    'photo_4_2026-07-09_17-46-32.jpg',
    'photo_5_2026-07-09_17-46-32.jpg',
    'photo_6_2026-07-09_17-46-32.jpg',
    'photo_7_2026-07-09_17-46-32.jpg',
    'photo_8_2026-07-09_17-46-32.jpg',
    'photo_9_2026-07-09_17-46-32.jpg',
    'photo_10_2026-07-09_17-46-32.jpg',
    'photo_1_2026-07-09_17-48-54.jpg',
    'photo_2_2026-07-09_17-48-54.jpg',
    'photo_1_2026-07-10_11-06-23.jpg',
    'photo_2_2026-07-10_11-06-23.jpg',
    'photo_3_2026-07-10_11-06-23.jpg',
    'photo_4_2026-07-10_11-06-23.jpg',
    'photo_5_2026-07-10_11-06-23.jpg',
    'photo_6_2026-07-10_11-06-23.jpg',
    'photo_7_2026-07-10_11-06-23.jpg',
    'photo_8_2026-07-10_11-06-23.jpg',
    'photo_9_2026-07-10_11-06-23.jpg',
    'photo_10_2026-07-10_11-06-23.jpg',
    'photo_11_2026-07-10_11-06-23.jpg',
    'photo_12_2026-07-10_11-06-23.jpg',
    'photo_13_2026-07-10_11-06-23.jpg',
    'photo_14_2026-07-10_11-06-23.jpg',
    'photo_15_2026-07-10_11-06-23.jpg',
  ];

  const DOUBLE_MONUMENTS = [
    'photo_1_2026-07-10_10-46-04.jpg',
    'photo_2_2026-07-10_10-46-04.jpg',
    'photo_3_2026-07-10_10-46-04.jpg',
    'photo_4_2026-07-10_10-46-04.jpg',
    'photo_5_2026-07-10_10-46-04.jpg',
    'photo_6_2026-07-10_10-46-04.jpg',
    'photo_7_2026-07-10_10-46-04.jpg',
    'photo_8_2026-07-10_10-46-04.jpg',
    'photo_9_2026-07-10_10-46-04.jpg',
    'photo_10_2026-07-10_10-46-04.jpg',
    'photo_11_2026-07-10_10-46-04.jpg',
  ];

  const ENGRAVINGS = [
    'photo_1_2026-07-10_10-44-23.jpg',
    'photo_2_2026-07-10_10-44-23.jpg',
    'photo_4_2026-07-10_10-44-23.jpg',
    'photo_5_2026-07-10_10-44-23.jpg',
    'photo_6_2026-07-10_10-44-23.jpg',
    'photo_7_2026-07-10_10-44-23.jpg',
    'photo_8_2026-07-10_10-44-23.jpg',
    'photo_9_2026-07-10_10-44-23.jpg',
    'photo_10_2026-07-10_10-44-23.jpg',
    'photo_11_2026-07-10_10-44-23.jpg',
    'photo_12_2026-07-10_10-44-23.jpg',
    'photo_13_2026-07-10_10-44-23.jpg',
    'photo_14_2026-07-10_10-44-23.jpg',
    'photo_15_2026-07-10_10-44-23.jpg',
    'photo_16_2026-07-10_10-44-23.jpg',
    'photo_17_2026-07-10_10-44-23.jpg',
    'photo_18_2026-07-10_10-44-23.jpg',
  ];

  /* ---- DOM refs ---- */
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav__link');
  const lightbox = document.getElementById('lightbox');
  const lightboxStage = document.getElementById('lightboxStage');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const yearEl = document.getElementById('year');

  let currentGallery = [];
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let touchDeltaY = 0;
  let isSwiping = false;
  let didSwipe = false;
  let swipeAxis = null;
  const SWIPE_THRESHOLD = 50;
  const SWIPE_UP_THRESHOLD = 70;

  function resetLightboxImageStyles() {
    lightboxImg.style.transform = '';
    lightboxImg.style.opacity = '';
    lightboxImg.classList.remove('is-dragging');
  }

  /* ---- Init ---- */
  yearEl.textContent = new Date().getFullYear();

  buildGallery('monumentsGallery', 'granite_monuments', MONUMENTS, 'Пам\'ятник Granitex');
  buildGallery('complexesGallery', 'granite_complexes', COMPLEXES, 'Гранітний комплекс Granitex');
  buildGallery('doubleMonumentsGallery', 'double_monuments', DOUBLE_MONUMENTS, 'Подвійний пам\'ятник Granitex');
  buildGallery('engravingsGallery', 'additional_engravings', ENGRAVINGS, 'Додаткове гравіювання Granitex');

  /* ---- Gallery builder ---- */
  function buildGallery(containerId, folder, images, altPrefix) {
    const container = document.getElementById(containerId);
    if (!container) return;

    images.forEach(function (filename, index) {
      const item = document.createElement('div');
      item.className = 'gallery__item reveal' + (index === 0 ? ' gallery__item--featured' : '');
      item.style.setProperty('--reveal-delay', (index * 0.05) + 's');
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', altPrefix + ' ' + (index + 1));

      const img = document.createElement('img');
      img.src = folder + '/' + filename;
      img.alt = altPrefix + ' ' + (index + 1);
      img.loading = index < 4 ? 'eager' : 'lazy';
      img.decoding = 'async';

      const zoom = document.createElement('span');
      zoom.className = 'gallery__zoom';
      zoom.setAttribute('aria-hidden', 'true');
      zoom.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';

      item.appendChild(img);
      item.appendChild(zoom);

      item.addEventListener('click', function () {
        openLightbox(images.map(function (f) { return folder + '/' + f; }), index);
      });

      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(images.map(function (f) { return folder + '/' + f; }), index);
        }
      });

      container.appendChild(item);
    });
  }

  /* ---- Lightbox ---- */
  function openLightbox(images, index) {
    currentGallery = images;
    currentIndex = index;
    showLightboxImage();
    lightbox.hidden = false;
    requestAnimationFrame(function () {
      lightbox.classList.add('lightbox--open');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
    resetLightboxImageStyles();
    setTimeout(function () {
      lightbox.hidden = true;
      lightboxImg.src = '';
    }, 300);
  }

  function showLightboxImage(direction) {
    resetLightboxImageStyles();

    if (direction) {
      lightboxImg.style.transform = 'translateX(' + (direction * 40) + 'px)';
      lightboxImg.style.opacity = '0';
    }

    lightboxImg.src = currentGallery[currentIndex];
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + currentGallery.length;

    if (direction) {
      requestAnimationFrame(function () {
        lightboxImg.style.transform = 'translateX(0)';
        lightboxImg.style.opacity = '1';
      });
    }
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
    showLightboxImage(direction);
  }

  function onLightboxTouchStart(e) {
    if (lightbox.hidden || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    touchDeltaY = 0;
    isSwiping = false;
    didSwipe = false;
    swipeAxis = null;
    lightboxImg.classList.add('is-dragging');
  }

  function onLightboxTouchMove(e) {
    if (lightbox.hidden || e.touches.length !== 1) return;

    var deltaX = e.touches[0].clientX - touchStartX;
    var deltaY = e.touches[0].clientY - touchStartY;

    if (!swipeAxis) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      swipeAxis = Math.abs(deltaY) > Math.abs(deltaX) ? 'y' : 'x';
      isSwiping = true;
    }

    e.preventDefault();

    if (swipeAxis === 'x') {
      touchDeltaX = deltaX;
      lightboxImg.style.transform = 'translateX(' + deltaX + 'px)';
      lightboxImg.style.opacity = String(1 - Math.min(Math.abs(deltaX) / 280, 0.4));
      return;
    }

    touchDeltaY = deltaY;

    if (deltaY < 0) {
      lightboxImg.style.transform = 'translateY(' + deltaY + 'px)';
      lightboxImg.style.opacity = String(1 - Math.min(Math.abs(deltaY) / 220, 0.55));
      return;
    }

    lightboxImg.style.transform = 'translateY(' + (deltaY * 0.25) + 'px)';
    lightboxImg.style.opacity = String(1 - Math.min(deltaY / 240, 0.2));
  }

  function onLightboxTouchEnd() {
    if (lightbox.hidden) return;
    lightboxImg.classList.remove('is-dragging');

    if (isSwiping && swipeAxis === 'y' && touchDeltaY < -SWIPE_UP_THRESHOLD) {
      didSwipe = true;
      lightboxImg.style.transform = 'translateY(-140px)';
      lightboxImg.style.opacity = '0';
      setTimeout(closeLightbox, 180);
      swipeAxis = null;
      isSwiping = false;
      return;
    }

    if (isSwiping && swipeAxis === 'x' && Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
      didSwipe = true;
      if (touchDeltaX < 0) navigateLightbox(1);
      else navigateLightbox(-1);
      swipeAxis = null;
      isSwiping = false;
      return;
    }

    resetLightboxImageStyles();
    swipeAxis = null;
    isSwiping = false;
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
  lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

  lightboxStage.addEventListener('touchstart', onLightboxTouchStart, { passive: true });
  lightboxStage.addEventListener('touchmove', onLightboxTouchMove, { passive: false });
  lightboxStage.addEventListener('touchend', onLightboxTouchEnd, { passive: true });
  lightboxStage.addEventListener('touchcancel', onLightboxTouchEnd, { passive: true });

  lightbox.addEventListener('click', function (e) {
    if (didSwipe) {
      didSwipe = false;
      return;
    }
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  /* ---- Mobile nav ---- */
  function setNavOpen(isOpen) {
    navMenu.classList.toggle('nav__menu--open', isOpen);
    navToggle.classList.toggle('nav__toggle--open', isOpen);
    navBackdrop.classList.toggle('nav__backdrop--visible', isOpen);
    header.classList.toggle('header--menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navBackdrop.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeNav() {
    setNavOpen(false);
  }

  navToggle.addEventListener('click', function () {
    setNavOpen(!navMenu.classList.contains('nav__menu--open'));
  });

  navBackdrop.addEventListener('click', closeNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
      closeNav();
    }
  });

  /* ---- Scroll: header + active nav ---- */
  var sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }, { passive: true });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---- Contact form ---- */
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
    var valid = true;

    [name, phone, message].forEach(function (field) {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });

    if (!valid) return;

    formSuccess.hidden = false;
    contactForm.reset();

    setTimeout(function () {
      formSuccess.hidden = true;
    }, 5000);
  });

})();
