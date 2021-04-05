/* alert("hello")
alert(4**5) 

var p = "Welcomr to my first page"
alert (p)

/*var x = prompt("please enter a number","put a number igher or smaller than 7");
//alert(x + 4) //just in sum sign the number 7 above is treared like a string

//other operations the number 7 is treated like a number

//alert(x * 4)
//alert(x % 4)
//alert(x / 4)

if (x >= 7) {
    document.write("have a nice weekend")
}
  else{
    document.write("good luck with study")
} 
*/



//TODAY'S LECTURE

/*for(var i =0; i<6; i++){
  console.log(i);
  document.write('<img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAJLlgA8NIz2QwP71fNNf1R70KfzSWj2Tsg&usqp=CAU"/>');
};

var userUnput= prompt("please enter cars number")
for(i=0; i<userUnput; i++){
  console.log(i);
  document.write('<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsg4bZLKo5TNLuqXbq39z2ACjglcNfzVwpNw&usqp=CAU">');
}*/

var carName= prompt("please enter the car type");
while(carName !=='mercedes' && carName !=='BMW'){
  carName= prompt('please select mercedes or BMW');
};
var userInput= prompt('please enter cars number');

for (i=0; i<userInput; i++){
  if(carName=='mercedes'){
    document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6F0EKjItUYdmm_nDJ2JO91obYUErhMIM-xA&usqp=CAU">')
  } else {
    document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDl2mcnYk_BTegnPyRYAQCctAOQ4yynqbQkQ&usqp=CAU">')
  }
};

function printName(){
  console.log('welcome')
};
function printConsoleNamber( limit1,limit2){
  for(var r=limit1; r<limit2;r++){
    console.log(r);
  }
}

printName();
printConsoleNamber(1,10);
printConsoleNamber(50,100);
printConsoleNamber(200,300);