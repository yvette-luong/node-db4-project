const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan');

const model = require('./foodModel');
const server = express(); 

server.use(express.json()); 
server.use(helmet());
server.use("/", morgan("-- Data Modeling --"));

server.get('/', (req, res) =>{
    res.status(200).json({api:'Welcome to Recipe DB'})
});

server.get('/recipes', (req,res)=>{
    model.getRecipes()
    .then((data) =>{
        if(data.length){
            res.status(200).json({notification:'Enjoy your food with this recipe !', getRecipes:data})
        } else {
            res.status(404).json(data)
        }
    })
    .catch((err) =>{
        res.status(500).json({noti:'err to GET recipes', errMessage: err.message})
    })
})

server.get('/recipes/:id/ingredients', (req, res) =>{
    model.getShoppingList()
    .then((data) =>{
        if(data.length){
            res.status(200).json({notification:'This is what you need to buy!', getToBuyThis:data})
        } else {
            res.status(404).json(data)
        }
    })
    .catch((err) =>{
        res.status(500).json({noti:'err to GET ingredients', errMessage: err.message})
    })
})



module.exports = server