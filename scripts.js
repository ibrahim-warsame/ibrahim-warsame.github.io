// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Skills Data
const skills = [
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Git', icon: 'fab fa-git-alt' }
];

// Projects Data
const projects = [
    {
        title: 'Personal Finance Tracker',
        description: 'A web application to track income, expenses, and savings with data visualization features.',
        icon: 'fas fa-chart-line',
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js'],
        links: [
            { text: 'Live Demo', url: '#' },
            { text: 'View Code', url: '#' }
        ]
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-featured e-commerce website with user authentication and payment processing.',
        icon: 'fas fa-shopping-cart',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        links: [
            { text: 'Live Demo', url: '#' },
            { text: 'View Code', url: '#' }
        ]
    },
    {
        title: 'AI Image Classifier',
        description: 'Machine learning model that classifies images into different categories.',
        icon: 'fas fa-robot',
        tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
        links: [
            { text: 'Live Demo', url: '#' },
            { text: 'View Code', url: '#' }
        ]
    }
];

// Experience Data
const experiences = [
    {
        title: 'Founder & Developer',
        company: 'E-Commerce Startup',
        date: 'Mar 2024 - Present',
        description: 'Founded and developed an e-commerce platform from scratch, overseeing all technical aspects and business strategy.',
        skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration']
    },
    {
        title: 'Freelance Software Engineer',
        company: 'Fiverr',
        date: 'Jan 2025 - Present',
        description: 'Developed custom software solutions for clients including web applications, automation tools, and backend systems.',
        skills: ['JavaScript', 'Python', 'PHP', 'Django']
    },
    {
        title: 'Microsoft Learn Student Ambassador',
        company: 'Microsoft',
        date: 'Apr 2025 - Present',
        description: 'Represented Microsoft\'s student developer community, organized tech events, and promoted technology learning.',
        skills: ['Public Speaking', 'Community Building', 'Technical Workshops']
    }
];

// Render Skills
function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-card';
        skillElement.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h4>${skill.name}</h4>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
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
                    ${project.links.map(link => `<a href="${link.url}">${link.text} <i class="fas fa-arrow-right"></i></a>`).join('')}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Render Experience
function renderExperience() {
    const experienceContainer = document.getElementById('experienceContainer');
    
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <div class="experience-header">
                <h3>${exp.title}</h3>
                <span class="experience-date">${exp.date}</span>
            </div>
            <div class="experience-company">${exp.company}</div>
            <p class="experience-description">${exp.description}</p>
            <div class="experience-skills">
                ${exp.skills.map(skill => `<span class="experience-skill">${skill}</span>`).join('')}
            </div>
        `;
        experienceContainer.appendChild(expElement);
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

// Smooth scrolling for anchor links
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
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderProjects();
    renderExperience();
});
