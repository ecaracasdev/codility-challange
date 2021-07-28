function solution(A, K) {

  let result = []
  
  for (let i = 0; i < A.length; i++) {
    let newPos = (i+K) % A.length

    result[newPos] = A[i]
    
  }
  return result
}

module.exports = solution