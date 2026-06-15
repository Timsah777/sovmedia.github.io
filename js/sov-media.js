(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // --- NAV: transparent → frosted on scroll ---
    var header = document.getElementById('site-header');
    if (header) {
      function updateNav() {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
      updateNav();
      window.addEventListener('scroll', updateNav, { passive: true });
    }

    // --- MOBILE MENU ---
    var hamburger = document.querySelector('[data-hamburger]');
    var mobileMenu = document.querySelector('[data-mobile-menu]');
    var backdrop = document.querySelector('[data-mobile-backdrop]');

    if (hamburger && mobileMenu) {
      function openMenu() {
        mobileMenu.classList.add('is-open');
        if (backdrop) backdrop.classList.add('is-visible');
        document.body.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
      }
      function closeMenu() {
        mobileMenu.classList.remove('is-open');
        if (backdrop) backdrop.classList.remove('is-visible');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
      hamburger.addEventListener('click', function () {
        mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
      });
      if (backdrop) backdrop.addEventListener('click', closeMenu);
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
      var closeBtn = document.querySelector('[data-mobile-close]');
      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      mobileMenu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    }

    // --- SCROLL REVEAL (L2) ---
    var els = document.querySelectorAll('.animate');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { obs.observe(el); });

    // --- VIDEO SKIP (data-skip="N" → start N seconds in, bypass text intros) ---
    function applySkip(v) {
      var s = parseFloat(v.dataset.skip);
      if (!s) return;
      if (v.readyState >= 1) {
        v.currentTime = s;
      } else {
        v.addEventListener('loadedmetadata', function () { v.currentTime = s; }, { once: true });
      }
    }
    document.querySelectorAll('[data-skip]').forEach(applySkip);

    // --- LAZY VIDEO PLAY (gallery & portfolio) ---
    var videoEls = document.querySelectorAll('.gallery-video, .portfolio-video');
    if (videoEls.length) {
      var vidObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.play().catch(function () {});
          } else {
            e.target.pause();
          }
        });
      }, { threshold: 0.2 });
      videoEls.forEach(function (v) { vidObs.observe(v); });
    }

    // --- VIDEO LIGHTBOX ---
    var lightbox = document.getElementById('video-lightbox');
    var lbVideo  = document.getElementById('lightbox-video');
    var lbClose  = document.getElementById('lightbox-close');

    if (lightbox && lbVideo) {
      function openLightbox(src, poster, label) {
        lbVideo.poster = poster || '';
        lbVideo.src    = src;
        var meta = lightbox.querySelector('.video-lightbox-meta');
        if (meta) meta.textContent = label || '';
        lightbox.classList.add('is-open');
        lbVideo.play().catch(function () {});
        document.body.style.overflow = 'hidden';
      }
      function closeLightbox() {
        lightbox.classList.remove('is-open');
        lbVideo.pause();
        setTimeout(function () { lbVideo.src = ''; }, 320);
        document.body.style.overflow = '';
      }

      document.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {
          var vid = item.querySelector('.gallery-video');
          if (!vid) return;
          var src = (vid.querySelector('source') || vid).src;
          var cat = (item.closest('.gallery-section') || document).querySelector('.section-tag');
          openLightbox(src, vid.poster, cat ? cat.textContent : '');
        });
      });

      document.querySelectorAll('.portfolio-item').forEach(function (item) {
        item.addEventListener('click', function () {
          var vid = item.querySelector('.portfolio-video');
          if (!vid) return;
          var src = (vid.querySelector('source') || vid).src;
          var cat  = item.querySelector('.portfolio-cat');
          var lbl  = item.querySelector('.portfolio-label');
          openLightbox(src, vid.poster, (cat ? cat.textContent : '') + (lbl ? '  ·  ' + lbl.textContent : ''));
        });
      });

      if (lbClose) lbClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
    }

  });
})();

/* ─── Hero Timecode (Viewfinder-HUD) ─────────────────────── */
(function () {
  function start() {
    var el = document.querySelector('[data-timecode]');
    if (!el) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.textContent = '00:00:00:00'; return; }
    var t0 = performance.now();
    function p(n) { return String(n).padStart(2, '0'); }
    function tick(now) {
      var t = (now - t0) / 1000;
      el.textContent = p(Math.floor(t / 3600) % 24) + ':' + p(Math.floor(t / 60) % 60) + ':' + p(Math.floor(t) % 60) + ':' + p(Math.floor(t * 24) % 24);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

/* ─── Service-Cards: Video nur beim Hover ─────────────────── */
(function () {
  function init() {
    document.querySelectorAll('.service-card-hovervid').forEach(function (v) {
      var card = v.closest('.service-card');
      if (!card) return;
      card.addEventListener('mouseenter', function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); });
      card.addEventListener('mouseleave', function () { v.pause(); try { v.currentTime = 0; } catch (e) {} });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
