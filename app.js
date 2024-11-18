function calculator(num1, num2, operation) {
    switch (operation) {
        case 'Сложение': 
            return num1 + num2;
        case 'Вычитание': 
            return num1 - num2;
        case 'Умножение': 
            return num1 * num2;
        case 'Деление': 
            if (num2 === 0) {
                return "Ошибка";
            }
            return num1 / num2;
        default: 
            return "Ошибка";
    }
}


const number1 = 10;
const number2 = 5;
const operation = 'Деление'; 

const result = calculator(number1, number2, operation);
console.log(`Result: ${result}`);