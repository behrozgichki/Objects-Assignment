// Q1
const studentTable = document.querySelector("#studentTable")
let students = [
    { name: "Ali", score: 90 },
    { name: "Ali", score: 30 },
    { name: "Abid", score: 50 }

]
students.forEach(function (student) {
    studentTable.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.score}</td>
        </tr>
    `;
});
// Q2
let listStudents = [
    { name: "Zohair", score: 70, },
    { name: "Amjid", score: 30, },
    { name: "Imran", score: 96, },
    { name: "Balach", score: 25, },
    { name: "Behroz", score: 19, }


]
console.log("//Q2" , listStudents[2].name);
// Q3
let products = [
      { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "Phone", price: 500 }
]
function filterByPrice(min, max){
    return products.filter(function (products) {
        return products.price >= min && products.price <= max;
    })
}
console.log("//Q3", filterByPrice(50 , 200));
// Q4

// Q5
let users = [
    { name: "Ali", role: "Admin" },
    { name: "Sara", role: "Editor" },
    { name: "Ahmed", role: "Admin" },
    { name: "Bilal", role: "Viewer" },
    { name: "Zara", role: "Editor" }
];

let grouped = {};

users.forEach(user => {
    if (!grouped[user.role]) {
        grouped[user.role] = [];
    }
    grouped[user.role].push(user.name);
});

console.log("//Q5",grouped);