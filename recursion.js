const fibs = (num) => {
    const arr = [0, 1];
    if (num < 2) { return arr.slice(0, num + 1)};
    for (let i = 2; i <= num; i++)
    {
        if (i === num) {continue};
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

//Works, but gives the series in descending order.
// const fibsRec = (num) => {
//     if (num === 0) {
//         return [0];
//     } 
//     else if (num === 1) {
//         return [1, 0];
//     }
    
//     return [fibsRec(num-1)[0] + fibsRec(num-2)[0]].concat(fibsRec(--num));
// }


//Neatest solution, found on stack overflow
// const fibsRec = (n) => { 
//     if (n === 0 ) return [0];
//     if (n === 1) return [ 0 , 1];
//     const arr = fibsRec(n - 1);
//     return [...arr, arr[n-1] + arr[n-2]];
// }

//Works but gives one too many terms **Turns out the course was somewhat wrong in this exercise, this solution is fine, albeit a bit bulky**
const fibsRec = (num) => {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    return fibsRec(num - 1).concat(fibsRec(num - 1)[fibsRec(num-1).length - 1] + fibsRec(num - 2)[fibsRec(num-2).length - 1])
}

// console.log(fibsRec(8));

const mergeSort = (arr) => { 
    if (arr.length > 1)
    {
        let i = 0;
        let j = 0;
        let k = 0;
        let sorted = [];
        let mid = (arr.length / 2);
        let first = mergeSort(arr.slice(0, mid));
        let scnd = mergeSort(arr.slice(mid)); 
        while (i < first.length && j < scnd.length)
        {
            if (first[i] < scnd[j])
            {
                sorted[k++] = first[i++];
            }
            else
            {
                sorted[k++] = scnd[j++];
            }
        }
        if (i === first.length) {
           sorted = sorted.concat(scnd.slice(j))
        }
        else 
        {
            sorted = sorted.concat(first.slice(i));
        }
        return sorted;
    }
    else 
    {
        return arr;
    }
}
const mergeArr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const mergeArr2 = [105, 79, 100, 110];

console.log(mergeSort(mergeArr1))

