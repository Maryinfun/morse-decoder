const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": "",
};

function decode(expr) {
  let sliced = "";
  let pair = "";
  let arrSliced = [];
  let arrSymbol = [];
  let newArr = [];
  let fix = "";

  let i = 0;
  while (i < expr.length - 1) {
    sliced = expr.slice(i, i + 10);
    arrSliced.push(sliced);
    i += 10;
  }

  function binToMorse(binStr) {
    let Morse = "";
    for (let i = 0; i < binStr.length - 1; i += 2) {
      pair = binStr.slice(i, i + 2);
      if (pair === "00") {
        Morse += "";
      } else if (pair === "10") {
        Morse += ".";
      } else if (pair === "11") {
        Morse += "-";
      }
    }
    return Morse;
  }

  arrSliced.forEach((pair) => {
    arrSymbol.push(binToMorse(pair));
  });

  arrSymbol.forEach((el) => {
    newArr.push(MORSE_TABLE[el]);
  });

  newArr.map((i) => {
    i === undefined ? (i = " ") : i;
    fix += i;
  });

  return fix;
}

module.exports = {
  decode,
};
