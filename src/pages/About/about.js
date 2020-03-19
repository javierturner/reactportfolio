import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../../images/profilepicture.jpg";
import PDF from "../../images/Javier_Turner_Resume.pdf";
import "./../About/about.css";

function About() {
    return (
        <div className="container-fluid-main outerBox">
            <div className="row">
                <div className="col-12">
                    <h2>About Me</h2>
                </div>

                <div className="col-md-12">
                    <div className="col-md-4">
                    <img className="image-fluid rounded mx-3 my-3" id="profile" width="216px" src={Picture} alt="JT" />
                    </div>
                    <div className="col-md-8">
                    <p>
                        Hi! I'm JT, a 24 year old 
                        
                        I am a 24 year old Graphic Communications professional aiming to blend my
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
                </div>
            </div>
        </div>
    )
}


export default About;