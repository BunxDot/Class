//getElementByID//

var myDemo = document.getElementById('bar');

console.log(myDemo.childNodes.length);

var myDemo = document.getElementById('DVD');

console.log(myDemo.childNodes.length);

//getElementByTag//

var Tags = document.getElementsByTagName('li');

console.log ("Number of li links: "+ Tags.length);

var LinksMenu = myDemo.getElementsByTagName('li');

console.log ("Number of li in menu: "+ LinksMenu.length);

//createElement + appendChild//
var item = document.createElement("li");
myDemo.appendChild(item);

var lvl = document.createElement("h3");
myDemo.appendChild(lvl);

//createTextNode + appendChild//

var text = document.createTextNode("Unknown world");
item.appendChild(text);

var type = document.createTextNode("Help");
lvl.appendChild(type);

//Extra//
var personName = prompt ("What is your name?");

switch(personName) {
  case "Galo Thymos":
  alert("Burning Soul!");
  break;

  case "Lio Fotia":
  alert ("Boss!");
  break;

  default:
  alert ("Sorry, chief!!!");

}

//Release Date//

function addNumbers(r, d) {
var addedTotal= r +d;
return addedTotal;

}

var add2 = addNumbers(9,20);
alert (add2);
