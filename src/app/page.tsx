import ThemeButton from "./props/theme-button"
import ProjectButton from "./props/project-button"

import desc_data from './data/descriptions.json';

export default function Page() {
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
    const projects=[];
    const prototypes=[];
    for(let i = 1; i < 4; i++) {
        projects.push(<ProjectButton key={i} projectID={i} projectName={desc_data.descriptions[i].project} projectDescText={desc_data.descriptions[i].text}/>);
    }

    for(let i = 7; i < 10; i++) {
        prototypes.push(<ProjectButton key={i} projectID={i} projectName={desc_data.descriptions[i].project} projectDescText={desc_data.descriptions[i].text}/>);
    }

    return (
        <main>
            <div id="header">
            <ThemeButton/>
            <h1>MISTER TELESCOPE</h1>
            </div>
            
            <div id="slide-left">
                <p id="project-description">Wow, you can slide the text!</p>
                <div id="projects-region">
                    {projects}
                </div>
                <div id="prototypes-region">
                    {prototypes}
                </div>
            </div>
            <div id="footer">
                Background Images: <a href="https://www.freepik.com/">Designed by Freepik</a>
            </div>
        </main>
    );
}