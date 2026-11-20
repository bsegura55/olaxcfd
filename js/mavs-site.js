(() => {
  const phone = '56989234239';
  const page = document.body.dataset.page || 'inicio';
  const collectionPages = ['plata-piedras','miyuki','alambrismo'];
  const activeNav = collectionPages.includes(page) ? 'catalogo' : page;

  const navItems = [
    ['inicio','Inicio','index.html'],
    ['catalogo','Catálogo','galeria.html'],
    ['historia','Nuestra historia','nosotros.html'],
    ['tienda','Tienda','tienda.html'],
    ['contacto','Contacto','contacto.html']
  ];

  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
      <header class="site-header-inner">
        <div class="topbar"><div class="topbar-inner">
          <span><i class="fa-regular fa-gem"></i> Joyería artesanal</span>
          <span><i class="fa-solid fa-heart"></i> Diseños con identidad</span>
          <span><i class="fa-regular fa-handshake"></i> Atención cercana</span>
          <div class="topbar-social"><a href="https://www.instagram.com/mavs_jewelry/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="https://www.tiktok.com/@mavs_jewerly" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a><a href="https://wa.me/${phone}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a></div>
        </div></div>
        <div class="nav-wrap"><div class="nav-panel">
          <a class="brand-link" href="index.html" aria-label="MAVS JEWELRY, inicio"><img src="images/mavs/logo-web.png" alt="Logo oficial MAVS JEWELRY"></a>
          <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
          <nav class="main-nav" aria-label="Navegación principal"><ul>${navItems.map(([key,label,url]) => `<li><a class="${activeNav===key?'active':''}" href="${url}">${label}</a></li>`).join('')}</ul></nav>
          <div class="nav-actions"><a href="galeria.html" aria-label="Buscar en el catálogo" title="Buscar"><i class="fa-solid fa-magnifying-glass"></i></a><a href="galeria.html#favoritos" aria-label="Ver favoritos" title="Favoritos"><i class="fa-regular fa-heart"></i></a><a href="https://wa.me/${phone}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp" title="Consultar"><i class="fa-solid fa-bag-shopping"></i></a></div>
        </div></div>
      </header>`;
    const toggle = header.querySelector('.nav-toggle');
    toggle?.addEventListener('click', () => {
      const open = header.querySelector('.main-nav').classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer"><div class="shell footer-grid">
        <div class="footer-brand"><img src="images/mavs/logo-web-footer.png" alt="MAVS JEWELRY"><p>Joyería artesanal con identidad, elegancia y significado.</p><div class="footer-social"><a href="https://www.instagram.com/mavs_jewelry/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="https://www.tiktok.com/@mavs_jewerly" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a><a href="https://www.facebook.com/profile.php?id=61570840502174" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></div></div>
        <div class="footer-column"><h3>Explora</h3><a href="index.html">Inicio</a><a href="galeria.html">Catálogo</a><a href="nosotros.html">Nuestra historia</a><a href="tienda.html">La tienda</a><a href="contacto.html">Contacto</a></div>
        <div class="footer-column"><h3>Colecciones</h3><a href="plata-piedras.html">Plata y piedras</a><a href="miyuki.html">Mostacilla Miyuki</a><a href="alambrismo.html">Alambrismo</a></div>
        <div class="footer-column footer-contact"><h3>Hablemos</h3><a href="https://wa.me/${phone}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> +56 9 8923 4239</a><a href="mailto:mavenegas.s.mv@gmail.com"><i class="fa-regular fa-envelope"></i> mavenegas.s.mv@gmail.com</a><a href="https://www.instagram.com/mavs_jewelry/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> @mavs_jewelry</a><a href="https://www.tiktok.com/@mavs_jewerly" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i> @mavs_jewerly</a><a href="https://www.facebook.com/profile.php?id=61570840502174" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i> Mavs Jewelry</a></div>
      </div><div class="footer-bottom"><div class="shell"><span>© ${new Date().getFullYear()} MAVS JEWELRY</span><span>Creado con dedicación ♡</span></div></div></footer>`;
  }

  const products = window.MAVS_PRODUCTS || [];
  const getFavorites = () => {
    try { return JSON.parse(localStorage.getItem('mavs-favorites') || '[]'); }
    catch { return []; }
  };
  const setFavorites = list => localStorage.setItem('mavs-favorites', JSON.stringify(list));
  const waLink = name => `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, vi la pieza “${name}” en la página de MAVS JEWELRY. Quisiera consultar su disponibilidad y precio.`)}`;
  const collectionName = key => ({plata:'Plata y piedras',miyuki:'Mostacilla Miyuki',alambrismo:'Alambrismo'}[key] || 'MAVS JEWELRY');

  function productCard(p, favs) {
    const isFav = favs.includes(p.id);
    return `<article class="product-card" data-id="${p.id}">
      <div class="product-image-wrap"><a class="product-image-link" href="${waLink(p.name)}" target="_blank" rel="noopener" aria-label="Consultar por ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a><span class="product-tag">${collectionName(p.collection)}</span><button class="favorite-button ${isFav?'is-favorite':''}" type="button" data-favorite="${p.id}" aria-label="${isFav?'Quitar de':'Agregar a'} favoritos"><i class="${isFav?'fa-solid':'fa-regular'} fa-heart"></i></button></div>
      <div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div><div class="product-card-bottom"><span class="price-label">Consultar precio</span><a class="product-consult" href="${waLink(p.name)}" target="_blank" rel="noopener">Consultar <i class="fa-solid fa-arrow-right"></i></a></div></div>
    </article>`;
  }

  function renderGrids() {
    document.querySelectorAll('[data-product-grid]').forEach(grid => {
      const collection = grid.dataset.collection || 'all';
      const featured = grid.dataset.featured === 'true';
      const normalizedCollection = collection === 'plata-piedras' ? 'plata' : collection;
      let selected = products.filter(p => collection === 'all' || p.collection === normalizedCollection);
      if (featured) selected = products.filter(p => p.featured).slice(0,4);
      grid.innerHTML = selected.map(p => productCard(p, getFavorites())).join('');
    });
  }
  renderGrids();

  document.addEventListener('click', event => {
    const favorite = event.target.closest('[data-favorite]');
    if (!favorite) return;
    const id = favorite.dataset.favorite;
    let favs = getFavorites();
    favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
    setFavorites(favs);
    const card = favorite.closest('.product-card');
    const selected = favs.includes(id);
    favorite.classList.toggle('is-favorite', selected);
    favorite.innerHTML = `<i class="${selected?'fa-solid':'fa-regular'} fa-heart"></i>`;
    favorite.setAttribute('aria-label', `${selected?'Quitar de':'Agregar a'} favoritos`);
    const favoriteFilter = document.querySelector('[data-favorites-only]');
    if (favoriteFilter?.classList.contains('active')) applyCatalogFilters();
  });

  const filters = {collection:'all', types:[], favorites:false};
  function applyCatalogFilters() {
    const grid = document.querySelector('.catalog-products');
    if (!grid) return;
    const visible = products.filter(p => {
      const okCollection = filters.collection === 'all' || p.collection === filters.collection;
      const okType = filters.types.length === 0 || filters.types.includes(p.type);
      const okFavorite = !filters.favorites || getFavorites().includes(p.id);
      return okCollection && okType && okFavorite;
    });
    grid.innerHTML = visible.map(p => productCard(p, getFavorites())).join('');
    const count = document.querySelector('[data-result-count]');
    if (count) count.textContent = `${visible.length} ${visible.length === 1 ? 'pieza' : 'piezas'}`;
    const empty = document.querySelector('[data-empty-state]');
    if (empty) empty.hidden = visible.length > 0;
  }
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    filters.collection = btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    applyCatalogFilters();
  }));
  document.querySelectorAll('[data-type]').forEach(input => input.addEventListener('change', () => {
    filters.types = [...document.querySelectorAll('[data-type]:checked')].map(x => x.dataset.type);
    applyCatalogFilters();
  }));
  document.querySelector('[data-clear-filters]')?.addEventListener('click', () => {
    filters.collection = 'all'; filters.types = []; filters.favorites = false;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    document.querySelectorAll('[data-type]').forEach(i => i.checked = false);
    document.querySelector('[data-favorites-only]')?.classList.remove('active');
    applyCatalogFilters();
  });
  document.querySelector('[data-favorites-only]')?.addEventListener('click', event => {
    filters.favorites = !filters.favorites;
    event.currentTarget.classList.toggle('active', filters.favorites);
    applyCatalogFilters();
  });
  const initialType = new URLSearchParams(location.search).get('tipo');
  if (initialType && ['aros','collares','pulseras'].includes(initialType) && page === 'catalogo') {
    filters.types = [initialType];
    const typeInput = document.querySelector(`[data-type="${initialType}"]`);
    if (typeInput) typeInput.checked = true;
    applyCatalogFilters();
  }
  if (location.hash === '#favoritos' && page === 'catalogo') {
    filters.favorites = true;
    document.querySelector('[data-favorites-only]')?.classList.add('active');
    applyCatalogFilters();
  }

  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get('asunto'));
    const body = encodeURIComponent(`Nombre: ${data.get('nombre')}\nCorreo: ${data.get('correo')}\n\n${data.get('mensaje')}`);
    window.location.href = `mailto:mavenegas.s.mv@gmail.com?subject=${subject}&body=${body}`;
  });
})();
