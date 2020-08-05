var matches = document.querySelectorAll("#preload")
window.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){ matches[0].style.display = 'none'; },0000);
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin= '0 0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding= '0 20px';
      panel.style.margin= '20px 0';
    } 
  });
}