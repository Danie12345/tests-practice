function stringLength(str) {
  if (str.length < 1) {return 'String has no characters!';}
  else if (str.length > 10) {return 'String has more than 10 characters!';}
  else return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = {stringLength, reverseString};