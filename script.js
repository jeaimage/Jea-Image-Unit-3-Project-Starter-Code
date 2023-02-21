/* Declare variables below to save the different sections (divs) of your story*/

let storyOpening=document.querySelector(".story-opening");
let option1screen=document.querySelector(".option-one-screen");
let option2end=document.querySelector(".option-two-end");
let option3screen=document.querySelector(".option-three-screen");
let option3end=document.querySelector(".option-three-end");
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let button3=document.querySelector(".option-three");
let button4=document.querySelector(".option-four");
let button5=document.querySelector(".option-five");
let button6=document.querySelector(".option-six");
let button7=document.querySelector(".option-seven");
let button8=document.querySelector(".option-eight");
let button9=document.querySelector(".option-nine");
let button10=document.querySelector(".option-ten");
let buttons=document.querySelector(".buttons");
button1.onclick=function(){
    option1screen.style.display="block";
    storyOpening.style.display="none";
    buttons.style.display="none";
};

button2.onclick=function(){
    option2end.style.display="block";
    storyOpening.style.display="none";
    option1screen.style.display="none";
    buttons.style.display="none";
};
button3.onclick=function(){
    option3screen.style.display="block";
    storyOpening.style.display="none";
    option1screen.style.display="none";
    option2end.style.display="none";
    buttons.style.display="none";
};
button4.onclick=function(){
    option3screen.style.display="block";
    storyOpening.style.display="none";
    option1screen.style.display="none";
    option2end.style.display="none";
    buttons.style.display="none";
};
button5.onclick=function(){
    option3end.style.display="block";
    option3screen.style.display="none";
    storyOpening.style.display="none";
    option1screen.style.display="none";
    option2end.style.display="none";
    buttons.style.display="none";
};
button6.onclick=function(){
    option3end.style.display="block";
    option3screen.style.display="none";
    storyOpening.style.display="none";
    option1screen.style.display="none";
    option2end.style.display="none";
    buttons.style.display="none";
};



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
