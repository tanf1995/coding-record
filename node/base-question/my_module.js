module.exports = function(dir, ext, callback){
    require('fs').readdir(dir, function(err, li){
        if(err){
            return callback(err);
        }else{
            var rel = [];
            li.forEach(function(item){
                if(item.lastIndexOf('.' + ext) != -1){
                    rel.push(item);
                }
            })
            callback(null, rel);
        }
    })
}