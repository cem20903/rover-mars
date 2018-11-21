// Rover Object Goes Here
// ======================

// ======================

var robotRover = 
{
name: "Rover",
direction: "N"

}



window.onload = function(){

  initRover();
  createGrid();

}

var topTrue = false;

function push(event){

  var divRover = document.getElementById("rover");
  var left = divRover.style.left;
  var top = divRover.style.top;
  
  switch (event.keyCode){
    case 78:
    if(topTrue == true){

      var top = parseInt(top) - 50 + "px";
      divRover.style.top = top;
    } else {
      alert("Primer");
      topTrue = true;
    }
    
    break;
    case 83:
    var top = parseInt(top) + 50 + "px";
    divRover.style.top = top;
    break;
    case 69:
    var left = parseInt(left) - 50 + "px";
    divRover.style.left = left;
    break;
    case 87:
    var left = parseInt(left) + 50 + "px";
    divRover.style.left = left;
  } 
   

}


function initRover(){

  var divRover = document.getElementById("rover");
  divRover.style.backgroundColor = "red";
  divRover.style.width = "30px";
  divRover.style.height = "30px";
  divRover.style.position = "absolute";
  divRover.style.top = "100px";
  divRover.style.left = "200px";
  divRover.style.margin = "4px";

}

function createGrid(){

  var page = document.body;
  page.addEventListener("keydown", push);
  var top = 0;
  var left = 0;
for (var b = 0; b<10;b++){
  var top = top + 50;
  var left = 50;
  
  for(var a = 0;a<10;a++){
    var innerDiv = document.createElement('div');
    innerDiv.className = 'grid'+b + a;
    innerDiv.style.backgroundColor = "grey";
    innerDiv.style.width = "40px";
    innerDiv.style.height = "40px";
    innerDiv.style.position = "absolute";
    
    left = left + 50;
    innerDiv.style.padding = "1px";
     innerDiv.style.top = top + "px";
    innerDiv.style.left = left + "px"
    document.getElementById('grid').appendChild(innerDiv);

  }
}
}


function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
