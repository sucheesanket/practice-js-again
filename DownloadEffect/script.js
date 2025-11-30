let btn=document.querySelector("button")
let h3=document.querySelector("h3")
let inner=document.querySelector(".inner")
let grow=0
btn.addEventListener("click",()=>{
    btn.style.pointerEvents="none"
    // console.log("clicked");
    let int=setInterval(()=>{

        grow++
        h3.innerHTML=grow +"%"
        inner.style.width=grow+"%"
    },10)
    setTimeout(()=>{

        clearInterval(int)
        btn.innerHTML="downloaded"
        btn.style.opacity=0.5
    },1000)
    
})


