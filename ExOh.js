// Have the function ExOh(str) take the str parameter being passed 
// and return the string true if there is an equal number of x's and
// o's, otherwise return the string false. Only these two letters will 
// be entered in the string, no punctuation or numbers. For example: 
// if str is "xooxxxxooxo" then the output should return false because 
// there are 6 x's and 5 o's.

function ExOh(str) { 

  // code goes here  
  var x = [];
  var o = [];
  var str = str.split('');
  
  for(var i = 0; i<str.length; i++){
   	if (str[i] =='x'){
     	x.push(str[i]) 
    }
    else{
     	o.push(str[i]) 
    }
  }
  if (x.length === o.length){
   	return true; 
  }
  else{
   	return false 
  }
         
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());
