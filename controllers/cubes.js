const fs = require('fs');
const {getCubes} = require('./database');
//прочитаме всички кубове в базата данни 
const getAllCubes = (callback) => {
//преди да запишем самия нов куб, може да прочетем от базата от данни и да добавим новия куб там, а не да го презаписваме, както си прави по default
getCubes((cubes) => {
    callback(cubes) 
})

}


module.exports ={
    getAllCubes
}