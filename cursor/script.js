let cursor=document.querySelector("#cursor")
let body=document.querySelector("body")
let h2=document.querySelector("h2")

body.addEventListener("mousemove",(dets)=>{
    console.log(dets);
    cursor.style.left=dets.x + "px"
    cursor.style.top=dets.y + "px"
    
})
body.addEventListener("keydown",(val)=>{
    // console.log(val.key);
    
    h2.innerHTML=val.code
})

