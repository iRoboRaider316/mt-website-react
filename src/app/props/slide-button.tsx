"use client";

import React from "react";

export default function SlideButton(props: {scrollElementName: string, direction: string}) {
    function slide() {
        console.log("Sliding!");

        const scrollElement = document.getElementById(props.scrollElementName);

        const border = 5;
        const margin = 10;

        if(scrollElement) {
            var scrollDist = 0;

            if(props.direction == "Right" || props.direction == "Left") {
                
                const elementToMeasure = scrollElement.firstElementChild
                if(elementToMeasure) {
                    scrollDist = elementToMeasure.clientWidth + (border + margin) * 2;
                    console.log(scrollDist);
                    if(props.direction == "Left"){
                        scrollElement.scrollBy({
                            left: -scrollDist,
                            behavior: "smooth"
                        })
                    } else {
                        scrollElement.scrollBy({
                            left: scrollDist,
                            behavior: "smooth"
                        })
                    }
                } else {
                    console.warn("Elements not fully populated yet!");
                }
                // scrollDist = document.getElementById("project0")?.clientWidth;
                console.log("Use Width!");
            } else if (props.direction == "Up" || props.direction == "Down") {
                const elementToMeasure = scrollElement.firstElementChild
                if(elementToMeasure) {
                    scrollDist = elementToMeasure.clientHeight;
                    console.log(scrollDist);
                    if(props.direction == "Up"){
                        scrollElement.scrollBy({
                            top: -scrollDist,
                            behavior: "smooth"
                        })
                    } else {
                        scrollElement.scrollBy({
                            top: scrollDist,
                            behavior: "smooth"
                        })
                    }
                } else {
                    console.warn("Elements not fully populated yet!");
                }
            }
        }
    }

    return (
        <img src="arrow.png" className={"slideButton slideButton_" + props.scrollElementName + " slideButton" + props.direction} onClick={slide}>
        </img>
    );
}