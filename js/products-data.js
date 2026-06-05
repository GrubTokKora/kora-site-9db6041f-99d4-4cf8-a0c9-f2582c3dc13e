/* ============================================================
   BOX TO GO — product categories & locations (shared data)
   ============================================================ */
(function () {
  var PRODUCTS = [
    { slug: 'takeout_containers', title: 'Take out Containers', items: 21, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687215_da59gc.jpg', featured: true },
    { slug: 'deli_containers', title: 'Deli Containers', items: 5, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687159_6gj34l.jpg' },
    { slug: 'cups_n_lids', title: 'Cups N Lids', items: 17, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687142_gbnxus.jpg', featured: true },
    { slug: 'sauce_cups_lids', title: 'Sauce cups & Lids', items: 8, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687209_7yid27.jpg' },
    { slug: 'aluminum_trays', title: 'Aluminum Trays', items: 8, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687108_nkfqsq.jpg' },
    { slug: 'bags', title: 'Bags', items: 13, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687116_d8tr82.jpg' },
    { slug: 'clamshell_hinged_containers', title: 'Clamshell / Hinged Containers', items: 13, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687127_ub55ia.jpg' },
    { slug: 'cutlery', title: 'Cutlery', items: 11, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687152_935xef.jpg', featured: true },
    { slug: 'disposable_apparel', title: 'Disposable Apparel', items: 11, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687166_d7tn15.jpg' },
    { slug: 'foils_and_wraps', title: 'Foils and Wraps', items: 11, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687182_5d5z4i.jpg' },
    { slug: 'paper_napkins', title: 'Paper Napkins', items: 5, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687196_vq4wl7.jpg' },
    { slug: 'janitorial_supplies', title: 'Janitorial Supplies', items: 8, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687190_ewh4j1.jpg' },
    { slug: 'plates_bowls_and_trays', title: 'Plates, Bowls and Trays', items: 11, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687203_2oyhvg.jpg' },
    { slug: 'thermal_roll', title: 'Thermal Roll', items: 1, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687221_3ms1lk.jpg' },
    { slug: 'chafing_fuel', title: 'Chafing Fuel', items: 2, image: 'https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/9db6041f-99d4-4cf8-a0c9-f2582c3dc13e/de8c94d8-887e-4625-825f-ec262dbc28df/1780687122_0b10kc.jpg' },
  ];

  var LOCATIONS = [
    { city: 'Chicago', region: 'Greater Chicago area', url: 'https://boxtogochicago.com/', cta: 'Shop Chicago' },
    { city: 'Texas', region: 'Greater Austin area', url: 'https://boxtogoatx.com/', cta: 'Shop Texas' },
  ];

  function itemLabel(n) {
    return n + (n === 1 ? ' item' : ' items');
  }

  function productCardHTML(p, idx) {
    var delay = (idx % 4) * 80;
    return '' +
      '<article class="reveal product-card card-h" style="transition-delay:' + delay + 'ms">' +
      '<div class="product-card__media">' +
      '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy" />' +
      '<div class="product-card__overlay">' +
      '<h3 class="font-display font-bold text-[17px] leading-tight">' + p.title + '</h3>' +
      '<p class="font-mono text-[12px] text-gold-300 tracking-wide mt-1">' + itemLabel(p.items) + '</p>' +
      '</div>' +
      '</div>' +
      '</article>';
  }

  function ic(name, size) {
    return window.BTG ? window.BTG.icon(name, size || 18) : '';
  }

  function locationCardHTML(loc, idx) {
    var delay = idx * 90;
    return '' +
      '<div class="reveal location-card card-h bg-ink-1 border border-line rounded-2xl p-7 flex flex-col items-center text-center" style="transition-delay:' + delay + 'ms">' +
      '<div class="w-[46px] h-[46px] rounded-xl border-[1.5px] border-gold-700 text-gold-400 flex items-center justify-center shrink-0">' +
      ic('map-pin', 22) +
      '</div>' +
      '<h3 class="font-display font-extrabold text-2xl mt-5">' + loc.city + '</h3>' +
      '<p class="text-fg2 text-[15px] mt-1.5">' + loc.region + '</p>' +
      '<p class="text-fg3 text-[14px] leading-relaxed mt-3 flex-1 max-w-[300px]">Order from your local storefront — browse inventory, place orders, and track deliveries.</p>' +
      '<a href="' + loc.url + '" class="btn btn-primary btn-block mt-6" target="_blank" rel="noopener noreferrer">' +
      loc.cta + ' ' + ic('external-link') +
      '</a>' +
      '</div>';
  }

  function renderProductGrid(container, opts) {
    if (!container) return;
    opts = opts || {};
    var list = PRODUCTS;
    if (opts.featuredOnly) list = PRODUCTS.filter(function (p) { return p.featured; });
    if (opts.limit) list = list.slice(0, opts.limit);

    container.innerHTML = list.map(productCardHTML).join('');
    observeReveals(container);
  }

  function renderLocationGrid(container) {
    if (!container) return;
    container.innerHTML = LOCATIONS.map(locationCardHTML).join('');
    observeReveals(container);
  }

  function observeReveals(root) {
    var els = root.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  window.BTG_PRODUCTS = {
    PRODUCTS: PRODUCTS,
    LOCATIONS: LOCATIONS,
    renderProductGrid: renderProductGrid,
    renderLocationGrid: renderLocationGrid,
  };
})();
