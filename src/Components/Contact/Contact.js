import React from "react";
import "./Contact.css";
import Reveal from "../Reveal/Reveal";

import ContactForm from "./ContactForm/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="container">
          <div className="contact-title">
            <h2>
              Get In <span>Touch</span>
              <hr />
            </h2>
          </div>
          <div className="contact-form grid">
            <div className="contact-content">
              <h3>Let's Connect</h3>
              <p>
                Please fill out the form on this section to contact with me. or
                email me:
                <br />
                <br />
              </p>
              
              <div className="contact-wrapper">
                <FontAwesomeIcon icon={faEnvelope} beat size="2xl" />
                <span>Email</span>

                <a href="mailto:mozhdehmarvi02@gmail.com">
                  mozhdehmarvi02@gmail.com
                </a>
              </div>
              <div className="contact-wrapper">
                <FontAwesomeIcon icon={faLocationDot} beat size="2xl" />
                <span>Address</span>
                <h3>Herat, Afghanistan</h3>
              </div>
            </div>

            <div className="heading">
              <h3>Send me a message</h3>
              <ContactForm />
            </div>
          </div>

          <div>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Herat,%20Afghanistan+(Herat)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Population mapping</a>
            </iframe>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
