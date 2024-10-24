// reponse numero 1
// ------- forEach : Itérer sur les éléments d'un tableau. Nous utilisons forEach uniquement avec les tableaux. Il faut une fonction de rappel avec des éléments, un paramètre d'index et le tableau lui-même. L'index et le tableau sont facultatifs. ------- //
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
// ------- map : Itère les éléments d'un tableau et modifie les éléments du tableau. Il faut une fonction de rappel avec des éléments, un index, un paramètre de tableau et renvoie un nouveau tableau. ------- //
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare);
// ------- Filtre : filtre les éléments qui remplissent les conditions de filtrage et renvoie un nouveau tableau. ------- //
const numberSup = numbers.filter((numb) => numb > 2)
console.log(numberSup);
// ------- reduce : Reduce prend une fonction de rappel. La fonction de rappel prend comme paramètre l'accumulateur, la valeur actuelle et la valeur initiale facultative et renvoie une valeur unique. Il est recommandé de définir une valeur initiale pour la valeur de l'accumulateur. Si nous ne spécifions pas ce paramètre, par défaut, l'accumulateur obtiendra array first value. Si notre tableau est un tableau vide , Javascriptune erreur sera générée. ------- //
let initiale = 0;
const sumWithInitiale = numbers.reduce((acc, cur) => acc + cur, initiale)
console.log(sumWithInitiale); 


// reponse numero 2
// ----- forEach ----- //
const sumArray = arr => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers));
// ----- map ----- //
const contries = ['Albania','Bolivia','Canada','Denmark','Ethiopia']
const nameFirstthreeLetter = contries.map((con) => con.toUpperCase().slice(0, 3))
console.log(nameFirstthreeLetter);
// ----- filter ----- //
const filtring = contries.filter((fil) => fil.includes('ia'))
console.log(filtring);
// ----- reduce ----- //
const table = ['Mohamed ', 'Attahir']
const sumWithName = table.reduce((nam, name) => nam + name)
console.log(sumWithName);


// reponse numero 3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(coun => console.log(coun));


// reponse numero 4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(nom => console.log(nom));


// reponse numero 5
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.forEach(chiffres => console.log(chiffres))


// reponse numero 6
const countriesTouppercase = countries.map((maj) => maj.toUpperCase())
console.log(countriesTouppercase);


// reponse numero 7
const countriesLength = countries.map((longueur) => longueur.length)
console.log(countriesLength);


// reponse numero 8
const numbersCarré = num.map((carré) => carré * carré)
console.log(numbersCarré);


// reponse numero 9
const nameToUpperCase = names.map((majuscule) => majuscule.toUpperCase())
console.log(nameToUpperCase);


// reponse numero 10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
const correspondingPrices = products.map((cor) => cor.price)
console.log(correspondingPrices);