function findLargestPalindrome(){

    let max = 0;
    let i = 999;
    let j = 999;
  
    for(i =999; i>100; i--){
  
         for(j = 999; j>100; j--){
            
                let tempNum = i * j  ;
                
                let tempStringOriginal = i * j  + "";
            
                let tempStringReversed = tempStringOriginal.split("").reverse().join("");
                
                if(tempStringOriginal==tempStringReversed){
  
                    if(max<tempNum){  
                        max = tempNum;    
               }
            }
        }
    }
  
    return (max);
  
  }
  
  console.log('Largest Palindrome is : ' + findLargestPalindrome());
  process.exit();