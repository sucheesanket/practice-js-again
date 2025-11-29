let motis=["hello i am from bahanaga","tum logo ki maa ki chutt","behenchodd agara main apni aukaat mein aagaya naa","gaand maar dunga sabka","mera lund sabse bada hai","thanks for inviting me","teri behen ki chutt","aand bhatt khaoge mera","sanket bhai ke aage koi bol sakta hai kee"]

let btn= document.querySelector("button")
let sex= document.querySelector("section")
btn.addEventListener("click",()=>{
    let a=document.createElement("div")
    sex.appendChild(a)
    
    a.style.height="100px"
    a.style.width="100px"
    a.style.backgroundColor="royalblue"
    a.style.position="absolute"
    console.log("clicked");
    let c1=Math.random()*256;
    let c2=Math.random()*256;
    let c3=Math.random()*256;
    a.style.backgroundColor=`rgb(${c1},${c2},${c3})`

    let x=Math.random()*100;
    let y=Math.random()*100;
    let rot=Math.random()*100;
    a.style.left=x +"%"
    a.style.top=y +"%"
    a.style.rotate=rot+"deg"

    

})
