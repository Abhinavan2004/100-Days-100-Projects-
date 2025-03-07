var red = document.querySelector(".red-btn");
var blue = document.querySelector(".blue-btn");
var orange = document.querySelector(".orange-btn");
var green = document.querySelector(".green-btn");
var yellow = document.querySelector(".yellow-btn");
var white = document.querySelector(".white-btn");

red.addEventListener('click' , () =>{
    document.body.style.background = "#EA4848";
})

blue.addEventListener('click' , () =>{
    document.body.style.background = "rgb(60, 145, 230)";
})

orange.addEventListener('click' , () =>{
    document.body.style.background = "#B10F2E";
})

green.addEventListener('click' , () =>{
    document.body.style.background = "#91F3B5";
})

yellow.addEventListener('click' , () =>{
    document.body.style.background = "#FEFB72"
})

white.addEventListener('click' , () =>{
    document.body.style.background = "#FFEEE2";
})
