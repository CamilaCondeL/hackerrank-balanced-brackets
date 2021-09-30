const getOpposite = (char) => {
  const map = [];

  map["}"] = "{";
  map["]"] = "[";
  map[")"] = "(";

  return map[char];
}

const isBalanced = (s) => {
  let brackets = [];

  for(let i = 0; i < s.length; i++) {
    element = s[i];

    if(element === "{" || element === "["|| element === "(") 
    brackets.push(element);

    else {
      const closeCorresponding = getOpposite(element);
      const lastBracket = brackets.pop();

      if(closeCorresponding !== lastBracket) {
        return "NO";
      }
    }
  }

  return brackets.length === 0 ? "YES" : "NO"
}

module.exports = {isBalanced, getOpposite};