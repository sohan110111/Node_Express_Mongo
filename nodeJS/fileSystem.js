const fs = require('fs');
//console.log(fs);
fs.exists('rename.text', (result) => {
    if (result)
        //console.log("found");
        fs.unlink('rename.text', (err) => {
            if (err)
                console.log(err);
            else
                console.log("File successfully deleted");
        })
    else {
        console.log("not found");
        //console.log("File successfully created");
        /*fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });*/
    }
});