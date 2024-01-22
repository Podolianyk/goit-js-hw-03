//Функція складає та повертає повідомлення про купівлю ремонтних дроїдів
// параметри:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
function makeTransaction(quantity, pricePerDroid, customerCredits) {
// змінна загальної суми замовлення
const totalPrice = quantity * pricePerDroid;
//якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, то повернає повідомлення:
    if (totalPrice > customerCredits) {
      return "Insufficient funds!"
    }
  //якщо суми на рахунку клієнта достатньо, то повернає повідомлення:
    else {
       return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"