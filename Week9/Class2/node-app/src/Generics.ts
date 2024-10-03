function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);


//Solution 2 also works

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
const el2=getFirstElement([1,2])
console.log(el.toLowerCase());