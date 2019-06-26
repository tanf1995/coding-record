require('http').get(process.argv[2], function(req){
    req.setEncoding('utf8');
    var all_data = "";
    req.on('data', function(data){
        all_data += data.toString();
    })
    req.on('end', function(){
        console.log(all_data.length);
        console.log(all_data);
    })
    req.on('error', console.error);
}).on('error', console.error)


// answer
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//     if (err) {
//         return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//     }))
// })