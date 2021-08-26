import React from "react";
import "../styling/styles.css";

export default function Resume() {
    return (
        <div class="card">
            <div class="card-header">
                <a class="nav-link resume-link" href="./resume.pdf" download>Resume Download Link</a>
            </div>
            <div class="card-body">
                <div class="front-end">
                    <h2>Front-End Technologies</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>JSX</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Handlebars</li>
                    </ul>
                </div>
                <div class="back-end">
                    <h2>Back-End Technologies</h2>
                    <ul>
                        <li>Postman / Insomnia</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>indexDB</li>
                        <li>AJAX / Fetch</li>
                        <li>MySQL</li>
                        <li>Mongo DB</li>
                        <li>Mongoose ODM</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
