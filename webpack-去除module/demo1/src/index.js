import _ from 'lodash';
import './style.css';
import my_photo from './photo.jpg';
import printMe from './print';

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(["no", 'Hello', 'webpack'], " ");
    element.setAttribute('class', 'hello');
    return element;
}

function photo(){
    var element = document.createElement('img');

    element.setAttribute('src', my_photo);
    element.setAttribute('width', "200");
    element.setAttribute('height', "auto");
    return element;
}

function btn(){
    var element = document.createElement('button');

    element.innerHTML = "don't click me";
    element.addEventListener('click', printMe, false);
    return element;
}

const doc_body = document.body;
let btn_ele = btn();

doc_body.appendChild(component());
doc_body.appendChild(btn_ele);
doc_body.appendChild(photo());

if(module.hot){
    module.hot.accept('./print.js', function(){
        let new_btn_ele = btn();

        doc_body.replaceChild(new_btn_ele, btn_ele);
        btn_ele = new_btn_ele;
    })
}