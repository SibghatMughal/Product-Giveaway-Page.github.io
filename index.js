let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");

setInterval(() => {
    let todaytime = new Date();
const futuretime = new Date(2022, 06, 20, 03, 40, 30, 0);
let giveawaytime  = new Date(futuretime-todaytime);
    
    // console.log(giveawaytime.getDay()-3)
    // console.log(giveawaytime.getHours());
    // console.log(giveawaytime.getMinutes());
    // console.log(giveawaytime.getSeconds());
         
    days.textContent = giveawaytime.getDay()-3;
    hours.textContent = giveawaytime.getHours();
    mins.textContent = giveawaytime.getMinutes();
    secs.textContent = giveawaytime.getSeconds();

}, 1000);


