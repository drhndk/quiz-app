const quizData = [
    {
        question : "Presiden Pertama Indonesia adalah ?",
        a : "Soekarno",
        b : "Dhurhan",
        c : "Moh.Hatta",
        d : "Soeharto",
    },
    {
        question : "Ilmuan yang terkenal dengan rumus e=mc2 adalah ?",
        a : "Nicola Tesla",
        b : "Rancho",
        c : "Leonardo da Vinci",
        d : "Albert Einstein",
    },
    {
        question : "Kota Padang merupakan ibukota dari Provinsi ?",
        a : "Jawa Barat",
        b : "Kalimantan Selatan",
        c : "Sumatera Barat",
        d : "Sumatera Selatan",
    },
    {
        question : "Induk gunung Krakatau meletus pada tahun ?",
        a : "1945",
        b : "1940",
        c : "1883",
        d : "1884",
    },
    {
        question : "Indonesia mardeka pada tahun ?",
        a : "1945",
        b : "1940",
        c : "1944",
        d : "1965",
    },
]



const a_text = document.querySelector('.a_text')
const b_text = document.querySelector('.b_text')
const c_text = document.querySelector('.c_text')
const d_text = document.querySelector('.d_text')
const questionText = document.querySelector('h2')
const btnEl = document.querySelector('button')
const container = document.querySelector('.container')
const answerInputEl = document.querySelectorAll('#answer')



quizData.forEach((e,idx) => {
    if(idx == 0) {
        questionText.innerHTML = e.question
        a_text.innerHTML = e.a
        b_text.innerHTML = e.b
        c_text.innerHTML = e.c
        d_text.innerHTML = e.d
    }
})

if (answerInputEl.checked == undefined) {
    btnEl.disabled = true
}


let currenDataNum = 1


btnEl.addEventListener('click', () => {
    currenDataNum++
    if (answerInputEl.checked == undefined) {
        btnEl.disabled = true
    }
    answerKey()
  
    if(currenDataNum > quizData.length){
        currenDataNum = quizData.length
        container.innerHTML = `<h2>Jawaban yang benar sebanyak  ${score}/${quizData.length}</h2>` 
    }
    updateQuiz()
})

function updateQuiz() {
    quizData.forEach((e,idx) => {
        if(idx < currenDataNum){
            questionText.innerHTML = e.question
            a_text.innerHTML = e.a
            b_text.innerHTML = e.b
            c_text.innerHTML = e.c
            d_text.innerHTML = e.d
        }
    }) 
    answerInputEl.forEach((e,idx) => {
        if(idx < answerInputEl.length) {
            e.checked = undefined
        }
    })   
}


answerInputEl.forEach((el,idx) => {    
    el.addEventListener('click', () => {
      
            btnEl.disabled = false
            if(idx == 0) {
            answerInputEl[3].checked = undefined
            answerInputEl[2].checked = undefined
            answerInputEl[1].checked = undefined
        }
        if(idx == 1) {
            answerInputEl[0].checked = undefined
            answerInputEl[2].checked = undefined
            answerInputEl[3].checked = undefined
        }
        if(idx == 2) {
            answerInputEl[0].checked = undefined
            answerInputEl[1].checked = undefined
            answerInputEl[3].checked = undefined

        }
        if(idx == 3) {
            answerInputEl[0].checked = undefined
            answerInputEl[1].checked = undefined
            answerInputEl[2].checked = undefined
        }
          })
    })



