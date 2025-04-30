// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Skills Data
const skills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 
    'React.js', 'Node.js', 'MongoDB', 'SQL', 
    'Docker', 'Azure AI'
];

// Experience Data
const experiences = [
    {
        title: 'Founder',
        company: 'E-Commerce Startup',
        period: 'Mar 2024 - Present',
        description: 'Founded and developed an e-commerce platform, overseeing all aspects from technical development to strategic direction.',
        responsibilities: [
            'Led the design and implementation of key features including product listings, payment gateways, and order management systems',
            'Managed a team of developers and designers to build a user-friendly platform',
            'Implemented secure authentication and optimized the platform for performance'
        ]
    },
    {
        title: 'Software Engineer (Freelance)',
        company: 'Fiverr',
        period: 'Jan 2025 - Present',
        description: 'Delivered custom software solutions for clients worldwide.',
        responsibilities: [
            'Specialized in web development, backend systems, and automation solutions',
            'Collaborated with clients to gather requirements and design user-friendly interfaces',
            'Developed high-quality, maintainable code using Python, JavaScript, PHP, React, Node.js, and Django'
        ]
    },
    {
        title: 'Student Ambassador',
        company: 'Microsoft Learn',
        period: 'Apr 2025 - Present',
        description: 'Represented Microsoft\'s student developer community and promoted technology learning.'
    }
];

// Projects Data
const projects = [
    {
        title: 'Personal Finance Tracker',
        description: 'A web application to track income, expenses, and savings with data visualization features.',
        icon: 'fas fa-chart-line',
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js'],
        links: [
            { text: 'View Project', url: '#' },
            { text: 'View Code', url: '#' }
        ]
    },
    {
        title: 'E-Commerce Website',
        description: 'Full-featured e-commerce platform with user authentication and Stripe payment processing.',
        icon: 'fas fa-shopping-cart',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        links: [
            { text: 'View Project', url: '#' },
            { text: 'View Code', url: '#' }
        ]
    }
];

// Render Skills
function renderSkills() {
    const skillsContainer = document.querySelector('.skills-tags');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'skill-tag';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });
}

// Render Experiences
function renderExperiences() {
    const experiencesContainer = document.querySelector('.experience-grid');
    
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        
        let responsibilitiesHTML = '';
        if (exp.responsibilities) {
            responsibilitiesHTML = `<ul>${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>`;
        }
        
        expElement.innerHTML = `
            <div class="experience-header">
                <h3>${exp.title}</h3>
                <span>${exp.company} | ${exp.period}</span>
            </div>
            <p>${exp.description}</p>
            ${responsibilitiesHTML}
        `;
        
        experiencesContainer.appendChild(expElement);
    });
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        
        projectElement.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => `<a href="${link.url}">${link.text} →</a>`).join('')}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderExperiences();
    renderProjects();
});
