document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    const texts = ["Computer Science Engineer", "AI/ML Enthusiast", "Problem Solver", "Tech Lover"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 100 : 150;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 1000);

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav ul');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Skill Progress Bars Animation
    const skills = document.querySelectorAll('.skill');
    function animateSkills() {
        skills.forEach(skill => {
            const percent = skill.getAttribute('data-percent');
            const progress = skill.querySelector('.progress');
            progress.style.width = `${percent}%`;
        });
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });

    // About Section Animation
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
        },
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Education Timeline Animation
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.education',
            start: 'top 70%',
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Experience Animation
    gsap.from('.experience-card', {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 70%',
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.certification-item', {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 70%',
        },
        duration: 1,
        x: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Projects Animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 70%',
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Achievements Animation
    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: '.achievements',
            start: 'top 70%',
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Contact Animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
        },
        duration: 1,
        x: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    // Intersection Observer for Skills Animation
    const aboutSection = document.querySelector('.about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutSection);

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
});
