/*
jsCoder
(c) speedyplane 2247
Client Backend, under MIT license.
*/
function encode() {
  try {
    var decodedURI = document.getElementById("decode");
var encodedURI = encodeURI(decodedURI);
var x = document.getElementByID("outputEncoded")
x.innerHTML = "Encoded URI: " + encodedURI
}
catch(err) {
    alert(err.message)
}

}
function decode() {
  // tbd
}

/*
Continue
*/
