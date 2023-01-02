const objeto = {
    nombre: "Andres",
    age: 23,
  }
  
const usuario = {
    ...objeto,
    plataforma: "Platzi"
}

const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false

const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true

const original2 = { datos: [1, [2, 3], 4, 5] }
const copia2 = structuredClone(original2)

original2 === copia2 // false
original2["datos"] === copia2["datos"] // false