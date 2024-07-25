import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "../App.css";
import "./styles/contact.css";

function ContactMe() {
    const form = useRef();
    const [dialogMessage, setDialogMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_4mtbzji', 'template_1gq009e', form.current, {
                publicKey: 'rCxUY9BBHLAWbcQGE',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setDialogMessage("Email sent successfully!"); // Show success message
                    setTimeout(() => {
                        setDialogMessage("");
                    }, 1000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setDialogMessage("Email not sent. Please try again."); // Show failure message
                    setTimeout(() => {
                        setDialogMessage("");
                    }, 1000);
                },
            );
    };

    return (
        <section className="contact">
            <div className="main_heading">Contact Me : </div>

            <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <input className="contact_form_input" placeholder="your-email-id@example.com" type="email" name="user_email" />
                <input className="contact_form_input" placeholder="Your Name" type="text" name="user_name" />
                <textarea className="contact_form_input contact_form_input_msg" placeholder="Message" name="message" />
                <input className="contact_form_send" type="submit" value="Send" />
            </form>

            {dialogMessage && (
                <div className="dialog">
                    {dialogMessage}
                </div>
            )}
        </section>
    )
}

export default ContactMe;