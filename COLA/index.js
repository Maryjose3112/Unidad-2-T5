class Cola {
    constructor() {
        this.almacenCola = []; 
    }

    // Agrega un nuevo elemento al final de la cola
    enqueue(elemento) {
        this.almacenCola.push(elemento); 
    }

    // Retorna el primer elemento de la cola y lo elimina
    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.almacenCola.shift(); 
    }

    // Retorna el primer elemento de la cola sin eliminarlo
    peek() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.almacenCola[0]; 
    }

    // Retorna el número de elementos que contiene la cola
    size() {
        return this.almacenCola.length; 
    }

    // Retorna los elementos que contiene la cola
    print() {
        return this.almacenCola.toString(); 
    }

    // Retorna true si la cola está vacía y false si no lo está
    isEmpty() {
        return this.almacenCola.length === 0; 
    }
}

const COLA = new Cola();

// Ejemplo de uso
COLA.enqueue(5);
COLA.enqueue(10);
COLA.enqueue(15);
COLA.enqueue(20);
COLA.enqueue(25);
COLA.enqueue(30);
console.log("****COLA IMPLEMENTANDO ARREGLOS****");
console.log("Primer elemnto de la cola y lo elimina: ",COLA.dequeue());
console.log("Primer elemento: ",COLA.peek());
console.log("Tamaño de la cola: ",COLA.size());
console.log("Contenido de la cola: ",COLA.print());
console.log("True o False: ",COLA.isEmpty());





