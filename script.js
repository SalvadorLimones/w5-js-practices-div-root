window.addEventListener("load", function (){
  console.log("az oldal betöltődött");
});


var myFirstString = 'ez egy string';

var mySecondString = "ez is egy string";

var myThirdString = `
ez
"egy"
'többsoros'
string
`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirsBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Lord of the rings", "Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis", ];
var mySecondArray = [1984, "Lord of the rings", "Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis" ];

var myFirstObject = {
  title: "Lord of the rings",
  publicationDate: 1954,
  translations: ["hu", "de", "fr", "jp"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

function add(firstNumber,secondNumber){
  console.log(firstNumber+secondNumber);
}

add(1,2);
add(17948,18773);

var subtraction = function(a,b){
  if (a>b){
  console.log(a-b);
  } else if(b === a){
    console.log("a végeredmény nulla lesz");
    console.log(a-b);
  } else{
    console.log(b-a);
  }
}

subtraction(3,6);
subtraction("15",15);
add("15",15);
add("nyitva","tartás");
subtraction("nyitva","tartás");

function ifELseCheck(text) {
  if (text === "hello") {
    console.log("a text az volt, hogy hello");
  } else if(text ==="hello") {
      console.log("a text megint az volt, hogy hello");
  }

  if (text === "hello") {
    console.log("a text már megint hello");
  }
}

ifELseCheck("hello");

function compare(a,b) {
  console.log("== ", a==b);
  console.log("=== ", a===b);
  var c = a+b;
  console.log(typeof c);
  console.log(c);
}

compare("1984", 1984);
compare("15","15");

var myFirstFunctionVariable = function(){
  console.log("ez egy függvény, amit változóban tároltunk el");
}

myFirstFunctionVariable();

(function(){
  console.log("?");
}()); //immediately invoked function

var anotherVar = myFirstFunctionVariable(); //ha a függvény neve mellett ott van a zárójel, akkor az le is fut

console.log(typeof anotherVar);
console.log(anotherVar);

var anotherVar2 = myFirstFunctionVariable; //itt nincs zárójel, a függvény átadódik, de nem fut le
anotherVar2();

console.log(typeof anotherVar2);

function theLastFunction(obj1, obj2){
  console.log("obj1 értéke: ", obj1);
  console.log("obj1 typusa: ",typeof obj1);
  console.log("obj2 értéke: ",obj2);
  console.log("obj2 típusa: ",typeof obj2);
  console.log(obj2());
}

theLastFunction("hello", function (){
  return "i'm calling the last function";
});

/* 
var window = {
  addEventListener: function (eventName, eventFunction){
    ...
  }
}
*/
