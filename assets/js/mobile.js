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

  function initCountdown(){
    const el = document.getElementById('countdown');
    if(!el) return;
    const eventDate = new Date('2025-11-17T09:00:00');
    function update(){
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) { el.innerHTML = 'Event Started!'; return; }
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff/(1000*60*60)) % 24);
      const m = Math.floor((diff/(1000*60)) % 60);
      const s = Math.floor((diff/1000) % 60);
      const set = (id,val)=>{ const n=document.getElementById(id); if(n) n.textContent=String(val).padStart(2,'0'); };
      set('days', d); set('hours', h); set('minutes', m); set('seconds', s);
    }
    update();
    setInterval(update, 1000);
  }

  function initScheduleTabs(){
    const tabButtons = document.querySelectorAll('.tab-button');
    const dayContents = document.querySelectorAll('.day-content');
    if(!tabButtons.length || !dayContents.length) return;
    const animate = ()=>{
      const activeEvents = document.querySelectorAll('.day-content.active .event-item');
      activeEvents.forEach((event, index)=>{
        event.style.opacity='0';
        event.style.transform='translateY(20px)';
        setTimeout(()=>{
          event.style.transition='all 0.3s ease';
          event.style.opacity='1';
          event.style.transform='translateY(0)';
        }, index*100);
      });
    };
    tabButtons.forEach(btn=>{
      btn.addEventListener('click', function(){
        const targetDay = this.getAttribute('data-day');
        tabButtons.forEach(b=>b.classList.remove('active'));
        dayContents.forEach(c=>c.classList.remove('active'));
        this.classList.add('active');
        const panel = document.getElementById(targetDay);
        if(panel){ panel.classList.add('active'); setTimeout(animate,50); }
      });
    });
    animate();
  }

  // Run after injected content arrives (in mobile/index.html we fetch base HTML)
  const readyInterval = setInterval(()=>{
    if(document.getElementById('nav-toggle') && document.getElementById('nav-menu')){
      clearInterval(readyInterval);
      initMobileMenu();
      initSmoothScroll();
      enhanceImages();
      initCountdown();
      initScheduleTabs();
    }
  }, 50);
})();
