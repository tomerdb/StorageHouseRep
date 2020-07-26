                const checkPalindrom = (num) =>{
                    let temp2=true;
                    let temp = num.toString();
                    for (let index = 0; index < temp.length/2; index++) {
                        if (temp.charAt(index)==temp.charAt(temp.length-1-index)) {
                            temp2=true;
                        }
                        else{
                            return temp2=false;
                        }
                        }
                    return temp2
                }
                
                const BinaryPalindromCheck = (arr) =>{
                    let temp = []
                    var sum = 0;
                    arr.forEach(element => {
                        temp.unshift(element)
                    })
                    temp.forEach((element,i) => {
                        if(element==1){
                            sum+=Math.pow(2,i)
                        }
                    })
                    
                    return checkPalindrom(sum)

                }


                


