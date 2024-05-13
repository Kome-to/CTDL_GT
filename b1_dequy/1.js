//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------
const display = (n, result) => {
    console.log(`${n}! = ${result}`);
    return result;
}

const factorial = (n) => {
    return n === 0 ? display(n, 1) : display(n, n * factorial(n - 1));
}
   

const main = () => {
    const n = Number(input.trim());
    factorial(n);
}