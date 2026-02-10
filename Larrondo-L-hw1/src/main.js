"use strict";

import { randomElement } from "./utils.js";

let words1 = [];
let words2 = [];
let words3 = [];

// Generates the specified number of unique lines of technobabble
const generateTechno = (num) => {
    const output = document.querySelector("#output");

    // Safety check in case buttons are clicked before data loads
    if (!words1.length || !words2.length || !words3.length) {
        output.textContent = "Loading technobabble...";
        return;
    }

    const lines = new Set();
    const wordGroups = [words1, words2, words3];

    while (lines.size < num) {
        const line = wordGroups
            .map(group => randomElement(group))
            .join(" ");
        lines.add(line);
    }

    output.innerHTML = [...lines].join("<br>");
};

// Populating the word arrays from the JSON file and generating the initial line of technobabble
fetch("data/babble-data.json")
    .then(response => response.json())
    .then(data => {
        words1 = data.words1;
        words2 = data.words2;
        words3 = data.words3;
        generateTechno(1);
    });

document.querySelectorAll("button.my-button").forEach(button => {
    button.addEventListener("click", () => {
        generateTechno(Number(button.dataset.num));
    });
});
