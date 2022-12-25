const fs = require('fs');
//console.log(fs);
fs.rename('example.txt', "rename.text", (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File successfully renamed");
        //console.log("File successfully created");
        /*fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });*/
    }
});