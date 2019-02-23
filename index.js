var express = require('express');
var socket = require('socket.io');

var easyNumSet = [];
var medNumSet = [];
var hardNumSet = [];
var boost = 1;

for (var i = -9; i < 10; i++)
{
    easyNumSet.push(i);
    medNumSet.push(i);
}

for (var i = -99; i < 100; i++)
{
    hardNumSet.push(i);
}

var easyOpSet = ["+","-"];
var medOpSet = ["X", "+", "-", "/"];
var hardOpSet = ["X", "+", "-"];

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
        setTimeout(yeet, 200);
        function yeet()
        {
            io.sockets.emit("firstSet", playerName);
            io.sockets.emit("firstProblems", pSet);
        }

    });

    socket.on("newProb", function()
    {
        genProblem();
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
    var op1 =  easyNumSet[Math.floor(Math.random()*(18-0+1)+0)];
    var op2 =  easyNumSet[Math.floor(Math.random()*(18-0+1)+0)];
    var oper = easyOpSet[Math.floor(Math.random()*(1-0+1)+0)];
    if (oper == "+")
    {
        answer1 = op1 + op2;
    }

    else
    {
        answer1 = parseInt(op1) - parseInt(op2)
    }

    if (parseInt(op1) < 0)
    {
        op1 = "(" + op1 + ")";
    }

    if (parseInt(op2) < 0)
    {
        op2 = "(" + op2 + ")";
    }

    problem1 = op1 + oper + op2;




    var op1 =  medNumSet[Math.floor(Math.random()*(18-0+1)+0)];
    var op2 =  medNumSet[Math.floor(Math.random()*(18-0+1)+0)];
    var oper = medOpSet[Math.floor(Math.random()*(3-0+1)+0)];

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
        while (answer2 != Math.ceil(answer2) && op2 != "0")
        {
            var op1 =  medNumSet[Math.floor(Math.random()*(18-0+1)+0)];
            var op2 =  medNumSet[Math.floor(Math.random()*(18-0+1)+0)];
            answer2 = parseInt(op1) / parseInt(op2);
        }


    }
    if (parseInt(op1) < 0)
    {
        op1 = "(" + op1 + ")";
    }

    if (parseInt(op2) < 0)
    {
        op2 = "(" + op2 + ")";
    }

    problem2 = op1 + oper + op2;


    var op1 =  hardNumSet[Math.floor(Math.random()*(198-0+1)+0)];
    var op2 =  hardNumSet[Math.floor(Math.random()*(198-0+1)+0)];
    var oper = hardOpSet[Math.floor(Math.random()*(2-0+1)+0)];

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

    if (parseInt(op1) < 0)
    {
        op1 = "(" + op1 + ")";
    }

    if (parseInt(op2) < 0)
    {
        op2 = "(" + op2 + ")";
    }

    problem3 = op1 + oper + op2;


    pSet.push(problem1, answer1, problem2, answer2, problem3, answer3);
    console.log(pSet);
}
