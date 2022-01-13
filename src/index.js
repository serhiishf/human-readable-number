module.exports = function toReadable(number) {
    let arrStart = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrFinish = ['emty', 'emty', 'twelve', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
    let result = '';
    let numString = String(number);
    let first = Number(numString[0]);
    let second = Number(numString[1]);
    let third = Number(numString[2]);
/*   
    if (number > 99 && number < 1000) {
        result = arrStart[first] + ` hundred `;
        number = Number(second + third);
        if (number >= 0 && number < 20) {
            result = result + arrStart[number];
        }
        else if (number > 19 && number < 100 && second !== 0) {
            result = result + arrFinish[first] + ` ` + arrStart[second];
        }
        else if (number > 19 && number < 100 && second === 0) {
            result = result + arrFinish[first]
        }
    }
*/
    if (number >= 0 && number < 20) {
        result = arrStart[number];
    }
    else if (number > 19 && number < 100 && second !== 0) {
        result = arrFinish[first] + ` ` + arrStart[second];
    }
    else if (number > 19 && number < 100 && second === 0) {
        result = arrFinish[first]
    }



    return result;
}
