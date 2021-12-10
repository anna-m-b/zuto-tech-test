const numberToWord = require ('./numberToWord')

test("if given the num: 9, it outputs 'nine'", () => {
  const expected = "nine"

  const actual = numberToWord(9)

  expect(actual).toBe(expected)
})

test("if given the num: 15, it outputs 'fifteen'", () => {
  const expected = "fifteen"

  const actual = numberToWord(15)

  expect(actual).toBe(expected)
})

test("if given the num: 23, it outputs 'twenty three'", () => {
  const expected = "twenty three"

  const actual = numberToWord(23)

  expect(actual).toBe(expected)
})

test("if given the num: 33, it outputs 'thirty three'", () => {
  const expected = "thirty three"

  const actual = numberToWord(33)

  expect(actual).toBe(expected)
})