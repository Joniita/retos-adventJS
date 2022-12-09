const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
];

const box = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 2 }
]

const box2 = [
    { l: 1, w: 1, h: 1 },
    { l: 4, w: 3, h: 2 },
    { l: 3, w: 2, h: 3 }
]

const box3 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 4, h: 3 }
];



const fitsInOneBox = (boxes) => {
    const allBoxes = boxes.sort(((a, b) => a.l - b.l));
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    allBoxes.map(i => {
        arr1.push(i.l)
        arr2.push(i.w)
        arr3.push(i.h)
    });
    for (let i in arr1) {
        if (i >= arr1[i++]) {
            return false
        }
    }
    for (let i in arr2) {
        if (i >= arr2[i++]) {
            return false
        } else {
            for (let i in arr3) {
                if (i >= arr3[i++]) {
                    return false
                }
            }
        }
    }

    return true

};