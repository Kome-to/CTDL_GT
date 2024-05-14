//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const funcOne = (n) => {
    if (n === 1) return 1;
    return Math.sqrt(n + funcOne(n - 1));
}


const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = numbers[i];
        const value = funcOne(Number(number));
        console.log(value.toFixed(10));
    }
}