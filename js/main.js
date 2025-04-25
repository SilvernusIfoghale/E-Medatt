// Script for navigation menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Page FAQ accordion functionality
// This script handles the FAQ accordion functionality for the FAQ section of the page.
// It allows users to click on a question to reveal the answer, and closes other answers if one is opened.
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Script to close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
            faqItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Open clicked FAQ item if it wasn't already open
        if (!isOpen) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// For smooth scrolling for the navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// For the newsletter form submission handling
// This script handles the newsletter subscription form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput.value.trim() === "") {
        alert("Please provide a valid email address.");
    } else {
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Script to reset the input field after submission.
    }
});