//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const gcd = (a, b) => {
    if (a === 0 || b === 0) return 0;
    if (a === b) return a;
    const sub = Math.abs(a - b);
    const min = Math.min(a, b);
    return gcd(min, sub);
}


const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numberPairs] = array;
    for (let i = 0; i < n; i++) {
        const numberPair = numberPairs[i];
        const numbers = numberPair.split(' ').map(item => Number(item));
        console.log(gcd(...numbers));
    }
}