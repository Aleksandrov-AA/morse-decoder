const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let nextTenChar = /.{10}/g;
    let binArray = expr.match(nextTenChar);

    let morseArray = [];
    binArray.forEach(function (elem) {
        elem = elem.replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,'');
        morseArray.push(elem);
    });

    let str = '';
    morseArray.forEach(function (elem) {
        if(elem === '**********') {
            str += ' ';
        } else {
            str +=  MORSE_TABLE[elem];
        }
    });

    return str;
}

module.exports = {
    decode
}