/* ============================================================
   BOX TO GO — shared chrome, icons, and page interactions
   ============================================================ */
(function () {
  var ICONS = {
    'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    'check-circle-2': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    'leaf': '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    'list-checks': '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    'package': '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'recycle': '<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>',
    'repeat': '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    'send': '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    'sprout': '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.2-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.7Z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"/>',
    'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  };

  var NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'Products', href: 'products.html' },
    { label: 'Sustainability', href: 'sustainability.html' },
  ];
  var CONTACT_CTA = { label: 'Contact Us', href: 'contact.html' };

  var headerReady = false;
  var pageReady = false;

  function icon(name, size, opts) {
    opts = opts || {};
    size = size || 18;
    var body = ICONS[name];
    if (!body) return '';

    var fill = opts.fill ? ' fill="currentColor"' : ' fill="none"';
    var stroke = opts.fill ? '' : ' stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    var cls = opts.className ? ' class="' + opts.className + '"' : '';
    var extra = opts.attrs || '';

    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24"' + fill + stroke + cls + extra + ' aria-hidden="true">' + body + '</svg>';
  }

  function hydrateIcons(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-icon]').forEach(function (el) {
      var name = el.getAttribute('data-icon');
      var size = parseInt(el.getAttribute('data-size') || '18', 10);
      var filled = el.hasAttribute('data-fill');
      el.outerHTML = icon(name, size, { fill: filled, className: el.className || undefined });
    });
  }

  function currentPage() {
    var p = location.pathname.split('/').pop();
    return (!p || p === '') ? 'index.html' : p;
  }

  function renderHeader() {
    var root = document.getElementById('site-header');
    if (!root || headerReady) return;

    var cur = currentPage();
    var links = NAV.map(function (n) {
      var active = n.href === cur ? ' active' : '';
      return '<a href="' + n.href + '" class="nav-link' + active + ' text-[14.5px]">' + n.label + '</a>';
    }).join('');
    var mlinks = NAV.map(function (n) {
      var active = n.href === cur ? ' active' : '';
      return '<a href="' + n.href + '" class="nav-link' + active + ' text-lg py-2">' + n.label + '</a>';
    }).join('');

    root.innerHTML =
      '<header class="site-header nav" id="site-nav">' +
      '<div class="site-header__inner mx-auto max-w-wrap px-6 sm:px-8">' +
      '<div class="flex items-center gap-9 h-[74px]">' +
      '<a href="index.html" class="flex items-center gap-3 shrink-0">' +
      '<img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780683809_dwxv3d.png" alt="Box To Go" class="w-[38px] h-[38px] rounded-[9px]">' +
      '<span class="font-display font-black uppercase tracking-wide text-[17px] leading-none">Box&nbsp;To&nbsp;Go</span>' +
      '</a>' +
      '<nav class="hidden lg:flex gap-8 ml-2" aria-label="Primary">' + links + '</nav>' +
      '<div class="ml-auto flex items-center gap-4">' +
      '<a href="' + CONTACT_CTA.href + '" class="btn btn-primary hidden lg:inline-flex">' + icon('mail') + CONTACT_CTA.label + '</a>' +
      '<button type="button" id="menuBtn" class="lg:hidden text-cream p-2 -mr-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">' + icon('menu', 20) + '</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<nav id="mobileMenu" class="site-header__drawer lg:hidden hidden border-t border-line-soft bg-[rgba(6,5,4,.96)] backdrop-blur" aria-label="Mobile">' +
      '<div class="mx-auto max-w-wrap px-6 py-4 flex flex-col">' + mlinks +
      '<a href="' + CONTACT_CTA.href + '" class="btn btn-primary btn-block mt-4">' + icon('mail') + CONTACT_CTA.label + '</a>' +
      '</div>' +
      '</nav>' +
      '</header>';

    wireHeader(root);
    root.classList.add('is-ready');
    headerReady = true;
  }

  function renderFooter() {
    var root = document.getElementById('site-footer');
    if (!root || root.classList.contains('is-ready')) return;

    var cols = [
      {
        h: 'Explore', links: [
          { label: 'Home', href: 'index.html' },
          { label: 'Products', href: 'products.html' },
          { label: 'Sustainability', href: 'sustainability.html' },
          { label: 'Contact', href: 'contact.html' },
        ]
      },
    ];
    var colHTML = cols.map(function (c) {
      var ls = c.links.map(function (l) {
        return '<a href="' + l.href + '" class="block text-fg2 hover:text-gold-300 text-[14.5px] py-1.5 transition-colors">' + l.label + '</a>';
      }).join('');
      return '<div><h5 class="font-mono text-[11px] tracking-[.18em] uppercase text-fg3 mb-4">' + c.h + '</h5>' + ls + '</div>';
    }).join('');

    root.innerHTML =
      '<footer class="site-footer border-t border-line-soft pt-16 pb-10">' +
      '<div class="mx-auto max-w-wrap px-6 sm:px-8">' +
      '<div class="grid grid-cols-2 md:grid-cols-[1.4fr_1fr] gap-9">' +
      '<div class="col-span-2 md:col-span-1">' +
      '<div class="flex items-center gap-3">' +
      '<img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780683809_dwxv3d.png" alt="Box To Go" class="w-[34px] h-[34px] rounded-lg">' +
      '<span class="font-display font-black uppercase text-[15px]">Box&nbsp;To&nbsp;Go</span>' +
      '</div>' +
      '<p class="text-fg3 text-sm leading-relaxed mt-4 max-w-[260px]">Wholesale takeout containers and disposables, delivered next-day to restaurants. Now serving New York City.</p>' +
      '</div>' + colHTML +
      '</div>' +
      '<div class="mt-12 pt-6 border-t border-line-soft text-fg3 text-[13px]">' +
      '<span>© 2026 Box To Go, Inc.</span>' +
      '</div>' +
      '</div>' +
      '</footer>';

    root.classList.add('is-ready');
  }

  function wireHeader(root) {
    var header = root.querySelector('.site-header');
    var btn = root.querySelector('#menuBtn');
    var menu = root.querySelector('#mobileMenu');

    function setMenuOpen(open) {
      if (!header || !btn || !menu) return;
      header.classList.toggle('is-menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.classList.toggle('hidden', !open);
      document.body.classList.toggle('menu-open', open);
    }

    var onScroll = function () {
      if (header) header.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (btn && menu) {
      btn.addEventListener('click', function () {
        setMenuOpen(menu.classList.contains('hidden'));
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { setMenuOpen(false); });
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && header.classList.contains('is-menu-open')) setMenuOpen(false);
      });
    }
  }

  function wireReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  function wireFaq() {
    document.querySelectorAll('[data-faq] .faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q) return;
      q.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        item.closest('[data-faq]').querySelectorAll('.faq-item').forEach(function (other) {
          other.classList.remove('open');
          var oa = other.querySelector('.faq-a'); if (oa) oa.style.maxHeight = '0';
        });
        if (!isOpen) { item.classList.add('open'); if (a) a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });
  }

  function bootPage() {
    if (pageReady) return;
    renderFooter();
    hydrateIcons();
    wireReveal();
    wireFaq();
    document.body.classList.add('chrome-ready');
    pageReady = true;
  }

  window.BTG = { bootPage: bootPage, icon: icon, hydrateIcons: hydrateIcons };

  renderHeader();
})();
