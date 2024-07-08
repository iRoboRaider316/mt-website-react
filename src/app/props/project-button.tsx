"use client";

export default function ProjectButton(props: {projectID: number, projectName: string, projectDescText: string}) {

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
    }

    return (
        <div className="project" id={"project" + props.projectID.toString()} onClick={showProject}>
            <p>{props.projectName}</p>
        </div>
    );
}