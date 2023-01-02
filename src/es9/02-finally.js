//Método finally en promesas
promesa()
    .then(response => console.log(response)) // Promesa resuelta
    .catch(error => console.log(response)) // Promesa rechazada
    .finally( () => console.log("Finalizado") ) // Código final 

    