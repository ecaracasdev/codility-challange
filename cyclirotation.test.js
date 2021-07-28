const solution = require('./cyclicrotation')

describe('cyclicRotation', () => {
  test('should print [1, 2, 3, 4] if they receive A = [1, 2, 3, 4] and K = 4', () => {
    const A = [1, 2, 3, 4]
    const K = 4
    const expected = [1, 2, 3, 4]
    const result = solution(A, K)
    expect(expected).toStrictEqual(result)
  })
  test('should print [9, 7, 6, 3, 8] if they receive A = [3, 8, 9, 7, 6] and K = 3', () => {
    const A = [3, 8, 9, 7, 6]
    const K = 3
    const expected = [9, 7, 6, 3, 8]
    const result = solution(A, K)
    expect(expected).toStrictEqual(result)
  })
  test('should print [0, 0, 0] if they receive A = [0, 0, 0] and K = 1', () => {
    const A = [0, 0, 0]
    const K = 1
    const expected = [0, 0, 0]
    const result = solution(A, K)
    expect(expected).toStrictEqual(result)
  })
  
  test('should print [1] if they receive A = [1] and K = 1', () => {
    const A = [1]
    const K = 1
    const expected = [1]
    const result = solution(A, K)
    expect(expected).toStrictEqual(result)
  })
  
  test('should print [1] if they receive A = [1] and K = 0', () => {
    const A = [1]
    const K = 1
    const expected = [1]
    const result = solution(A, K)
    expect(expected).toStrictEqual(result)
  })
})