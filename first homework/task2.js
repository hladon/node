import csv from 'csvtojson';
import { createWriteStream } from 'fs';
const csvFilePath='csv\\nodejs-hw1-ex1.csv';

let stream=createWriteStream('test.txt');
csv()
.fromFile(csvFilePath)
.subscribe((json,lineNumber)=>{
                let outputLine={};
                for(let key in json){
                        outputLine[firstLettertoLower(key)]=json[key]
                }
                stream.write(JSON.stringify(outputLine)+'\n');
        }
        ,(err)=>{console.log(err)}
        ,()=>{console.log('Job Done!')})

function firstLettertoLower(word) {
        return word.charAt(0).toLowerCase()+word.slice(1);
}