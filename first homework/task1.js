
import { createInterface } from "readline";
const rl=createInterface({
        input:process.stdin,
        output:process.stdout,
        terminal:false
})

let func=rl.on('line',(input)=>{
        let output = input.split("").reverse().join("");
        console.log(output);
})

