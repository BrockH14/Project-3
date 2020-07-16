import React from "react";

function About() {

    return (
        <div class="about-container section-container">
        <div class="container">
            <div class="row">
                <div class="col about section-description wow fadeIn text-center">
                    <h2>What is Shopalooza?</h2>
                    <div class="divider-1 wow fadeInUp"><span></span></div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-4 about-box wow fadeInUp">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="about-box-icon">
                                <i class="fab fa-amazon"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3>Search</h3>
                            <p>
                               Search for any item from three different companies!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 about-box wow fadeInDown">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="about-box-icon">
                                <i class="fas fa-bullseye"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3>Compare</h3>
                            <p>
                               Compare the prices of your item from these different companies.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 about-box wow fadeInUp">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="about-box-icon">
                                <i class="fab fa-weebly"></i>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3>Buy</h3>
                            <p>
                               Click on the link and continue to their website to purchase it!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;