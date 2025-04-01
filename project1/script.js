// example 1

var x = 3;
var y = 4;
x += y;
document.getElementById('demo1').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x += y; <br>
 result =
${x}
 `
// 7


// example 2

var text1 = "Hello";
var text2 = "ASHISH 3H4X";
text1 += text2;
document.getElementById('demo2').innerHTML = `
  var text1= "Hello "; <br>
 var text2 = "ASHISH 3H4X"; <br>
  text1 += text2;<br>
 result =
${text1}`
// Hello ASHISH 3H4X


// example 3 

var x = 3;
var y = 4;
x -= y;
document.getElementById('demo3').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x -= y; <br>
 result =
${x} 
` //-1


// example 4 *= operator
var x = 3;
var y = 4;
x *= y;
document.getElementById('demo4').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x *= y; <br>
 result =
${x}
`  // 12


// example 5 **= operator
var x = 3;
var y = 4;
x **= y;
document.getElementById('demo5').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x **= y; <br>
 result =
${x}
`
// example 6 =/operator

var x = 3;
var y = 4;
x /= y;
document.getElementById('demo6').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x /= y; <br>
 result =
${x}
`
// example 7 %= operator

var x = 3;
var y = 4;
x %= y;
document.getElementById('demo7').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x %= y; <br>
 result =
${x}
`