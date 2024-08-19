"use client";

import React from "react";

export default function ProjectButton(props: {projectID: number, projectName: string, projectDescText: string, projectMedia: string[]}) {

    function showProject() {
        console.log("Showing Project");

        /* Slide the text over */
        const elem = document.getElementById("slide-left");
        if(elem) {
            elem.style["left"] = "-50vw";
        }
        
        /* Update the project description box */
        const descBox = document.getElementById("project-description");
        if(descBox) {
            descBox.innerHTML = props.projectDescText;
        }

        const media = document.getElementById("project-media");
        if(media) {
            while(media.firstChild != null) {
                media.removeChild(media.firstChild);
            }

            for(let i = 0; i < props.projectMedia.length; i++) {
                console.log("Image! " + props.projectMedia[i]);
                if(props.projectMedia[i] != "") {
                    let img = document.createElement('img');
                    img.src = props.projectMedia[i];
                    media.appendChild(img);
                }
            }

            media.scrollTo({
                top: 0
            })
        }

    }

    return (
        <div className="project" id={"project" + props.projectID.toString()} onClick={showProject}>
            <p>{props.projectName}</p>
        </div>
    );
}