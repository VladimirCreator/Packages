export const isEmpty = (string) => string.length <= 0
export const isDigit = (character) => !isNaN(parseInt(character))

export const isLatin = (character) => {
  character = character.toLowerCase()
  return character >= "a" && character <= "z"
}

export const isRangeUnderflow = (string, minLength) => string.length < minLength
export const isRangeOverflow = (string, maxLength) => string.length > maxLength

export const includesDigit = (string) => Array.from(string).some(isDigit)
export const includesLatin = (string) => Array.from(string).some(isLatin)

export const includesRegExp = (target, regexp) => {
  const matches = target.match(regexp)
  if (matches)
    return true
  return false
}

export const isAdult = (string) => {
  const today = new Date()
  const userDate = new Date(string)

  let difference = today.getFullYear() - userDate.getFullYear();
  if (userDate.getMonth() < today.getMonth() && userDate.getDay() < today.getDay()) {
    difference -= 1
  }
  if (difference < 18)
    return false
  return true
}
