
import { createInterface } from "readline";
const rl=createInterface({
        input:process.stdin,
        output:process.stdout,
        terminal:false
})

const func=rl.on('line',(input)=>{
        const output = input.split("").reverse().join("");
        console.log(output);
})

