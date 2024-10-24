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