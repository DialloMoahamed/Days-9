// Reponse numero 1
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
const prixTotalDesProduitsMap = products.map((prix) => prix.price)
const prixTotalDesProduitsfilter = prixTotalDesProduitsMap.filter((pric) =>  pric !== '' && pric !== ' ')
const prixTotalDesProduitsReduce = prixTotalDesProduitsfilter.reduce((sum, som) => sum + som)
console.log(prixTotalDesProduitsReduce);


// Reponse numero 2
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);


// Reponse numero 3
function categorizeCountries(pays, pattern) {
    const countriesIncludesLand = pays.filter(categorie => categorie.name.endsWith(pattern));
    return countriesIncludesLand;
}
const countriesEndingWithLand = categorizeCountries(pays, 'land');
const countriesEndingWithIa = categorizeCountries(pays, 'ia');
const countriesEndingWithIsland = categorizeCountries(pays, 'island');
const countriesEndingWithStan = categorizeCountries(pays, 'stan');

console.log("Pays se terminant par 'land':", countriesEndingWithLand);
console.log("Pays se terminant par 'ia':", countriesEndingWithIa);
console.log("Pays se terminant par 'stan':", countriesEndingWithStan);

// Reponse numero 4


// Reponse numero 5
  function getFirstTenCountries() {
    let decouper = pays.slice(0, 10);
    return decouper 
  }
  console.log(getFirstTenCountries());
  

// Reponse numero 6
function getLastTenCountries() {
    let decouper = pays.slice(-10);
    return decouper 
  }
  console.log(getLastTenCountries());


 // Reponse numero 7
function whichLetterIsUse(firstletter) {
    let init = 0
    const letter = pays.filter((contry) => contry.name.startsWith(firstletter))
    for (let i = 0; i < pays.length; i++) {
        if (letter[i] > init) {
            console.log(letter[i]); 
        }
        
    }
   
}
console.log(whichLetterIsUse());
;
