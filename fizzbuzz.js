function fizzbuzz(num) {
  if(typeof num !== 'number') {
    return 'Error: the argument must be a number'
  } 

  const divisible = (divisor, num) => num % divisor === 0

  if (num === 0) return num
  if (divisible(5, num) && divisible(3, num)) return 'fizzbuzz'
  if (divisible(3, num)) return 'fizz'
  if (divisible(5, num)) return 'buzz'
  return num
}

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
}

print(16)

module.exports = fizzbuzz