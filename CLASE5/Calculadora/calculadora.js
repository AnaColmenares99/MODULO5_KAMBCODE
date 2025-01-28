const datos = process.argv.slice(2)

if(datos.length < 3){
    console.log('Uso: node calculadora.js Primer_número operación Segundo_número')
    console.log('Ejemplo: node calculadora.js 5 + 3')
    process.exit(1)
}

const [numero1, operacion, numero2] = datos
const num1 = parseFloat(numero1);
const num2 = parseFloat(numero2);

if (isNaN(num1) || isNaN(num2)) {
    console.log('Error: Asegúrate de que ambos números sean válidos.');
    process.exit(1);
}

const operaciones = (num1, operacion, num2) => {
switch(operacion){
        case '+':
            return `la suma entre ${num1} y ${num2} es: ${num1 + num2}`
            case '-':
            return `la resta entre ${num1} y ${num2} es: ${num1 - num2}`
        case '*':
            return `la multiplicación entre ${num1} y ${num2} es: ${num1 * num2}`
        case '/':
            if (num2 == 0){
                return console.log('no se puede realizar una división por cero, cambia el segundo número')
            } 
            return `la división entre ${num1} y ${num2} es: ${num1 / num2}`
        default: 
           return `Operación no reconocida. Usa: +, -, * o /`
        }
}
const calculadora = operaciones(num1, operacion, num2)
console.log(calculadora)
 