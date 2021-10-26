let a = prompt(""); 
a = a.toLowerCase()

let arr = a.split(" ");
let result = ""

for (let i = 0; i < arr.length; i = i + 1) {
    let first_letter = arr[i][0].toUpperCase();
    result = result + first_letter
    for (let j = 1; j < arr[i].length; j = j + 1) {        
        result = result + arr[i][j];
    }
}