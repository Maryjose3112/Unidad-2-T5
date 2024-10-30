// IMPLEMENTANDO PILA CON ARREGLO
class PilaA {
    constructor() {
        this.almacenPila = [];
        this.contPila = 0;
    }

    // Agrega un nuevo elemento al final de la pila
    push(elemento) {
        this.almacenPila.push(elemento);
        this.contPila++;
    }

    // Retorna el último elemento y lo elimina
    pop() {
        if (this.contPila === 0) {
            return null; 
        }
        this.contPila--;
        return this.almacenPila.pop();
    }

    // Retorna el último elemento sin eliminarlo
    peek() {
        if (this.contPila === 0) {
            return null; 
        }
        return this.almacenPila[this.contPila - 1];
    }

    // Retorna el número de elementos de la pila
    size() {
        return this.almacenPila.length;
    }

    // Retorna el contenido de la pila
    print() {
        return this.almacenPila.toString();
    }
}

const PILA = new PilaA();

PILA.push(2);
PILA.push(4);
PILA.push(6);
PILA.push(8);
PILA.push(10);
console.log("****PILA IMPLEMENTANDO ARREGLOS****");
console.log("Ultimo elemnto de la pila y lo elimina: ",PILA.pop());
console.log("Ultimo elemento: ",PILA.peek());
console.log("Tamaño de la pila: ",PILA.size());
console.log("Contenido de la pila: ",PILA.print());


