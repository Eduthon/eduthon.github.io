var matches = document.querySelectorAll("#preload")
window.addEventListener('load',function(){
    setTimeout(function(){ matches[0].style.display = 'none'; }, 3000);
});
