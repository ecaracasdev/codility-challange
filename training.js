/**
 * multiply to numbers without using the * operator
 */

const multiply = (a, b) => {
  let result = 0
  const positivo = Math.abs(b) === b
  for (let i = 0; i < Math.abs(b); i++) {
    result = positivo ? result + a : result - a
  }
  return result
}

const a = multiply(2, 2)

/**
 * obtener el numero mayor en un arreglo
 * iterando una sola vez el arreglo
 */

const getBiggest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el))
const b = getBiggest([40, -1500, 100, 1, 0])

/**
 * iterando un arreglo una sola vez, eliminar los null, undefined and empty
 */

const clean = (arr) => arr.reduce((acc, el) => {
  if (el) {
    acc.push(el)
  }
  return acc
}, [])

const c = clean([1, undefined, null, 0, 2, 3])

/**
 * funcion que aplane los arreglos en un nivel 
 * ejemplo:
 * arr = [[1,2],[[3,4]],[1,[]]] ---> [1,2,[3,4],1,[]]
 */

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten([[1, 2], [[3, 4]], [1, []]])

/**
 * funcion para identificar la cantidad de veces que se repite una palabra
 */

const repeated = str => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})

  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('this is a repeated word test this is a a')

/**
 * determinar si un string es un palindromo
 */

const isPalindrome = (str) => {
  str = str.replace(/\s/g, '')
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')

  return lowered === joined
}

const f = isPalindrome('do geese see god')
console.log(f)

/**
 * 
 */