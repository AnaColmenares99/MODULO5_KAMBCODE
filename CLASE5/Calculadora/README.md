## Calculadora en Node.js

En el archivo encontrarás una calculadora básica en Node.js que pueda realizar operaciones simples de suma, resta, multiplicación y división. 

La calculadora recibe los números y la operación directamente como argumentos de línea de comandos al ejecutar el script.

### Descripción

La aplicación recibe tres argumentos a través de la línea de comandos:
1. **Primer número**: El primer número para la operación.
2. **Operación**: La operación matemática a realizar (puede ser `+`, `-`, `*`, `/`).
3. **Segundo número**: El segundo número para la operación.

El programa imprime el resultado de la operación en la consola.

### Uso

1. Abre la terminal.
2. Navega hasta la carpeta donde tienes el archivo `calculadora.js`.
3. Ejecuta el siguiente comando con los argumentos adecuados:

```bash
node calculadora.js 'primer_numero' 'operacion' 'segundo_numero'.
```
### Manejo de errores

1. Si no se ingresan los tres argumentos requeridos, el programa muestra un mensaje de error y termina.
2. Si uno de los números no es válido, muestra un mensaje y termina.
3. Si intentas dividir por cero, el programa muestra un mensaje de error específico y termina.
4. Si se utiliza una operación no reconocida, muestra un mensaje específico y termmina.