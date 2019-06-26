let text = "'I'm the cook,' he said, 'it's my job.'";
function rep(text){
    text = text.replace(/^'|'$/g, "\"");
    text = text.replace(/\s'/g, " \"");
    text = text.replace(/'\s/g, "\" ");
    return text;
}

console.log(rep(text));
