// example 1
var x = 10;
var y = 5;
x <<= y;
document.getElementById('demo1').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x <<= y; <br>
 result =
${x}
 `
 // 48

 // example 2
 var x = 3;
var y = 4;
x >>= y;
document.getElementById('demo2').innerHTML = `
 var x= 3;<br>
 var y = 4;<br>
 x >>= y; <br>
 result =
${x}
 `
 // 0
 
 // example 3
 var x = -100;
 var y = 5;
 x>>>=y;
 document.getElementById('demo3').innerHTML=`
 var x = -100; <br>
var y = 5;<br>
x>>>=y;<br>
result =
${x}
 `
//  134217724
// example 4

var x = 10 ;
var y = 5;
x &= y;
document.getElementById('demo4').innerHTML=`

var x = 10 ;<br>
var y = 5;<br>
x &= y;<br>
result =
${x}

`
// exapmle 5

var x = 10
var y = 5;
x |= y;
document.getElementById('demo5').innerHTML=`

var x = 10 <br>
var y = 5; <br>
x |= y; <br>
result =
${x}
`
//example 6
var x = 10
var y = 5;
x ^= y;
document.getElementById('demo6').innerHTML=`

var x = 10 <br>
var y = 5; <br>
x ^= y; <br>
result =
${x}
`



//example 7
var x = 10
var y = 5;
x &&= y;
document.getElementById('demo7').innerHTML=`

var x = 10 <br>
var y = 5; <br>
x &&= y; <br>
result =
${x}
`

// example 8

var x = 10
var y = 5;
x ||= y;
document.getElementById('demo8').innerHTML=`

var x = 10 <br>
var y = 5; <br>
x ||= y; <br>
result =
${x}
`
