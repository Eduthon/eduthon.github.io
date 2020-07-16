const images = document.querySelectorAll('.anime');
observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.intersectionRatio>0)
        {
            entry.target.style.animation = `anim1  1s forwards ease-out`;
        }
        else{
            entry.target.style.animation= `none`;
        }
    })
})

images.forEach(image=>{
    observer.observe(image)
})