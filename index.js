const program = require('commander');

const fs = require("fs");

const textractScan = require("./textractUtils");

program.version("0.0.1").description("Textract Lab");

program.command("scan <filePath>")
.alias("s")
.description("scan a file")
.action(async filePath => {
   // var test = (/\.(png)$/i).test(filePath); // regular expression to extract MIMA type 
   //if (test) console.log('we have png')

   var data = fs.readFileSync(filePath);
   const results = await textractScan(data); // this is only for PNG or JPG images. 
   //console.log(results);// json format
   // let array = results.Blocks
   // for (i =0; i < array.length; i++) {
   //    console.log(array[i].Text)
   // }

});

program.parse(process.argv);