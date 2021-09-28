import * as fs from 'fs';
import { execSync, exec } from 'child_process';

function jestifyit() {
    // 1. Run 'npm init -y'
    execSync("npm init -y", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        // Print message if successful!
        console.log("=> npm init completed ^_^")
    });


    // 2. Replace test command string with .replace regex
    fs.readFile('./package.json', 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        let result = data
            .replace(/"echo \\"Error: no test specified\\" && exit 1"/g, '"node --experimental-vm-modules node_modules/jest/bin/jest.js"')

        fs.writeFile('./package.json', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });

    // 3. split the file into lines
    let lines_arr = fs.readFileSync('./package.json').toString().split("\n");

    // 4. Insert the type:modules line using .splice 
    if (lines_arr[5] != '  "type": "module",') {
        lines_arr.splice(5, 0, '  "type": "module",');
    }
    // 5. Re-join the array into a string
    let new_file_data = lines_arr.join("\n");

    // 6. Write the file to disk
    fs.writeFile('./package.json', new_file_data, function (err) {
        if (err) return console.log(err);
    });

    console.log(" \
\n => Added experimental-modules node flag for jest \
\n => Added 'type': 'module' \
\n => Written new 'package.json file. \n \
\n => Now executing 'npm install --save-dev jest'. This may take a while..\n");

    // 7. Execute the 'npm install --save-dev jest' shell command
    exec("npm install --save-dev jest", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        // Print message if successful!
        console.log("=> jestifyit completed ^_^")
    });
}



export default jestifyit;