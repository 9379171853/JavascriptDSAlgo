// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// function reverse(str) {
//     let revered = '';
//     for (let char of str) {
//         revered = char + revered;
//     }
//     return revered;
// }


// function reverse(str) {
//     let storeStr = '';
//     for (let i = str.length; i >= 0; i--) {
//         storeStr += str.charAt(i);
//     }
//     return storeStr;
// }

// function reverse(str) {
//     var storeStr = '';
//     for (var i = str.length; i >= 0; i--) {
//         storeStr += str.charAt(i);
//     }
//     return storeStr;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }