document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.reading-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    });
  }

  const themeBtn = document.querySelector('.btn-theme-couture');
  const savedTheme = localStorage.getItem('carrycouture_theme');
  if (savedTheme === 'atelier-light') {
    document.body.classList.add('theme-atelier-light');
    if (themeBtn) themeBtn.textContent = 'Noir Palette';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('theme-atelier-light');
      themeBtn.textContent = isLight ? 'Noir Palette' : 'Atelier Light';
      localStorage.setItem('carrycouture_theme', isLight ? 'atelier-light' : 'noir');
    });
  }

  const mobileToggle = document.querySelector('.mobile-toggle-couture');
  const navMenu = document.querySelector('.couture-nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'var(--bg-couture-surface)';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = 'var(--shadow-lux)';
        navMenu.style.borderBottom = '1px solid var(--gold-border)';
      }
    });
  }

  const leatherSelect = document.getElementById('workbench-leather-select');
  const hardwareSelect = document.getElementById('workbench-hardware-select');
  const tensileDisplay = document.getElementById('metric-tensile');
  const patinaDisplay = document.getElementById('metric-patina');
  const hoursDisplay = document.getElementById('metric-hours');

  function updateCoutureMetrics() {
    if (!leatherSelect || !hardwareSelect) return;
    const leather = leatherSelect.value;
    const hardware = hardwareSelect.value;

    let tensile = '320 N/mm (Ultra-Dense)';
    let patina = 'Caramelizes over 15+ Yrs';
    let hours = '48 Handcraft Hours';

    if (leather === 'boxcalf') {
      tensile = '380 N/mm (High Tensile)';
      patina = 'Gloss Mirror Glaze (5-8 Yrs)';
      hours = '54 Handcraft Hours';
    } else if (leather === 'togo') {
      tensile = '290 N/mm (Supple Grain)';
      patina = 'Scratch-Proof Natural Luster';
      hours = '42 Handcraft Hours';
    } else if (leather === 'barenia') {
      tensile = '410 N/mm (Double Tanned)';
      patina = 'Rich Honey Amber (2-4 Yrs)';
      hours = '62 Handcraft Hours';
    } else if (leather === 'chevre') {
      tensile = '340 N/mm (Fine Grain)';
      patina = 'Supple Matte Sheen (10+ Yrs)';
      hours = '46 Handcraft Hours';
    }

    if (hardware === 'palladium') {
      hours = (parseInt(hours, 10) + 4) + ' Handcraft Hours';
    }

    if (tensileDisplay) tensileDisplay.textContent = tensile;
    if (patinaDisplay) patinaDisplay.textContent = patina;
    if (hoursDisplay) hoursDisplay.textContent = hours;
  }

  if (leatherSelect && hardwareSelect) {
    leatherSelect.addEventListener('change', updateCoutureMetrics);
    hardwareSelect.addEventListener('change', updateCoutureMetrics);
    updateCoutureMetrics();
  }

  const faqBtns = document.querySelectorAll('.faq-couture-btn');
  if (faqBtns.length > 0) {
    faqBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-couture-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    });
  }

  const searchInput = document.getElementById('couture-search-input');
  const blogCards = document.querySelectorAll('.blog-couture-card');
  if (searchInput && blogCards.length > 0) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      blogCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = (q === '' || text.includes(q)) ? 'flex' : 'none';
      });
    });
  }
});