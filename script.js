
// Switch //

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

// Function //

function addNumbers(s, n) {
var addedTotal= s +n;
return addedTotal;

}

var add2 = addNumbers(1,10);
alert (add2);
