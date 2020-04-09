
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}



async function findprimes(number){
  
    let arr = [null] ;
    let count = 0;
    
            for (var i = 2; i <= number; i++) {
     
                while (number % i == 0) {
                    if(arr[count-1]!=i){
                  arr[count] = i ;
                  count++;
                }
                    number = number / i;
                }
            }
     
            if (number < 1) {
              arr[count] = i ;
                  count++;
        }
     return(arr);
    }
    

    async function run(){

        let num = await ask('Enter a number : ')
        console.log('Primes are : ' + (await findprimes(num)).toString());
        process.exit()
    }

    run();
    


 