//console.log("Darin"); for testing

//const add = (a, b) => a+b; (same as line 5)

//const add = (a, b) => { return a + b; }

//console.log(add(5, 6));

//const square = a => a * a;
//const square = (a) => a * a;

//console.log(square(5));

//const hello = () => console.log("Hello, me!");

//hello();

//const helloSpecific = userName => console.log("Hello " + userName "!");

//helloSpecific("Darin");

const helloFullName = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
    console.log("You are awesome!");
};

helloFullName("darin", "lee");

/* Not ok to change a constant
const myName = "Darin";
myName = "Sally"; */

//const myFunct = () => coonsole.log("Hey you!");

const moveSquare = () => {
    document.getElementById("square").classList.add("move-square");

}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value; //.value gets the value in the textbox
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
    document.getElementById("button-show-name").onclick = displayName;
}