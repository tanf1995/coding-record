function sayTf(){
    console.log("my name is tf");
}

export default function blackBox(id){
    var ele = document.createElement('h2');

    ele.innerHTML = "my name is black box2.";
    ele.setAttribute('id', id);
    return ele;
}