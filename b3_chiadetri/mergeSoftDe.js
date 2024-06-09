//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const mergeArray = (arr, l, m, r) => {
    const arr1 = arr.slice(l, m);
    const arr2 = arr.slice(m, r);

    let arrIndex = l;
    let arr2Index = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr2Index >= arr2.length) {
            for (let j = i; j < arr1.length; j++) {
                arr[arrIndex] = arr1[j];
                arrIndex++;
            }
            break;
        }
        while (arr2Index < arr2.length && arr2[arr2Index] > arr1[i]) {
            arr[arrIndex] = arr2[arr2Index];
            arr2Index++;
            arrIndex++;
        }

        arr[arrIndex] = arr1[i];
        arrIndex++;
    }

    // Put rest of arr2 to arr 
    if (arr2Index < arr2.length) {
        for (let i = arr2Index; i < arr2.length; i++) {
            arr[arrIndex] = arr2[i];
            arrIndex++;
        }
    }
    return arr;
}

const mergeSoft = (arr, l, r) => {
    if (r - l < 2) return;
    const k = Math.floor((r + l) / 2);
    mergeSoft(arr, l, k);
    mergeSoft(arr, k, r);
    mergeArray(arr, l, k, r);

    return;
}


const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    const line2 = array[1];
    const numbers = line2.trim().split(' ').slice(0, n).map(i => Number(i.trim()));
    mergeSoft(numbers, 0, numbers.length)
    console.log(numbers.join(' '));
}