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
const pays = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
function categoryizeCountries() {
    const countriesIncludesLand = pays.filter((categorie) => categorie.includes('land') || categorie.includes('Land'))
    console.log(countriesIncludesLand);
}
categoryizeCountries()


// Reponse numero 4


// Reponse numero 5
  function getFirstTenCountries() {
    let decouper = countriesOfWord.slice(0, 10);
    return decouper 
  }
  console.log(getFirstTenCountries());
  

// Reponse numero 6
function getLastTenCountries() {
    let decouper = countriesOfWord.slice(-10);
    return decouper 
  }
  console.log(getLastTenCountries());