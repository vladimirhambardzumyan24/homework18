function addBrackets(str) {
  let brecketsString = "";
  function breckets(str, i) {
    if (i < str.length / 2 - 1) {
      brecketsString = brecketsString + str[i] + "(";
      breckets(str, i + 1);
    } else if (i > str.length / 2 - 1 && i < str.length) {
      brecketsString = brecketsString + str[i] + ")";
      breckets(str, i + 1);
    }
  }
  breckets(str, 0);
  return brecketsString;
}
let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
console.log(addBrackets(s));
