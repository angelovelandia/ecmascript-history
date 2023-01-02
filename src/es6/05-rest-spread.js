const objeto = { 
    prop1: "valor1",
    prop2: "valor2", 
} 
// Desestructuración
const { prop1, prop2 } = objeto

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
const { nombre, edad, plataforma } = usuario
console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'

//Cambiar el nombre de las variables con desestructuración
const objeto2 = { prop1: "valor1", prop2: "valor2" } 
// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto2

const usuario2 = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}
mostrarDatos(usuario2) // 'Andres', 23, 'Platzi'

//Desestructuración de arrays

const array = [ 1, 2, 3, 4, 5 ]
// Desestructuración
const [uno, dos, tres ] = array
console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3

//Lo que puedes hacer con desestructuración, pero no es recomendable
const array2 = [ 1, 2, 3, 4, 5 ]
const [ ,,,,  cinco ] = array2
console.log(cinco) // 5

const array3 = [ 1, 2, 3, 4, 5 ]
const {4: cinco2} = array3
console.log(cinco2) // 5

//spread operator

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

//Cómo unir arrays y añadir elementos con el operador de propagación
const array1 = [1,2,3]
const number = 4
const array4 = [5,6,7]

const otherArray = [ ...array1, number, ...array4 ]

otherArray // [1,2,3,4,5,6,7]

const objeto4 = {
    nombre: "Andres",
    age: 23,
    plataformaa: "Platzi"
  }
  const array5 = [0,1,2,3,4,5]
  
  const {plataformaa, ...usuarioa} = objeto4
//   cons [cero, ...positivos] = array5
  
  usuario // { nombre: 'Andres', age: 23 }
  positivos // [ 1, 2, 3, 4, 5 ]