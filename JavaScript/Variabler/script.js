let navn = "Sara";
let alder = 16;
console.log(navn);
console.log(alder);

let pris = 120;
let antall = 3;
const tillegg = 20;

antall = 5;       // OK
// tillegg = 30;  // Feil: tillegg er const

const total = pris * antall + tillegg;
// total = 700;   // Feil: total er const

console.log(total);