
let step=2;
let result="";
let sum = 1;
let fruits = [
    {id : 28,name : "Apple",},
    {id : 40,name : "Banana",},
    {id : 32,name : "Coconut",},
    {id : 22,name : "Jacfruit",},
    {id : 31,name : "Lichi",},
    {id : 24,name : "Mango",},
    {id : 38,name : "Orange",},
    {id : 30,name : "Papaa",},
    {id : 26,name : "WaterMalon",},
];

function nstep() {
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById(`div${step}`).classList.add("active");
    document.getElementById("btns").classList.add("active");
}

function yesStep() {
    sum+=step;
    step++;
    if(step == 10){
        showResult();
    }
    else{
        nstep();
    }
}

function noStep() {
    step++;
    if(step == 10){
        showResult();
    }
    else{
        nstep();
    }
}

function showResult() {
    
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById("result").classList.add("active");
    document.getElementById("restart").classList.add("active");
    const fruit = fruits.find(f => f.id == sum);
    if(fruit){
        result=fruit.name;
        document.querySelector("h1").innerText=`${result}`;
    }else{
        result = "You give some wrong information";
        document.querySelector(".wrong").innerText=`${result}`;
    }
}

function restart() {
    step=1;
    sum=1;
    result="";
    document.querySelector("h1").innerText=`${result}`;
    document.querySelector(".wrong").innerText=`${result}`;
    document.querySelectorAll("div").forEach((el)=> el.classList.remove("active"));
    document.getElementById(`div${step}`).classList.add("active");
    step++;
}
