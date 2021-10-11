import csv from 'csvtojson';
import { createWriteStream,createReadStream } from 'fs';
const readStream=createReadStream('csv\\nodejs-hw1-ex1.csv');

const stream=createWriteStream('test.txt');
csv()
.fromStream(readStream)
.subscribe((json)=>{
                let outputLine={};
                for(const[key,value] of Object.entries(json)){
                        outputLine[firstLettertoLower(key)]=value;
                }
                stream.write(`${JSON.stringify(outputLine)}\n`);
        }
        ,(err)=>{console.log(err)}
        ,()=>{console.log('Job Done!')})

function firstLettertoLower(word) {
        return word.charAt(0).toLowerCase()+word.slice(1);
}