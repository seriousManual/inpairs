function inpairs(list, handler) {
  list.forEach((value, index) => {
    if (index >= list.length - 1) return

    handler(value, list[index + 1])
  })
}

module.exports = inpairs