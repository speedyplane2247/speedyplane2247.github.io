/*
jsCoder
(c) speedyplane 2247
Client Backend, under MIT license.
*/
function encode() {
  try {
    var decodedURI = document.getElementById("decode");
var encodedURI = encodeURI(decodedURI);
document.getElementByID("outputEncoded").innerHTML = "Encoded URI: " + encodedURI
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
