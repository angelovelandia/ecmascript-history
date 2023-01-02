var lastName = "Angelo";
lastName = "Jose";
console.log(lastName);

let fruta = "Manzana";
fruta = "Pera";
console.log(fruta);

const animal = "Perro";
animal = "Gato"; // TypeError: Assignment to constant variable.
console.log(animal)

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log (fruit1);
    console.log (fruit2); // ReferenceError: fruit2 is not defined
    console.log (fruit3); // ReferenceError: fruit3 is not defined
    
}

fruits();