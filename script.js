const keyboardKeys= [
  {
    codeKey: "Backquote",
    enKey: '`',
    ruKey: 'ё', 
    ruKeyCaps: 'Ё',
    enKeyCaps: '`'
  } , {
    codeKey: "Digit1",
    enKey: '1',
    ruKey: '1',
    ruKeyCaps: '1',
    enKeyCaps: '1'
  }, {
    codeKey: "Digit2",
    enKey: '2',
    ruKey: '2', 
    ruKeyCaps: '2',
    enKeyCaps: '2'
  }, {
    codeKey: "Digit3",
    enKey: '3',
    ruKey: '3',
    ruKeyCaps: '3',
    enKeyCaps: '3'
  }, {
    codeKey: "Digit4",
    enKey: '4',
    ruKey: '4', 
    ruKeyCaps: '4',
    enKeyCaps: '4'
  }, {
    codeKey: "Digit5",
    enKey: '5',
    ruKey: '5',
    ruKeyCaps: '5',
    enKeyCaps: '5'
  }, {
    codeKey: "Digit6",
    enKey: '6',
    ruKey: '6', 
    ruKeyCaps: '6',
    enKeyCaps: '6'
  }, {
    codeKey: "Digit7",
    enKey: '7',
    ruKey: '7', 
    ruKeyCaps: '7',
    enKeyCaps: '7'
  }, {
    codeKey: "Digit8",
    enKey: '8',
    ruKey: '8', 
    ruKeyCaps: '8',
    enKeyCaps: '8'
  }, {
    codeKey: "Digit9",
    enKey: '9',
    ruKey: '9', 
    ruKeyCaps: '9',
    enKeyCaps: '9'
  }, {
    codeKey: "Digit0",
    enKey: '0',
    ruKey: '0',
    ruKeyCaps: '0',
    enKeyCaps: '0'
  }, {
    codeKey: "Minus",
    enKey: '-',
    ruKey: '-',
    ruKeyCaps: '-',
    enKeyCaps: '-'
  }, {
    codeKey: "Equal",
    enKey: '=',
    ruKey: '=',
    ruKeyCaps: '=',
    enKeyCaps: '='
  },  {
    codeKey: "Backspace",
    enKey: 'Backspace',
    ruKey: 'Backspace',
    ruKeyCaps: 'Backspace',
    enKeyCaps: 'Backspace'
  }, {
    codeKey: "Tab",
    enKey: 'Tab',
    ruKey: 'Tab',
    ruKeyCaps: 'Tab',
    enKeyCaps: 'Tab'
  },{
    codeKey: "KeyQ",
    enKey: 'q',
    ruKey: 'й',
    ruKeyCaps: 'Й',
    enKeyCaps: 'Q'
  }, {
    codeKey: "KeyW",
    enKey: 'w',
    ruKey: 'ц',
    ruKeyCaps: 'Ц',
    enKeyCaps: 'W'
  }, {
    codeKey: "KeyE",
    enKey: 'e',
    ruKey: 'у',
    ruKeyCaps: 'У',
    enKeyCaps: 'E'
  }, {
    codeKey: "KeyR",
    enKey: 'r',
    ruKey: 'к',
    ruKeyCaps: 'К',
    enKeyCaps: 'R'
  }, {
    codeKey: "KeyT",
    enKey: 't',
    ruKey: 'е',
    ruKeyCaps: 'Е',
    enKeyCaps: 'T'
  },  {
    codeKey: "KeyY",
    enKey: 'y',
    ruKey: 'н',
    ruKeyCaps: 'Н',
    enKeyCaps: 'Y'
  }, {
    codeKey: "KeyU",
    enKey: 'u',
    ruKey: 'г',
    ruKeyCaps: 'Г',
    enKeyCaps: 'U'
  }, {
    codeKey: "KeyI",
    enKey: 'i',
    ruKey: 'ш',
    ruKeyCaps: 'Ш',
    enKeyCaps: 'I'
  }, {
    codeKey: "KeyO",
    enKey: 'o',
    ruKey: 'щ',
    ruKeyCaps: 'Щ',
    enKeyCaps: 'O'
  }, {
    codeKey: "KeyP",
    enKey: 'p',
    ruKey: 'з',
    ruKeyCaps: 'З',
    enKeyCaps: 'P'
  }, {
    codeKey: "BracketLeft",
    enKey: '[',
    ruKey: 'х',
    ruKeyCaps: 'Х',
    enKeyCaps: '['
  }, {
    codeKey: "BracketRight",
    enKey: ']',
    ruKey: 'ъ',
    ruKeyCaps: 'Ъ',
    enKeyCaps: ']'
  }, {
    codeKey: "Backslash",
    enKey: '\\',
    ruKey: '\\',
    ruKeyCaps: '\\',
    enKeyCaps: '\\'
  }, {
    codeKey: "CapsLock",
    enKey: 'CapsLock',
    ruKey: 'CapsLock',
    ruKeyCaps: 'CapsLock',
    enKeyCaps: 'CapsLock'
  }, {
    codeKey: "KeyA",
    enKey: 'a',
    ruKey: 'ф',
    ruKeyCaps: 'Ф',
    enKeyCaps: 'A'
  }, {
    codeKey: "KeyS",
    enKey: 's',
    ruKey: 'ы',
    ruKeyCaps: 'Ы',
    enKeyCaps: 'S'
  }, {
    codeKey: "KeyD",
    enKey: 'd',
    ruKey: 'в',
    ruKeyCaps: 'В',
    enKeyCaps: 'D'
  },  {
    codeKey: "KeyF",
    enKey: 'f',
    ruKey: 'а',
    ruKeyCaps: 'А',
    enKeyCaps: 'F'
  }, {
    codeKey: "KeyG",
    enKey: 'g',
    ruKey: 'п',
    ruKeyCaps: 'П',
    enKeyCaps: 'G'
  }, {
    codeKey: "KeyH",
    enKey: 'h',
    ruKey: 'р',
    ruKeyCaps: 'Р',
    enKeyCaps: 'H'
  }, {
    codeKey: "KeyJ",
    enKey: 'j',
    ruKey: 'о',
    ruKeyCaps: 'О',
    enKeyCaps: 'J'
  }, {
    codeKey: "KeyK",
    enKey: 'k',
    ruKey: 'л',
    ruKeyCaps: 'Л',
    enKeyCaps: 'K'
  }, {
    codeKey: "KeyL",
    enKey: 'l',
    ruKey: 'д',
    ruKeyCaps: 'Д',
    enKeyCaps: 'L'
  }, {
    codeKey: "Semicolon",
    enKey: ';',
    ruKey: 'ж',
    ruKeyCaps: 'Ж',
    enKeyCaps: ';'
  }, {
    codeKey: "Quote",
    enKey: "'",
    ruKey: 'э',
    ruKeyCaps: 'Э',
    enKeyCaps: "'"
  }, {
    codeKey: "Enter",
    enKey: 'Enter',
    ruKey: 'Enter',
    ruKeyCaps: 'Enter',
    enKeyCaps: 'Ёnter'
  }, {
    codeKey: "ShiftLeft",
    enKey: 'Shift',
    ruKey: 'Shift',
    ruKeyCaps: 'Shift',
    enKeyCaps: 'Shift'
  }, {
    codeKey: "KeyZ",
    enKey: 'z',
    ruKey: 'я',
    ruKeyCaps: 'Я',
    enKeyCaps: 'Z'
  }, {
    codeKey: "KeyX",
    enKey: 'x',
    ruKey: 'ч',
    ruKeyCaps: 'Ч',
    enKeyCaps: 'X'
  },  {
    codeKey: "KeyC",
    enKey: 'c',
    ruKey: 'с',
    ruKeyCaps: 'С',
    enKeyCaps: 'C'

  }, {
    codeKey: "KeyV",
    enKey: 'v',
    ruKey: 'м',
    ruKeyCaps: 'М',
    enKeyCaps: 'V'
  }, {
    codeKey: "KeyB",
    enKey: 'b',
    ruKey: 'и',
    ruKeyCaps: 'И',
    enKeyCaps: 'B'
  }, {
    codeKey: "KeyN",
    enKey: 'n',
    ruKey: 'т',
    ruKeyCaps: 'Т',
    enKeyCaps: 'N'
  }, {
    codeKey: "KeyM",
    enKey: 'm',
    ruKey: 'ь',
    ruKeyCaps: 'Ь',
    enKeyCaps: 'M'
  }, {
    codeKey: "Comma",
    enKey: ',',
    ruKey: 'б',
    ruKeyCaps: 'Б',
    enKeyCaps: ','
  },  {
    codeKey: "Period",
    enKey: '.',
    ruKey: 'ю',
    ruKeyCaps: 'Ю',
    enKeyCaps: '.'
  }, {
    codeKey: "Slash",
    enKey: '/',
    ruKey: '.',
    ruKeyCaps: '.',
    enKeyCaps: '/'
  }, {
    codeKey: "ArrowUp",
    enKey: '&#8593;',
    ruKey: '&#8593;',
    ruKeyCaps: '&#8593;',
    enKeyCaps: '&#8593;'
  }, {
    codeKey: "ShiftRight",
    enKey: 'Shift',
    ruKey: 'Shift',
    ruKeyCaps: 'Shift',
    enKeyCaps: 'Shift'
  },  {
    codeKey: "ControlLeft",
    enKey: 'Ctrl',
    ruKey: 'Ctrl',
    ruKeyCaps: 'Ctrl',
    enKeyCaps: 'Ctrl'
  }, {
    codeKey: "MetaLeft",
    enKey: 'Win',
    ruKey: 'Win',
    ruKeyCaps: 'Win',
    enKeyCaps: 'Win'
  }, {
    codeKey: "AltLeft",
    enKey: 'Alt',
    ruKey: 'Alt',
    ruKeyCaps: 'Alt',
    enKeyCaps: 'Alt'
  }, {
    codeKey: "Space",
    enKey: ' ',
    ruKey: ' ',
    ruKeyCaps: ' ',
    enKeyCaps: ' '
  }, {
    codeKey: "AltRight",
    enKey: 'Alt',
    ruKey: 'Alt',
    ruKeyCaps: 'Alt',
    enKeyCaps: 'Alt'
  }, {
    codeKey: "ArrowLeft",
    enKey: '&#8592;',
    ruKey: '&#8592;',
    ruKeyCaps: '&#8592;',
    enKeyCaps: '&#8592;'
  },  {
    codeKey: "ArrowDown",
    enKey: '&#8595;',
    ruKey: '&#8595;',
    ruKeyCaps: '&#8595;',
    enKeyCaps: '&#8595;'
  }, {
    codeKey: "ArrowRight",
    enKey: '&#8594;',
    ruKey: '&#8594;',
    ruKeyCaps: '&#8594;',
    enKeyCaps: '&#8594;'
  }, {
    codeKey: "ControlRight",
    enKey: 'Ctrl',
    ruKey: 'Ctrl',
    ruKeyCaps: 'Ctrl',
    enKeyCaps: 'Ctrl'
  }
]; 


let keyboardblock = document.createElement("div");
keyboardblock.id = "keyboardblock";
document.body.appendChild(keyboardblock);

let keyboardInput = document.createElement("textarea");
keyboardInput.id = "keyboardInput";
keyboardblock.append(keyboardInput); 


let keyboard = document.createElement("keyboard");
keyboard.id = "keyboard";
keyboardblock.append(keyboard);

// let keyboardkeys = document.createElement("keyboardkeys");
// keyboardkeys.classList = "keyboardkeys";
// keyboard.append(keyboardkeys);

const renderBtn = (button, id) => {
    
    let keyboardkeys = document.createElement("div");
    keyboardkeys.classList = "keyboardkeys";
    keyboardkeys.innerHTML = button;
    keyboardkeys.id = id;
    keyboard.append(keyboardkeys);
}
keyboardKeys.forEach(item => renderBtn(item.ruKey, item.codeKey));
const renderKeyboard = () => {
    keyboardKeys.forEach(item => renderBtn(item.ruKey));  
}
keyboard.addEventListener("click", (event) => {
    const keyboardInput = document.getElementById("keyboardInput");
    // const code = document.getElementById(event.code);
    let target = event.target; // где был клик?
    if (target.classList.contains('keyboardkeys')) {
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 100);
        const keyClick = document.getElementById(event.srcElement.id);
        if (keyClick === Backspace) {
            // keyboardInput.textContent += event.key;
            var length = keyboardInput.textContent.length;
         
            keyboardInput.textContent = keyboardInput.textContent.substring(0, length-1);
            
        } else if (keyClick === Tab) {
           
            keyboardInput.textContent += '\t';
        } 
        else if (keyClick === AltLeft || keyClick === AltRight || keyClick === ShiftLeft || keyClick === ShiftRight || keyClick === MetaLeft || keyClick === ControlLeft || keyClick === ControlRight) {
            
            keyboardInput.textContent;
            
        } else if (keyClick === Space){
          keyboardInput.textContent += ' ';
        }
        else if (keyClick === Enter) {
            keyboardInput.textContent += '\n';
        } else {
            keyboardInput.textContent += event.srcElement.innerText;
        }
        // keyboardInput.textContent += event.srcElement.innerHTML;
        console.log(event);
    }
})

window.addEventListener("keydown", (event) => {

    const key = document.getElementById(event.code);
    const keyboardInput = document.getElementById("keyboardInput");
    if (key) {
        key.classList.add('highlight');
        setTimeout(() => key.classList.remove('highlight'), 100);
        if (key === Backspace) {
            // keyboardInput.textContent += event.key;
            var length = keyboardInput.textContent.length;
         
            keyboardInput.textContent = keyboardInput.textContent.substring(0, length-1);
            
        } else if (key === Tab) {
            event.preventDefault();
            keyboardInput.textContent += '\t';
        } else if (key === AltLeft || key === AltRight ||  key === ControlRight || key === ControlLeft || key === MetaLeft || key === ShiftRight || key === ShiftLeft || key === CapsLock) {
            event.preventDefault();
            keyboardInput.textContent;
            
        } else if (key === Enter) {
            keyboardInput.textContent += '\n';
        }
         else if (key === ArrowUp) {
         
          keyboardInput.innerHTML += '&#8593;';
        } else if (key === ArrowDown) {
         
          keyboardInput.innerHTML += '&#8595;';
        } else if (key === ArrowRight) {
         
          keyboardInput.innerHTML += '&#8594;';
        } else if (key === ArrowLeft) {
         
          keyboardInput.innerHTML += '&#8592;';
        } 
        else {
            keyboardInput.textContent += event.key;
        }
        
        
        console.log(event);
   }
   


})

