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