export const KEYS_LAYOUT = [
  ['Tilda', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'BackSlash', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', 'Quote', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'CtrlRight'],
];

export const KEYS = {
  Tilda: {
    en: '`', enUp: '~', ru: 'ё', ruUp: 'Ё', code: 'Backquote',
  },
  1: {
    en: '1', enUp: '!', ru: '1', ruUp: '!', code: 'Digit1',
  },
  2: {
    en: '2', enUp: '@', ru: '2', ruUp: '"', code: 'Digit2',
  },
  3: {
    en: '3', enUp: '#', ru: '3', ruUp: '№', code: 'Digit3',
  },
  4: {
    en: '4', enUp: '$', ru: '4', ruUp: ';', code: 'Digit4',
  },
  5: {
    en: '5', enUp: '%', ru: '5', ruUp: '%', code: 'Digit5',
  },
  6: {
    en: '6', enUp: '^', ru: '6', ruUp: ':', code: 'Digit6',
  },
  7: {
    en: '7', enUp: '&', ru: '7', ruUp: '?', code: 'Digit7',
  },
  8: {
    en: '8', enUp: '*', ru: '8', ruUp: '*', code: 'Digit8',
  },
  9: {
    en: '9', enUp: '(', ru: '9', ruUp: '(', code: 'Digit9',
  },
  0: {
    en: '0', enUp: ')', ru: '0', ruUp: ')', code: 'Digit0',
  },
  '-': {
    en: '-', enUp: '_', ru: '-', ruUp: '_', code: 'Minus',
  },
  '+': {
    en: '=', enUp: '+', ru: '=', ruUp: '+', code: 'Equal',
  },

  q: {
    en: 'q', enUp: 'Q', ru: 'й', ruUp: 'Й', code: 'KeyQ',
  },
  w: {
    en: 'w', enUp: 'W', ru: 'ц', ruUp: 'Ц', code: 'KeyW',
  },
  e: {
    en: 'e', enUp: 'E', ru: 'у', ruUp: 'У', code: 'KeyE',
  },
  r: {
    en: 'r', enUp: 'R', ru: 'к', ruUp: 'К', code: 'KeyR',
  },
  t: {
    en: 't', enUp: 'T', ru: 'е', ruUp: 'Е', code: 'KeyT',
  },
  y: {
    en: 'y', enUp: 'Y', ru: 'н', ruUp: 'Н', code: 'KeyY',
  },
  u: {
    en: 'u', enUp: 'U', ru: 'г', ruUp: 'Г', code: 'KeyU',
  },
  i: {
    en: 'i', enUp: 'I', ru: 'ш', ruUp: 'Ш', code: 'KeyI',
  },
  o: {
    en: 'o', enUp: 'O', ru: 'щ', ruUp: 'Щ', code: 'KeyO',
  },
  p: {
    en: 'p', enUp: 'P', ru: 'з', ruUp: 'З', code: 'KeyP',
  },
  a: {
    en: 'a', enUp: 'A', ru: 'ф', ruUp: 'Ф', code: 'KeyA',
  },
  s: {
    en: 's', enUp: 'S', ru: 'ы', ruUp: 'Ы', code: 'KeyS',
  },
  d: {
    en: 'd', enUp: 'D', ru: 'в', ruUp: 'В', code: 'KeyD',
  },
  f: {
    en: 'f', enUp: 'F', ru: 'а', ruUp: 'А', code: 'KeyF',
  },
  g: {
    en: 'g', enUp: 'G', ru: 'п', ruUp: 'П', code: 'KeyG',
  },
  h: {
    en: 'h', enUp: 'H', ru: 'р', ruUp: 'Р', code: 'KeyH',
  },
  j: {
    en: 'j', enUp: 'J', ru: 'о', ruUp: 'О', code: 'KeyJ',
  },
  k: {
    en: 'k', enUp: 'K', ru: 'л', ruUp: 'Л', code: 'KeyK',
  },
  l: {
    en: 'l', enUp: 'L', ru: 'д', ruUp: 'Д', code: 'KeyL',
  },
  z: {
    en: 'z', enUp: 'Z', ru: 'я', ruUp: 'Я', code: 'KeyZ',
  },
  x: {
    en: 'x', enUp: 'X', ru: 'ч', ruUp: 'Ч', code: 'KeyX',
  },
  c: {
    en: 'c', enUp: 'C', ru: 'с', ruUp: 'С', code: 'KeyC',
  },
  v: {
    en: 'v', enUp: 'V', ru: 'м', ruUp: 'М', code: 'KeyV',
  },
  b: {
    en: 'b', enUp: 'B', ru: 'и', ruUp: 'И', code: 'KeyB',
  },
  n: {
    en: 'n', enUp: 'N', ru: 'т', ruUp: 'Т', code: 'KeyN',
  },
  m: {
    en: 'm', enUp: 'M', ru: 'ь', ruUp: 'Ь', code: 'KeyM',
  },

  '[': {
    en: '[', enUp: '{', ru: 'х', ruUp: 'Х', code: 'BracketLeft',
  },
  ']': {
    en: ']', enUp: '}', ru: 'ъ', ruUp: 'Ъ', code: 'BracketRight',
  },
  BackSlash: {
    en: '\\', enUp: '|', ru: '\\', ruUp: '/', code: 'Backslash',
  },
  Semicolon: {
    en: ';', enUp: ':', ru: 'ж', ruUp: 'Ж', code: 'Semicolon',
  },
  Quote: {
    en: '\'', enUp: '"', ru: 'э', ruUp: 'Э', code: 'Quote',
  },

  ',': {
    en: ',', enUp: '<', ru: 'б', ruUp: 'Б', code: 'Comma',
  },
  '.': {
    en: '.', enUp: '>', ru: 'ю', ruUp: 'Ю', code: 'Period',
  },
  '/': {
    en: '/', enUp: '?', ru: '.', ruUp: ',', code: 'Slash',
  },

  Space: {
    en: ' ', enUp: ' ', ru: ' ', ruUp: ' ', code: 'Space',
  },

  Backspace: { en: 'Backspace', code: 'Backspace' },
  Tab: { en: 'Tab', code: 'Tab' },
  Del: { en: 'Del', code: 'Delete' },
  CapsLock: { en: 'CapsLock', code: 'CapsLock' },
  Enter: { en: 'Enter', code: 'Enter' },
  Shift: { en: 'Shift', code: 'ShiftLeft' },
  ShiftRight: { en: 'Shift', code: 'ShiftRight' },
  Ctrl: { en: 'Ctrl', code: 'ControlLeft' },
  CtrlRight: { en: 'Ctrl', code: 'ControlRight' },
  Win: { en: 'Win', code: 'MetaLeft' },
  Alt: { en: 'Alt', code: 'AltLeft' },
  AltRight: { en: 'Alt', code: 'AltRight' },
  ArrowUp: {
    en: '\u2191', enUp: '\u2191', ru: '\u2191', ruUp: '\u2191', code: 'ArrowUp',
  },
  ArrowLeft: {
    en: '\u2190', enUp: '\u2190', ru: '\u2190', ruUp: '\u2190', code: 'ArrowLeft',
  },
  ArrowDown: {
    en: '\u2193', enUp: '\u2193', ru: '\u2193', ruUp: '\u2193', code: 'ArrowDown',
  },
  ArrowRight: {
    en: '\u2192', enUp: '\u2192', ru: '\u2192', ruUp: '\u2192', code: 'ArrowRight',
  },
};

export const KEYS_PARAMS = {
  Space: { style: 'keyboard__key--space' },
  ArrowUp: { style: 'keyboard__key--functional' },
  ArrowLeft: { style: 'keyboard__key--functional' },
  ArrowDown: { style: 'keyboard__key--functional' },
  ArrowRight: { style: 'keyboard__key--functional' },

  Backspace: { type: 'Command' },
  Tab: { type: 'Command' },
  Del: { type: 'Command' },
  Enter: { type: 'Command' },

  CapsLock: { type: 'Functional' },
  Shift: { type: 'Functional' },
  ShiftRight: { type: 'Functional' },
  Ctrl: { type: 'Functional' },
  CtrlRight: { type: 'Functional' },
  Win: { type: 'Functional' },
  Alt: { type: 'Functional' },
  AltRight: { type: 'Functional' },
};
