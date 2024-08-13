// 1. Type Conversion
function convertToNumber(str) {
    try {
        const num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // Invalid number

// 2. Building Robust Functions in JavaScript
function getPerson(person) {
    try {
        if (typeof person !== 'object' || !person.name || !person.age) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
console.log(getPerson({ name: "John", age: 30 })); // Name: John, Age: 30
console.log(getPerson("Invalid input")); // Invalid parameter type

// 3. Car Description Class
class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Example usage:
const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getDescription()); // This is a 2020 Toyota Camry

// 4. Employee Class Challenge
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Example usage:
const employee = new Employee("Alice", "Developer", 70000);
console.log(employee.getSalary()); // 70000

// 5. Implementing a Person Class with Default Values
class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Example usage:
const person1 = new Person();
console.log(person1.getDetails()); // Name: Unknown, Age: 0

const person2 = new Person("Bob", 25);
console.log(person2.getDetails()); // Name: Bob, Age: 25

// 6. Using Static Method to Add Two Numbers with Calculator Class
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// Example usage:
console.log(Calculator.add(5, 10)); // 15

// 7. Password Checker
class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length);
    }

    set password(newPassword) {
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasNumber = /\d/.test(newPassword);

        if (newPassword.length >= 8 && hasUpperCase && hasNumber) {
            this._password = newPassword;
        } else {
            console.error("Password must be at least 8 characters long, contain at least one uppercase letter and one number.");
        }
    }
}

// Example usage:
const user = new User("john_doe", "Password123");
console.log(user.password); // ***********

user.password = "newPass"; // Error: Password must be at least 8 characters long, contain at least one uppercase letter and one number.
user.password = "NewPassword1";
console.log(user.password); // ***********

// 8. Adding a Method to a Prototype
function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Example usage:
const student = new Student("Mithun");
student.printDetails(); // Hello, my name is Mithun

// 9. Check the presence using closures
function numberChecker(arr) {
    return function(num) {
        return arr.includes(num);
    };
}

// Example usage:
const checkNumber = numberChecker([1, 2, 3, 4, 5]);
console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false

// 10. Filter by Category
function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Shoes", category: "Footwear" }
];

const filterElectronics = filterByCategory(products);
console.log(filterElectronics("Electronics"));
// [{ name: "Laptop", category: "Electronics" }, { name: "Phone", category: "Electronics" }]
