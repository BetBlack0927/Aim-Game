var score = 0
let count = 10;
let max = 0;
let myTimer;

function createButton(){
  document.getElementById("Start").style.display="none"
    var newElement = document.createElement("div");
    var newButton = document.createElement("button");
    newButton.setAttribute('id', 'myButton');
    newButton.textContent = "Click";
    newButton.onclick = function() {
    let x = Math.floor(Math.random() * 1700) + 1;
    let y = Math.floor(Math.random() * 870) + 1;
    var newx = x.toString()
    var newy = y.toString()
    var left = newx +"px"
    var top = newy +"px"
    score +=1
    newButton.style.left = left 
    newButton.style.top = top
    document.getElementById("Score").innerHTML = "Score:"+score
    };
  newButton.style.fontSize = "40px";
  newButton.style.fontWeight = "bolder";
  newButton.style.position = "absolute";
  newButton.style.top = "100px";
  newButton.style.left = "880px";
  newButton.style.backgroundColor = "#216681";
  newButton.style.color = "white";
  newButton.style.border = "none";
  newButton.style.padding = "15px 32px";
  newButton.style.textAlign = "center";
  newButton.style.textDecoration = "none";
  newButton.style.display = "inline-block";
  newButton.style.borderRadius = "50%";
  newButton.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
  newButton.style.cursor = "pointer";
  newButton.style.transition = "transform 0.2s ease-in-out";
  newButton.style.userSelect = "none"

    newElement.appendChild(newButton);
    document.body.appendChild(newElement);
  }

  function startTimer(){
    myTimer = setInterval(countDown,1000);
  }

  function countDown(){
    count -= 1;
    console.log(count);
    document.getElementById("Timer").innerHTML = count+" Seconds";
    if (count <= max) {
      clearInterval(myTimer);
      console.log("finished");
      document.getElementById("myButton").style.display="none"
      count=10
      var reloadButton = document.createElement("button");
    reloadButton.textContent = "Reload";
    reloadButton.onclick = function() {
      location.reload();
    };

    // Add styles to the reload button
    reloadButton.style.fontSize = "40px";
    reloadButton.style.fontWeight = "bolder";
    reloadButton.style.position = "absolute";
    reloadButton.style.top = "100px";
    reloadButton.style.left = "880px";
    reloadButton.style.backgroundColor = "#216681";
    reloadButton.style.color = "white";
    reloadButton.style.border = "none";
    reloadButton.style.padding = "15px 32px";
    reloadButton.style.textAlign = "center";
    reloadButton.style.textDecoration = "none";
    reloadButton.style.display = "inline-block";
    reloadButton.style.borderRadius = "50%";
    reloadButton.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    reloadButton.style.cursor = "pointer";
    reloadButton.style.transition = "transform 0.2s ease-in-out";

    // Add the reload button to the document
    document.body.appendChild(reloadButton);
  }
}
      


