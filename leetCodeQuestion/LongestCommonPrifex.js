// WAP to find longest common prefix;

let str = ["aatditya", "aatmit", "aatnkit"];

function checkPrefix(x) {
  let i = 1;
  let prf = x[0];
  while (i < x.length) {
    console.log(prf);
    if (!x[i].startsWith(prf)) {
      prf = prf.slice(0, -1);
    } else {
      i++;
    }
  }
  return prf;
}
console.log("commonPrefix", checkPrefix(str));
