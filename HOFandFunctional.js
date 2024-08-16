// 1. Calculating Total Price of an Order
const ordersList = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 }
];
function calculateTotalPrice(orders) {
    let totalPrice = 0;
    orders.forEach(order => {
        totalPrice += order.price;
    });
    console.log(`The total price is Rs.${totalPrice}`);
}
calculateTotalPrice(ordersList);
console.log(''); // For spacing between outputs


// 2. Generating Random Numbers Every 2 Seconds
function printRandomNumbers() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
        console.log(randomNumber);
    }, 2000);
}
printRandomNumbers();
console.log(''); // For spacing between outputs


// 3. Calculating Tax for Each Expense
let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" }
];
const taxRate = 0.10;
const expensesWithTax = expenses.map(expense => ({
    ...expense,
    tax: expense.amount * taxRate
}));
console.log(expensesWithTax);
console.log(''); // For spacing between outputs


// 4. Filtering Expenses Related to "Groceries"
const groceriesExpenses = expenses.filter(expense => expense.category === "Groceries");
console.log(groceriesExpenses);
console.log(''); // For spacing between outputs


// 5. Calculating Total Amount of All Expenses
const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log(`Total amount of all expenses is Rs.${totalAmount}`);
console.log(''); // For spacing between outputs


// 6. Categorizing Expenses Based on Amount
const categorizeExpense = (amount) => amount > 100 ? "High Expense" : "Low Expense";
const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));
console.log(`Categorized Expenses: ${categorizedExpenses}`);
console.log(''); // For spacing between outputs


// 7. Doubling the Values of Each Number
let originalNumbers = [2, 5, 8, 10, 3];
originalNumbers.forEach((number, index, arr) => {
    arr[index] = number * 2;
});
console.log(originalNumbers);
console.log(''); // For spacing between outputs


// 8. Collecting Even Numbers
let evenNumbers = [];
originalNumbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});
console.log(evenNumbers);
