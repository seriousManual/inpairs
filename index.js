function inpairs(list, handler) {
  for (let i = 0; i < list.length - 1; i++) {
    handler(list[i], list[i + 1])
  }
}

module.exports = inpairs