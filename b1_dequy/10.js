//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------


const element = (x, n) => {
    if (n === 1) return x;
    return element(x, n - 1) * (x / n)
}

const s = (x, n, i = 1) => {
    if (x === 0 || n === 0) return 0;
    return element(x, n) + s(x, n - 1)
}

const main = () => {
    const array = input.trim().split('\n');
    const [firstLine, ...restLines] = array;
    for (let i = 0; i < firstLine; i++) {
        const [x, n] = restLines[i].split(' ').filter(item => item).map(item => Number(item));
        const sum = s(x, n)
        console.log(sum.toFixed(8));
    }
}