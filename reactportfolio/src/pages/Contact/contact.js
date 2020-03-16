import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDF from "../../images/Javier_Turner_Resume.pdf"

function Contact() {
    return (
        <div className="container-fluid-main">
            <div className="row">
                <div className="col-10">
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="body-text">
                        <form action="action_page.php">

                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Smith" />

                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="example@gmail.com" />

                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="" style="height:200px"></textarea>

                            <input type="submit" value="Submit" />

                        </form>
                        <div className="col-md-3">
                            <h3>Links</h3>
                            <p><a href="https://github.com/javierturner" target="_blank" id="link">Github Profile</a></p>
                            <p><a href={PDF} target="_blank">Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;