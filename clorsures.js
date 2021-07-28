const miContador = (function () {
  let _contador = 0

  function incrementar() {
    return _contador++
  }

  function disminuir() {
    return _contador--
  }

  function valor() {
    return _contador
  }

  return {
    incrementar,
    disminuir,
    valor
  }
})()

console.log(miContador.valor())
console.log(miContador.incrementar())
console.log(miContador.incrementar())
console.log(miContador.incrementar())
console.log(miContador.valor())