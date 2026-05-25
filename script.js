// ============================================
// WINGED DELEGATES - WEBSITE JAVASCRIPT
// ============================================

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation active state on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Basic validation
    const artistName = formData.get('artistName').trim();
    const email = formData.get('email').trim();
    const artworkTitle = formData.get('artworkTitle').trim();
    const artworkDescription = formData.get('artworkDescription').trim();
    
    if (!artistName || !email || !artworkTitle || !artworkDescription) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show success message
    showNotification(
        `Thank you, ${artistName}! Your artwork "${artworkTitle}" has been submitted. We'll review it and contact you within 2 weeks.`,
        'success'
    );
    
    // Log submission (in production, this would send to a server)
    console.log('Form submitted:', {
        artistName,
        email,
        artworkTitle,
        artworkDescription,
        medium: formData.get('medium')
    });
    
    // Reset form
    this.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '2000',
        maxWidth: '400px',
        animation: 'slideUp 0.3s ease-out',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    });
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00d4ff, #00ff88)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ff0055, #ff6b6b)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #8a2be2, #00d4ff)';
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
    
    .nav-link.active {
        color: #00d4ff;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Parallax scroll effect on hero section
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const animatedBg = document.querySelector('.animated-bg');
    
    if (hero && animatedBg) {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            animatedBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    }
});

// Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add interactive hover effects to cards
document.querySelectorAll('.feature, .info-card, .officer-card, .value-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Mobile menu toggle (if needed for future expansion)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        // Mobile menu functionality can be added here
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    console.log('Winged Delegates website loaded successfully!');
});

// Responsive listener
window.addEventListener('resize', () => {
    initMobileMenu();
});
