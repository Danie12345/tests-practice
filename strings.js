function stringLength(str) {
  if (str.length < 1) { return 'String has no characters!'; }
  if (str.length > 10) { return 'String has more than 10 characters!'; }
  return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

module.exports = { stringLength, reverseString, capitalize };