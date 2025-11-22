// Main JavaScript file for Defend the Truth Ministries

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Validate that href is a valid anchor link
            if (targetId && targetId.startsWith('#') && /^#[a-zA-Z0-9_-]+$/.test(targetId)) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active class to current section in viewport
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px'
    };

    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Validate and sanitize the ID before using it in a selector
                const sectionId = entry.target.id;
                if (sectionId && /^[a-zA-Z0-9_-]+$/.test(sectionId)) {
                    // Add active class to corresponding nav link
                    const activeLink = document.querySelector(`.nav-menu a[href="#${CSS.escape(sectionId)}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
