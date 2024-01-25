// Задача 2. Композиція масивів
// функцію makeArray, приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). 
function makeArray(firstArray, secondArray, maxLength) {
// створюємо новий масив, об'єднуючи масиви firstArray і secondArray
    const newArray = firstArray.concat(secondArray);
//  якщо кількість елементів у новому масиві перевищує число, яке задане у параметрі maxLength, 
// то виводимо у консоль масив від першого елемента до maxLength
if (newArray.length >= maxLength) {
    console.log(newArray.slice(0, maxLength));
// в іншому випадку повертаємо весь новий масив
} else {
    console.log(newArray);
}
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []