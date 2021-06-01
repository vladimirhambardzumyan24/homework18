let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

const isSuperset = (set1, set2) => {
    for (let elem of set2) {
        if (!set1.has(elem)) {
            return false;
        }
    }
    return true;
}

console.log(isSuperset(setA, setB))
