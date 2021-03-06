import React from "react";
import "../styling/styles.css";

export default function Contact() {
    return (
        <div class="contact">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="john_smith@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us your thoughts!"></textarea>
            </div>
        </div>
    )
}