import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Giftify from "../../images/Giftify.png";
import Banana from "../../images/IntuitiveBanana.png";
import Planner from "../../images/DayPlanner.png";
import Password from "../../images/PasswordGenerator.png";
import Code from "../../images/CodeQuiz.png";
import Note from "../../images/NoteTaker.png";

function Portfolio() {
    return (
        <div className="container-fluid-main">
            <div className="row">
                <div className="col-10">
                    <h2>Portfolio</h2>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <h5> Giftify: A Gift-Suggesting Application</h5>
                        <a href="https://giftify-project2.herokuapp.com/" target="_blank"><img className="img-fluid" src={Giftify} /></a>
                        <a href="https://github.com/javierturner/myportfolio" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-3">
                        <h5> Intuitive Banana: Music Application</h5>
                        <a href="https://drbailey13.github.io/IntuitiveBanana/index.html" target="_blank"><img className="img-fluid" src={Banana} /></a>
                        <a href="https://github.com/DrBailey13/IntuitiveBanana" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <h5> Day Planner</h5>
                        <a href="https://javierturner.github.io/dayplanner/index.html#" target="_blank"><img className="img-fluid" src={Planner} /></a>
                        <a href="https://github.com/javierturner/dayplanner" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-3">
                        <h5> Password Generator</h5>
                        <a href="https://javierturner.github.io/passwordgenerator/index.html" target="_blank"><img className="img-fluid" src={Password} /></a><a href="https://github.com/javierturner/passwordgenerator" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <h5> Coding Quiz</h5>
                        <a href="https://javierturner.github.io/codequiz/index.html#" target="_blank"><img className="img-fluid" src={Code} /></a>
                        <a href="https://github.com/javierturner/codequiz" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-3">
                        <h5> Note Taker</h5>
                        <a href="https://thawing-cliffs-93765.herokuapp.com/" target="_blank"><img className="img-fluid" src={Note} /></a>
                        <a href="https://github.com/javierturner/notetaker" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;