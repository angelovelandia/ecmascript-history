function sumar(number1 = 0, number2 = 0){
    return number1 + number2
}
sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0

// ❌ Mal
function sumar(number1 = 0, number2) {  }
sumar(3)   // number1 = 3 y number2 = undefined 

// ✅ Bien
function sumar(number1, number2 = 0) {  }
sumar(3)   // number1 = 3 y number2 = 0