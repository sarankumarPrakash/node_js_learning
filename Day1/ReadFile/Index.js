const fs = require('fs');
const path = require("path");


// //               Read  file 
// fs.readFile(path.join(__dirname,  'sample.txt'), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // Read File 
// fs.writeFile(path.join(__dirname,  'subscribe.txt'), "hello world ", (err) => {
//     if (err) throw err;
//     console.log("writing completed");
//   });

// //  Update File  
// fs.writeFile(path.join(__dirname,  'subscribe.txt'), "hello world ", (err) => {
//     if (err) throw err;
//     console.log("writing completed");
//     fs.appendFile(path.join(__dirname,  'subscribe.txt'), "hello world thank you buudy..  ", (err) => {
//         if (err) throw err;
//         console.log("writing completed");
//       });
//   });

//   // Rename file 

//   fs.writeFile(path.join(__dirname,  'subscribe.txt'), "hello world ", (err) => {
//     if (err) throw err;
//     console.log("writing completed");
//     fs.appendFile(path.join(__dirname,  'subscribe.txt'), "hello world thank you buudy..  ", (err) => {
//         if (err) throw err;
//         console.log("update completed");
//       });
//       fs.rename(path.join(__dirname,  'subscribe.txt'), path.join(__dirname,  'sub.txt'), (err) => {
//         if (err) throw err;
//         console.log("rename completed");
//       });
//   });

  // 1. Above code written in sync now change these into async and await 


  const fsPromises=require('fs').promises


  const writeData = async () => {
    try {
        let data = await fsPromises.readFile(path.join(__dirname, 'sub.txt'), "utf8");
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'newText.txt') , `${data} hello from new Text`);
        console.log("file updated")
        await fsPromises.appendFile(path.join(__dirname, 'newText.txt') , "\n i am appending some text to the existing content of the file ")
        console.log("update the file value ")
        await fsPromises.rename(path.join(__dirname, 'newText.txt'), path.join(__dirname, 'updatedText.txt'));
        console.log("filename upadted")
         await fsPromises.unlink(path.join(__dirname, 'sub.txt') )
    } catch (err) {
        console.error(err.message);
    }
}
  writeData()
process.on('uncaughtException', function (err) {
    console.error(err.stack || err);
    process.exit(1); // to avoid node hanging in the background
})
