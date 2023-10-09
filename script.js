const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

// all original words
let swords = ['python', 'javascript', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql'];

// create new random word
const createNewWords = () => {

    let ranNum = Math.floor(Math.random() * swords.length);
    let newTemSwords = swords[ranNum];
    return newTemSwords;
}
// rearrange the word
const scrambleWords = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let temp = arr[i];
       
        let j = Math.floor(Math.random() * (i + 1));
        
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// all function after click button
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
       
        msg.innerHTML = `Guess the word : ${randWords}`;
    } else {
        let tempWord = guess.value;
        if (tempWord === newWords) {
          
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";

        } else {
           
            msg.innerHTML = `Sorry yrr. It's not Correct. Plz try again ${randWords}`;
        }
    }
})
