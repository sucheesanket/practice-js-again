let teams=[
    {
        team:'CSK',
        primary:'yellow',
        secondary:'gold',
        fullname:'Chennai Super Kings',
        trophies:5,
        captain:"MSD"
    },
    {
        team:'MI',
        primary:'blue',
        secondary:'pink',
        fullname:'Mumbai Indians',
        trophies:5,
        captain:"Rohit Gurunath Sharma"
    },
    {
        team:'RCB',
        primary:'red',
        secondary:'gray',
        fullname:'Royal Challengers Bangalore',
        trophies:1,
        captain:"Virat Kohli"
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold',
        fullname:'Kolkata Knight Riders',
        trophies:3,
        captain:"Ajinkey Rahane"
    },
    {
        team:'SRH',
        primary:'green',
        secondary:'orange',
        fullname:'Sun Risers Hyderabad',
        trophies:1,
        captain:"Pat Cummins"
    },
    {
        team:'RR',
        primary:'pink',
        secondary:'green',
        fullname:'Rajasthan Royals',
        trophies:1,
        captain:"Riyan Parag"
    },
    {
        team:'DC',
        primary:'blue',
        secondary:'red',
        fullname:'Delhi Capitals',
        trophies:0,
        captain:"KL Rahul"
    },
    {
        team:'PBKS',
        primary:'pink',
        secondary:'white',
        fullname:'Punjab Kings',
        trophies:0,
        captain:"Shreyas iyer"
    },
    {
        team:'LSG',
        primary:'blue',
        secondary:'purple',
        fullname:'Lucknow Super Giants',
        trophies:0,
        captain:"Rishabh Pant"
    },
    {
        team:'GT',
        primary:'royalblue',
        secondary:'purple',
        fullname:'Gujurat Titans',
        trophies:1,
        captain:"Shubhman Gill"
    }
    
    
]


let box=document.querySelector("#box")
let btn=document.querySelector("button")
let h1=document.querySelector("h1")
let p=document.querySelector("p")
let h5=document.querySelector("h5")
let h6=document.querySelector("h6")
btn.addEventListener("click",()=>{
    let rand=teams[Math.floor(Math.random()*teams.length)]
    console.log(rand);
    h1.innerText=rand.team
    box.style.backgroundColor=rand.primary
    h1.style.backgroundColor=rand.secondary
    p.innerHTML=rand.fullname
    h5.innerHTML=rand.captain
    h6.innerHTML=rand.trophies + " trophies"

    

    
    
})