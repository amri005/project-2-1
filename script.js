document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration purposes, we'll just log the data
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Reset form fields
        contactForm.reset();

        // Show a success message (you can modify this to suit your needs)
        alert('Thank you for contacting us! We will get back to you soon.');
    });
});