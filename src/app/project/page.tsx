export default function Page() {
    return (
        <main>
            <div id="header">
            <button className="theme-button">Light</button>
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
            <div id="projects-region">
                <div className="project" id="project1">
                    <p>Bouncing Escape</p>
                </div>
                <a href="https://mistertelescope.itch.io/the-ruins" className="project" id="project2">
                    <p>The Ruins</p>
                </a>
                <div className="project" id="project3">
                    <p>Spunky Spore</p>
                </div>
            </div>
            <div id="prototypes-region">
                <div className="project" id="project4">
                    <p>2.5D Prototype</p>
                </div>
                <div className="project" id="project5">
                    <p>Steve's Adventure</p>
                </div>
                <div className="project" id="project6">
                    <p>One Block Upon A Time</p>
                </div>
            </div>
            <div id="footer">
                Background Images: <a href="https://www.freepik.com/">Designed by Freepik</a>
            </div>
        </main>
    );
}