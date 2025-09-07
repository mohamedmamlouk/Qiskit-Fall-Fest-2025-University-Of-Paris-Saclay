/*
 * Utility Functions
 * Common utilities for the website
 */

(function() {
    'use strict';

    window.util = {
        // Debounce function
        debounce: function(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },

        // Throttle function
        throttle: function(func, limit) {
            var inThrottle;
            return function() {
                var args = arguments;
                var context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(function() { inThrottle = false; }, limit);
                }
            };
        },

        // Get scroll position
        scrollTop: function() {
            return window.pageYOffset || document.documentElement.scrollTop;
        },

        // Smooth scroll to element
        scrollTo: function(element, duration) {
            var target = typeof element === 'string' ? document.querySelector(element) : element;
            if (!target) return;

            var targetPosition = target.offsetTop;
            var startPosition = window.pageYOffset;
            var distance = targetPosition - startPosition;
            var startTime = null;

            duration = duration || 1000;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                var timeElapsed = currentTime - startTime;
                var run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        },

        // Check if element is in viewport
        inViewport: function(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Get element offset
        offset: function(element) {
            var rect = element.getBoundingClientRect();
            return {
                top: rect.top + window.pageYOffset,
                left: rect.left + window.pageXOffset
            };
        },

        // Animate element
        animate: function(element, properties, duration, callback) {
            var start = performance.now();
            var startValues = {};
            
            // Get initial values
            for (var prop in properties) {
                startValues[prop] = parseFloat(getComputedStyle(element)[prop]) || 0;
            }

            function step(timestamp) {
                var progress = Math.min((timestamp - start) / duration, 1);
                
                // Apply easing
                var easedProgress = progress < 0.5 ? 
                    2 * progress * progress : 
                    1 - Math.pow(-2 * progress + 2, 3) / 2;

                // Update properties
                for (var prop in properties) {
                    var value = startValues[prop] + (properties[prop] - startValues[prop]) * easedProgress;
                    element.style[prop] = value + (prop === 'opacity' ? '' : 'px');
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else if (callback) {
                    callback();
                }
            }

            requestAnimationFrame(step);
        },

        // Get URL parameters
        getUrlParameter: function(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            var results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        // Local storage helpers
        storage: {
            set: function(key, value) {
                try {
                    localStorage.setItem(key, JSON.stringify(value));
                } catch (e) {
                    console.warn('localStorage not available');
                }
            },
            
            get: function(key) {
                try {
                    var item = localStorage.getItem(key);
                    return item ? JSON.parse(item) : null;
                } catch (e) {
                    console.warn('localStorage not available');
                    return null;
                }
            },
            
            remove: function(key) {
                try {
                    localStorage.removeItem(key);
                } catch (e) {
                    console.warn('localStorage not available');
                }
            }
        },

        // Random utilities
        random: function(min, max) {
            return Math.random() * (max - min) + min;
        },

        // Format date
        formatDate: function(date, format) {
            var d = new Date(date);
            var formats = {
                'YYYY': d.getFullYear(),
                'MM': ('0' + (d.getMonth() + 1)).slice(-2),
                'DD': ('0' + d.getDate()).slice(-2),
                'HH': ('0' + d.getHours()).slice(-2),
                'mm': ('0' + d.getMinutes()).slice(-2),
                'ss': ('0' + d.getSeconds()).slice(-2)
            };
            
            return format.replace(/YYYY|MM|DD|HH|mm|ss/g, function(match) {
                return formats[match];
            });
        }
    };

})();
