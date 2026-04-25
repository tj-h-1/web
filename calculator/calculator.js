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
    calcString += "1"
    document.getElementById("expression").innerHTML += "1"
    console.log(calcString)

});

twoBtn.addEventListener("click", function() {
    calcString += "2"
    document.getElementById("expression").innerHTML += "2"
    console.log(calcString)

});

threeBtn.addEventListener("click", function() {
    calcString += "3"
    document.getElementById("expression").innerHTML += "3"
    console.log(calcString)

});

fourBtn.addEventListener("click", function() {
    calcString += "4"
    document.getElementById("expression").innerHTML += "4"
    console.log(calcString)

});

fiveBtn.addEventListener("click", function() {
    calcString += "5"
    document.getElementById("expression").innerHTML += "5"
    console.log(calcString)

});

sixBtn.addEventListener("click", function() {
    calcString += "6"
    document.getElementById("expression").innerHTML += "6"
    console.log(calcString)

});

sevenBtn.addEventListener("click", function() {
    calcString += "7"
    document.getElementById("expression").innerHTML += "7"
    console.log(calcString)

});

eightBtn.addEventListener("click", function() {
    calcString += "8"
    document.getElementById("expression").innerHTML += "8"
    console.log(calcString)

});

nineBtn.addEventListener("click", function() {
    calcString += "9"
    document.getElementById("expression").innerHTML += "9"
    console.log(calcString)

});

zeroBtn.addEventListener("click", function() {
    calcString += "0"
    document.getElementById("expression").innerHTML += "0"
    console.log(calcString)

});

addBtn.addEventListener("click", function() {
    calcString += "+";
    document.getElementById("expression").innerHTML += "+"
    console.log(calcString);

});

subBtn.addEventListener("click", function() {
    calcString += "-"
    document.getElementById("expression").innerHTML += "-"
    console.log(calcString)

});

multBtn.addEventListener("click", function() {
    calcString += "*"
    document.getElementById("expression").innerHTML += "*"
    console.log(calcString)

});

divBtn.addEventListener("click", function() {
    calcString += "/"
    document.getElementById("expression").innerHTML += "/"
    console.log(calcString)

});

decimalBtn.addEventListener("click", function() {
    calcString += "."
    document.getElementById("expression").innerHTML += "."
    console.log(calcString)

});

clearBtn.addEventListener("click", function() {
    document.getElementById("expression").innerHTML = ""
    calcString = ""

    console.log(document.getElementById("expression").innerHTML)
    console.log(calcString)

});



calcBtn.addEventListener("click", function() {
    document.getElementById("result").innerHTML = ""

    let [num1, operator, num2] = calcString.match(/-?\d+\.?\d*|[+\-*/]/g);
    console.log(num1)
    console.log(operator)
    console.log(num2)
    const finalNum1 = Number(num1)
    const finalNum2 = Number(num2)

    var result; 

    if (operator == "+") {
        result = finalNum1 + finalNum2

    } else if (operator == "*") {
        result = finalNum1 * finalNum2

    } else if (operator == "-") {
        result = finalNum1 - finalNum2

    }else if (operator == "/") {
        result = finalNum1 / finalNum2
    }
    
    
    document.getElementById("result").innerHTML += `=${result}`;
    console.log(result)
});


//bwa