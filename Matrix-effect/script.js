let h1=document.querySelector("h1")
let text=h1.innerText
let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let iteration=0
h1.addEventListener("mouseenter",()=>{
   setInterval(()=>{
    let str= text.split("").map((char,idx)=>{
        if(idx<iteration){ return char}
        return characters.split("")[Math.floor(Math.random()*characters.length)]
    }).join("")
    h1.innerText=str

    iteration+=0.25
   },25)


})

