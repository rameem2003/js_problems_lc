/**
 * JavaScript Problem 1
 * Convert english number to bangla
 * 
 * 
 * Mahmood Hassan Rameem
 * Studing Diploma Engineering Computer Technology
 * Institute of Science Trade & Technology, Dhaka
 */

const convert = (inputNum) =>{
    var str = '০১২৩৪৫৬৭৮৯';
    var num = String(inputNum);
    var result = '';

    for(var i = 0; i < num.length; i++){
        result = result + str[Number(num[i])];
    }

    return result;
}


console.log(convert("451638"));