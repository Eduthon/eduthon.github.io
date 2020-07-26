var deadline = new Date("Sep 4, 2020 15:00:00").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// document.getElementById("hour1").innerHTML = days + "d "  
// + hours + "h " + minutes + "m " + seconds + "s "; 
document.getElementById("hour1").innerHTML= Math.floor(hours/10);
document.getElementById("hour2").innerHTML= hours%10;
document.getElementById("min1").innerHTML= Math.floor(minutes/10);
document.getElementById("min2").innerHTML= minutes%10;
document.getElementById("day1").innerHTML= Math.floor(days/10);
document.getElementById("day2").innerHTML= days%10;
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("hour1").innerHTML=0;
        document.getElementById("hour2").innerHTML= 0;
        document.getElementById("min1").innerHTML=0;
        document.getElementById("min2").innerHTML= 0;
        document.getElementById("day1").innerHTML= 0;
        document.getElementById("day2").innerHTML= 0;
    } 
}, 1000); 