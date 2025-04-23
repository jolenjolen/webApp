document.getElementById("exitbtn").addEventListener("click",()=>{
    document.getElementById("table1").style.display="none";
    document.getElementById("subHeading").style.display="none";
});

const stats_green = window.statsData.green;
const stats_amber = window.statsData.amber;
const stats_red = window.statsData.red;

var green=document.getElementsByClassName("green");
var amber=document.getElementsByClassName("amber");
var red=document.getElementsByClassName("red");
var white=document.getElementsByClassName("white");
for(var i=0;i<5;i++){

    var g = stats_green[i];
    var a = stats_amber[i];
    var r = stats_red[i];

    green[i].innerHTML=g;
    amber[i].innerHTML=a;
    red[i].innerHTML=r;
    

    white[i].classList.remove("circle-green", "circle-amber", "circle-red");

    if (g === 0 && a === 0 && r === 0) {
        //white[i].classList.remove("circle-white");
        // No votes, keep it empty
        white[i].innerHTML=a;
    } else if (r === a && r > g) {
        white[i].classList.add("circle-red");
        white[i].innerHTML=r;
        white[i].classList.remove("circle-white");
    } else if (r === g && r > a) {
        white[i].classList.add("circle-amber");
        white[i].innerHTML=a;
        white[i].classList.remove("circle-white");
    } else if (g === a && g > r) {
        white[i].classList.add("circle-green");
        white[i].innerHTML=g;
        white[i].classList.remove("circle-white");
    } else {
        // Else, whichever has the highest
        if (r > g && r > a) {
            white[i].classList.add("circle-red");
            white[i].innerHTML=r;
            white[i].classList.remove("circle-white");
        } else if (g > r && g > a) {
            white[i].classList.add("circle-green");
            white[i].innerHTML=g;
            white[i].classList.remove("circle-white");
        } else if (a > r && a > g) {
            white[i].classList.add("circle-amber");
            white[i].innerHTML=a;
            white[i].classList.remove("circle-white");
        }
        else{
            white[i].innerHTML=a;
        }
    }
}