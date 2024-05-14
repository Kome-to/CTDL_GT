//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const funcTwo = (n, result = 0) => {
    if (n === 1) return Math.sqrt(1 + result);
    const newResult = Math.sqrt(n + result)
    return funcTwo(n - 1, newResult);
}


const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = numbers[i];
        const value = funcTwo(Number(number));
        console.log(value.toFixed(10));
    }
}