"use client";

export default function ReturnButton() {
    function ReturnToMainPage() {
        /* Slide the text over */
        const elem = document.getElementById("slide-left");
        if(elem) {
            elem.style["left"] = "50vw";
        }
    }

    return (
        <button id="return-button" onClick={ReturnToMainPage}>Back</button>
    );
}