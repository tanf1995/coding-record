import './print.css';
import blackBox from './BlackBox';
import _ from 'lodash';


function printInfo(){
    console.log("hello, i print this text.");
    console.log(_.fromPairs([['fred', 30], ['barney', 40]]).toString());
    // throw Error("throw a error");
}

function Button(){
    var ele = document.createElement('button');

    ele.innerHTML = "print";
    ele.classList.add('btn');
    ele.addEventListener('click', function(){
        printInfo();

        import(/* webpackChunkName: "jquery" */ 'jquery')
            .then(jquery => {
                let $ = jquery;
                console.log(jquery);
                function slideBox(){
                    var ele = $('<div><div>');

                    ele.css({
                        width: 200,
                        height: 200,
                        backgroundColor: "aqua"
                    })
                    ele.on('click', function(){
                        $(this).fadeOut();
                    })
                    return ele[0];
                }

                document.body.appendChild(slideBox());
            })
            .catch(err => console.log(err))
    });
    return ele;
}

document.body.appendChild(Button());
let black_box = blackBox("black-box");
document.body.appendChild(black_box);