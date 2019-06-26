let http = require("http");
let work = require("./lib/timetrack");
let mysql = require("mysql");

// 此处只能用单引号
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '951021',
    database: 'timetrack'
});

db.connect(err => {
    if(err){
        console.log(err);
        return;
    }
    console.log("connected");
});


let server = http.createServer();

server.on("request", (req, res) => {
    switch(req.method){
        case "POST":
            switch(req.url){
                case "/":
                    work.add(db, req, res);
                    break;

                case "/archive":
                    work.archive(db, req, res);
                    break;

                case "/delete":
                    work.deleteData(db, req, res);
                    break;
            }
            break;

        case "GET":
            switch(req.url){
                case "/":
                    work.show(db, res);
                    break;

                case "/archived":
                    work.showArchived(db, res);
                    break;
            }
            break;
    }
})

db.query(
    `
    create table if not exists work(
    id INT(10) not null auto_increment,
    hours DECIMAL(5, 2) default 0,
    date DATE,
    archived INT(1) default 0,
    description LONGTEXT,
    primary key(id))
    `,
    err => {
        if(err) throw err;
        console.log('Server started...');
        server.listen(3000);
    }
)
