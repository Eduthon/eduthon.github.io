// const images = document.querySelectorAll('.anime');
// observer=new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//         if(entry.intersectionRatio>0)
//         {
//             entry.target.style.animation = `anim1  1s forwards ease-out`;
//         }
//         else{
//             entry.target.style.animation= `none`;
//         }
//     })
// })

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// images.forEach(image=>{
//     observer.observe(image)
// })

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)&& v) {
//     document.getElementById("navbar").style.marginTop = "-25px";
//     // document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.marginTop = "0px";
//     // document.getElementById("logo").style.fontSize = "35px";
//   }
// }



// When the user scrolls the page, execute myFunction 
