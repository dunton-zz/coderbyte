// Have the function WordCount(str) take the str string parameter 
// being passed and return the number of words the string contains 
// (ie. "Never eat shredded wheat" would return 4). Words will be 
// separated by single spaces. 

function WordCount(str) { 

  // code goes here  
  var str = str.split(' ');
  return str.length
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());
