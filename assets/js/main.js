/*
 * Main JavaScript
 * Handles navigation, animations, and user interactions
 */

(function($) {
    'use strict';

    var $window = $(window);
    var $body = $('body');
    var $wrapper = $('#wrapper');
    var $header = $('#header');
    var $main = $('#main');
    var $nav = $header.find('nav');
    var $articles = $main.find('article');

    // Settings
    var settings = {
        delay: 325,
        transition: 'fade'
    };

    // State
    var state = {
        initial: location.hash || '#about',
        locked: false,
        currentArticle: null
    };

    // Initialize
    function init() {
        // Remove preload class
        setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);

        // Setup navigation
        setupNavigation();
        
        // Setup articles
        setupArticles();
        
        // Handle initial state
        handleInitialState();
        
        // Setup scroll effects
        setupScrollEffects();
        
        // Setup form handlers
        setupFormHandlers();
        
        // Setup animations
        setupAnimations();
    }

    // Setup navigation
    function setupNavigation() {
        $nav.find('a').on('click', function(e) {
            var href = $(this).attr('href');
            
            // Handle internal links
            if (href && href.charAt(0) === '#') {
                e.preventDefault();
                
                var $target = $(href);
                if ($target.length) {
                    showArticle(href.substring(1));
                    window.history.pushState(null, null, href);
                }
            }
        });

        // Handle browser back/forward
        $window.on('popstate', function() {
            var hash = location.hash || '#about';
            showArticle(hash.substring(1));
        });

        // Handle escape key
        $window.on('keydown', function(e) {
            if (e.keyCode === 27) { // Escape key
                hideAllArticles();
            }
        });
    }

    // Setup articles
    function setupArticles() {
        $articles.each(function() {
            var $article = $(this);
            var id = $article.attr('id');
            
            // Setup close functionality
            $article.on('click', function(e) {
                if (e.target === this) {
                    hideAllArticles();
                }
            });

            // Add close button
            $article.prepend('<div class="close">✕</div>');
            $article.find('.close').on('click', function() {
                hideAllArticles();
            });
        });
    }

    // ===== MOBILE MENU TOGGLE =====
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('nav-menu-mobile');
        const toggle = document.getElementById('nav-toggle');
        
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
            toggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else {
            mobileMenu.style.display = 'flex';
            toggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeMobileMenu() {
        const mobileMenu = document.getElementById('nav-menu-mobile');
        const toggle = document.getElementById('nav-toggle');
        
        mobileMenu.style.display = 'none';
        toggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('nav-menu-mobile');
        const toggle = document.getElementById('nav-toggle');
        
        if (!toggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            if (mobileMenu.style.display === 'flex') {
                closeMobileMenu();
            }
        }
    });

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 968) {
        closeMobileMenu();
    }
});
    
    // Handle initial state
    function handleInitialState() {
        var initialArticle = state.initial.substring(1) || 'about';
        showArticle(initialArticle);
    }

    // Show article
    function showArticle(id) {
        if (state.locked) return;
        
        var $article = $('#' + id);
        if (!$article.length) return;

        state.locked = true;

        // Hide current article
        if (state.currentArticle) {
            hideArticle(state.currentArticle, function() {
                displayArticle($article, id);
            });
        } else {
            displayArticle($article, id);
        }
    }

    // Display article
    function displayArticle($article, id) {
        // Update nav
        $nav.find('a').removeClass('active');
        $nav.find('a[href="#' + id + '"]').addClass('active');

        // Show article
        $article.addClass('active');
        $article.fadeIn(settings.delay, function() {
            state.currentArticle = id;
            state.locked = false;
        });

        // Trigger article-specific setup
        setupArticleContent($article, id);
    }

    // Hide article
    function hideArticle(id, callback) {
        var $article = $('#' + id);
        
        $article.fadeOut(settings.delay, function() {
            $article.removeClass('active');
            if (callback) callback();
        });
    }

    // Hide all articles
    function hideAllArticles() {
        if (state.currentArticle) {
            hideArticle(state.currentArticle, function() {
                state.currentArticle = null;
                $nav.find('a').removeClass('active');
                window.history.pushState(null, null, '/');
            });
        }
    }

    // Setup article-specific content
    function setupArticleContent($article, id) {
        switch (id) {
            case 'schedule':
                setupScheduleInteractions($article);
                break;
            case 'speakers':
                setupSpeakerCards($article);
                break;
            case 'organizers':
                setupOrganizerCards($article);
                break;
            case 'register':
                setupRegistrationForm($article);
                break;
        }
    }

    // Setup schedule interactions
    function setupScheduleInteractions($article) {
        $article.find('.schedule-table tr').each(function() {
            var $row = $(this);
            if (!$row.is('thead tr')) {
                $row.on('click', function() {
                    $row.addClass('highlighted');
                    setTimeout(function() {
                        $row.removeClass('highlighted');
                    }, 1000);
                });
            }
        });
    }

    // Setup speaker cards
    function setupSpeakerCards($article) {
        $article.find('.speaker').each(function() {
            var $speaker = $(this);
            
            $speaker.on('mouseenter', function() {
                $(this).addClass('hovered');
            }).on('mouseleave', function() {
                $(this).removeClass('hovered');
            });
        });
    }

    // Setup organizer cards
    function setupOrganizerCards($article) {
        $article.find('.organizer').each(function() {
            var $organizer = $(this);
            
            $organizer.on('mouseenter', function() {
                $(this).addClass('hovered');
            }).on('mouseleave', function() {
                $(this).removeClass('hovered');
            });
        });
    }

    // Setup registration form
    function setupRegistrationForm($article) {
        // Add loading state for iframe
        var $iframe = $article.find('iframe');
        if ($iframe.length) {
            $iframe.on('load', function() {
                $(this).addClass('loaded');
            });
        }

        // Track registration attempts
        $article.find('a[href*="forms"]').on('click', function() {
            trackEvent('registration', 'attempt', 'google-form');
        });
    }

    // Setup scroll effects
    function setupScrollEffects() {
        var throttledScroll = util.throttle(function() {
            var scrollTop = util.scrollTop();
            var windowHeight = $window.height();
            
            // Parallax effect for background
            var bgOffset = scrollTop * 0.5;
            $('#bg').css('transform', 'translateY(' + bgOffset + 'px)');
            
            // Update navigation based on scroll
            updateNavigationOnScroll(scrollTop, windowHeight);
        }, 16);

        $window.on('scroll', throttledScroll);
    }

    // Update navigation based on scroll
    function updateNavigationOnScroll(scrollTop, windowHeight) {
        // Add/remove scrolled class to header
        if (scrollTop > 100) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    }

    // Setup form handlers
    function setupFormHandlers() {
        // Contact form
        $main.find('form').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmission($(this));
        });
    }

    // Handle form submission
    function handleFormSubmission($form) {
        var $submit = $form.find('input[type="submit"], button[type="submit"]');
        var originalText = $submit.val() || $submit.text();
        
        // Show loading state
        $submit.prop('disabled', true);
        $submit.val('Sending...').text('Sending...');
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            $submit.prop('disabled', false);
            $submit.val('Message Sent!').text('Message Sent!');
            
            setTimeout(function() {
                $submit.val(originalText).text(originalText);
            }, 2000);
        }, 1000);
    }

    // Setup animations
    function setupAnimations() {
        // Animate elements on scroll
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.speaker, .organizer, .schedule-table, .registration-info').forEach(function(el) {
            observer.observe(el);
        });
    }

    // Track events (Google Analytics or similar)
    function trackEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        console.log('Event tracked:', category, action, label);
    }

    // Utility functions specific to this site
    var siteUtils = {
        // Check if registration is open
        isRegistrationOpen: function() {
            var now = new Date();
            var deadline = new Date('2025-10-30');
            return now < deadline;
        },

        // Get event countdown
        getEventCountdown: function() {
            var now = new Date();
            var eventStart = new Date('2025-10-14');
            var diff = eventStart - now;
            
            if (diff <= 0) return null;
            
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            return { days: days, hours: hours, minutes: minutes };
        },

        // Update countdown display
        updateCountdown: function() {
            var countdown = this.getEventCountdown();
            var $countdown = $('.countdown');
            
            if (countdown && $countdown.length) {
                $countdown.html(
                    '<span class="days">' + countdown.days + '</span> days, ' +
                    '<span class="hours">' + countdown.hours + '</span> hours, ' +
                    '<span class="minutes">' + countdown.minutes + '</span> minutes'
                );
            }
        }
    };

    // Start countdown timer
    function startCountdownTimer() {
        siteUtils.updateCountdown();
        setInterval(function() {
            siteUtils.updateCountdown();
        }, 60000); // Update every minute
    }

    // Handle responsive behavior
    function handleResponsive() {
        breakpoints.on('small', function(matches) {
            if (matches) {
                $body.addClass('mobile-nav');
            } else {
                $body.removeClass('mobile-nav');
            }
        });
    }

    // Initialize when DOM is ready
    $(function() {
        init();
        startCountdownTimer();
        handleResponsive();
    });

    // Handle window resize
    $window.on('resize', util.debounce(function() {
        // Recalculate any size-dependent elements
        handleResponsive();
    }, 250));

    // Handle focus for accessibility
    $window.on('keydown', function(e) {
        if (e.keyCode === 9) { // Tab key
            $body.addClass('is-keyboard-nav');
        }
    });

    $window.on('click', function() {
        $body.removeClass('is-keyboard-nav');
    });

    // Export to global scope for debugging
    window.site = {
        showArticle: showArticle,
        hideAllArticles: hideAllArticles,
        utils: siteUtils,
        state: state
    };

})(jQuery);
