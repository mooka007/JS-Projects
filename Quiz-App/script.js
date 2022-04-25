// const quizData = [
//     {
//       question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
  
//     {
//       question: "Quelle est votre température corporelle ?",
//       choix: ["25","45"],
//       type: "number",
//       reponse: null
//     },
    
//     {
//       question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Ces derniers jours, avez-vous un mal de gorge ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
//       choix: ["oui","non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Actuellement, comment vous vous sentez ?",
//       choix: ["Bien", "Assez Bien", "Fatigué(e)", "Trés fatigué(e)"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique",
//       choix: ["15","115"],
//       type: "number",
//       reponse: null
//     },
    
//     {
//       question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
//       choix: ["20","250"],
//       type: "number",
//       reponse: null
//     },
    
//     {
//       question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
//       choix: ["80","250"],
//       type: "number",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Êtes-vous diabétique ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous ou avez-vous eu un cancer ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous une insuffisance rénale chronique dialysée ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous une maladie chronique du foie ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Êtes-vous enceinte ?",
//       choix: ["Oui","Non","Homme"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
    
//     {
//       question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
//       choix: ["Oui","Non"],
//       type: "radio",
//       reponse: null
//     },
  
//   ];




const Questions = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
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
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_quest = document.getElementById('a_quest')
const b_quest = document.getElementById('b_quest')
const c_quest = document.getElementById('c_quest')
const d_quest = document.getElementById('d_quest')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadPage()
// loadPage for posting Questions and set to Zero
function loadPage(){
    deselect()

    // display the Questions and selection 
    const currentQuestion = Questions[currentQuiz];
    
    questionEl.innerText = currentQuestion.question
    a_quest.innerText = currentQuestion.a
    b_quest.innerText = currentQuestion.b
    c_quest.innerText = currentQuestion.c
    d_quest.innerText = currentQuestion.d


}

function deselect(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function select(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked ){
            answer = answerEl
            console.log(answer)
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = select();
})
