const fs = require('fs');

// Reading Files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Last line');

// Writing Files
// fs.writeFile('./docs/blog1.txt', 'ello, world', () => {
//     console.log('File was written!');
// });

// Directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created!');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     })
// }

// Deleting Files
if (!fs.existsSync('./docs/deletme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File deleted!');
    })
}