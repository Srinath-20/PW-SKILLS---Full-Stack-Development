// 1. Count the occurrences
function countOccurrences(text) {
    const words = text.split(' ');
    const wordCount = new Map();
    for (let word of words) {
        word = word.toLowerCase(); // Case insensitive counting
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    return wordCount;
}

// Example usage:
const text = "Hello world hello";
console.log(countOccurrences(text)); // Map { 'hello' => 2, 'world' => 1 }

// 2. Only unique items are allowed
function uniqueItems(arr) {
    return new Set(arr);
}

// Example usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueItems(numbers)); // Set { 1, 2, 3, 4, 5 }

// 3. Swap the values
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

// Example usage:
let x = 5, y = 10;
console.log(swapValues(x, y)); // [10, 5]

// 4. Access random elements
function extractElements(arr) {
    const [first, second, , , last] = arr; // Skip elements in between if array length > 3
    return [first, second, last];
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(extractElements(array)); // [1, 2, 5]

// 5. Min and max values
function minMaxValues(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Example usage:
const nums = [5, 2, 7, 1, 9];
console.log(minMaxValues(nums)); // { max: 9, min: 1 }

// 6. Nested Objects
function extractPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

// Example usage:
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "BB, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        country: "Andhra Pradesh"
    }
};
console.log(extractPersonInfo(person)); // { name: 'Mithun', street: '123 Main St' }
