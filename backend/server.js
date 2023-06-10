const express = require('express'); 
const app = express(); 

app.get('/hello', (req, res) => {
    res.send('Hello World!'); 
}); 

app.listen(3000, () => {
    console.log("Server is running on port 3000"); 
}); 

function sumOfEvenNumbers(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]; 
        }
    }
    return sum; 
}

function runQuery() {
    console.log("QUERY RUNNING");
}
setInterval(runQuery, 5000); 

app.get('/sum', (req, res) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]; 
    const result = sumOfEvenNumbers(numbers); 
    res.send(`Sum of even numbers: ${result}`); 
}); 
