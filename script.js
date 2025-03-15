import emailjs from '@emailjs/browser'

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
   function HandleSubmit() {
     
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log(name);
        
        
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        
        // Send email using EmailJS
        emailjs.send("service_sn3kz29", "template_zhr559o", {
            from_name: name,
            to_name: "Krushna Bhosale",
            from_email: email,
            message: message,
        }, "FysKYelrvR0pjtzkF")
        .then(() => {
            alert("Your message has been sent successfully!");
            form.reset();
        })
        .catch(error => {
            console.error("EmailJS error:", error);
            alert("Failed to send the email.");
        });
    });
});
