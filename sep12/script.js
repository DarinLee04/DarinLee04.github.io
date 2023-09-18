const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi";
    helloP.classList.add("special");
}



/*
window.onload = () => {
    document.getElementById("button-click");
    clickButton.onclick = changeText;
}
*/

/* hide an image
.hide {
    display: none 
}
or
visibility: hidden

.classlist.removehide (add hide)
*/

const showGrey = () => {
    document.getElementById("grey").classList.remove("hide");
}

const hideGrey = () => {
    document.getElementById("grey").classList.add("hide");
}

window.onload = () => {
    //get button, tie function to clickage
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showGrey;
    document.getElementById("button-hide").onclick = hideGrey;

}