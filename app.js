// ---------------- Q1 ----------------
const studentsQ1 = [
  { name: "Ali", score: 90 },
  { name: "Mustafa", score: 30 },
  { name: "Abid", score: 50 },
  { name: "Shahid", score: 28 },
  { name: "Sufyan", score: 31 },
  { name: "Zaryab", score: 89 }
];
const studentTableQ1 = document.getElementById("studentTableQ1");
studentsQ1.forEach(s => studentTableQ1.innerHTML += `<tr><td>${s.name}</td><td>${s.score}</td></tr>`);

// ---------------- Q2 ----------------
const listStudentsQ2 = [
  { name: "Zohair", score: 70 },
  { name: "Amjid", score: 30 },
  { name: "Imran", score: 96 },
  { name: "Balach", score: 25 },
  { name: "Behroz", score: 19 }
];
function logStudentQ2(){ console.log("//Q2", listStudentsQ2[2].name); }

// ---------------- Q3 ----------------
const productsQ3 = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 150 },
  { name: "Phone", price: 500 }
];
function filterProductsQ3(){ console.log("//Q3", productsQ3.filter(p=>p.price>=50 && p.price<=200)); }

// ---------------- Q4 ----------------
function countWordsQ4() {
  const text = document.getElementById("paraQ4").value;
  const words = text.split(" ").filter(w=>w!=="");
  const freq = {};
  words.forEach(w=> freq[w] = (freq[w]||0)+1);
  const resultQ4 = document.getElementById("resultQ4");
  resultQ4.innerHTML = "";
  Object.keys(freq).forEach(w => resultQ4.innerHTML += `<li>${w} : ${freq[w]}</li>`);
}

// ---------------- Q5 ----------------
const usersQ5 = [
  { name: "Ali", role: "Admin" },
  { name: "Sara", role: "Editor" },
  { name: "Ahmed", role: "Admin" },
  { name: "Bilal", role: "Viewer" },
  { name: "Zara", role: "Editor" }
];
function groupUsersQ5(){
  const grouped = {};
  usersQ5.forEach(u=>{ if(!grouped[u.role]) grouped[u.role]=[]; grouped[u.role].push(u.name); });
  console.log("//Q5", grouped);
}

// ---------------- Q6 ----------------
let productsQ6 = [
  { name: "Gaming Pc", price: 200 },
  { name: "Xbox", price: 500 },
  { name: "Ps5", price: 800 },
  { name: "Video Game", price: 150 }
];
let ascendingQ6 = true;
const productsListQ6 = document.getElementById("productsListQ6");
function displayProductsQ6(){ productsListQ6.innerHTML=""; productsQ6.forEach(p=> productsListQ6.innerHTML+=`<li>${p.name} - $${p.price}</li>`);}
function sortPriceQ6(){ productsQ6.sort((a,b)=> ascendingQ6? a.price-b.price : b.price-a.price); ascendingQ6=!ascendingQ6; displayProductsQ6();}
displayProductsQ6();

// ---------------- Q7 ----------------
function getValueQ7(){ 
  const obj = { 
    userName: document.getElementById("nameQ7").value,
    email: document.getElementById("emailQ7").value,
    age: document.getElementById("ageQ7").value
  };
  console.log("//Q7", obj);
}

// ---------------- Q8 ----------------
const userQ8 = { nameUser:"Muhammad Ali Mirza", address:{city:"Quetta",area:"Shahbaz Town"}};
document.getElementById("userInfoQ8").innerHTML=`Username: ${userQ8.nameUser}<br>City: ${userQ8.address.city}<br>Area: ${userQ8.address.area}`;
console.log("//Q8", userQ8);

// ---------------- Q9 ----------------
const cartItemsQ9 = [
  { name: "Apple", price: 100, quantity: 20 },
  { name: "Banana", price: 250, quantity: 10 },
  { name: "WaterMelon", price: 300, quantity: 5 },
  { name: "Kiwi", price: 100, quantity: 30 }
];
const itemsQ9 = document.getElementById("itemsQ9");
let totalQ9=0;
itemsQ9.innerHTML="<ul>";
cartItemsQ9.forEach(i=>{ const itemTotal=i.price*i.quantity; totalQ9+=itemTotal; itemsQ9.innerHTML+=`<li>${i.name} - $${i.price} x ${i.quantity} = $${itemTotal}</li>`; });
itemsQ9.innerHTML+="</ul><h3>Total: $"+totalQ9+"</h3>";

// ---------------- Q10 ----------------
const itemsQ10 = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Orange", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Tomato", category: "Vegetables" },
  { name: "Cucumber", category: "Vegetables" }
];
const containerQ10 = document.getElementById("containerQ10");
function displayItemsQ10(filteredItems){ containerQ10.innerHTML=""; filteredItems.forEach(i=> containerQ10.innerHTML+=`<div class="item"><h3>${i.name}</h3><p>Category: ${i.category}</p></div>`);}
displayItemsQ10(itemsQ10);
function filterItemsQ10(){
  const checkboxes = document.querySelectorAll(".categoryQ10");
  const selected = Array.from(checkboxes).filter(c=>c.checked).map(c=>c.value);
  displayItemsQ10(selected.length===0? itemsQ10 : itemsQ10.filter(i=>selected.includes(i.category)));
}
// ---------------- Q11 ----------------
const namesQ11 = ["Ali", "Sara", "Ahmed", "Usman", "Haseeb"];
const listContainerQ11 = document.getElementById("listContainerQ11");
function displayListQ11(list) { listContainerQ11.innerHTML = ""; list.forEach(n => listContainerQ11.innerHTML += `<div>${n}</div>`); }
displayListQ11(namesQ11);
function liveSearchQ11() { const val = document.getElementById("searchInputQ11").value.toLowerCase(); displayListQ11(namesQ11.filter(n => n.toLowerCase().includes(val))); }

// ---------------- Q12 ----------------
let tasksQ12 = [];
const taskContainerQ12 = document.getElementById("taskContainerQ12");
function displayTasksQ12() { taskContainerQ12.innerHTML = ""; tasksQ12.forEach((t, i) => taskContainerQ12.innerHTML += `<div onclick="toggleTaskQ12(${i})">${t.title} ${t.completed ? "✅" : "❌"} <button onclick="removeTaskQ12(event,${i})">Delete</button></div>`); }
function addTaskQ12() { const title = document.getElementById("taskInputQ12").value; if (title) { tasksQ12.push({ title, completed: false }); displayTasksQ12(); document.getElementById("taskInputQ12").value = ""; } }
function toggleTaskQ12(i) { tasksQ12[i].completed = !tasksQ12[i].completed; displayTasksQ12(); }
function removeTaskQ12(e, i) { e.stopPropagation(); tasksQ12.splice(i, 1); displayTasksQ12(); }

// ---------------- Q13 ----------------
let usersQ13 = [];
const userContainerQ13 = document.getElementById("userContainerQ13");
function displayUsersQ13() { userContainerQ13.innerHTML = ""; usersQ13.forEach(u => userContainerQ13.innerHTML += `<div>${u.name} - ${u.email}</div>`); }
function submitFormQ13() { const name = document.getElementById("nameInputQ13").value; const email = document.getElementById("emailInputQ13").value; if (name && email) { usersQ13.push({ name, email }); displayUsersQ13(); document.getElementById("nameInputQ13").value = ""; document.getElementById("emailInputQ13").value = ""; } }

// ---------------- Q14 ----------------
let usersQ14 = [{ name: "Ali", email: "ali@example.com" }, { name: "Sara", email: "sara@example.com" }];
const userContainerQ14 = document.getElementById("userContainerQ14");
function displayUsersQ14() { userContainerQ14.innerHTML = ""; usersQ14.forEach((u, i) => userContainerQ14.innerHTML += `<div>${u.name} - ${u.email} <button onclick="editUserQ14(${i})">Edit</button></div>`); }
function editUserQ14(i) { const n = prompt("Enter new name", usersQ14[i].name); const e = prompt("Enter new email", usersQ14[i].email); if (n) usersQ14[i].name = n; if (e) usersQ14[i].email = e; displayUsersQ14(); }
displayUsersQ14();

// ---------------- Q15 ----------------
const studentsQ15 = [{ name: "Ali", grade: "A", age: 20 }, { name: "Sara", grade: "B", age: 21 }];
const tableContainerQ15 = document.getElementById("tableContainerQ15");
function generateTableQ15(data) { let html = "<table><tr>"; Object.keys(data[0]).forEach(k => html += `<th>${k}</th>`); html += "</tr>"; data.forEach(r => { html += "<tr>"; Object.keys(r).forEach(k => html += `<td>${r[k]}</td>`); html += "</tr>"; }); html += "</table>"; tableContainerQ15.innerHTML = html; }
generateTableQ15(studentsQ15);

// ---------------- Q16 ----------------
const freqContainerQ16 = document.getElementById("freqContainerQ16");
function charFrequencyQ16() { const text = document.getElementById("textInputQ16").value; const freq = {}; for (let c of text) { freq[c] = freq[c] ? freq[c] + 1 : 1; } freqContainerQ16.innerHTML = JSON.stringify(freq); }

// ---------------- Q17 ----------------
const categoriesQ17 = [{ name: "Electronics", sub: [{ name: "Phones", sub: [{ name: "iPhone" }] }] }, { name: "Clothing", sub: [{ name: "Men" }, { name: "Women" }] }];
const categoryContainerQ17 = document.getElementById("categoryContainerQ17");
function renderCategoryQ17(cat, parent) { const d = document.createElement("div"); d.innerHTML = cat.name; d.style.marginLeft = "20px"; parent.appendChild(d); if (cat.sub) cat.sub.forEach(s => renderCategoryQ17(s, d)); }
categoriesQ17.forEach(c => renderCategoryQ17(c, categoryContainerQ17));

// ---------------- Q18 ----------------
const studentsQ18 = [{ name: "Ali", grade: 90 }, { name: "Sara", grade: 90 }, { name: "Usman", grade: 80 }];
studentsQ18.sort((a, b) => b.grade === a.grade ? a.name.localeCompare(b.name) : b.grade - b.grade);
document.getElementById("outputQ18").textContent = JSON.stringify(studentsQ18, null, 2);

// ---------------- Q19 ----------------
function highlightQ19() { const val = document.getElementById("searchInputQ19").value.toLowerCase(); document.querySelectorAll("#textContainerQ19 p").forEach(p => { const t = p.textContent; p.innerHTML = val && t.toLowerCase().includes(val) ? t.replace(new RegExp(val, "gi"), m => `<mark>${m}</mark>`) : t; }); }

// ---------------- Q20 ----------------
const countriesQ20 = [{ code: "IN", name: "India" }, { code: "PK", name: "Pakistan" }, { code: "US", name: "USA" }];
const countrySelectQ20 = document.getElementById("countrySelectQ20");
const countryContainerQ20 = document.getElementById("countryContainerQ20");
countriesQ20.forEach(c => countrySelectQ20.innerHTML += `<option value="${c.code}">${c.name}</option>`);
function showCountryQ20() { const code = countrySelectQ20.value; const country = countriesQ20.find(c => c.code === code); countryContainerQ20.innerHTML = country ? `${country.name} (${country.code})` : ""; }