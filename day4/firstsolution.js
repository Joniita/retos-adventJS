
const box2 = [
    { l: 1, w: 1, h: 1 },
    { l: 4, w: 3, h: 2},
    { l: 3, w: 2, h: 3}
]

const fitsInOneBox = (boxes) => {
    if (boxes === undefined) throw new Error('boxes is required');
    const allBoxes = boxes.sort(((a, b) => a.l - b.l));
    let arr1 = [];
    allBoxes.map(i => arr1.push(i.l));
    let uniqueNumbers = new Set(arr1).size === arr1.length;
    if (!uniqueNumbers) return false
    let arr2 = [];
    allBoxes.map(i => arr2.push(i.w));
    uniqueNumbers = new Set(arr2).size === arr2.length;
    if (!uniqueNumbers) return false
    let arr3 = [];
    allBoxes.map(i => arr3.push(i.h));
    uniqueNumbers = new Set(arr3).size === arr3.length;
    if (!uniqueNumbers) return false
    
    console.log(arr1, arr2, arr3);
    for (let i in arr2) {
        if (i >= arr2[i++]) {
            return false
            break;
        }
    }
    for (let i in arr3) {
        if (i >= arr3[i++]) {
            return false
            break;
        }  
    }
    return true
};

fitsInOneBox(box2);