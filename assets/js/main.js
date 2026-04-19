// Hamburger menu toggle
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
})();

// Scroll animations with IntersectionObserver
(function () {
    var selectors = [
        'section h2',
        '.project-card',
        '.experience-item',
        '.press-item',
        '.talk-item',
        '.about-content',
        '.contact-cards',
        '.contact-intro',
        '.contact-location'
    ];

    var elements = document.querySelectorAll(selectors.join(','));

    elements.forEach(function (el) {
        el.classList.add('fade-in-up');
    });

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        elements.forEach(function (el) {
            el.classList.add('visible');
        });
    }
})();
