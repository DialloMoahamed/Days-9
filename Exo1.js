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


// reponse numero 11
const countriesContentLand = countries.filter((contient) => contient.includes("land"))
console.log(countriesContentLand);


// reponse numero 12
const countriesHaveSixCharacter = countries.filter((six) => six.length === 6)
console.log(countriesHaveSixCharacter);


// reponse numero 13
const countriesHaveSixCharacterAndMore = countries.filter((six) => six.length >= 6)
console.log(countriesHaveSixCharacterAndMore);


// reponse numero 14
const countryStartWithE = countries.filter((start) => start.startsWith('E'))
console.log(countryStartWithE);


// reponse numero 15
const pricesWithValues = products.filter((sixe) => sixe.price !== '' && sixe.price !== ' ')
console.log(pricesWithValues);


// reponse numero 16
function getStringLists(arr) {
   const StringLists = arr.filter((element) => typeof element === 'string')
    return StringLists
}
console.log(getStringLists([1, 'Denmark',  3, 'Norway',  2, 'IceLand', 4,]));


// reponse numero 17
const sumofElement = numbers.reduce((nam, name) => nam + name)
console.log(sumofElement);


// reponse numero 18
const sumofCountries = countries.reduce((nam, name) =>  nam + "," + name )
console.log(sumofCountries + " are north European countries");


// reponse numero 19
// La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
const found = ((numero) => numero > 5)
console.log(num.some(found));
// La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
const founde = num.every((numero) => numero > 5)
console.log(founde);


// reponse numero 20
const  namesLength = ((nomer) => nomer.length > 7)
console.log(names.some(namesLength));


// reponse numero 21
const isAllCountriesContainLand = countries.every((country) => country.includes("land"));
console.log(isAllCountriesContainLand); 


// reponse numero 22
// La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.
const test = num.find((element) => element > 2);
console.log(test);
// La méthode findIndex() renvoie l'index du premier élément du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
const test2 = num.findIndex((element) => element > 10);
console.log(test2);


// reponse numero 23
const sixLettres = countries.find((sixe) => sixe.length === 6)
console.log(sixLettres);


// reponse numero 24
const sixLettresUnique = countries.findIndex((sixe) => sixe.length === 6)
console.log(sixLettresUnique);


// reponse numero 25
const positionDeLaNorvège = countries.findIndex((norv) => norv.includes('Norvège'))
console.log(positionDeLaNorvège);


// reponse numero 26
const positionDeLaRussie = countries.findIndex((norv) => norv.includes('Russie'))
console.log(positionDeLaRussie);