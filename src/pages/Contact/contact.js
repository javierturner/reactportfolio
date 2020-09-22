import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDF from "../../images/JT-Turner_Resume.pdf"
import "./contact.css";

function Contact() {
    return (
        <div className="container-fluid-main outerBox">
            <div className="row">
                <div className="col-12">
                    <h2>Contact Me</h2>
                    
                    <hr />
                    <div className="col-md-12 body-text">
                    <h5>Email: javier.t.turner@gmail.com</h5>
                        <form action="https://formspree.io/meqzlagw" method="POST">

                            <label id="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Smith" />

                            <label id="name">Email</label>
                            <input type="text" id="email" name="_replyto" placeholder="jsmith@gmail.com" />

                            <label id="message">Message</label>
                            <textarea id="message" name="message" placeholder="" style={{ height: 200 }}></textarea>

                            <button type="submit" value="Submit">Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;