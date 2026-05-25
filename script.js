// Winged Delegates - Website JavaScript

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate form
    const artTitle = formData.get('artTitle').trim();
    const artistName = formData.get('artistName').trim();
    const email = formData.get('email').trim();
    const school = formData.get('school').trim();
    const description = formData.get('description').trim();
    
    if (!artTitle || !artistName || !email || !school || !description) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message
    alert('Thank you for your submission! We will review your artwork and contact you if you are selected. Good luck!');
    
    // Reset form
    form.reset();
    
    // In a real application, you would send this data to a server
    // For now, we'll just log it to console
    console.log('Form submitted with data:', Object.fromEntries(formData));
}

// Attach form submission handler
const artForm = document.getElementById('artSubmissionForm');
if (artForm) {
    artForm.addEventListener('submit', handleSubmit);
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe section containers
document.querySelectorAll('.section-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Winged Delegates website loaded successfully!');
    
    // You can add more initialization code here
});
