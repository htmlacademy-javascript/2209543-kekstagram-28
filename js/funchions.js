//Функция для проверки длины строки
/**
 * @param {string} target
 * @param {number} length
 * @return {boolean}
 */
const fitsLength = (target, length) => target.length <= length;

fitsLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
/**
 * @param {string|number} target
 * @return {boolean}
 * @see https://en.wikipedia.org/wiki/Palindrome
 */
const isPalindrome = (target) => {
  const normalized = String(target).replaceAll(' ', '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
};

isPalindrome('Лёша на полке клопа нашёл ');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
/**
 * @param {string|number} target
 * @return {number}
 */
const parseDigits = (target) => {
  const digits = String(target).replace(/[^0-9]/g, '');

  return digits ? Number(digits) : NaN;
};

parseDigits('1 кефир, 0.5 батона');

//Функция которая Добавит в начало строки символы другой строки. В результате исходная строка достигнет заданной длины.
/**
 * @param {string} target
 * @param {number} length
 * @param {string} pad
 * @return {string}
 */
const padStart = (target, length, pad) => {
  const start = pad.repeat(length);

  return `${start}${target}`.slice(-length);
};

padStart('1', 4, '0');
