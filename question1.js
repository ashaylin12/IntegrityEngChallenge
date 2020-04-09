
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}



async function start() {
  let arrnum = [null];
  let size = await ask('Enter array size : ');

  for(var i = 0 ; i<size; i++){

     arrnum[i] = await ask('Enter a number : ');

  }  
  

  function sortArray(arrNumbers){                                   
                                      
    arrNumbers.sort((a, b) => a - b);   
                                       
    return arrNumbers;   
  }          


  console.log('Sorted Array : ' + sortArray(arrnum) );
  process.exit();
 
}


start();
