# inpairs

Iterates a given list in pairs of two.

````javascript
const ip = require('inpairs')
const list = [1, 2, 3]

ip(list, (a, b) => {
  //called with the following tupels:
  //1, 2
  //2, 3
})
````