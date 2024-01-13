const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}]

const queBox = document.getElementById('queBox')
const optionsInputs =document.querySelectorAll('.option')


let index =0;
let right=0,left=0;
const submitQuiz=()=>{
    const ans = getAnswer();
    if(ans==data.correct){
        right++
    }else{
        wrong++;
    }
    index++;
    console.log(submitQuiz)
    quizLoader();
    return;
}
const getAnswer=()=>{
    optionsInputs.forEach((input)=>{
        if(input.checked){
            return input.value;
        }
    })
}
const quizLoader=()=>{
    const data = quizData[index];
    queBox.innerText=` ${index+1})${data.question}`;
    optionsInputs[0].nextElementSibling.innerText=data.a;
    optionsInputs[1].nextElementSibling.innerText=data.b;
    optionsInputs[2].nextElementSibling.innerText=data.c;
    optionsInputs[3].nextElementSibling.innerText=data.d;
    
}
quizLoader()