let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4])

const intersection = (set1, set2) => {
    let newSet = new Set();
    for (let elem of set2) {
        if (set1.has(elem)) {
            newSet.add(elem);
        }
    }
    return newSet;
}

console.log(intersection(setA, setC))