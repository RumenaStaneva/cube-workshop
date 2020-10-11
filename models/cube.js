//Id - number
//Name - string
//Description - string
//Image URL - string
//Difficulty Level - number
const {v4} = require('uuid');
//трябва ни за да можем да пишем в данните ни долу
const fs = require('fs');
const { saveCube } = require('../controllers/database')
//инстанция от този клас и той да ни върне обект cube, който да има тези полета 
class Cube{
    constructor(name, description, imageUrl, difficulty){
        //извикваме функцията за да си създаде уникално id при всяко създаване на самия cube
        //тези || даваме default стойност ако не са ни подали 
        this.id = v4();
        this.name = name|| "No Name";
        this.description = description;
        this.imageUrl = imageUrl || "placeholder";
        this.difficulty = difficulty|| "0";
    }

    //saveCube - да го записва в даден файл
    save(){
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }
        saveCube(newCube) 


}
}

module.exports = Cube; 