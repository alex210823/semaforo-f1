let n= 0 
function getRandom(min=0, max=100) {
    n= Math.floor(Math.random()*(max-min+1)+min)
    console.log(n)
    return n

}
getRandom(1000,2000)

let striscia1=document.querySelector(".primastriscia");
let striscia2=document.querySelector(".secondastriscia")
let striscia3=document.querySelector(".terzastriscia")
let striscia4=document.querySelector(".quartastriscia")

function primastriscia(){
    striscia1.classList.add("rossoBg")
    console.log("1")
    n=0
    getRandom(1000,2000)
    setTimeout(secondastriscia,n) 
}
function secondastriscia(){
    striscia2.classList.add("rossoBg")
    console.log("2")
    n=0
    getRandom(1000,2000)
    setTimeout(terzastriscia,n) 
}function terzastriscia(){
    striscia3.classList.add("rossoBg")
    n=0
    getRandom(1000,2000)
    setTimeout(quartastriscia,n) 
}
function quartastriscia(){
    striscia4.classList.add("rossoBg")
    n=0
    getRandom(1000,3000)
    setTimeout(verde,n) 
}
function verde(){
    let date=new Date()
    tempo=date.getTime()
    striscia1.classList.remove("rossoBg")
    striscia2.classList.remove("rossoBg")
    striscia3.classList.remove("rossoBg")
    striscia4.classList.remove("rossoBg")
    striscia1.classList.add("verdeBg")
    striscia2.classList.add("verdeBg")
    striscia3.classList.add("verdeBg") 
    striscia4.classList.add("verdeBg")
}
setTimeout(primastriscia, 1000);

function callback(event){
    let date= new Date()
    mioTempo=date.getTime()
    console.log("time" + tempo)
    console.log("miotempo" + mioTempo)
    console.log((mioTempo-tempo)/1000) //espressione per vedere dopo quanti secondi ho cliccato il bottone
    

}

let mioTempo
let tempo

let button=document.querySelector(".bottone") 
button.addEventListener("click", callback)



