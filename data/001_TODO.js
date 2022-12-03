const data = "";
const splittedData = data.split("\n");
let result = "";
let y = 0;
while (y < splittedData.length -1) {

    for (let i = 0; i < 10; i++) {
        const value = splittedData[i + y];
        if(isNaN(Number(value))) {
            console.log('Value not a number : ', value)
        }
        result += value +( i !== 9 ?  ";" : "");
    }
    result += "\n";
    y += 10;

}

console.log(result);