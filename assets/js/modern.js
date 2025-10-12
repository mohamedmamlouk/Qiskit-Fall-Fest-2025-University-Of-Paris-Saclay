/**
 * Qiskit Fall Fest 2025 - Modern Interactive Features
 * University of Paris-Saclay
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeModernFeatures();
    });

    function initializeModernFeatures() {
        initSmoothScrolling();
        initTabSwitching();
        initScrollAnimations();
        initQuantumEffects();
        initMobileMenu();
        initParallaxEffects();
        initCounterAnimations();
    }

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Tab switching for schedule section
    function initTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.schedule-panel');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const targetWeek = this.getAttribute('data-week');
                
                // Remove active class from all buttons and panels
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));
                
                // Add active class to clicked button and corresponding panel
                this.classList.add('active');
                const targetPanel = document.getElementById(targetWeek);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // Scroll animations using Intersection Observer
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .speaker-card, .organizer-card, .event-card, .info-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Quantum circuit animation effects
    function initQuantumEffects() {
        // Create floating quantum particles
        createQuantumParticles();
        
        // Add quantum glow effect to certain elements
        const quantumElements = document.querySelectorAll('.quantum-effect, .cta-button, .register-btn');
        quantumElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(100, 65, 165, 0.6)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });
    }

    // Create floating quantum particles for background effect
    function createQuantumParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'quantum-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        
        document.body.appendChild(particleContainer);
        
        // Create 20 particles
        for (let i = 0; i < 20; i++) {
            createParticle(particleContainer, i);
        }
    }

    function createParticle(container, index) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(100, 65, 165, 0.8), rgba(33, 150, 243, 0.4));
            border-radius: 50%;
            left: ${left}%;
            top: 100%;
            animation: floatUp ${animationDuration}s linear infinite;
            animation-delay: ${delay}s;
            opacity: 0.7;
        `;
        
        container.appendChild(particle);
        
        // Add CSS for float animation if not already added
        if (!document.querySelector('#quantum-styles')) {
            const styles = document.createElement('style');
            styles.id = 'quantum-styles';
            styles.textContent = `
                @keyframes floatUp {
                    from {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.7;
                    }
                    to {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            particle.remove();
            createParticle(container, index);
        }, (animationDuration + delay) * 1000);
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        const nav = document.querySelector('.modern-nav .container');
        const navMenu = document.querySelector('.nav-menu');
        
        if (nav && navMenu) {
            nav.appendChild(mobileToggle);
            
            mobileToggle.addEventListener('click', function() {
                navMenu.classList.toggle('mobile-active');
            });
            
            // Add mobile styles
            const mobileStyles = document.createElement('style');
            mobileStyles.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: block !important;
                    }
                    
                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: rgba(10, 10, 11, 0.98);
                        flex-direction: column;
                        padding: 1rem;
                        transform: translateY(-100%);
                        opacity: 0;
                        transition: all 0.3s ease;
                        pointer-events: none;
                    }
                    
                    .nav-menu.mobile-active {
                        transform: translateY(0);
                        opacity: 1;
                        pointer-events: all;
                    }
                }
            `;
            document.head.appendChild(mobileStyles);
        }
    }

    // Parallax effects for hero section
    function initParallaxEffects() {
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                heroSection.style.transform = `translateY(${parallax}px)`;
            });
        }
    }

    // Animated counters for statistics
    function initCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (element) => {
            const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                const displayValue = Math.floor(current);
                const originalText = element.textContent;
                const suffix = originalText.replace(/[\d]/g, '');
                element.textContent = displayValue + suffix;
            }, 16);
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Navigation bar background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.modern-nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 11, 0.98)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.background = 'rgba(10, 10, 11, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
            }
        }
    });

    // Enhanced form interactions
    document.addEventListener('submit', function(e) {
        const form = e.target;
        if (form.matches('.registration-form')) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('.register-btn');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Registering...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                alert('Registration successful! You will receive a confirmation email shortly.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                form.reset();
            }, 2000);
        }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.nav-menu.mobile-active');
            if (mobileMenu) {
                mobileMenu.classList.remove('mobile-active');
            }
        }
    });

    // Enhanced image loading with fade-in effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Any additional scroll-based functionality can go here
        }, 10);
    });

    // Error handling for missing elements
    function safeQuerySelector(selector, callback) {
        const element = document.querySelector(selector);
        if (element && typeof callback === 'function') {
            callback(element);
        }
    }

    // Add loading states and error handling for external resources
    window.addEventListener('load', function() {
        // Hide any loading spinners
        const loaders = document.querySelectorAll('.loader');
        loaders.forEach(loader => {
            loader.style.display = 'none';
        });
        
        // Add loaded class to body for any CSS animations that should trigger after load
        document.body.classList.add('loaded');
    });

})();
