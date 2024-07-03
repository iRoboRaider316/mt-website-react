import ThemeButton from "./props/theme-button"
import ProjectButton from "./props/project-button"

import desc_data from './data/descriptions.json';

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
            Aimer Sans Voir

            All Prototypes
            2.5D Test
            Steve's Adventure
            One Block Upon A Time
            Rise To Battle
            Tetris AI
            */}
            <div id="slide-left">
                <p id="project-description">Wow, you can slide the text!</p>
                <div id="projects-region">
                    <ProjectButton projectID="project1" projectName={desc_data.descriptions[1].project}/>
                    <ProjectButton projectID="project2" projectName={desc_data.descriptions[2].project}/>
                    <ProjectButton projectID="project3" projectName={desc_data.descriptions[3].project}/>
                </div>
                <div id="prototypes-region">
                    <ProjectButton projectID="project4" projectName={desc_data.descriptions[5].project}/>
                    <ProjectButton projectID="project5" projectName={desc_data.descriptions[6].project}/>
                    <ProjectButton projectID="project6" projectName={desc_data.descriptions[7].project}/>
                </div>
            </div>
            <div id="footer">
                Background Images: <a href="https://www.freepik.com/">Designed by Freepik</a>
            </div>
        </main>
    );
}