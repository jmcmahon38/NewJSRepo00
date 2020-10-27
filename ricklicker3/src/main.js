

let clickers = 15;
let startTime = Date.now();

// position element in the DOM
function sync(dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}

function addClicker() {
  // get a random xy coordinates within 500x300px
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  // create a new image object
  const img = new Image();
  // assign image, style, and click listener 
  // properties to the img object
  img.src = "res/images/rick.png";
  img.style.position = "absolute";
  img.addEventListener("click", removeClicker, false);
  // add img object with rick pic as a child 
  // to the #board div id
  document.querySelector("#board").appendChild(img);
  // use the sync function with img and pos args to 
  // give style properties and place img
  sync(img, pos);
}

// executes when a user clicks on the img object 
// created by addClicker()
function removeClicker(e) {
  // remove object when activated
  e.target.parentNode.removeChild(e.target);
  // count down on the clickers timer
  counterElement = document.getElementById("remainingClicks");
  counterElement.remove()
  clickers--;
  addCounter()
  // determine if the game is over
  checkGameOver();
}

// used to check if all the objects have been removed
// and ent the game by pushing an alert to the user
function checkGameOver() {
   
  if (clickers === 0) {
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert(`De-rick-ed in ${taken} seconds!`);
  }
}
function addCounter() {
  let remainingP = document.createElement("p");
  let remainingNode = document.createTextNode(clickers);
  remainingP.appendChild(remainingNode);
  var myElement = document.getElementById("remain");
  remainingP.id = "remainingClicks"
  myElement.appendChild(remainingP);
}
// Add all the Ricks!
// add as many ricks as indicated on clickers variable
for (let i = 0; i < clickers; i++) {
  addClicker();
}
addCounter();
//  <div id="board">
//    <span id="remain"></span>
//  </div>
// add p element
// make p element display remaining ricks
// have the update take place as clicks are being made
