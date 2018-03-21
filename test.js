const expect = require('chai').expect
const ip = require('./index')

expect(_iterate([])).to.deep.equal([])
expect(_iterate([1])).to.deep.equal([])
expect(_iterate([1, 2, 3, 4, 5])).to.deep.equal([[1, 2], [2, 3], [3, 4], [4, 5]])

function _iterate(list) {
  let acc = []
  ip(list, (a, b) => acc.push([a, b]))

  return acc
}