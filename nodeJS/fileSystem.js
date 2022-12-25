const fs = require('fs');
//console.log(fs);
fs.writeFile('example.txt', "This is an টেস্ট", (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File successfully created");
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else
                console.log(file);
        });
    }
});