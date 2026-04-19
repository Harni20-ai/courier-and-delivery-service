/**
 * SwiftDelivery - Main JavaScript
 * Handles global interactions: Theme toggle, Mobile menu, RTL toggle, and Scroll effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initRTLSuspension(); // Demo logic for RTL
    initScrollEffects();
    initActiveLinks();
});

/**
 * Theme Management (Dark/Light Mode)
 */
function initTheme() {
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon or accessibility state
            const isExpanded = navLinks.classList.contains('active');
            toggleBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
}

/**
 * RTL Support Logic (Demo)
 */
function initRTLSuspension() {
    const rtlToggle = document.querySelector('#rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = document.documentElement.dir === 'rtl';
            if (isRTL) {
                document.documentElement.dir = 'ltr';
                document.body.removeAttribute('dir');
                localStorage.setItem('rtl', 'false');
            } else {
                document.documentElement.dir = 'rtl';
                document.body.setAttribute('dir', 'rtl');
                localStorage.setItem('rtl', 'true');
            }
        });
    }

    // Apply saved RTL state
    if (localStorage.getItem('rtl') === 'true') {
        document.documentElement.dir = 'rtl';
        document.body.setAttribute('dir', 'rtl');
    }
}

/**
 * Subtle Scroll Animations
 */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Auto-highlight active nav link
 */
function initActiveLinks() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-content a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
            // If it's inside a dropdown, also highlight the parent
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('.nav-link').classList.add('active');
            }
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Simple Form Validation Helper
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        let isValid = true;
        const inputs = form.querySelectorAll('[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, 'This field is required');
            } else {
                clearError(input);
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
}

function showError(input, message) {
    const group = input.closest('.form-group');
    if (!group) return;
    
    let error = group.querySelector('.error-message');
    if (!error) {
        error = document.createElement('span');
        error.className = 'error-message';
        error.style.color = 'red';
        error.style.fontSize = '0.8rem';
        group.appendChild(error);
    }
    error.textContent = message;
    input.style.borderColor = 'red';
}

function clearError(input) {
    const group = input.closest('.form-group');
    if (!group) return;
    const error = group.querySelector('.error-message');
    if (error) error.remove();
    input.style.borderColor = '';
}
