function normalize(){
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({coords: [0, 2, 5, 10], length: 4});