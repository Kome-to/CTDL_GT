//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------


const decToBin = (dec, result = '') => {
    if (dec < 2) return `${dec}${result}`;
    const qu = Math.floor(dec / 2);
    const re = dec % 2;
    return decToBin(qu, `${re}${result}`)
}

const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = numbers[i];
        const result = decToBin(number);
        console.log(result);
    }
}