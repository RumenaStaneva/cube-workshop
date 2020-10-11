// TODO: Require Controllers...
const { Router } = require('express')
const {getAllCubes} = require('../controllers/cubes');
const {getCube} = require('../controllers/database')

const router = Router();

//title просто му го добавяме, каквото искаме, ако не е указано предварително
router.get('/', (req,res) => {
    getAllCubes((cubes) => {
        res.render('index', {
            title: 'Cube Workshop',
            cubes
        })
    })
    
});

router.get('/about', (req,res) => {
    res.render('about',{
        title: 'About | Cube Workshop'
    })
});

router.get('/create', (req,res) => {
    res.render('create',{
        title: 'Create Cube | Cube Workshop'
    })
});

router.get('/details/:id', (req,res) => {
    getCube(req.params.id, (cube) => {
      res.render('details',{
        title: 'Details | Cube Workshop',
        ...cube
    })  
    })
    
});

router.get('*', (req,res) => {
    res.render('404', {
        title: 'Error | Cube Workshop'
    })
});

module.exports = router;
