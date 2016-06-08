// Have the function TimeConvert(num) take the num parameter being 
// passed and return the number of hours and minutes the parameter 
// converts to (ie. if num = 63 then the output should be 1:3). 
// Separate the number of hours and minutes with a colon.

function TimeConvert(num) { 

  // code goes here  
  var hours = Math.floor(num/60)
  var minutes = num % 60
  return hours + ':' + minutes 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());
