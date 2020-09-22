import React from "react";
import Giftify from "../../images/Giftify.png";
import Banana from "../../images/IntuitiveBanana.png";
import Planner from "../../images/DayPlanner.png";
import Password from "../../images/PasswordGenerator.png";
import Code from "../../images/CodeQuiz.png";
import Note from "../../images/NoteTaker.png";
import Shoestring from "../../images/Shoestring.png";
import "./../Portfolio/portfolio.js";
import Modals from "../../components/Modal";

function Portfolio() {
    return (
        <div className="container-fluid-main outerBox tile is-ancestor">
            <div className="tile is-vertical is-11" id="tile">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-dark">
                        <p className="title banana" id="myPortfolio">My Portfolio</p>
                        <div className="hero-body">
                            <section>
                                <div className="tile is-ancestor">
                                    <div className="tile is-parent"></div>
                                    <article className="tile is-child box notification is-light project" id="portfolioSelector" data-portfolio="portfolio1">
                                        <img id="profile-image" src="../../images/Shoestring.png" alt="shoestring application"/>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
            <Modals/>


            {/* <div className="row portfolio">
                <div className="col-12">
                    <h2>Portfolio</h2>
                </div>
                <hr />
                <div className="row">
                <div className="col-md-6">
                        <h5> Shoestring: Peer Payment Application</h5>
                        <a href="https://www.shoestring.me/" target="_blank"><img className="img-fluid" src={Shoestring} /></a>
                        <a href="https://github.com/cmarshman/shoestring" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-6">
                        <h5> Giftify: A Gift-Suggesting Application</h5>
                        <a href="https://giftify-project2.herokuapp.com/" target="_blank"><img className="img-fluid" src={Giftify} /></a>
                        <a href="https://github.com/cmarshman/Giftify" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <h5> Day Planner</h5>
                        <a href="https://javierturner.github.io/dayplanner/index.html#" target="_blank"><img className="img-fluid" src={Planner} /></a>
                        <a href="https://github.com/javierturner/dayplanner" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-6">
                        <h5> Password Generator</h5>
                        <a href="https://javierturner.github.io/passwordgenerator/index.html" target="_blank"><img className="img-fluid" src={Password} /></a><a href="https://github.com/javierturner/passwordgenerator" target="_blank">Github
                                Repository</a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <h5> Coding Quiz</h5>
                        <a href="https://javierturner.github.io/codequiz/index.html#" target="_blank"><img className="img-fluid" src={Code} /></a>
                        <a href="https://github.com/javierturner/codequiz" target="_blank">Github
                                Repository</a>
                    </div>
                    <div className="col-md-6">                   
                        <h5> Intuitive Banana: Music Application</h5>
                        <a href="https://drbailey13.github.io/IntuitiveBanana/index.html" target="_blank"><img className="img-fluid" src={Banana} /></a>
                        <a href="https://github.com/DrBailey13/IntuitiveBanana" target="_blank">Github
                                Repository</a>

                    </div>
                </div>
                <br/>
            </div> */}
            {/* <Modals/> */}
        </div>
    )
}

export default Portfolio;