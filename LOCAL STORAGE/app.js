const arr = ["Killian", "Lorenzo", "Hakou"];
const stringed = JSON.stringify(arr);
console.log(typeof stringed);

const backToArr = JSON.parse(stringed);
console.log(typeof backToArr);