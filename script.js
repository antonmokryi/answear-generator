let inp = document.querySelector('.inp');
let answ = document.querySelector('.answear');
let btn = document.querySelector('.btn');
let history = document.querySelector('.history');



const arrayAnswear = ['Так', 'Ні', 'Можливо', 'Іди в мами спроси'];

func = () => {
    inp.value = '';
    answ.innerText = arrayAnswear[Math.floor(Math.random() * arrayAnswear.length)];
    
    if (inp.length == 0){
        answ.innerText = 'Напишіть своє питання';
    };

    clear = () =>{
        answ.innerText = 'Відповідь'
    }
    setTimeout(clear, 3000);
};

funcPopUp = () => {
    document.querySelector('.popUp').style.display = "none";
};

btn.addEventListener('click', func);

document.getElementById('btn').addEventListener('click', funcPopUp);

