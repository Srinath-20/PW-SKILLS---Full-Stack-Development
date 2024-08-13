// 1. Reverse String with setTimeout
function reverseStringWithDelay(input) {
    setTimeout(() => {
        const reversedString = input.split('').reverse().join('');
        console.log(reversedString);
    }, 2000);
}

// Example usage:
const input = "Hello World!";
reverseStringWithDelay(input); // Output after 2 seconds: !dlroW olleH

// 2. Random Number Generator with Delay and Progress Indication
function randomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;

    const countdown = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdown);
            const randomNumber = Math.floor(Math.random() * 100);
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}

// Example usage:
randomNumberWithDelay(3); // Output progress every second and final number after 3 seconds

// 3. Store's Inventory Price Conversion
function convertPricesToINR(items) {
    const exchangeRate = 80;
    return Object.fromEntries(
        Object.entries(items).map(([item, price]) => [item, price * exchangeRate])
    );
}

// Example usage:
const storeItems = {
    "apple": 1,
    "banana": 0.5,
    "cherry": 2
};
console.log(convertPricesToINR(storeItems)); // { apple: 80, banana: 40, cherry: 160 }

// 4. Filtering and Capitalizing: Books Published After 2010
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year > 2010)
        .map(book => ({
            ...book,
            author: book.author.toUpperCase()
        }));
}

// Example usage:
const books = [
    { title: "Book One", author: "john doe", year: 2005 },
    { title: "Book Two", author: "jane smith", year: 2015 },
    { title: "Book Three", author: "peter johnson", year: 2020 }
];
console.log(filterAndCapitalizeBooks(books)); 
// Output: [{ title: "Book Two", author: "JANE SMITH", year: 2015 }, { title: "Book Three", author: "PETER JOHNSON", year: 2020 }]

// 5. URL Validation
function validateURL(url) {
    const regex = /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+$/;
    if (regex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

// Example usage:
validateURL("https://www.example.com"); // Valid URL
validateURL("http://example"); // Invalid URL

// 6. LinkedIn Profile URL Validator
function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    if (regex.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
}

// Example usage:
validateLinkedInURL("https://www.linkedin.com/in/john-doe123"); // Valid LinkedIn Profile URL
validateLinkedInURL("https://www.linkedin.com/in/joh"); // Invalid LinkedIn Profile URL
