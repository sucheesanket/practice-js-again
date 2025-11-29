let motis=["hello i am from bahanaga","tum logo ki maa ki chutt","behenchodd agara main apni aukaat mein aagaya naa","gaand maar dunga sabka","mera lund sabse bada hai","thanks for inviting me","teri behen ki chutt","aand bhatt khaoge mera","sanket bhai ke aage koi bol sakta hai kee"]

let btn=document.querySelector("button")
let sex=document.querySelector("section")

btn.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    sex.appendChild(h1)
    let randi=motis[Math.floor(Math.random()*motis.length)]
    console.log(h1);
    let x=Math.random()*100;
    let y=Math.random()*100;
    let rot=Math.random()*100;
    h1.style.position="absolute"
    h1.style.textTransform = "capitalize";

    h1.style.fontSize="35px"
    h1.style.left=x +"%"
    h1.style.top=y +"%"
    h1.style.rotate=rot+"deg"
    h1.innerText=randi
    h1.style.color="white"

    


})
