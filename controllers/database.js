const fs = require('fs');
const path = require('path');
const databaseFile = path.join(__dirname,'..','config/database.json');

//запазва кубовете
const saveCube = (cube) => {
    getCubes((cubes) => {
    cubes.push(cube)
    fs.writeFile(databaseFile, JSON.stringify(cubes), error => {
        if(error){
            throw error;
        }
        console.log('New cube is succesfully stored');

        });    
    })
    
}
//на база на id ще взема cube
const getCube = (id, callback) => {
    getCubes(cubes => {
        const cube = cubes.filter(c => c.id === id)[0];
        callback(cube);
    })
}
//взима вс кубове от базата и ги връща
const getCubes = (callback) => {
    //пътя до database го изнесохме горе 
        //преди да запишем самия нов куб, може да прочетем от базата от данни и да добавим новия куб там, а не да го презаписваме, както си прави по default
        fs.readFile(databaseFile, (err,dbData) => {
            if(err){
                throw err;
            }
            const cubes = JSON.parse(dbData);
            callback(cubes);
        })
};

module.exports = {
    getCube,
    getCubes,
    saveCube
}