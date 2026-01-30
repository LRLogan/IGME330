console.log("This is Demo 5");

const colors = ["red", "green", "blue", "yellow", "purple"];
const colorsWcolor = [];

for (let i = 0; i < colors.length; i++) {
    colorsWcolor.push(colors[i] + "-color");
}

// Alturnitative using map
const colorsWcolorMap = colors.map(color => color + "-color");

const nums = [1, 2, 3, 4, 5];
const evenNums = nums.map(num => num * 2);


const students = [
    { name: "Travis", grade: 20 },
    { name: "Kady", grade: 22 },
    { name: "Charlie", grade: 23 }
];

// Array of 90 or more
const gradeA = students.filter(student => student.grade >= 90);

// Or
const hasAnA = (person) => person.grade >= 90;

// Getting their names
const namesOfAStudents = gradeA.map(student => student.name);

// Or
const getName = (person) => person.name;



