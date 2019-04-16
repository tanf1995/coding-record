let fs = require("fs");
let path = require("path");
let args = process.argv.splice(2);
let command = args.shift();
let taskDescription = args.join(" ");
let file = path.join(process.cwd(), '/.task');


switch(command){
    case 'list':
        listTasks(file);
        break;

    case 'add':
        addTask(file, taskDescription);
        break;

    default:
        console.log('Usage: ' + process.argv[0] + ' list|add [taskDescription]');
}

function loadOrInitializeTaskArray(file, cb){
    fs.exists(file, exists => {
        if(exists){
            fs.readFile(file, 'utf8', (err, data) => {
                if(err) throw err;

                data = data.toString();
                let tasks = JSON.parse(data || '[]');
                cb(tasks);
            });
        }else{
            cb([]);
        }
    })
}

function listTasks(file){
    loadOrInitializeTaskArray(file, tasks => {
        tasks.forEach(task => console.log(task));
    })
}


function storeTasks(file, tasks){
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', err => {
        if(err) throw err;
        console.log('Saved.');
    })
}

function addTask(file, taskDescription){
    loadOrInitializeTaskArray(file, tasks => {
        tasks.push(taskDescription);
        storeTasks(file, tasks);
    })
}