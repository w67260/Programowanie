let a = 10;
let b = 20;
let c = 23.2;

let suma = a + b + c;
let roznica = a - b - c;
let iloczyn = a * b * c;
let iloraz = a / b / c;
alert("Suma=" + suma + "\nRoznica=" + roznica + "\nIloczyn=" + iloczyn + "\nIloraz=" + iloraz);


document.getElementById("suma").innerHTML = "Suma: " + suma;
document.getElementById("roznica").innerHTML = "Roznica: " + roznica;
document.getElementById("iloczyn").innerHTML = "Iloczyn: " + iloczyn;
document.getElementById("iloraz").innerHTML = "Iloraz: " + iloraz;


let imie = prompt("Podaj imie");
alert("Witaj " + imie);


let bok_a = parseInt(prompt("Podaj bok a"));
let bok_b = parseInt(prompt("Podaj bok b"));
let bok_c = parseInt(prompt("Podaj bok c"));
let p = (bok_a + bok_b + bok_c) / 2;
let pole = Math.sqrt(p * (p - bok_a) * (p - bok_b) * (p - bok_c));
document.getElementById("pole").innerHTML = "Pole trojkata: " + pole;


let liczba = Math.floor(Math.random()*6)+1;
let zgadniecie = prompt("Podaj zgadywana liczbe z przedzialu od 1 do 5");
if (liczba == zgadniecie) {
    alert("Dobra robota");
}
else {
    alert("Nie pasuje");
}


let liczba_1 = prompt("Podaj pierwsza liczbe");
let liczba_2 = prompt("Podaj druga liczbe");
let liczba_3 = prompt("Podaj trzecia liczbe");
let max = liczba_1;
if (liczba_2 > max) {
    max = liczba_2;
}
if (liczba_3 > max) {
    max = liczba_3;
}
alert("Najwieksza liczba: " + max);


for (let i = 10; i >= 0; i--) {
    if (i != 0) {
        console.log("Pozostalo: " + String(i) + " sekund");
    }
    else {
        console.log("Happy New Year");
    }
}
i = 10;
while (i >= 0) {
    if (i != 0) {
        console.log("Pozostalo: " + String(i) + " sekund");
        i--;
    }
    else {
        console.log("Happy New Year");
        i--;
    }
}


function nwd(){
    let liczba1 = document.getElementById("l1").value;
    let liczba2 = document.getElementById("l2").value;
    let a = Math.abs(parseInt(liczba1));
    let a1=parseInt(liczba1);
    let b = Math.abs(parseInt(liczba2));
    let b1=parseInt(liczba2);
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    document.getElementById("nwd").innerHTML = "NWD=("+a1+","+b1+")="+a;
}


function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = "Wynik: " + result;
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = "Wynik: " + result;
}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = "Wynik: " + result;
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num2 == 0) {
        document.getElementById("result").innerHTML = "Nie można dzielić przez zero!";
    } else {
        let result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").innerHTML = "Wynik: " + result;
    }
}

function power() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Math.pow(parseFloat(num1), parseFloat(num2));
    document.getElementById("result").innerHTML = "Wynik: " + result;
}


function zegar(){
    var zegar=new Date();
    var godziny=zegar.getHours();
    var minuty=zegar.getMinutes();
    var sekundy=zegar.getSeconds();
    document.getElementById("zegar").innerHTML=godziny+":"+minuty+":"+sekundy;
}
setInterval(zegar, 1000);


function tabliczka() {
    var table = document.createElement('table');
    for (var i = 1; i <= 10; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= 10; j++) {
            var td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("tabliczka").appendChild(table);
}


var imiona = ["Adam", "Ewa", "Jan", "Katarzyna", "Piotr", "Maria", "Tomasz", "Małgorzata", "Michał", "Agnieszka"];
var nazwiska = ["Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", "Mazur", "Krawczyk", "Kaczmarek", "Piotrowski", "Grabowski"];
function dane_osobowe(){
    var ilosc = parseInt(document.getElementById("ilosc_rekordow").value);
    var tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

    for (var i = 0; i < ilosc; i++) {
        var imie = imiona[Math.floor(Math.random() * imiona.length)];
        var nazwisko = nazwiska[Math.floor(Math.random() * nazwiska.length)];
        var wiek = Math.floor(Math.random() * 63) + 18;
        var telefon = Math.floor(Math.random() * 3000000) + 5000000;

        var osoba = {
            "imie": imie,
            "nazwisko": nazwisko,
            "wiek": wiek,
            "telefon": telefon
        };

        var wiersz = tabela.insertRow();
        var komorka1 = wiersz.insertCell();
        var komorka2 = wiersz.insertCell();
        var komorka3 = wiersz.insertCell();
        var komorka4 = wiersz.insertCell();

        komorka1.innerHTML = osoba.imie;
        komorka2.innerHTML = osoba.nazwisko;
        komorka3.innerHTML = osoba.wiek;
        komorka4.innerHTML = osoba.telefon;
    }
}








var users = [
    {
        "firstName": "Jan",
        "lastName": "Kowalski",
        "balance": 1000,
        "pin": 1234
    },
    {
        "firstName": "Anna",
        "lastName": "Nowak",
        "balance": 500,
        "pin": 5678
    },
    {
        "firstName": "Katarzyna",
        "lastName": "Kowalczyk",
        "balance": 2500,
        "pin": 9012
    }
];

// Zalogowanie użytkownika
function login() {
    var accountNumber = document.getElementById("accountNumber").value;
    var pin = document.getElementById("pin").value;
    var user = users[accountNumber];

    if (user && user.pin == pin) {
        // Przeniesienie użytkownika na stronę konta
        window.location.href = "bank.html";
        // Zapisanie danych użytkownika w pamięci przeglądarki
        localStorage.setItem("accountNumber", accountNumber);
    } else {
        alert("Nieprawidłowy numer konta lub PIN.");
    }
}

// Wyświetlenie danych użytkownika
function displayUser() {
    var accountNumber = localStorage.getItem("accountNumber");
    var user = users[accountNumber];
    document.getElementById("firstName").innerHTML = user.firstName;
    document.getElementById("lastName").innerHTML = user.lastName;
    document.getElementById("balance").innerHTML = user.balance;
}

// Wypłacanie gotówki
function withdraw() {
    var accountNumber = localStorage.getItem("accountNumber");
    var user = users[accountNumber];
    var amount = parseFloat(document.getElementById("amount").value);

    if (amount <= user.balance) {
        user.balance -= amount;
        alert("Wypłacono " + amount + " zł.");
        displayUser();
    } else {
        alert("Nie masz wystarczająco pieniędzy na koncie.");
    }
}

// Wpłacanie gotówki
function deposit() {
    var accountNumber = localStorage.getItem("accountNumber");
    var user = users[accountNumber];
    var amount = parseFloat(document.getElementById("amount").value);

    if (amount > 0) {
        user.balance += amount;
        alert("Wpłacono " + amount + " zł.");
        displayUser();
    } else {
        alert("Nieprawidłowa kwota.");
    }
}

// Sprawdzenie, czy użytkownik jest zalogowany
function checkLogin() {
    if (!localStorage.getItem("accountNumber")) {
        window.location.href = "index.html";
    }
}

// Obsługa zdarzeń
window.onload = function () {
    if (window.location.pathname == "/bank.html") {
        checkLogin();
        displayUser();
    }
};