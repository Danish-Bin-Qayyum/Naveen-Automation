//----------------------( String Method )--------------------------//
// --> length of string ( how many characters )
console.log('javascript'. length);
let str = "naveen";
console.log(str.length);

// --> print the specific characters
 console.log('javascript'[2]);
 console.log('javascript'.charAt(2));

 // --> aski value of the character 
 console.log('javascript'. charCodeAt);

 // --> convert into the lolowercase
 console.log('javascript'.toLowerCase);

 // -->
 console.log('javascript'.slice(2, -5));

 // --> print the specific part of string
 console.log('javascript'.substring(2,6));
 console.log('javascript'.substring(-2,2));

 // --> concat means to add the tow string
 console.log('danish'.concat('automation').concat('labe'));

 // --> split means to print whole world using index
 let lang ="java_javascript_pythom"
 let arr = lang.split('_')
 console.log(arr[0]);
 console.log(arr[2]);

 // --> include means to check that a world is includ or not
  console.log('javaScript'.includes('java'));
 console.log('javascript'.includes('hello'));

 // --> remove and replace a specefic string
 console.log('dew test graework'.replace('dev', "js"));
 console.log('dew test fraework'.replaceAll('dev', "js"));
 
 // --> replace all the highfan with silation
 console.log("01-01-1990".replaceAll("-","/"));

 // --> remove space from staring and ening
 console.log("hello js ".trim());

 // --> remove space from staring
 console.log("hello js ".trimStart());

  // --> remove space from ending
 console.log("hello js ".trimEnd());



