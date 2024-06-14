var scoreOfString = function (s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    count += Math.abs(s[i - 1].charCodeAt(0) - s[i].charCodeAt(0));
  }
  return count;
};

let s = "hello";
scoreOfString(s);
