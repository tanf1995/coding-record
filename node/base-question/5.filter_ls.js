var dir_path = process.argv[2];
var filter_ex = process.argv[3];

require('fs').readdir(dir_path, function(err, li){
    li.forEach(function(item){
        if(item.lastIndexOf('.' + filter_ex) != -1){
            console.log(item);
        }
    })
})

// answer
// var fs = require('fs')
//     var path = require('path')

//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })