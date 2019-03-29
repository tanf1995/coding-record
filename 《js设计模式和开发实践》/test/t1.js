String.prototype._split = function(key){
    let val_bak = this.valueOf();
    let key_bak = key;
    let index = this.valueOf().toLowerCase().indexOf(key_bak.toLowerCase());

    return val_bak.split()
}

var st = "Hello World";

st._split("wo");