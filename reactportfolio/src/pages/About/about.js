import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../../images/profilepicture.jpg";

function About() {
    return (
        <div className="container-fluid-main">
            <div className="row">
                <div className="col-10">
                    <h2>About Me</h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-9">
                    <img className="image-fluid rounded float-left mx-3 my-3" id="profile" width="216px" src={Picture} alt="JT" />
                    <p>
                        Hello, I'm JT Turner. I am a 24 year old Graphic Communications professional aiming to blend my
                        knowledge of design with
                        coding to grow into a web development career.
                    <br />
                        <br />
                        I graduated from Applachian State University in 2017 and have been working in Charlotte since.
                    <br />
                        <br />
                        I have ten years experience with the Adobe Creative Suite, and I'm excited to use my creative background to enhance my newly minted web development skills
                    </p>
                </div>
                <div className="col-md-3">
                    <h3>Links</h3>
                    <p><a href="https://github.com/javierturner" target="_blank" id="link">Github Profile</a></p>
                    <p><a href="../../images/Javier_Turner_Resume.pdf" target="_blank">Resume</a></p>
                </div>
            </div>
        </div>
    )
}


export default About;