import './print.css';

function printInfo(){
    console.log("hello, i print this text.");
    throw Error("throw a error");
}

function Button(){
    var ele = document.createElement('button');

    ele.innerHTML = "print";
    ele.classList.add('btn');
    ele.addEventListener('click', printInfo);
    return ele;
}

document.body.appendChild(Button());