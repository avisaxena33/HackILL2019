var socket = io.connect("http://localhost:3000");
console.log("js file loaded");

var nametag;
var sub1;
var sub2;
var sub3;
var ques1;
var ques2;
var ques3;
var pSet;
var ans1;
var ans2;
var ans3;
var right;

document.addEventListener("DOMContentLoaded", function()
{
    nametag = document.getElementById("namebar");
    sub1 = document.getElementById("submit1");
    sub2 = document.getElementById("submit2");
    sub3 = document.getElementById("submit3");
    ques1 = document.getElementById("q1");
    ques2 = document.getElementById("q2");
    ques3 = document.getElementById("q3");

    sub1.addEventListener("click", function()
    {
        checker();
    });

    sub2.addEventListener("click", function()
    {
        checker();
    });

    sub3.addEventListener("click", function()
    {
        checker();
    });
});


socket.on("firstSet", function(data)
{
    console.log(data);
    nametag.innerHTML = data;
});

socket.on("firstProblems", function(data)
{
    pSet = data.slice();
    ques1.innerHTML = pSet[0]
    ques2.innerHTML = pSet[2]
    ques3.innerHTML = pSet[4]
});

socket.on("newProblems", function(data)
{
    pSet = data.slice();
    ques1.innerHTML = pSet[0]
    ques2.innerHTML = pSet[2]
    ques3.innerHTML = pSet[4]
});

function checker()
{
    console.log(pSet);
    ans1 = parseInt(document.getElementById("answer1").value);
    ans2 = parseInt(document.getElementById("answer2").value);
    ans3 = parseInt(document.getElementById("answer3").value);
    console.log(typeof ans1);
    console.log(typeof ans2);
    console.log(typeof ans3);
    console.log(typeof pSet[5]);


    if (ans1 != null)
    {
        if (ans1 == pSet[1])
        {
            right = true;
        }

        else
        {
            right = false;
        }
    }

    else if(ans2 != null)
    {
        if (ans2 == pSet[3])
        {
            right = true;
        }

        else
        {
            right = false;
        }
    }

    else
    {
        if(ans3 == pSet[5])
        {
            right = true;
        }

        else
        {
            right = false;
        }
    }

    if (right == true)
    {
        window.alert("You got it right!");
    }

    else
    {
        window.alert("You got it wrong!");
    }


    setTimeout(newProblems, 3000);
}

function newProblems()
{
    socket.emit("newProblems");
}
