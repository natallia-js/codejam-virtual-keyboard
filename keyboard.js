'use strict';

class MyKeyboard {
    constructor(klaviatura_owner_element, mycallback) {
        this.klaviatura_element = document.createElement('div');
        this.klaviatura_element.className = 'klaviatura';
        klaviatura_owner_element.appendChild(this.klaviatura_element);

        this.layout = undefined;

        this.mycallback = mycallback;
    }

    showDefLayout(capsLockPressed) {
        this.layout = localStorage.getItem('layout');

        if (!this.layout || this.layout == "en") {
            this.showEnKeyboard(capsLockPressed);
        } else {
            this.showRusKeyboard(capsLockPressed);
        }
    }

    switchLayout(capsLockPressed) {
        if (!this.layout || this.layout == "en") {
            this.showRusKeyboard(capsLockPressed);
        } else {
            this.showEnKeyboard(capsLockPressed);
        }

        localStorage.setItem('layout', this.layout);
    }

    createBtn(row_element, addit_class_name, sign, sup_sign, id) {
        var key_element = document.createElement('div');
        key_element.className = 'key';
        key_element.id = id;
        if (addit_class_name) {
            key_element.className += ' ' + addit_class_name;
        }

        key_element.addEventListener('click', this.mycallback);
        row_element.appendChild(key_element);

        var span_element = document.createElement('span');
        span_element.innerHTML = sign;
        key_element.appendChild(span_element);

        if (sup_sign) {
            var sup_element = document.createElement('sup');
            sup_element.innerHTML = sup_sign;
            key_element.appendChild(sup_element);
        }
    }

    showRusKeyboard(capsLockPressed) {
        this.klaviatura_element.innerHTML = '';
        this.layout = 'rus';

        var row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, undefined, 'ё', undefined, 'k192');
        this.createBtn(row_element, undefined, '1', '!', 'k49');
        this.createBtn(row_element, undefined, '2', '"', 'k50');
        this.createBtn(row_element, undefined, '3', '№', 'k51');
        this.createBtn(row_element, undefined, '4', ';', 'k52');
        this.createBtn(row_element, undefined, '5', '%', 'k53');
        this.createBtn(row_element, undefined, '6', '^', 'k54');
        this.createBtn(row_element, undefined, '7', '&', 'k55');
        this.createBtn(row_element, undefined, '8', '*', 'k56');
        this.createBtn(row_element, undefined, '9', '(', 'k57');
        this.createBtn(row_element, undefined, '0', ')', 'k48');
        this.createBtn(row_element, undefined, '-', '_', 'k189');
        this.createBtn(row_element, undefined, '=', '+', 'k187');
        this.createBtn(row_element, 'backspace', 'Backspace', undefined, 'k8');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'tab', 'Tab', undefined, 'k9');
        this.createBtn(row_element, undefined, 'й', undefined, 'k81');
        this.createBtn(row_element, undefined, 'ц', undefined, 'k87');
        this.createBtn(row_element, undefined, 'у', undefined, 'k69');
        this.createBtn(row_element, undefined, 'к', undefined, 'k82');
        this.createBtn(row_element, undefined, 'е', undefined, 'k84');
        this.createBtn(row_element, undefined, 'н', undefined, 'k89');
        this.createBtn(row_element, undefined, 'г', undefined, 'k85');
        this.createBtn(row_element, undefined, 'ш', undefined, 'k73');
        this.createBtn(row_element, undefined, 'щ', undefined, 'k79');
        this.createBtn(row_element, undefined, 'з', undefined, 'k80');
        this.createBtn(row_element, undefined, 'х', undefined, 'k219');
        this.createBtn(row_element, undefined, 'ъ', undefined, 'k221');
        this.createBtn(row_element, undefined, '&#92;', '&#x399;', 'k220');
        this.createBtn(row_element, 'del', 'DEL', undefined, 'k46');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        if (capsLockPressed) {
            this.createBtn(row_element, 'capslock funcKeyPressed', 'Caps Lock', undefined, 'k20');    
        } else {
          this.createBtn(row_element, 'capslock', 'Caps Lock', undefined, 'k20');
        }
        this.createBtn(row_element, undefined, 'ф', undefined, 'k65');
        this.createBtn(row_element, undefined, 'ы', undefined, 'k83');
        this.createBtn(row_element, undefined, 'в', undefined, 'k68');
        this.createBtn(row_element, undefined, 'а', undefined, 'k70');
        this.createBtn(row_element, undefined, 'п', undefined, 'k71');
        this.createBtn(row_element, undefined, 'р', undefined, 'k72');
        this.createBtn(row_element, undefined, 'о', undefined, 'k74');
        this.createBtn(row_element, undefined, 'л', undefined, 'k75');
        this.createBtn(row_element, undefined, 'д', undefined, 'k76');
        this.createBtn(row_element, undefined, 'ж', undefined, 'k186');
        this.createBtn(row_element, undefined, 'э', undefined, 'k222');
        this.createBtn(row_element, 'enter', 'ENTER', undefined, 'k13');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'shift', 'Shift', undefined, 'k16l');
        this.createBtn(row_element, undefined, '&#92;', undefined, 'k220');
        this.createBtn(row_element, undefined, 'я', undefined, 'k90');
        this.createBtn(row_element, undefined, 'ч', undefined, 'k88');
        this.createBtn(row_element, undefined, 'с', undefined, 'k67');
        this.createBtn(row_element, undefined, 'м', undefined, 'k86');
        this.createBtn(row_element, undefined, 'и', undefined, 'k66');
        this.createBtn(row_element, undefined, 'т', undefined, 'k78');
        this.createBtn(row_element, undefined, 'ь', undefined, 'k77');
        this.createBtn(row_element, undefined, 'б', undefined, 'k188');
        this.createBtn(row_element, undefined, 'ю', undefined, 'k190');
        this.createBtn(row_element, undefined, '&#47;', undefined, 'k191');
        this.createBtn(row_element, undefined, '&#x25B2;', undefined, 'k38');
        this.createBtn(row_element, 'shift-small', 'Shift', undefined, 'k16r');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'ctrl', 'Ctrl', undefined, 'k17l');
        this.createBtn(row_element, 'win', 'Win', undefined, 'k91');
        this.createBtn(row_element, 'alt', 'Alt', undefined, 'k18l');
        this.createBtn(row_element, 'space', '', undefined, 'k32');
        this.createBtn(row_element, 'alt', 'Alt', undefined, 'k18r');
        this.createBtn(row_element, 'ctrl', 'Ctrl', undefined, 'k17r');
        this.createBtn(row_element, undefined, '&#9668;', undefined, 'k37');
        this.createBtn(row_element, undefined, '&#9660;', undefined, 'k40');
        this.createBtn(row_element, undefined, '&#9658;', undefined, 'k39');
    }

    showEnKeyboard(capsLockPressed) {
        this.klaviatura_element.innerHTML = '';
        this.layout = 'en';

        var row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, undefined, '`', '~', 'k192');
        this.createBtn(row_element, undefined, '1', '!', 'k49');
        this.createBtn(row_element, undefined, '2', '@', 'k50');
        this.createBtn(row_element, undefined, '3', '#', 'k51');
        this.createBtn(row_element, undefined, '4', '$', 'k52');
        this.createBtn(row_element, undefined, '5', '%', 'k53');
        this.createBtn(row_element, undefined, '6', ':', 'k54');
        this.createBtn(row_element, undefined, '7', '?', 'k55');
        this.createBtn(row_element, undefined, '8', '*', 'k56');
        this.createBtn(row_element, undefined, '9', '(', 'k57');
        this.createBtn(row_element, undefined, '0', ')', 'k48');
        this.createBtn(row_element, undefined, '-', '_', 'k189');
        this.createBtn(row_element, undefined, '=', '+', 'k187');
        this.createBtn(row_element, 'backspace', 'Backspace', undefined, 'k8');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'tab', 'Tab', undefined, 'k9');
        this.createBtn(row_element, undefined, 'q', undefined, 'k81');
        this.createBtn(row_element, undefined, 'w', undefined, 'k87');
        this.createBtn(row_element, undefined, 'e', undefined, 'k69');
        this.createBtn(row_element, undefined, 'r', undefined, 'k82');
        this.createBtn(row_element, undefined, 't', undefined, 'k84');
        this.createBtn(row_element, undefined, 'y', undefined, 'k89');
        this.createBtn(row_element, undefined, 'u', undefined, 'k85');
        this.createBtn(row_element, undefined, 'i', undefined, 'k73');
        this.createBtn(row_element, undefined, 'o', undefined, 'k79');
        this.createBtn(row_element, undefined, 'p', undefined, 'k80');
        this.createBtn(row_element, undefined, '[', undefined, 'k219');
        this.createBtn(row_element, undefined, ']', undefined, 'k221');
        this.createBtn(row_element, undefined, '&#92;', '&#x399;', 'k220');
        this.createBtn(row_element, 'del', 'DEL', undefined, 'k46');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        if (capsLockPressed) {
            this.createBtn(row_element, 'capslock funcKeyPressed', 'Caps Lock', undefined, 'k20');    
        } else {
          this.createBtn(row_element, 'capslock', 'Caps Lock', undefined, 'k20');
        }
        this.createBtn(row_element, undefined, 'a', undefined, 'k65');
        this.createBtn(row_element, undefined, 's', undefined, 'k83');
        this.createBtn(row_element, undefined, 'd', undefined, 'k68');
        this.createBtn(row_element, undefined, 'f', undefined, 'k70');
        this.createBtn(row_element, undefined, 'g', undefined, 'k71');
        this.createBtn(row_element, undefined, 'h', undefined, 'k72');
        this.createBtn(row_element, undefined, 'j', undefined, 'k74');
        this.createBtn(row_element, undefined, 'k', undefined, 'k75');
        this.createBtn(row_element, undefined, 'l', undefined, 'k76');
        this.createBtn(row_element, undefined, ';', undefined, 'k186');
        this.createBtn(row_element, undefined, '&#xB4;', undefined, 'k222');
        this.createBtn(row_element, 'enter', 'ENTER', undefined, 'k13');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'shift', 'Shift', undefined, 'k16l');
        this.createBtn(row_element, undefined, '&#92;', undefined, 'k220');
        this.createBtn(row_element, undefined, 'z', undefined, 'k90');
        this.createBtn(row_element, undefined, 'x', undefined, 'k88');
        this.createBtn(row_element, undefined, 'c', undefined, 'k67');
        this.createBtn(row_element, undefined, 'v', undefined, 'k86');
        this.createBtn(row_element, undefined, 'b', undefined, 'k66');
        this.createBtn(row_element, undefined, 'n', undefined, 'k78');
        this.createBtn(row_element, undefined, 'm', undefined, 'k77');
        this.createBtn(row_element, undefined, ',', undefined, 'k188');
        this.createBtn(row_element, undefined, '.', undefined, 'k190');
        this.createBtn(row_element, undefined, '&#47;', undefined, 'k191');
        this.createBtn(row_element, undefined, '&#x25B2;', undefined, 'k38');
        this.createBtn(row_element, 'shift-small', 'Shift', undefined, 'k16r');

        row_element = document.createElement('div');
        row_element.className = 'row';
        this.klaviatura_element.appendChild(row_element);

        this.createBtn(row_element, 'ctrl', 'Ctrl', undefined, 'k17l');
        this.createBtn(row_element, 'win', 'Win', undefined, 'k91');
        this.createBtn(row_element, 'alt', 'Alt', undefined, 'k18l');
        this.createBtn(row_element, 'space', '', undefined, 'k32');
        this.createBtn(row_element, 'alt', 'Alt', undefined, 'k18r');
        this.createBtn(row_element, 'ctrl', 'Ctrl', undefined, 'k17r');
        this.createBtn(row_element, undefined, '&#9668;', undefined, 'k37');
        this.createBtn(row_element, undefined, '&#9660;', undefined, 'k40');
        this.createBtn(row_element, undefined, '&#9658;', undefined, 'k39');
    }
}


var input_field = document.createElement('textarea');
input_field.id = 'result';
input_field.autofocus = true;
document.body.appendChild(input_field);

var myKeyboard = new MyKeyboard(document.body, virtKeybEventsListener);
myKeyboard.showDefLayout();

var info_field = document.createElement('center');
info_field.innerHTML = '<b>Alt + Shift</b> or <b>Shift + Alt</b> (on either keyboard): to switch between RUS and EN keyboards';
document.body.appendChild(info_field);



var capsLock = false;
var shiftElement = null; /* any shift pressed */
var altElement= null; /* any alt element */


var writtableKeyCodes = [192, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    219, 221, 191, 186, 222, 188, 190, 220,
    37, 38, 39, 40];

var functionalKeyCodes = [9, 20, 16, 17, 91, 18, 32, 13, 8, 46];



function virtKeybEventsListener(event) {
    input_field.focus();

    var classes = event.currentTarget.classList;
    var children = event.currentTarget.children;

    /* обрабатываем вначале простой печатный символ */
    if ((classes.length == 1) ||
        (classes.length == 2 && classes.contains('active'))) {

        var pos = getCaretPos(input_field);

        /* решаем, отображать то, что в центре клавиши или то, что в левом верхнем углу */
        if (children.length == 2) {
            if (shiftElement) {
                input_field.value = input_field.value.slice(0, pos) + 
                    children[1].innerText + input_field.value.slice(pos);
            } else if (!shiftElement) {
                input_field.value = input_field.value.slice(0, pos) + 
                    children[0].innerText + input_field.value.slice(pos);
            }
        /* вывод в зависимости от нажатости CapsLock и Shift */    
        } else {
            if ((!capsLock && !shiftElement) || (capsLock && shiftElement)) {
                input_field.value = input_field.value.slice(0, pos) + 
                    children[0].innerText + input_field.value.slice(pos);
            } else{
                input_field.value = input_field.value.slice(0, pos) + 
                    children[0].innerText.toUpperCase() + input_field.value.slice(pos);
            }
        }

        setCaretPos(input_field, pos+1);

    } else if (classes.length > 1) {
      /* нажата функциональная клавиша */

      let pos = getCaretPos(input_field);

      switch (children[0].innerText) {
          case 'Win':
            break;
          case 'Tab':
            input_field.value = input_field.value.slice(0, pos) + 
                '\t' + input_field.value.slice(pos);
            setCaretPos(input_field, pos+1);
            break;
          case '': /* space */
            input_field.value = input_field.value.slice(0, pos) + 
                ' ' + input_field.value.slice(pos);
            setCaretPos(input_field, pos+1);
            break;
          case 'Backspace':
            if (pos > 0) {
            input_field.value = input_field.value.slice(0, pos-1) + 
                input_field.value.slice(pos);
            setCaretPos(input_field, pos-1);
            }
            break;
          case 'ENTER':
            input_field.value = input_field.value.slice(0, pos) + 
                '\n' + input_field.value.slice(pos);
            setCaretPos(input_field, pos+1);
            break;
          case 'Caps Lock':
            if (!capsLock) {
              if (!event.currentTarget.className.includes(" funcKeyPressed")) {
                event.currentTarget.className += " funcKeyPressed";
              }
              capsLock = true;
            } else {
              if (event.currentTarget.className.includes(" funcKeyPressed")) {
                event.currentTarget.className = 
                  event.currentTarget.className.replace(" funcKeyPressed", "");
              }
              capsLock = false;
            }
            break;
          case 'Shift':
            if (!shiftElement) {
                /* ранее shift не нажималась */
                if (altElement) {
                    /* если alt нажата, то переключаем раскладку клавиатуры */
                    myKeyboard.switchLayout(capsLock);
                    if (altElement.className.includes(" funcKeyPressed")) {
                      altElement.className = altElement.className.replace(" funcKeyPressed", "");
                    }
                    altElement = null;
                } else {
                    /* если alt не нажата, то просто устанавливаем shift */
                    shiftElement = event.currentTarget;
                    if (!shiftElement.className.includes(" funcKeyPressed")) {
                      shiftElement.className += " funcKeyPressed";
                    }
                }
            } else {
              /* уже нажата одна из клавиш shift */
              /* разрешаем установку только одного shift! */
              if (shiftElement.className.includes(" funcKeyPressed")) {
                shiftElement.className = shiftElement.className.replace(" funcKeyPressed", "");
              }
              if (event.currentTarget != shiftElement) {
                shiftElement = event.currentTarget;
                if (!shiftElement.className.includes(" funcKeyPressed")) {
                  shiftElement.className += " funcKeyPressed";
                }
              } else {
                shiftElement = null;
              }
            }
            break;
          case 'Ctrl':
            break;
          case 'Alt':
            if (!altElement) {
                /* ранее alt не нажималась */
                if (shiftElement) {
                    /* если shift нажата, то переключаем раскладку клавиатуры */
                    myKeyboard.switchLayout(capsLock);
                    if (shiftElement.className.includes(" funcKeyPressed")) {
                      shiftElement.className = shiftElement.className.replace(" funcKeyPressed", "");
                    }
                    shiftElement = null;
                } else {
                    /* если shift не нажата, то просто устанавливаем alt */
                    altElement = event.currentTarget;
                    if (!altElement.className.includes(" funcKeyPressed")) {
                      altElement.className += " funcKeyPressed";
                    }
                }
            } else {
                /* уже нажата одна из клавиш alt */
                /* разрешаем установку только одного alt! */ 
                if (altElement.className.includes(" funcKeyPressed")) {               
                  altElement.className = altElement.className.replace(" funcKeyPressed", "");
                }
                if (event.currentTarget != altElement) {
                  altElement = event.currentTarget;
                  if (!altElement.className.includes(" funcKeyPressed")) {
                    altElement.className += " funcKeyPressed";
                  }
                } else {
                  altElement = null;
                }
              }
              break;
          case 'DEL':
            input_field.value = input_field.value.slice(0, pos) +
                input_field.value.slice(pos+1);
            /* устанавливаю курсор в нужное место поля ввода */
            setCaretPos(input_field, pos);

            break;
      }
    }
}


document.body.addEventListener('keydown', function(event) {

    if ((writtableKeyCodes.includes(event.keyCode)) ||
        (functionalKeyCodes.includes(event.keyCode))) {

      /* хочу, чтобы нажатая клавиша делала только то, что я ей приписываю */
      event.preventDefault();

      var elementId = 'k' + event.keyCode;

      if ([16, 17, 18].includes(event.keyCode)) {
          if (["ShiftLeft", "ControlLeft", "AltLeft"].includes(event.code)) {
              elementId += 'l';
          } else {
              elementId += 'r';
          }
      }

      var el = document.getElementById(elementId);
      if (!el.className.includes(" active")) {
        el.className += " active";
      }

      if (![16, 17, 18].includes(event.keyCode)) {
        el.dispatchEvent(new MouseEvent("click"));
      }
    }
});


document.body.addEventListener('keyup', function(event) {
    if ((writtableKeyCodes.includes(event.keyCode)) ||
        (functionalKeyCodes.includes(event.keyCode))) {

        var elementId = 'k' + event.keyCode;

        if ([16, 17, 18].includes(event.keyCode)) {
            if (["ShiftLeft", "ControlLeft", "AltLeft"].includes(event.code)) {
                elementId += 'l';
            } else {
                elementId += 'r';
            }
        }

        var el = document.getElementById(elementId);
        if (el.className.includes(" active")) {
          el.className = el.className.replace(" active", "");
        }

        if ([16, 17, 18].includes(event.keyCode)) {
          el.dispatchEvent(new MouseEvent("click"));
        }
    }
});


function getCaretPos(el) {
    el.focus();

    if (el.selectionStart) {
      return el.selectionStart;
    } else if (document.selection) {
      var sel = document.selection.createRange();
      if (sel == null) {
        return 0;
      }
      var clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(el);
      clone.setEndPoint('EndToEnd', sel);
  
      return clone.text.length;
    } 
    return 0;
  }


function setCaretPos(el, pos) {
    if (el.createTextRange) {
        var rng = el.createTextRange();
        rng.move("character", pos);
        rng.select();
      } else {
          if (el.selectionStart) {
              el.focus();
              el.setSelectionRange(pos, pos);
          } else {
              el.focus();
          }
      }
}