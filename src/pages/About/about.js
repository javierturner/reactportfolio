import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Picture from "../../images/profilepicture.jpg";
import PDF from "../../images/JT-Turner_Resume.pdf";
import "./../About/about.css";

function About() {
    return (
        <div className="container-fluid-main outerBox">
            <div className="row">
                <div className="col-12">
                    <h2>About Me HELLO</h2>
                </div>

                {/* <div className="col-md-12"> */}
                    <div className="col-md-4">
                    <img className="image-fluid rounded mr-3" id="profile" width="216px" src={Picture} alt="JT" />
                    </div>
                    <div className="col-md-8">
                    <p>
                    Hi, I'm JT! I am a self-driven and creative Front End Web Developer with a background in Graphic Communications and Design. With great communication skills and the ability to work under pressure, I have been working as a Production Planner and Estimator for one of the largest printing and distributing companies in the Southeast for 3 years, providing cost estimates and project direction to the Wide Format department.
                    <br/>
                    <br/>
                    After recently graduating from UNC’s Full Stack Development program, I am excited to blend my knowledge of production and design with the new technologies I have learned.
                    </p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}


export default About;