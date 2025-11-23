// Q1
const studentTable = document.querySelector("#studentTable")
let students = [
    { name: "Ali", score: 90 },
    { name: "Mustafa", score: 30 },
    { name: "Abid", score: 50 },
    { name: "Shahid", score: 28 },
    { name: "Sufyan", score: 31 },
    { name: "Zaryab", score: 89 }

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
function countWords() {
    let text = document.querySelector("#para").value;

    let words = text.split(" ");
    let cleanWords = [];

   
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            cleanWords.push(words[i]);
        }
    }

    
    let freq = {};
    for (let i = 0; i < cleanWords.length; i++) {
        let w = cleanWords[i];
        if (freq[w]) {
            freq[w]++;
        } else {
            freq[w] = 1;
        }
    }


    let result = document.querySelector("#result");
    result.innerHTML = "";

    let keys = Object.keys(freq);

    for (let i = 0; i < keys.length; i++) {
        let word = keys[i];
        result.innerHTML += "<li>" + word + " : " + freq[word] + "</li>";
    }
}

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
// Q6
let productsLi = [
    {name : "Gaming Pc" , price : 200},
    {name : "Xbox" , price : 500},
    {name : "Ps5" , price : 800},
    {name : "Video Game" , price : 150},
    
]
let ascending = true
function displayProducts() {
   let list =  document.querySelector("#productsList")
   list.innerHTML = ""
       for (let i = 0; i < productsLi.length; i++) {
        list.innerHTML += "<li>" + productsLi[i].name + " - $" + productsLi[i].price + "</li>";
    }
}
function sortPrice() {
    if (ascending) {
        productsLi.sort(function (a,b) {
            return a.price - b.price;
        });
    }else{
        productsLi.sort(function (a,b) {
        
        return b.price - a.price
    })
}
ascending = !ascending
displayProducts()
}
displayProducts()
// Q7
const userName = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
function getValue() {
    const obj = {
        userName : userName.value,
        email : email.value,
        age : age.value

    }
    console.log(obj);
    
}
