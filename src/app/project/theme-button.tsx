"use client";

export default function ThemeButton() {
    function toggleTheme() {
        console.log("Pressed!");
        const themeButton = document.querySelector('.theme-button');
        
        if(themeButton) {
            document.body.classList.toggle('light-theme');
            document.body.classList.toggle('dark-theme');
            
            const className = document.body.classList;
            if(className.contains("light-theme")) {
                themeButton.textContent = "Light";
            } else {
                themeButton.textContent = "Dark";
            }

            console.log('current class name: ' + className);
        } else {
            console.log("DID NOT WORK.");
        }
    }

    return (
        <button className="theme-button" onClick={toggleTheme}>Light</button>
    );
}