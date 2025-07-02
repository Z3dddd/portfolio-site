// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Project Navigation
const projectItems = document.querySelectorAll('.project-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// Initialize project counter
function updateProjectCounter() {
    projectItems.forEach((item, index) => {
        const counter = document.createElement('div');
        counter.className = 'project-counter';
        counter.textContent = `${index + 1} / ${projectItems.length}`;
        item.appendChild(counter);
    });
}

// Navigation functions
function showProject(index) {
    projectItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 50);
        } else {
            item.style.display = 'none';
        }
    });
    currentIndex = index;
    updateNavigationButtons();
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projectItems.length;
    showProject(currentIndex);
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
    showProject(currentIndex);
}

function updateNavigationButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === projectItems.length - 1;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', prevProject);
nextBtn.addEventListener('click', nextProject);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevProject();
    } else if (e.key === 'ArrowRight') {
        nextProject();
    }
});

// Intersection Observer for animations
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

// Observe project items for animation
projectItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Project item click handlers
projectItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Add your project detail modal or navigation logic here
        console.log(`Clicked on project ${index + 1}`);
        
        // Example: Open project in new tab (replace with your actual project URLs)
        const projectUrls = [
            '#project1',
            '#project2', 
            '#project3',
            '#project4',
            '#project5',
            '#project6'
        ];
        
        // Uncomment the line below if you want to navigate to project pages
        // window.open(projectUrls[index], '_blank');
    });
});

// Image loading optimization
function preloadImages() {
    const images = document.querySelectorAll('.project-image img');
    images.forEach(img => {
        if (img.complete) {
            img.parentElement.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.parentElement.classList.add('loaded');
            });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateProjectCounter();
    preloadImages();
    
    // Add loading animation removal
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(imageContainer => {
        const img = imageContainer.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                imageContainer.style.setProperty('--loaded', 'true');
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add CSS for loaded state
const style = document.createElement('style');
style.textContent = `
    .project-image.loaded::before {
        display: none;
    }
    
    .project-image {
        --loaded: false;
    }
    
    .project-image[style*="--loaded: true"]::before {
        display: none;
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for sections
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

sections.forEach(section => {
    section.classList.add('section-animate');
    sectionObserver.observe(section);
});

// Add CSS for section animations
const sectionStyle = document.createElement('style');
sectionStyle.textContent = `
    .section-animate {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .section-animate.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(sectionStyle); 