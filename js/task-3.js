// Задача 3. Фільтрація масиву чисел
// функція приймає масив чисел (numbers) та значення (value) як параметри. 
// функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
function filterArray(numbers, value) {
//створюємо новий масив, у який будемо додавати підходящі числа
    const correctNumbers = [];
// перебираємо усі числа масиву numbers
    for (const number of numbers) {
// якщо число більше за значення value, то воно буде додаватись до раніше створенного масиву correctNumbers 
        if (number > value) {
            correctNumbers.push(number);
        }
//виводимо результат у консоль
            console.log(correctNumbers);
    }
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]