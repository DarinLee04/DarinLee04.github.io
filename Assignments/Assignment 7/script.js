const toggleHead2 = () => {
    document.getElementById("head2").classList.toggle("hidehead2");
};

const toggleFirst = () => {
    document.getElementById("firstSec").classList.toggle("hide-firstSec");
};

const compareAge = () => {
    const nameOne = document.getElementById("txt-name1").value;
    const ageOne = parseInt(document.getElementById("txt-age1").value);
    const nameTwo = document.getElementById("txt-name2").value;
    const ageTwo = document.getElementById("txt-age2").value;
    const nameThree = document.getElementById("txt-name3").value;
    const ageThree = document.getElementById("txt-age3").value;


window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHead2;
    document.getElementById("button-showfirst").onclick = toggleFirst;
    document.getElementById("button-compare").onclick = compareAge
    }
}