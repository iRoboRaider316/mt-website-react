import ThemeButton from "./props/theme-button"
import ProjectButton from "./props/project-button"
import SlideButton from "./props/slide-button"

import desc_data from './data/descriptions.json';
import ReturnButton from "./props/return-button";

export default function Page() {
    {
        
    /* 
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
    for(let i = 0; i < 7; i++) {
        projects.push(<ProjectButton key={i} 
                                     projectID={i} 
                                     projectName={desc_data.descriptions[i].project} 
                                     projectDescText={desc_data.descriptions[i].text} 
                                     projectMedia={desc_data.descriptions[i].media}
                                     />);
    }

    for(let i = 7; i < 10; i++) {
        prototypes.push(<ProjectButton key={i} 
                                       projectID={i} 
                                       projectName={desc_data.descriptions[i].project} 
                                       projectDescText={desc_data.descriptions[i].text} 
                                       projectMedia={desc_data.descriptions[i].media}
                                       />);
    }

    return (
        <main>
            <div id="header">
            <ThemeButton/>
            <h1>MISTER TELESCOPE</h1>
            </div>
            
            <div id="slide-left">
                <SlideButton scrollElementName="projects-region" direction="Left"/>
                <div id="projects-region">
                    {projects}
                </div>
                <SlideButton scrollElementName="projects-region" direction="Right"/>
                
                <SlideButton scrollElementName="prototypes-region" direction="Left"/>
                <div id="prototypes-region">
                    {prototypes}
                </div>
                <SlideButton scrollElementName="prototypes-region" direction="Right"/>

                <div id="project-display">
                    <p id="project-description">Wow, you can slide the text!</p>
                    <p id="project-links">Links here!</p>
                    <div id="project-media-viewport">
                        <SlideButton scrollElementName="project-media" direction="Up"/>
                        <div id="project-media">
                        </div>
                        <SlideButton scrollElementName="project-media" direction="Down"/>
                    </div>
                    <ReturnButton/>
                </div>
            </div>
            <div id="footer">
                Background Images: <a href="https://www.freepik.com/">Designed by Freepik</a>
            </div>
        </main>
    );
    
}