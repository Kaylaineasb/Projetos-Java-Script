/**
 * JS-AUlA14
 */

var nipes=['♧','♥','♤','♢'];
var faces=['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
var nipes=nipes[Math.floor(Math.random()*4)];
var faces=faces[Math.floor(Math.random()*faces.length)];
document.write("<h1>"+faces+nipes+"</h1>");