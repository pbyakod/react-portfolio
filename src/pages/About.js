import React from "react";

export default function About() {
    return (
        <div class="about">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="media/profile.jpg" alt="profile"></img>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card h-100">
                        <h5 class="card-header">Description</h5>
                        <div class="card-body">
                            <p class="card-text">Hey everyone! My name is Pranav Byakod. I'm currently a junior at Santa Clara University, pursuing a degree in Computer Science and Mathematics.</p>
                            <p>Currently, I'm adept at programming in C++, Python, and Javascript. Since enrolling in UC Berkeley's full stack coding bootcamp, I've been learning and practicing web-based coding programs such as git, command line, html, and css. Apart from developing code, I enjoy playing football, swimming, music, travelling, and cooking.</p>
                            <p>If you'd like to contact me through either social media, email, phone, github, or even linkedin, simply navigate to the contact dropdown button on the navigation bar.</p>
                            <p>To view the projects I've recently worked on, scroll onto the portfolio section and click on whichever card you'd like.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}