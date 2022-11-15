"use script"

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function evenOrOdd(num){
    if (num%2===0){
        return "pari";
    }else {
        return "dispari";
    }
}


let userChoice=prompt("Scegli tra pari o dispari");
console.log(userChoice)
while (userChoice != "pari" && userChoice != "dispari"){
    alert("Devi inserire una parola che sia 'pari' o 'dispari'");
    userChoice=prompt("Scegli tra pari o dispari");
    console.log(userChoice)
}
console.log(userChoice)
let userNumber=Number(prompt("inserisci un numero tra 1 e 5"));
console.log(userNumber)
while(isNaN(userNumber)||userNumber<=0||userNumber>5){
    alert("Devi inserire un numero valido");
    userNumber=Number(prompt("inserisci un numero tra 1 e 5"));
}
const cpuNumber=getRndInteger(1, 5);
console.log(cpuNumber)
const sum=userNumber + cpuNumber;
console.log(sum)
console.log(evenOrOdd(sum))
if (evenOrOdd(sum)===userChoice){
    alert("Hai vinto!");
}else{
    alert("Hai perso!");
}
