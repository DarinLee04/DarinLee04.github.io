/* Hide/Seek */
const addCool = () => {
    document.getElementById("cool").classList.remove("hide");
}
const hideCool = () => {
    document.getElementById("cool").classList.add("hide");
}

/* Animate */
const moveFish = () => {
    document.getElementById("fish").classList.add("move-fish")
}
/* Input */
const addComment = () => {
    
    const productName = document.getElementById("txt-p-name").value;
    const messageH3 = document.getElementById("message1");
    messageH3.innerHTML = productName;
    const rating = document.getElementById("txt-r-name").value;
    const messagep1 = document.getElementById("rc");
    const comment = document.getElementById("txt-c-name").value;
    const messagep2 = document.getElementById("rc");
    const username = document.getElementById("txt-u-name").value;
    const messagep3 = document.getElementById("rc")
    messagep1.innerHTML = rating + "/5 stars " + comment + " by " + username;
}



window.onload = () => {
    document.getElementById("button-show").onclick = addCool;
    document.getElementById("button-hide").onclick = hideCool;
    document.getElementById("button-dance").onclick = moveFish;
    document.getElementById("button-comment").onclick = addComment;
}