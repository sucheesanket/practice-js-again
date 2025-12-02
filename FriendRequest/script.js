let btn=document.querySelectorAll("button")
btn.forEach((val)=>{
console.log(val);
val.addEventListener("click",()=>{
   if(val.innerHTML==="Add Friend")
   {
    val.innerHTML="Remove Friend"
   }
   else{
    val.innerHTML="Add Friend"
   }
})

})
