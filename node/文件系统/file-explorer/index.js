var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;

var file_path = "";

var read_dir = function rd(path){
    fs.readdir(path, function(err, files){
        console.log("");
        var stats = [];
    
        if(!files.length){
            return console.log('    \033[31m No files to show!\033[39m\n');
        }
    
        console.log('   Select which file or directory you want to see\n');
    
        function file(i){
            var filename = files[i];
    
            fs.stat(path + '/' + filename, function(err, stat){
                stats.push(stat);
                if(stat.isDirectory()){
                    console.log('   ' + i + '   \033[36m' + filename + '/\033[39m');
                }else{
                    console.log('   ' + i + '   \033[90m' + filename + '\033[39m');
                }
    
                if(++i == files.length){
                    read();
                }else{
                    file(i);
                }
            })
        }
    
        function read(){
            console.log('');
            stdout.write('  \033[33mEnter your choice: \033[39m');
            stdin.resume();
            stdin.setEncoding('utf8');
            stdin.on('data', option);
        }
    
        function option(data){
            var filename = files[Number(data)];

            console.log("==" + filename + "==");
            if(!filename) {
                stdout.write('  \033[31mEnter your choice: \033[39m');
            }else if(stats[parseInt(data)].isDirectory()){
                // fs.readdir(__dirname + '/' + filename, function(err, files){
                //     files.forEach(item => {
                //         console.log("- "  + item);
                //     })
                //     stdin.pause();
                // })
                file_path = path + '/' + filename;
                rd(path + '/' + filename);
            }else{
                stdin.pause();
                if(path == file_path){
                    fs.readFile(path + '/' + filename, 'utf8', function(err, data){
                        console.log('');
                        console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
                    });
                    has_read = true;
                }
                has_read = true;
            }
        }
    
        file(0);
    })
}

read_dir(process.cwd());