//Password Generator

//Variable
let input;
let uppercase = document.getElementById("1")
let lowercase = document.getElementById("2")
let symbols = document.getElementById("3")
let numbers = document.getElementById("4")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

//BTN
btn.onclick = function(){

    //Variable
    input = document.getElementById("input").value
    input = Number(input)

    //Variable
    let upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    let lower = ["abcdefghijklmnopqrstuvwxyz"]
    let symbol = ["!@#$%^&*()-_=+[]{};:,.<>/?"]
    let number = ["0123456789"]

    //Variable
    let all_char = []
    let password = []

    //If
    if(input == ""){
        result.textContent = "Enter Number"
        return
    }

    else if(input > 20){
        result.textContent = "The maximun is 20"
        return
    }
    else if(input < 1){
        result.textContent = "Enter Positive Number"
        return
    }
    else if(!uppercase.checked && !lowercase.checked && !symbols.checked && !numbers.checked){
        result.textContent = "Check Some Boxes"
        return
    }
    else{

        if(uppercase.checked){
            all_char += upper
        }
        if(lowercase.checked){
            all_char += lower
        }
        if(symbols.checked){
            all_char += symbol
        }
        if(numbers.checked){
            all_char += number
        }
    }

    //For
    for(let i = 0; i < input; i++){

        //Random
        let random = Math.floor(Math.random() * all_char.length)

        //Result
        password += all_char[random]
    }

    //Result
    result.textContent = password
}