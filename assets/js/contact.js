/*=============== EMAIL JS ===============*/
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    console.log(contactForm)

    emailjs.sendForm('service_ob0mcou', 'template_sw1novl', '#contact-form', 'vHWuA73qECr-XfBYr')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            //clear the input field
            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
        


};

contactForm.addEventListener('submit', sendEmail);


