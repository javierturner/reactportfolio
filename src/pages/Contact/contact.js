import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDF from "../../images/Javier_Turner_Resume.pdf"
import "./contact.css";

function Contact() {
    return (
        <div className="container-fluid-main outerBox">
            <div className="row">
                <div className="col-10">
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="body-text">
                        <form action="action_page.php">

                            <label id="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Smith" />

                            <label id="name">Email</label>
                            <input type="text" id="email" name="email" placeholder="example@gmail.com" />

                            <label id="message">Message</label>
                            <textarea id="message" name="message" placeholder="" style={{ height: 200 }}></textarea>

                            <input type="submit" value="Submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;