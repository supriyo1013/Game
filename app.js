
let i=0;
let step=2;
let result="";
let fruit=["Lichi","Coconut","Mango","Banana","WaterMalon","Apple","Jacfruit","Papaa","Orange"];

function nstep() {
    // step++;
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById(`div${step}`).classList.add("active");
    document.getElementById("btns").classList.add("active");
}

function yesStep() {
    if(step == 9){
        i++;
        // result=fruit[i];
        // document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
        // document.getElementById("result").classList.add("active");
        // document.getElementById("restart").classList.add("active");
        // document.querySelector("h1").innerText=`${result}`;
        showResult();
    }
    else{
        i++;
        step++;
        nstep();
    }
}

function noStep() {
    if(step == 9){
        // result=fruit[i];
        // document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
        // document.getElementById("result").classList.add("active");
        // document.getElementById("restart").classList.add("active");
        // document.querySelector("h1").innerText=`${result}`;
        showResult();
    }
    else{
        step++;
        nstep();
    }
}

function showResult() {
    result=fruit[i];
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById("result").classList.add("active");
    document.getElementById("restart").classList.add("active");
    document.querySelector("h1").innerText=`${result}`;
}

function restart() {
    step=1;
    i=0;
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById(`div${step}`).classList.add("active");
    step++;
}