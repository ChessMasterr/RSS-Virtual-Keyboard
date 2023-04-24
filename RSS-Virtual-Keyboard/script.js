const letterBtnArr1 = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
];

const letterBtnArr2 = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
];

const letterBtnArr3 = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "\\",
];

const letterBtnArr4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);

const textBox = document.createElement("textarea");
textBox.classList.add("text-box");
wrapper.appendChild(textBox);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
wrapper.appendChild(keyboard);

const lineFirst = document.createElement("div");
lineFirst.classList.add("line");
keyboard.appendChild(lineFirst);

const lineSecond = document.createElement("div");
lineSecond.classList.add("line");
keyboard.appendChild(lineSecond);

const lineThird = document.createElement("div");
lineThird.classList.add("line");
keyboard.appendChild(lineThird);

const lineFourth = document.createElement("div");
lineFourth.classList.add("line");
keyboard.appendChild(lineFourth);

const lineFifth = document.createElement("div");
lineFifth.classList.add("line");
keyboard.appendChild(lineFifth);

letterBtnArr1.forEach(function (letter) {
  const letterBtn = document.createElement("button");
  letterBtn.classList.add("letter");
  letterBtn.textContent = letter;
  lineFirst.appendChild(letterBtn);
});

letterBtnArr2.forEach(function (letter) {
  const letterBtn = document.createElement("button");
  letterBtn.classList.add("letter");
  letterBtn.textContent = letter;
  lineSecond.appendChild(letterBtn);
});

letterBtnArr3.forEach(function (letter) {
  const letterBtn = document.createElement("button");
  letterBtn.classList.add("letter");
  letterBtn.textContent = letter;
  lineThird.appendChild(letterBtn);
});

letterBtnArr4.forEach(function (letter) {
  const letterBtn = document.createElement("button");
  letterBtn.classList.add("letter");
  letterBtn.textContent = letter;
  lineFourth.appendChild(letterBtn);
});


