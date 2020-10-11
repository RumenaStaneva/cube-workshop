const Cube = require('../models/cube');

const newCube = new Cube('default', 'this is def cube', 'http://google.com', '1')

console.log(newCube);
//запазваме файла, като използваме функцията от cube.js
newCube.save();