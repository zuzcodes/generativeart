"use strict";

const artwork1 = document.querySelector("#artwork1");
for(let i=100;i<300;i=i+20) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("box");
    artDiv.style.width = i + "px";
    artDiv.style.height = i + "px";
    artwork1.appendChild(artDiv);
}

const artwork2 = document.querySelector("#artwork2");
for(let i=0;i<90;i=i+10) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("box");
    artDiv.style.transform = `rotate(${i}deg)`;
    artwork2.appendChild(artDiv);
}

const artwork3 = document.querySelector("#artwork3");
for(let i=0;i<200;i=i+10) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("circle");
    artDiv.style.width = i + "px";
    artDiv.style.height = i + "px";
    artwork3.appendChild(artDiv);
}

const artwork4 = document.querySelector("#artwork4");
for(let i=-90;i<90;i=i+20) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("box");
    artDiv.style.transform = `translate(${i}px, ${i}px)`;
    artwork4.appendChild(artDiv);
}

const artwork5 = document.querySelector("#artwork5");
for(let i=1;i<512;i=i*2) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("circle");
    artDiv.style.width = i + "px";
    artDiv.style.height = i + "px";
    artwork5.appendChild(artDiv);
}
//not working
const artwork6 = document.querySelector("#artwork6");
for(let i=-20;i<45;i=i+5) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("circle");
    artDiv.style.transform = `translate(${i}-50)`;
    artDiv.style.transform = `rotate(${i}*4deg)`;
    artwork6.appendChild(artDiv);
}
//not working
const artwork7 = document.querySelector("#artwork7");
for(let i=0;i<200;i=i+10) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("circle");
    artDiv.style.width = i + "px";
    artDiv.style.height = i + "px";
    artDiv.style.transform = `translate(${i}, -${i}/2)`;
    artwork7.appendChild(artDiv);
}
//not working
const artwork8 = document.querySelector("#artwork8");
for(let i=50;i<200;i=i+10) {
    let artDiv = document.createElement("div");
    artDiv.classList.add("box");
    artDiv.style.width = i + "px";
    artDiv.style.height = i + "px";
    artDiv.style.transform = `translate(${i}/2)`;
    artDiv.style.transform = `rotate(${i}deg)`;
    artwork8.appendChild(artDiv);
}

const artwork9 = document.querySelector("#artwork9");
for(let i=50;i<200;i=i+30) {
    let artDiv1 = document.createElement("div");
    let artDiv2 = document.createElement("div");
    artDiv1.classList.add("circle");
    artDiv1.style.width = i + "px";
    artDiv1.style.height = i + "px";
    artwork9.appendChild(artDiv1);

    artDiv2.classList.add("box");
    artDiv2.style.width = i + "px";
    artDiv2.style.height = i + "px";
    artwork9.appendChild(artDiv2);
}
