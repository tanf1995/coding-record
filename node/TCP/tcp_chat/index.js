var net = require("net");
var stdout = process.stdout;

var count = 0,
    users = {};


var server = net.createServer(conn => {
    conn.setEncoding("utf8");

    conn.write(
        '\r\n > Welcome to ' + 
        '\r\n > ' + ++count + ' people are connected at the time.' + 
        '\r\n > Please write your name and press enter:  '
    );
    // client 断开
    var is_handler_client_leave = false;
    var handler = () => {
        count--;
        stdout.write("\nA client leave server!\nCurrent connected client count: " + count);
    }
    conn.on('end', () => {
        handler();
        is_handler_client_leave = true;
    })
    conn.on('close', () => {
        if(!is_handler_client_leave){
            handler();
        }
    })

    // 设置昵称和聊天
    var nickname = "";
    var msg = "";
    conn.on("data", data => {
        if(data == "\r\n" && msg){
            msg = msg.replace('\r\n', '');
            if(!nickname){
                if(users[msg]){
                    conn.write('nickname already in use. try again: ');
                }else{
                    nickname = msg;
                    users[nickname] = conn;
    
                    for(var i in users){
                        users[i].write(
                            nickname + ' join the room! \r\n\r\n >> '
                        );
                    }
                }
            }else{
                for(var item in users){
                    if(item !== nickname){
                        users[item].write(
                            nickname + ' : ' + msg + '\r\n >> '
                        )
                    }else{
                        users[nickname].write(
                            " >> "
                        );
                    }
                }
            }
            msg = "";
        }else{
            msg += data;
        }
    })
})

server.listen(3000, () => {
    console.log("server listing on 3000");
})