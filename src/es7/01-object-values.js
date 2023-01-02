const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/

const usuario1 = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario1) 
// [ 'name', 'email', 'age' ]

const usuario2 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario2) 
// [ 'Andres', 'andres@correo.com', 23 ]