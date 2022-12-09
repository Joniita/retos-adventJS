import { describe, expect, it } from "vitest";


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
  if ( !allBoxes.every(i => i.l > allBoxes[i++].l) || !allBoxes.every(i => i.w > allBoxes[i++].w) || !allBoxes.every(i => i.h > allBoxes[i++].h))
  {
    return false
  } else return true

  /*
  
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
    } else {
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
    }
  }*/
  
};


describe('fitsInOneBox', () => {
  it('should be a function', () => {
    expect(fitsInOneBox).toBeTypeOf('function');
  })

  it('should throw if no contain a one parameter', () => {
    expect(() => fitsInOneBox()).toThrow()
  })

  it('should return a boolean', () => {
    expect(fitsInOneBox(boxes)).toBeTypeOf('boolean')
  })

  it('should return false if a box have same value in a one property', () => {
    expect(fitsInOneBox(box)).toBe(false)
  })

  it('should return false if a one property value is a more big that next property value', () => {
    expect(fitsInOneBox(box2)).toBe(false)
  })

  it('should return true if a one property value is a more small that next property value', () => {
    expect(fitsInOneBox(box3)).toBe(true)
  })
});

