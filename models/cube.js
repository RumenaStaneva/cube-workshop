//Id - number
//Name - string
//Description - string
//Image URL - string
//Difficulty Level - number
const {v4} = require('uuid');
//трябва ни за да можем да пишем в данните ни долу
const fs = require('fs');
const path = require('path');
const databaseFile = path.join(__dirname,'..','config/database.json');
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

        //пътя до database го изнесохме горе 
        //преди да запишем самия нов куб, може да прочетем от базата от данни и да добавим новия куб там, а не да го презаписваме, както си прави по default
        fs.readFile(databaseFile, (err,dbData) => {
            if(err){
                throw err;
            }
            const cubes = JSON.parse(dbData);
            cubes.push(newCube);

    //съдържа пътя до файла ни, датата, която ще записваме(правим я в JSON защото самия ни файл е json и подаваме обекта, който създадохме горе) и при евентуална грешка какво да прави
    fs.writeFile(databaseFile, JSON.stringify(cubes), error => {
        if(error){
            throw error;
        }
        console.log('New cube is succesfully stored');
        
        });
    })
        

}
}

module.exports = Cube;