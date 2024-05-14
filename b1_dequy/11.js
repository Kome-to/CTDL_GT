//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------


const funcX = (v) => {
    if (v === 0) return 1;
    return funcX(v - 1) + funcY(v - 1)
};
const funcY = (v) => {
    if (v === 0) return 0;
    return funcX(v - 1) * 3 + funcY(v - 1)
};

const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = Number(numbers[i]);
        const x = funcX(number);
        const y = funcY(number)
        console.log(`${x} ${y}`);
    }
}