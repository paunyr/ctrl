// CTRL Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Question/Answer functionality
    const options = document.querySelectorAll('.option');
    
    if (options.length > 0) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Get the parent question element
                const question = this.closest('.question');
                
                // Get the answer elements
                const answers = question.querySelectorAll('.answer');
                
                // Hide all answers first
                answers.forEach(answer => {
                    answer.classList.remove('show');
                });
                
                // Show the corresponding answer
                const answerType = this.getAttribute('data-answer');
                if (answerType) {
                    const targetAnswer = question.querySelector(`.answer[data-answer="${answerType}"]`);
                    if (targetAnswer) {
                        targetAnswer.classList.add('show');
                    }
                }
                
                // Highlight the selected option
                const siblingOptions = question.querySelectorAll('.option');
                siblingOptions.forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });
    }
    
    // Animate elements when they come into view
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });
    }
    
    // Glitch effect for headings with class 'glitch'
    const glitchElements = document.querySelectorAll('.glitch');
    
    if (glitchElements.length > 0) {
        glitchElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = `
                ${text}
                <span aria-hidden="true">${text}</span>
                <span aria-hidden="true">${text}</span>
            `;
        });
    }
});
