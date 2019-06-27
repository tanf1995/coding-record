import './index.css';
import png from './assets/images/timg.jpg';
import blackBox from './components/BlackBox';


function component(){
    var element = document.createElement('div');

    element.innerHTML = "hello world!";
    element.classList.add('text');
    return element;
}

function Img(){
    var ele = document.createElement('img');

    ele.setAttribute('src', png);
    ele.classList.add('img');
    return ele;
}


document.body.appendChild(component());
document.body.appendChild(Img());
let black_box = blackBox("black-box");
document.body.appendChild(black_box);


// hot loading
if(module.hot){
    module.hot.accept('./components/BlackBox', function(){
        let black_box2 = blackBox("black-box");
        document.body.insertBefore(black_box2, black_box);
        document.body.removeChild(black_box);
        black_box = black_box2;
        black_box2 = null;
    })
}