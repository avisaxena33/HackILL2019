var socket = io.connect("http://localhost:3000");

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

    sub1.addEventListener("click", function(e)
    {
        checker();
        e.preventDefault();
    });

    sub2.addEventListener("click", function(e)
    {
        checker2();
        e.preventDefault();
    });

    sub3.addEventListener("click", function(e)
    {
        checker3();
        e.preventDefault();
    });
});


socket.on("firstSet", function(data)
{
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
    ans1 = document.getElementById("answer1").value = "";
    ans2 = document.getElementById("answer2").value = "";
    ans3 = document.getElementById("answer3").value = "";

});

function checker()
{
    ans1 = parseInt(document.getElementById("answer1").value);




    if (!(ans1 == "" || ans1.length == 0 || ans1 == null))
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




    if (right == true)
    {
        console.log("you got it correct!");
    }

    else if (right == false)
    {
        console.log("you got it wrong!");
    }


    newProblems();
}
function checker2()
{
ans2 = parseInt(document.getElementById("answer2").value);
if(!(ans2 == "" || ans2.length == 0 || ans2 == null))
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
if (right == true)
{
    console.log("you got it correct!");
}

else if (right == false)
{
    console.log("you got it wrong!");
}

    newProblems();
}

function checker3()
{
    ans3 = parseInt(document.getElementById("answer3").value);
    if (!(ans3 == "" || ans3.length == 0 || ans3 == null))
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
        console.log("you got it correct!");
    }

    else if (right == false)
    {
        console.log("you got it wrong!");
    }


    newProblems();
}

function newProblems()
{
    socket.emit("newProb");
}
