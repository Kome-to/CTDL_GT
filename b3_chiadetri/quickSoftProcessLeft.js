//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const quickSoft = (arr, l, r) => {
    let pivot = l;

    let i = l + 1;
    let j = r - 1;
    console.log();
    console.log(`Partitioning: left=${l}, right=${r - 1}`);

    console.log(`${arr.slice(l, r).join(' ')} `);
    while (i <= j) {

        if (arr[i] > arr[pivot] && arr[j] <= arr[pivot]) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
            console.log(`${arr.slice(l, r).join(' ')} `);
        }

        if (arr[i] <= arr[pivot]) {
            i++;
        }

        if (arr[j] > arr[pivot]) {
            j--;
        }

    }

    const tmp = arr[pivot];
    arr[pivot] = arr[i - 1];
    arr[i - 1] = tmp;
    pivot = i - 1;
    console.log(`${arr.slice(l, r).join(' ')} `);
    
    // Array > 2 items
    if (l < pivot - 1) {
        quickSoft(arr, l, pivot);
    }
    if (pivot + 1 < r - 1) {
        quickSoft(arr, pivot + 1, r);
    }

}

const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    const line2 = array[1];
    const numbers = line2.trim().split(' ').slice(0, n).map(i => Number(i.trim()));

    console.log(`${numbers.join(' ')} `);
    quickSoft(numbers, 0, numbers.length);
    console.log(`${numbers.join(' ')} `);
}