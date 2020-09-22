import React, { useEffect } from 'react';
import $ from 'jquery';
// import shoestring from "../../images"

function Modals() {

    useEffect(() => {
        const projectArray = {
            portfolio1: {
                name: "Shoestring",
                description: "Peer Payment Application",
                development: "MongoDB, React, React Native, Javascript, Passport, Bcryptjs, JWT, Plaid API, Currency Converter API, Cloudinary API",
                deployedURL: "https://www.shoestring.me/",
                githubURL: "https://github.com/cmarshman/shoestring",
                images: "../../images/Shoestring.png",
            },
            portfolio2: {
                name: "Giftify",
                description: "A Gift-Suggesting Application",
                development: "Etsy API, Algolia API, Sequelize, Passport, Handlebars, Javascripst",
                deployedURL: "https://giftify-project2.herokuapp.com/",
                githubURL: "https://github.com/cmarshman/Giftify",
                images: "../../images/Giftify.png",
            }
        }
        const modal = $("#projectDisplay");

        $(document).on("click", ".project", function () {
            const portfolio = $(this).attr("data-portfolio");
            $("#displayName").text(projectArray[portfolio].name);
            $("#description").text(projectArray[portfolio].description);
            $("#development").text(projectArray[portfolio].development);
            $(".img1").attr("src", projectArray[portfolio].images);
            $("#displayURL").attr("href", projectArray[portfolio].deployedURL).text("Deployed URL");
            $("#displayURL2").attr("href", projectArray[portfolio].githubURL).text("GitHub Repository");
            modal.addClass('is-active');
        });

        $(".close-modal").on("click", function () {
            modal.removeClass("is-active");
        });

    })

    return (
        <div className="modal" id="projectDisplay">
            <div className="modal-background close-modal"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title pride" id="displayName"></p>
                    <button className="delete close-modal" aria-label="close"></button>
                </header>
                <section>
                    <div className="content has-text-centered">
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-dark">
                                    <a id="displayURL" target="_blank" rel="noopener noreferrer"></a>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-dark">
                                    <a id="displayURL2" target="_blank" rel="noopener noreferrer"></a>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-ancestor">
                            <div className="tile is-parent">
                                <article className="tile is-child box notification is-dark">
                                    <h5 className="sub">Description</h5>
                                    <p id="description"></p>
                                    <br />
                                    <h5 className="sub">Development</h5>
                                    <p id="development"></p>
                                </article>
                            </div>
                        </div>
                        <h4>Screen Shots</h4>
                        <img className="img1" alt="profile_img_1"></img>
                    </div>

                </section>
                <footer className="modal-card-foot">
                    <button className="button close-modal" onClick={useEffect}>Close</button>
                </footer>
            </div>
        </div>
    )

}

export default Modals;