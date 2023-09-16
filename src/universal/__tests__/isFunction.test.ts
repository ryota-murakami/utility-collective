import isFunction from '../isFunction'
// Generated by CodiumAI

describe('isFunction', () => {
  // Tests that the function returns true when the argument is a function
  it('should return true when the argument is a function', () => {
    const result = isFunction(() => {})
    expect(result).toBe(true)
  })

  // Tests that the function returns true when the argument is an arrow function
  it('should return true when the argument is an arrow function', () => {
    const result = isFunction(() => {})
    expect(result).toBe(true)
  })

  // Tests that the function returns true when the argument is a class constructor
  it('should return true when the argument is a class constructor', () => {
    const result = isFunction(class {})
    expect(result).toBe(true)
  })

  // Tests that the function returns true when the argument is a built-in function
  it('should return true when the argument is a built-in function', () => {
    const result = isFunction(Array)
    expect(result).toBe(true)
  })

  // Tests that the function returns true when the argument is a user-defined function
  it('should return true when the argument is a user-defined function', () => {
    const result = isFunction(function myFunction() {})
    expect(result).toBe(true)
  })

  // Tests that the function returns false when the argument is a string
  it('should return false when the argument is a string', () => {
    const result = isFunction('test')
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is a number
  it('should return false when the argument is a number', () => {
    const result = isFunction(123)
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is a boolean
  it('should return false when the argument is a boolean', () => {
    const result = isFunction(true)
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is an object
  it('should return false when the argument is an object', () => {
    const result = isFunction({})
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is an array
  it('should return false when the argument is an array', () => {
    const result = isFunction([])
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is null
  it('should return false when the argument is null', () => {
    const result = isFunction(null)
    expect(result).toBe(false)
  })

  // Tests that the function returns false when the argument is undefined
  it('should return false when the argument is undefined', () => {
    const result = isFunction(undefined)
    expect(result).toBe(false)
  })
})
