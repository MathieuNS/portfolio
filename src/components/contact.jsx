import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../venv";

export const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          document.getElementById("email_sent").style.display = 'block'
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return <section className="contact" id="contact">
        <h2 className="heading">
            Contact <span>Me</span>
        </h2>

        <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
                <div className="input-box">
                    <input type="text"
                    placeholder="Full Name" name="user_name" required/>
                    <input type="email"
                    placeholder="Email" name="user_email" required/>
                </div>

                <div className="input-box">
                    <input type="number"
                    placeholder="Phone Number" name="user_phone"/>
                    <input type="text"
                    placeholder="Subject" name="subject" required/>
                </div>
            </div>

            <div className="input-group-2">
                <textarea id="" placeholder="Your Message" name="message" required></textarea>
                <input type="submit" value="Send Message" className="btn"/>
            </div>
        </form>
        <p id="email_sent" hidden>✅ Email sent</p>

    </section>
}

export default Contact;