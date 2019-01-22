import printMe from './print'
import printBye from './print2'

function btn(){
    let btn = document.createElement('button');

    btn.innerHTML = "click me";
    btn.addEventListener('click', printMe, false);

    return btn;
}

function btn2(){
    let btn = document.createElement('button');

    btn.innerHTML = "dont click me";
    btn.addEventListener('click', printBye, false);

    return btn;
}

document.body.appendChild(btn());
document.body.appendChild(btn2());