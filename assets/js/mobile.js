// Mobile-only enhancements to avoid changing original behavior
(function(){
  function initMobileMenu(){
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if(!toggle || !menu) return;
    toggle.addEventListener('click', ()=> menu.classList.toggle('active'));
    menu.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', ()=> menu.classList.remove('active'));
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') menu.classList.remove('active');
    });
  }

  function initSmoothScroll(){
    const header = document.getElementById('navbar');
    const offset = header ? header.offsetHeight : 64;
    document.addEventListener('click', (e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const id = a.getAttribute('href');
      if(!id || id === '#') return;
      const target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  function enhanceImages(){
    const els = Array.from(document.images);
    els.forEach(img=>{
      if(img.complete) img.classList.add('loaded');
      else img.addEventListener('load', ()=> img.classList.add('loaded'), { once: true });
    });
    const style = document.createElement('style');
    style.textContent = 'img{opacity:.001;transition:opacity .3s ease} img.loaded{opacity:1}';
    document.head.appendChild(style);
  }

  // Run after injected content arrives (in mobile/index.html we fetch base HTML)
  const readyInterval = setInterval(()=>{
    if(document.getElementById('nav-toggle') && document.getElementById('nav-menu')){
      clearInterval(readyInterval);
      initMobileMenu();
      initSmoothScroll();
      enhanceImages();
    }
  }, 50);
})();
