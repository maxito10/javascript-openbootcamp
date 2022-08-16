function devuelveTrue() {
    return true
  }
  
  async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}


  function* generaPar() {
    let id= 0;
    while(true) {
        yield id += 2
    }
}