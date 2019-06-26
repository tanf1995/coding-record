var count = 3;
var data_li = [];


for(let i=0;i<3;i++){
    get_data(i);
}

function get_data(index){
    require('http').get(process.argv[index+2], function(req){
        req.setEncoding('utf8');
        var all_data = "";
        req.on('data', function(data){
            all_data += data.toString();
        })
        req.on('end', function(){
            data_li[index] = all_data;
            log_data();
        })
        req.on('error', console.error);
    }).on('error', console.error)
}

function log_data(){
    if(--count !== 0){
        return;
    }else{
        // console.log(data_li);
        data_li.forEach(function(item){
            console.log(item);
        })
    }
}


// answer
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }