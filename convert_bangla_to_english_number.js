/**
 * JavaScript Problem 2
 * Convert bangla number to english
 * 
 * 
 * Mahmood Hassan Rameem
 * Studing Diploma Engineering Computer Technology
 * Institute of Science Trade & Technology, Dhaka
 */


const convert = (inputNum) => {
    const numbers = {
        '০' : 0,
        '১' : 1,
        '২' : 2,
        '৩' : 3,
        '৪' : 4,
        '৫' : 5,
        '৬' : 6,
        '৭' : 7,
        '৮' : 8,
        '৯' : 9
    }

    var result = '';
    var inputNumber = String(inputNum);

    for(var i = 0; i < inputNumber.length; i++){
        if(numbers.hasOwnProperty(inputNumber[i])){
            result = result + numbers[inputNumber[i]];
        }
    }
    return result;
}


console.log(convert("৪৫১৬৩৮"));