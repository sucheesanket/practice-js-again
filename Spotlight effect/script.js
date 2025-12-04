let sex=document.querySelector("section")
sex.addEventListener("mousemove",(e)=>{
    console.log(e);
    // e.clientX
    sex.style.setProperty("--x",e.clientX+"px")
    sex.style.setProperty("--y",e.clientY+"px")
    
})

let h5=document.querySelector("h5")
let text=h5.innerText
let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let interval=null;
let iteration=0

h5.addEventListener("mouseenter",()=>{
    clearInterval(interval);
    interval=setInterval(()=>{
        let str=text.split("").map((char,idx)=>{
            if(idx<iteration){ return char}

        return characters.split("")[Math.floor(Math.random()*characters.length)]
    }).join("")

    h5.innerText=str
    iteration+=0.25
    if(iteration>=text.length) clearInterval(interval);
    },30)

})

