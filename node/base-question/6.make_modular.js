var dir_path = process.argv[2];
var filter_ex = process.argv[3];

require('./my_module')(dir_path, filter_ex, function(err, data){
    if(err){
        return console.log(err);
    }else{
        data.forEach(function(item){
            console.log(item);
        })
    }
})