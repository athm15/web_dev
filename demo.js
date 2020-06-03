alert("alerta desde demos.js");

var x = 10; //variable js: el numero puede ser escrito con decimales o enteros
/*	js distingue mayusculas de minusculas
	"=": operador de asignación
	Cuando cambia el valor de x una vez , se cambiará 
		automáticamente en todos los lugares donde lo usó.
*/

var sayHello = "Hello world! <br/> \'I am a JavaScript programmer.\n\'";
document.write(sayHello);

document.write("<br/>" + eval(10+5));
document.write(eval(10+5));

//var isAdult = (edad <18)? "Demasiado joven": "Suficientemente mayor"; //como if()?then:else

//function name() {
  //code to be execute
//}

//interactuard0 CON EL USUARIO
var user = prompt("Please enter your name");
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

//OBJETOS
var person = { name: "John", edad: 31, favColor: "green", altura: 183 }; //iniciador de objetos lineal
var x = person.age;
var y = person['age'];

var course = {name: "JS", lessons: 41};
document.write(course.name.length);
//Outputs 2

//document.write() outputs data. The write() function is actually a method of the document object.

function person(name, age, color) { //este es el constructor de objetos
  this.name = name;
  this.age = age;
  this.favColor = color;
}
var p1 = new person("John", 42, "green");  //crear nueva instancia "new"
var p2 = new person("Amy", 21, "red");
document.write(p1.age); // Outputs 42
document.write(p2.name); // Outputs "Amy"

//creación de un metodo dentro de un constructor
function person(name, age) {
  this.name = name;  
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}
var p = new person("David", 21);
p.changeName("John");
//Now p.name equals to "John"

//ARRAYS
var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

var courses = new Array(3);
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";

var courses = new Array(); //se añade dinamicamente
courses[0] = "HTML";
courses[1] = "CSS";
courses[2] = "JS";
courses[3] = "C++";
document.write(courses.length); //outputs 4

var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2); //unir arrays

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]); //person is an object instead being and array
//Outputs "46"

document.write(Math.PI);
//Outputs 3.141592653589793


var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

/**********DOM y selección de elementos**********/
var elem = documento. getElementById ("demo"); 
elem. innerHTML = "¡Hola, mundo!"; //El ejemplo anterior supone que el HTML contiene un elemento con id = "demo", por ejemplo <div id = "demo"> </div>.

/*
Selecting Elements

The getElementsByClassName() method returns a collection of all elements in the document with the specified class name.
For example, if our HTML page contained three elements with class="demo", the following code would return all those elements as an array:
var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

Similarly, the getElementsByTagName method returns all of the elements of the specified tag name as an array.
The following example gets all paragraph elements of the page and changes their content:

<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
  var arr = document.getElementsByTagName("p");
  for (var x = 0; x < arr.length; x++) {
    arr[x].innerHTML = "Hi there";
  }
</script>

The script will result in the following HTML:
<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>
*/

/* For example, we can change the src attribute of an image:
  <img id="myimg" src="orange.png" alt="" />
  <script>
    var el = document.getElementById("myimg");
    el.src = "apple.png";
  </script>

  <div id="demo" style="width:200px">some text</div>
  <script>
    var x = document.getElementById("demo");
    x.style.color = "6600FF";
    x.style.width = "100px";
  </script>
*/


/*********ES6**************/
var a = 10;
const b = 'hello'; //inmutable
let c = true;

/* let se usa para definir variables dentro de una función
if (true) {
  let name = 'Jack';
}
alert(name); //generates an error 
*/

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

let name = 'David'; 
let msg = `¡Bienvenido ${name} !`; 
console.log (msg);

let a = 8;
let b = 34;
let msg = `The sum is ${a+b}`;
console.log(msg);

let obj = {a: 1, b: 2, c: 3};
for (let v in obj) { //solo para objetos
  console.log(v); //a b c
}

let list = ["x", "y", "z"];
for (let val of list) {
  console.log(val);
}

for (let ch of "Hello") {
  console.log(ch);
}

/******new functions declarations in ES6*********/
const add = (x, y) => {
  let sum = x + y;  
  console.log(sum);
}

const greet = x => "Welcome " + x; //x es el parametro
const x = () => alert("Hi"); //sin parametros


var arr = [2, 3, 7, 8];
arr.forEach( //cada elemento del array entra en la funcion el
  function(el) {
    console.log(el * 2);
  }
);

const arr = [2, 3, 7, 8];
arr.forEach(
  v => {
    console.log(v * 2);
  }
);

//valores predeterminados a los parametros de una funcion
const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50 


//***********+objetos**********++
let tree = {
  height: 10,
  color: 'green',
  grow() {
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); // 12



let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};


let person = {
  name: 'Jack',
  age: 18
};
let newPerson = Object.assign({}, person); 
newPerson.name = 'Bob';
console.log(person.name); // Jack
console.log(newPerson.name); // Bob


/****desestructuracion de un array****/
let arr = ['1', '2', '3'];
let [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

let a = () => {
  return [1, 3, 2];
};
let [one, , two] = a();

let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6
[c, d] = [d, c]; // c = 8, d = 4


//******+desestructuracion de objetos
let obj = {h:100, s: true};
let {h, s} = obj;
console.log(h); // 100
console.log(s); // true

let a, b;
({a, b} = {a: 'Hello ', b: 'Jack'}); //sin declaración () needed
console.log(a + b); // Hello Jack

let {a, b} = {a: 'Hello ', b: 'Jack'};
console.log(a + b);

//*********cambiar nombre de las variables
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h); // Error
console.log(foo); // 42


//***asignar valores default
var obj = {id: 42, name: "Jack"};
let {id = 10, age = 20} = obj; //age no existe, entonces se añade
console.log(id); // 42
console.log(age); // 20

//añadir valores en medio de una matriz usando una matriz
let newArr = ['Three', 'Four']; 
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const clonedObj = {...obj1}; // { foo: "bar", x: 42 }
const mergedObj = {...obj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }


//**********clases**********
class Rectangle { 
  constructor(height, width) { //constructor mandatory
    this.height = height;
    this.width = width;
  }
}
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() { //captador
    return this.calcArea();
  }
  calcArea() { //metodo
    return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal { //dog es una clase hijo de animal
  speak() {
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak();



class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Dog extends Animal {
  speak() {
    super.speak(); // llama al metodo del padre
    console.log(this.name + ' barks.');
  }
}
let dog = new Dog('Rex');
dog.speak();
// Rex makes a noise.
// Rex barks.


function asyncFunc(work) {
  return new Promise(
    function(resolve, reject) {
      if (work === "")
        reject(Error("Nothing"));
      setTimeout(function() {
        resolve(work);
        },
      1000);
    }
  );
}

asyncFunc("Work 1") // Task 1
.then(
  function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
  }, 
  function(error) {
    console.log(error);
  }
)
.then(
  function(result) {
    console.log(result);
  }, 
  function(error) {
    console.log(error);
  }
);
console.log("End");


//********modulos***************+
// lib/math.js
export let sum = (x, y) => { return x + y; }
export let pi = 3.14;

// app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)