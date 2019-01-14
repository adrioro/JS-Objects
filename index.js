/* OBJECTS
JavaScript is designed on a simple object-based paradigm.
An object is a collection of properties, and a property is
an association between a name (or key) and a value. A property's
value can be a function, in which case the property is known as a method.
In addition to objects that are predefined in the browser,
you can define your own objects.
*/

var myName = "Adriana";

console.log(myName.length); //7

function alertThis() {
  document.write(myName.length);
}
alertThis()