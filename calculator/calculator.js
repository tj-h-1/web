const oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn");
const threeBtn = document.getElementById("threeBtn");
const fourBtn = document.getElementById("fourBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");
const zeroBtn = document.getElementById("zeroBtn");
const decimalBtn = document.getElementById("decimalBtn");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const multBtn = document.getElementById("multBtn");
const divBtn = document.getElementById("divBtn");

const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

let calcString = String(document.getElementById("expression"));

oneBtn.addEventListener("click", function() {
    calcString += "1";
    document.getElementById("expression").innerHTML += "1";

});

twoBtn.addEventListener("click", function() {
    calcString += "2";
    document.getElementById("expression").innerHTML += "2";

});

threeBtn.addEventListener("click", function() {
    calcString += "3";
    document.getElementById("expression").innerHTML += "3";

});

fourBtn.addEventListener("click", function() {
    calcString += "4";
    document.getElementById("expression").innerHTML += "4";

});

fiveBtn.addEventListener("click", function() {
    calcString += "5";
    document.getElementById("expression").innerHTML += "5";

});

sixBtn.addEventListener("click", function() {
    calcString += "6";
    document.getElementById("expression").innerHTML += "6";

});

sevenBtn.addEventListener("click", function() {
    calcString += "7";
    document.getElementById("expression").innerHTML += "7";

});

eightBtn.addEventListener("click", function() {
    calcString += "8";
    document.getElementById("expression").innerHTML += "8";

});

nineBtn.addEventListener("click", function() {
    calcString += "9";
    document.getElementById("expression").innerHTML += "9";

});

zeroBtn.addEventListener("click", function() {
    calcString += "0";
    document.getElementById("expression").innerHTML += "0";

});

addBtn.addEventListener("click", function() {
    calcString += "+";
    document.getElementById("expression").innerHTML += "+";

});

subBtn.addEventListener("click", function() {
    calcString += "-";
    document.getElementById("expression").innerHTML += "-";

});

multBtn.addEventListener("click", function() {
    calcString += "*";
    document.getElementById("expression").innerHTML += "*";

});

divBtn.addEventListener("click", function() {
    calcString += "/";
    document.getElementById("expression").innerHTML += "/";

});

decimalBtn.addEventListener("click", function() {
    calcString += ".";
    document.getElementById("expression").innerHTML += ".";

});

clearBtn.addEventListener("click", function() {
    document.getElementById("expression").innerHTML = ""
    calcString = "";
    

});



calcBtn.addEventListener("click", function() {
    document.getElementById("result").innerHTML = "";

    let [num1, operator, num2] = calcString.match(/-?\d+\.?\d*|[+\-*/]/g);
    const finalNum1 = Number(num1);
    const finalNum2 = Number(num2);

    var result; 

    if (operator == "+") {
        result = finalNum1 + finalNum2;

    } else if (operator == "*") {
        result = finalNum1 * finalNum2;

    } else if (operator == "-") {
        result = finalNum1 - finalNum2;

    }else if (operator == "/") {
        result = finalNum1 / finalNum2;
    }
    
    
    document.getElementById("result").innerHTML += `=${result}`;

});


//bwa