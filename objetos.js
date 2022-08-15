const datosPersonales = {
    nombre : "Maxi",
    apellido: "Arguello",
    edad : 34,
    altura : 1.69, 
    dev: true
}
const miEdad = datosPersonales.edad;

const miLista = [
    {...datosPersonales},
     {
        nombre : "tufi",
        apellido: "faccio",
        edad : 35,
        altura : 2.10, 
        dev: false
    }, {
        nombre : "fer",
        apellido: "garrido",
        edad : 33,
        altura : 1.75, 
        dev: false
    }]

const deMenorAmayor = miLista.sort(a,b => a.edad - b.edad);
