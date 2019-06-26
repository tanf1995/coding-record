require('net').createServer(function(socket){
    function add_pos(num){
        return (num < 10 ? "0" : "") +  num.toString();
    }
    var date = new Date();
    var c_year = add_pos(date.getFullYear()),
        c_month = add_pos(date.getMonth() + 1),
        c_day = add_pos(date.getDate()),
        c_hours = add_pos(date.getHours()),
        c_minute = add_pos(date.getMinutes());

    socket.end(`${c_year}-${c_month}-${c_day} ${c_hours}:${c_minute}\n`);
}).listen(process.argv[2]);