const numbersLookUp = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  9: "nine",
  15: "fifteen",
  20: "twenty",
  30: "thirty"
}

const numberToWord = (num) => {
  let result
  if (num > 99) {
    result = "I can only handle numbers 99 and below"
  }
  if (num < 20) {
     return numbersLookUp[num]
  } else {
    const first = Math.floor(num/10)*10
    const second = num-first
    result = `${numbersLookUp[first]} ${numbersLookUp[second]}`
  }
  return result

}

module.exports = numberToWord