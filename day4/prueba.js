
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



/*
---------- 17 puntos -------------

function fitsInOneBox(boxes) {
 
  boxes.sort(((a, b) => a.l - b.l));

  for (let i = 1; i < boxes.length; i++) {
    let act = boxes[i]
    let bef = boxes[i - 1]
    if (act.l <= bef.l || act.w <= bef.w || act.h <= bef.h) {
      return false;
    }
  }

  return true;
}
*/


/*
----------------- 10 puntos -----------
function fitsInOneBox(boxes) {
 
  boxes.sort(((a, b) => a.l - b.l));

  for (let i = 1; i < boxes.length; i++) {
    let act = boxes[i]
    let bef = boxes[i - 1]
    if (act.l > bef.l && act.w > bef.w && act.h > bef.h) {
      continue;
    } else {return false}
  }

  return true;
}
*/