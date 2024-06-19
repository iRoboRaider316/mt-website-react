import ThemeButton from "./props/theme-button"
import ProjectButton from "./props/project-button"

export default function Page() {
    return (
        <main>
            <div id="header">
            <ThemeButton/>
            <h1>MISTER TELESCOPE</h1>
            </div>
            {/* 
            All Projects:
            Pillars Of Light
            The Ruins
            Spunky Spore
            Bouncing Bob

            All Prototypes
            2.5D Test
            Steve's Adventure
            Rise To Battle
            */}
            <div id="slide-left">
                <p id="project-description">Wow, you can slide the text!</p>
                <div id="projects-region">
                    <ProjectButton projectID="project1" projectName="Bouncing Escape"/>
                    <ProjectButton projectID="project2" projectName="The Ruins"/>
                    <ProjectButton projectID="project3" projectName="Spunky Spore"/>
                </div>
                <div id="prototypes-region">
                    <ProjectButton projectID="project4" projectName="2.5D Prototype"/>
                    <ProjectButton projectID="project5" projectName="Steve's Adventure"/>
                    <ProjectButton projectID="project6" projectName="One Block Upon A Time"/>
                </div>
            </div>
            <div id="footer">
                Background Images: <a href="https://www.freepik.com/">Designed by Freepik</a>
            </div>
        </main>
    );
}