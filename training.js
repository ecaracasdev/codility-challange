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
 * Create an Object with a hello method that writes hello <name> in the console
 */

const p = {
  name: 'Elias',
  hello: () => console.log(`Hello ${p.name}`)
}

p.hello()
p.name = 'Jose'
p.hello()

/**
 * How would you make the name inmutable?
 */

Object.freeze(p)
p.name = 'Simon'
p.hello()

/**
 * write a function that logs the 5 cities that occur the most in the 
 * array below in order from the most number of ocurrences to least
 */
const citiesList = [
  'caracas',
  'caba',
  'caba',
  'caba',
  'lima',
  'lima',
  'lima',
  'la plata',
  'la plata',
  'la plata',
  'caracas',
  'caracas',
  'caracas',
  'mar de plata',
  'ciudad de mexico'
]

function logMostOcurrCities(numCities) {
  const cities = {}

  citiesList.forEach(city => {
    cities[city] = !cities[city] ? 1 : cities[city] += 1
  })

  //no se puede ordenar un objeto, pero se puede ordenar un array -> hacemos a cities un array

  return Object.keys(cities)
    .map(city => ({ name: city, times: cities[city] }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map(city => city.name)
}

const mostRepeatedCities = logMostOcurrCities(5)

console.log(mostRepeatedCities)