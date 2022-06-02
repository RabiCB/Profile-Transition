const represents=[{
    id:1,
    name:'savitar khan',
    job:"web designer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik967NJWqh9J0i_QyasygvWJhxEgeKLNbFQ&usqp=CAU",
    text:"Iam a designer at colorhouse"},
    {
        id:2,
        name:"rabi Bhandari",
        job:"web designer",
        img:"https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg",
        text:"Iam a esports players and also a investor because i had invested a lot of my moneey on different company"
    },
    {
        id:3,
        name:"griss lame",
        job:"software Engineer",
        img:"http:images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text:"iam a software engineer at google photos"
    },
    {
        id:4,
        name:"kristal clay",
        job:"web designer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik967NJWqh9J0i_QyasygvWJhxEgeKLNbFQ&usqp=CAU",
        text:"Iam a cricketer for my national team",

    }
]


const xamp=document.getElementById("xamp");
const person=document.getElementById("person");
const job=document.getElementById("job");
const about=document.getElementById("about");

const leftbtn=document.querySelector("#left-btn");
const rightbtn=document.querySelector("#right-btn");
const press=document.querySelector(".press-btn");
let currentposition=0;


window.addEventListener("DOMContentLoaded",function(){
    runfunction();

})

function runfunction(){
    const tusk=represents[currentposition];
    xamp.src=tusk.img;
    person.textContent=tusk.name;
    job.textContent=tusk.job;

    about.textContent=tusk.text;

}
rightbtn.addEventListener("click",function(){
    currentposition++;
    if(currentposition >represents.length-1){
        currentposition=0;
    }
    runfunction();


});
leftbtn.addEventListener("click",function(){
    currentposition --;
    //if the currentposition is less than zero
    if(currentposition < 0){
        currentposition=represents.length-1;
    }
    runfunction();
});
//select random element form object using math random and math floor give nearest round number
press.addEventListener("click",function(){
    currentposition=Math.floor(Math.random()*represents.length);
    runfunction();

})






