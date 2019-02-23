var express = require('express');
var socket = require('socket.io');

var numSet = ["1","2","3","4","5","6","7","8","9"];
var opSet = ["X","+","-","/"];
var problem1;
var problem2;
var problem3;
var answer1;
var answer2;
var answer3;

var pSet = [];
//App Setup
var app = express();

var playerName;

var server = app.listen(3000, function(){
  console.log('listening on :3000');
});

var io = socket(server);

app.use(express.static("public"));


io.on("connection", function(socket)
{
    console.log("Made Socket Connection", socket.id);

    socket.on("newPlayer", function(data)
    {
        playerName = data;
        genProblem();
        setTimeout(yeet, 70);
        function yeet()
        {
            io.sockets.emit("firstSet", playerName);
            io.sockets.emit("firstProblems", pSet);
        }

    });

    socket.on("newProb", function()
    {
        genProblem();
<<<<<<< HEAD
=======

>>>>>>> c587733929af6072d183f82884f16729cb570200
        setTimeout(bigGay, 1000);
        function bigGay()
        {
            io.sockets.emit("newProblems", pSet);
        }
    });
});

function genProblem()
{
    pSet = [];
    var op1 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var op2 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var oper = opSet[Math.floor(Math.random()*(3-0+1)+0)];
    problem1 = op1 + oper + op2;

    if (oper == "X")
    {
        answer1 = parseInt(op1) * parseInt(op2);
    }

    else if (oper == "+")
    {
        answer1 = parseInt(op1) + parseInt(op2);
    }

    else if (oper == "-")
    {
        answer1 = parseInt(op1) - parseInt(op2)
    }

    else
    {
        answer1 = parseInt(op1) / parseInt(op2);
    }

    var op1 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var op2 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var oper = opSet[Math.floor(Math.random()*(3-0+1)+0)];
    problem2 = op1 + oper + op2;

    if (oper == "X")
    {
        answer2 = parseInt(op1) * parseInt(op2);
    }

    else if (oper == "+")
    {
        answer2 = parseInt(op1) + parseInt(op2);
    }

    else if (oper == "-")
    {
        answer2 = parseInt(op1) - parseInt(op2)
    }

    else
    {
        answer2 = parseInt(op1) / parseInt(op2);
    }

    var op1 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var op2 =  numSet[Math.floor(Math.random()*(8-0+1)+0)];
    var oper = opSet[Math.floor(Math.random()*(3-0+1)+0)];
    problem3 = op1 + oper + op2;

    if (oper == "X")
    {
        answer3 = parseInt(op1) * parseInt(op2);
    }

    else if (oper == "+")
    {
        answer3 = parseInt(op1) + parseInt(op2);
    }

    else if (oper == "-")
    {
        answer3 = parseInt(op1) - parseInt(op2)
    }

    else
    {
        answer3 = parseInt(op1) / parseInt(op2);
    }

    pSet.push(problem1, answer1, problem2, answer2, problem3, answer3);
    console.log(pSet);
}
