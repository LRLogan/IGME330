import { getRandomColor, getRandomInt } from "./utils.js";
import * as canvasUtils from "./canvas-utils.js";


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let paused = false;
let create_Rectangles = true;
let create_Arcs = false;
let create_Lines = false;


const clearCanvas = () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height);


const canvasClicked = e => {

    const rect = e.target.getBoundingClientRect();

    const mouse_X = e.clientX - rect.x;
    const mouse_Y = e.clientY - rect.y;

    console.log(mouse_X, mouse_Y);

    for(let i = 0; i < 10; i++){

        canvasUtils.drawArc(
            ctx,
            mouse_X + getRandomInt(-50, 50),
            mouse_Y + getRandomInt(-50, 50),
            getRandomInt(10, 50),
            0,
            Math.PI * 2,
            getRandomColor(),
            getRandomInt(1, 10),
            getRandomColor()
        );
    }
};


const drawRandomRect = () => {

    canvasUtils.drawRectangle(
        ctx,
        getRandomInt(0, canvas.width),
        getRandomInt(0, canvas.height),
        getRandomInt(20, 200),
        getRandomInt(20, 200),
        getRandomColor(),
        getRandomInt(1, 10),
        getRandomColor()
    );
};


const drawRandomArc = () => {

    canvasUtils.drawArc(
        ctx,
        getRandomInt(0, canvas.width),
        getRandomInt(0, canvas.height),
        getRandomInt(10, 100),
        0,
        Math.PI * 2,
        getRandomColor(),
        getRandomInt(1, 10),
        getRandomColor()
    );
};


const drawRandomLine = () => {

    canvasUtils.drawLine(
        ctx,
        getRandomInt(0, canvas.width),
        getRandomInt(0, canvas.height),
        getRandomInt(0, canvas.width),
        getRandomInt(0, canvas.height),
        getRandomInt(1, 10),
        getRandomColor()
    );
};


const update = () => {

    if(paused){
        requestAnimationFrame(update);
        return;
    }

    ctx.fillStyle = `rgba(255,255,255,0.08)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if(create_Rectangles) drawRandomRect();
    if(create_Arcs) drawRandomArc();
    if(create_Lines) drawRandomLine();

    requestAnimationFrame(update);
};


const setupUI = () => {

    document.querySelector("#btn_play")
        .addEventListener("click", () => paused = false);

    document.querySelector("#btn_pause")
        .addEventListener("click", () => paused = true);

    document.querySelector("#btn_clear")
        .addEventListener("click", clearCanvas);

    canvas.addEventListener("click", canvasClicked);


    document.querySelector("#cb_rectangles")
        .addEventListener("change", e => create_Rectangles = e.target.checked);

    document.querySelector("#cb_arcs")
        .addEventListener("change", e => create_Arcs = e.target.checked);

    document.querySelector("#cb_lines")
        .addEventListener("change", e => create_Lines = e.target.checked);
};


// main execution
// I dont really see a need for an Init function 
// as this set up is rather simple
setupUI();
update();


// required 600px x 20px line
canvasUtils.drawLine(
    ctx,
    100,
    300,
    700,
    300,
    20,
    "black"
);