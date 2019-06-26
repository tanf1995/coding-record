let async = require("async");


let dep = {
    readConfig: function(cab){
        setTimeout(function(){
            console.log("read config file");
            cab();
        }, 2000)
    },
    connectSQL1: ["readConfig", function(res ,cab){
        console.log("connect SQL1");
        cab();
    }],
    connectSQL2: ["readConfig", function(res, cab){
        console.log("connect SQL2");
        cab();
    }],
    complieAsset: function(cab){
        setTimeout(function(){
            console.log("complie asset");
            cab(null, "compile asset result");
        }, 1000)
    },
    uploadAsset: ["complieAsset", function(res, callback){
        console.log("upload asset");
        console.log(res);
        callback();
    }],
    startUp: ["connectSQL1", "connectSQL2", "uploadAsset", function(res, cab){
        console.log("start up server");
        cab();
    }]
}

async.auto(dep, function(err, result){
    if(err){
        console.log(err);
        return;
    }

    console.log(result);
});