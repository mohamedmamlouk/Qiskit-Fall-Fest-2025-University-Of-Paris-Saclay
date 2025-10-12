// Minimal JS: mobile menu toggle, smooth scrolling, and image fade-in
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initSmoothScrolling();
        enhanceImages();
    });

    function initMobileMenu() {
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close menu after clicking a link
        menu.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => menu.classList.remove('active'));
        });

        // Close on ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') menu.classList.remove('active');
        });
    }

    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href')?.slice(1);
                const target = targetId ? document.getElementById(targetId) : null;
                if (target) {
                    e.preventDefault();
                    const offsetTop = Math.max(target.offsetTop - 72, 0);
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });
    }

    function enhanceImages() {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                img.addEventListener('load', function () {
                    this.style.opacity = '1';
                });
            }
        });
    }
})();
