
const express = require('express');
const app = express();
const labouchere = require('./Labouchere.js');

//console.log(labouchere.betting('win'));
//console.log(labouchere.betting('lose'));

ARR_STEP = [
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,

    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50,
    50,50,50,50,50,50,50,50,50,50
]; //10000

SUM_NET =  0;
WIN = 0;
LOSE = 0;
BET = 100;
PERCENT_WIN = 0.8;

app.get('/',(req,res) => {

    res.send("Test");
});

app.get('/win',(req,res) => {
   
    let arr_res = labouchere.betting('win');
    console.log(arr_res);
    res.send("win");
});

app.get('/lose',(req,res) => {
   
    let arr_res = labouchere.betting('lose');
    console.log(arr_res);
    res.send("lose");
});

app.listen('80',() => {
    console.log(`Server is listening on port 80`);
});