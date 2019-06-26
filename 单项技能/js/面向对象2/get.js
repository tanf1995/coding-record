Object.defineProperty(Date.prototype, 'ago', {
    get: function(){
        var diff = ((new Date()).getTime() - this.getTime())/1000;
        return diff < 0 ? "in the future" : (
            diff < 60 ? diff + "秒前" : (
                diff < 3600 ? parseInt(diff/60) + "分钟之前" : (
                    diff < 24*3600 ? parseInt(diff/(24*3600)) + "小时之前" : (
                        diff < 7*24*3600 ? parseInt(diff/(7*24*3600)) + "天之前" : "一周之前"
                    )
                )
            )
        );
    }
})


var my_bir = new Date(21/10/1995);
var ran_time = new Date(1544411887655);

console.log(my_bir.ago);
console.log(ran_time.ago);