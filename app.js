
const express = require('express');
const app = express();
const labouchere = require('./Labouchere.js');

SUM_NET = 0;
WIN = 0;
LOSE = 0;
BET = 50;
PERCENT_WIN = 0.82;
TARGET=2000;

ARR_STEP = [];
for(let i=0;i<=2000;i++){
    ARR_STEP.push(BET/2);
}

app.get('/',(req,res) => {

    res.send("Test");
});

app.get('/win',(req,res) => {
   
    let arr_res = labouchere.betting('win');
    console.log(arr_res);
    //res.send("win");
    res.json(arr_res);
});

app.get('/lose',(req,res) => {
   
    let arr_res = labouchere.betting('lose');
    console.log(arr_res);
    //res.send("lose");
    res.json(arr_res);
});

app.listen('80',() => {
    console.log(`Server is listening on port 80`);
});