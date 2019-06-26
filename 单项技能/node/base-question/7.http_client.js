require('http').get(process.argv[2], function(req){
    req.setEncoding('utf8');
    req.on('data', function(data){
        data.split('\n').forEach(function(item){
            console.log(item);
        })
    })
})

// answer
// var http = require('http')

// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)