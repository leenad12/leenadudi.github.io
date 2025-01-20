// Select all sections
const sections = document.querySelectorAll('section');

// Intersection Observer to animate sections on scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add the "active" class when in view
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, { threshold: 0.3 }); // Trigger when 30% of the section is visible

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
