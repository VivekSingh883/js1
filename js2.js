console.log('2nd asigment');

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice');

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 3));

const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};
printStudentInfo();

function printStudentInfo() {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
};
updateGrade(student, 'B');

function updateGrade(studentObj, newGrade) {
    studentObj.grade = newGrade;
}

const school = {
    name: 'Springfield High',
    location: 'Springfield',
    students: {
        total: 500,
        enrolled: [
            { name: 'Alice', age: 18 },
            { name: 'Bob', age: 19 }
        ]
    }
};

function introduce(name, age = 30) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

function calculateArea(length, width = 1) {
    return length * width;
}

function square(num) {
    return num * num;
}

function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num) {
    return num % 2 === 0;
}

printStudentInfo();
introduce('John');
console.log(calculateArea(5, 2));
console.log(square(4));
console.log(capitalize('hello'));
console.log(isEven(10));
console.log(isEven(7));
