import csv from 'csvtojson';
import { writeFile } from 'fs';
const csvFilePath='csv\\nodejs-hw1-ex1.csv';

var data='';
csv()
.fromFile(csvFilePath)
.on('error',(err)=>{
	console.log(err)
})
.then((jsonObj)=>{
	jsonObj.forEach((line)=>{
                data+=JSON.stringify(line)+'\n';
        })

	writeFile('test.txt',data,(err)=>{
                if(err)
                        console.log(err);

        })
})
