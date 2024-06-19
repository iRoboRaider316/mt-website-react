"use client";

export default function ProjectButton(props: {projectID: string, projectName: string}) {

    function showProject() {
        console.log("Showing Project");

        const elem = document.getElementById("slide-left");
        if(elem) {
            elem.style["left"] = "-50%";
        }
    }

    return (
        <div className="project" id={props.projectID} onClick={showProject}>
            <p>{props.projectName}</p>
        </div>
    );
}