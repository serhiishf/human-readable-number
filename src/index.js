module.exports = function toReadable(number) {
    let arrStart = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrFinish = ['emty', 'emty', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
    let result = '';
    let numString = String(number);
    let first = Number(numString[0]);
    let second = Number(numString[1]);
    let third = Number(numString[2]);
    if (numString.length >= 3 && second + third !== 0) {
        result = arrStart[first] + ` hundred `;
        number = String(second) + String(third);
        number = Number(number);
        first = second;
        second = third;
    }

    if (number >= 0 && number < 20) {
        result = result + arrStart[number];
    }
    else if (number > 19 && number < 100 && second !== 0) {
        result = result + arrFinish[first] + ` ` + arrStart[second];
    }
    else if (number > 19 && number < 100 && second === 0) {
        result = result + arrFinish[first]
    }
    else if (numString.length >= 3 && second === 0 && third === 0) {
        result = arrStart[first] + ` hundred`;
    }



    return result;
}