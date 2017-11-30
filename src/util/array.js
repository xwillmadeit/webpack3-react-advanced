export const noRepeatArray = arr => {
  if (Array.isArray(arr)) {
    return arr.filter((item, index, array) => {
      return array.indexOf(item) === index
    })
  } else {
    throw new Error('param should be an array!')
  }
}
