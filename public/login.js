var socket = io.connect("http://localhost:3000");
console.log("js file loaded");

var subname = document.getElementById("subname");
var name;

subname.addEventListener("click", function()
{
    console.log("gay");
    name = document.getElementById("name").value;
    enterName();
});

function enterName()
{
    socket.emit("newPlayer", name);
    document.location.href = index.html;
}
