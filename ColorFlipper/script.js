let box=document.querySelector("#box")
let btn=document.querySelector("button")

btn.addEventListener("click",()=>{

    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    console.log(a,b,c);

    box.style.backgroundColor=`rgb(${a},${b},${c})`
    box.innerHTML=`rgb(${a},${b},${c})`
    


})
