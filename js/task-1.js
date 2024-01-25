// Задача 1. Генератор slug
// функція приймає заголовок статті, параметр title
function slugify(title) {
//приводимо заголовок до нижнього регістру та перетворюємо його на новий масив (wordsArray), розділяючи пробілами
    const wordsArray = title.toLowerCase().split(" ");
//об'єднуємо елементи масиву (wordsArray) у рядок, розділяючи слова за допомогою " - "
    const slug = wordsArray.join("-");
//виводимо результат у консоль
    console.log(slug);
}


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"