/*
Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:


fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false

*/

let boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 5, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
];


function fitsInOneBox(boxes) {
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

fitsInOneBox(boxes);



/*
arr.map(i => {
    if ( i < i+1){
        arr = [];
        boxes.map(i => {
            arr.push(i.w);
        })
    } if (i.w < i+1) {
        arr = [];
        boxes.map(i => {
            arr.push(i.h);
        })
    }
});

console.log(arr);

--------------------------

 let arr = [];

    boxes.map(i => {
        return arr.push(i.l);
    })

    arr.sort();
    console.log(arr);

    arr.map(i => {
        if (i >= arr[i]++) {
            return false;
        } else {
            arr = [];
            boxes.map(i => {
                return arr.push(i.w);
            });
            arr.sort();
            console.log(arr);
            arr.map(i => {
                if (i >= arr[i]++) {
                    return false;
                } else {
                    arr = [];
                    boxes.map(i => {
                        return arr.push(i.h);
                    });
                    arr.sort();
                    console.log(arr);
                    arr.map(i => {
                        if (i >= arr[i]++) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
            });
        }
    });

 */


