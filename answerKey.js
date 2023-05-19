let score = 0
function answerKey() {
    if(answerInputEl[0].checked == true && a_text.textContent == 'Soekarno') {
        score++
    }
    if(answerInputEl[3].checked == true && d_text.textContent == 'Albert Einstein') {
        score++
    }
    if(answerInputEl[2].checked == true && c_text.textContent == 'Sumatera Barat') {
        score++
    }
    if(answerInputEl[2].checked == true && c_text.textContent == '1883') {
        score++
    }
    if(answerInputEl[0].checked == true && a_text.textContent == '1945'&& currenDataNum == 6) {
        score++
    }
}