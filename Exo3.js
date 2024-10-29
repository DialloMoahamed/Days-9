// Reponse numero 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// ------ Le compte ------ //
function count() {
    const compter = ages.length
    return compter
}
console.log("Count :", count());
// ------ La sum ------ //
let som = 0
function sum() {
    for (let i = 0; i < ages.length; i++) {
       som += ages[i]
    }
    return som;
}
console.log("Sum :" ,sum());
// ------ minimum ------ //
const trier = ages.sort()
function min() {
    const minimum = trier[0]
    return minimum
}
console.log("Min :" ,min());
// ------ maximum ------ //
function max() {
   const maximum = trier[trier.length -1] 
   return maximum
}
console.log("Max :" ,max());
// ------ range ------ //
function range() {
    const moyen = -(trier[0] - trier[trier.length -1])
    return moyen
}
console.log("Range" ,range());
// ------ mean ------ //
function mean() {
    const moyenne = Math.round(744 / ages.length)
    return moyenne
}
console.log("Mean :" ,mean());
// ------ median ------ //
function median() {
    const mediane = ages[12]
    return mediane
}
console.log("Mediane :" ,median());