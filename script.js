let container=document.querySelectorAll('.slider-img-container')
let heading=document.querySelectorAll('.on-normal')


container.forEach((box,i)=>{
    box.addEventListener("click",()=>{
        container.forEach((rmv)=>{
            rmv.classList.remove('active')
        })
        heading.forEach((rmvH,index)=>{
            rmvH.classList.remove('on-expand')
            rmvH.classList.add('on-normal')

        })
        box.classList.add("active")
        heading[i].classList.add('on-expand')
        heading[i].classList.remove('on-normal')

    })
})