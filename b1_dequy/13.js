//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const funcS = (n) => {
    if (n === 1) return 1 / 2;
    return funcS(n - 1) + n / (n + 1)
}


const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = Number(numbers[i]);
        const s = funcS(number);
        console.log(s.toFixed(10));
    }
}