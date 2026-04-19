// Theme toggle
(function () {
    var btn = document.querySelector('.theme-toggle');
    if (btn) {
        btn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme');
            var next;
            if (current === 'dark') {
                next = 'light';
            } else if (current === 'light') {
                next = 'dark';
            } else {
                next = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
            }
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
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
            threshold: 0,
            rootMargin: '0px 0px 50px 0px'
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
