'use strict';

const lightModeColor = '#00b7ff80';
const darkModeColor = '#00000000';

window.addEventListener('load', function () {
    const themeButton = document.querySelector('.theme-button');
    var r = document.querySelector(':root');
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        
        const className = document.body.className;
        if(className == "light-theme") {
            themeButton.textContent = "Light";
            r.style.setProperty('--overlaycolor', lightModeColor);
        } else {
            themeButton.textContent = "Dark";
            r.style.setProperty('--overlaycolor', darkModeColor);
        }

        console.log('current class name: ' + className);
    });
})