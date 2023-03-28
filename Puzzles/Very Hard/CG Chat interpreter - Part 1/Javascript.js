var inputs = readline().split(" ");
const numGood = parseInt(inputs[0]);
const numBad = parseInt(inputs[1]);
inputs = readline().split(" ");
let goodNouns = [];
let badNouns = [];
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] != "") {
    goodNouns.push(inputs[i]);
  }
}
inputs = readline().split(" ");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] != "") {
    badNouns.push(inputs[i]);
  }
}
let regexHelper = {
  nick: /\<([^*]+)\>/g,
  context: /\*([^*]+)\*/g,
  assignCommand: /(?:UR|YOUR|YOURE|You're)\s+/gi,
  constante: new RegExp(buildRegexConstante(), "gi"),
  constanteSpecial: {
    me: /\b\s+(me)\s+\b/gi,
    you: /\b\s+(you|u)\b(?!\')/gi,
    nick: /\b(UR|YOUR|YOURE|YOU'RE)\b.*\*\w+\*/gi,
  },
  arithmetic: {
    squared: /[\w\s,!]+(\bsquared\b)+/gi,
    addition: /[\w\s,!]+(\bAND\b)+[\w\s,!]+(\bTOO\b)+/gi,
    substraction: /[\w\s,!]+(\bbut not\b)+[\w\s,!]+(\bthough\b)+/gi,
    multiplication: /[\w\s,!]+(\bby\b)+[\w\s,!]+(\bmultiplied\b)+/gi,
  },
  stackCommand: {
    listen: /\b(listen)\s+\b/gi,
    forget: /\b(forget)\s+\b/gi,
    flip: /\b(flip)\s+\b/gi,
  },
  output: /(tell|telling)/i,
};
const numLines = parseInt(readline());
let result = "";
let relNickContext = {};
let stacks = {};
for (let i = 0; i < numLines; i++) {
  let line = readline();
  console.error(line);
  if (line.indexOf("<__") == -1) {
    let _nick = line.match(regexHelper.nick);
    line = line.replace(_nick[0] + " ", "");
    let _context = line.match(regexHelper.context);
    let _constante = line.match(regexHelper.constante);
    let _assignCommand = line.match(regexHelper.assignCommand);
    let _output = line.match(regexHelper.output);
    let _constanteSpecial = {
      me: line.match(regexHelper.constanteSpecial.me),
      you: line.match(regexHelper.constanteSpecial.you),
      nick: line.match(regexHelper.constanteSpecial.nick),
    };
    let _constanteArithmetic = {
      square: line.match(regexHelper.arithmetic.squared),
      addition: line.match(regexHelper.arithmetic.addition),
      substraction: line.match(regexHelper.arithmetic.substraction),
      multiplication: line.match(regexHelper.arithmetic.multiplication),
    };
    let _stackCommands = {
      listen: line.match(regexHelper.stackCommand.listen),
      forget: line.match(regexHelper.stackCommand.forget),
      flip: line.match(regexHelper.stackCommand.flip),
    };
    if (_nick != null) {
      let oneConstante = !(_constante == null && _constanteArithmetic.addition == null && _constanteArithmetic.multiplication == null && _constanteArithmetic.square == null && _constanteArithmetic.substraction == null);
      //console.error('ONECONSTANTE: ' + oneConstante)
      let tempStack = [];
      if (_context != null) {
        let c = "<" + _context[0].replace(/[*]/g, "") + ">";
        relNickContext[_nick] = c;
        if (stacks[c] == undefined) {
          stacks[c] = [];
        }
      }
      if (_constanteSpecial.me != null && oneConstante && _output == null) {
        console.error("me");
        console.error(stacks[relNickContext[relNickContext[_nick[0]]]][0]);
        tempStack.unshift(stacks[relNickContext[relNickContext[_nick[0]]]][0]);
      }
      if (_constanteSpecial.you != null && oneConstante && _output == null) {
        console.error("you");
        console.error(_assignCommand);
        console.error(stacks[relNickContext[_nick[0]]][0]);
        tempStack.unshift(stacks[relNickContext[_nick[0]]][0]);
      }
      if (_constanteSpecial.nick != null) {
        console.error("nick");
        let n = "<" + _constanteSpecial.nick[0].match(regexHelper.context)[0].replace(/[*]/g, "") + ">";
        console.error(n);
        console.error(stacks[n][0]);
        tempStack.unshift(stacks[n][0]);
      }
      if (_constante != null) {
        let _constanteData;
        console.error(_constante);
        while ((_constanteData = regexHelper.constante.exec(line))) {
          let data = _constanteData[1].replace(/[,]/, "").split(" ");
          console.error(data);
          let value = 0;
          for (let i = 0; i < data.length; i++) {
            if (data[i] != "" && data[i].toUpperCase() != "A" && data[i].toUpperCase() != "AN") {
              value++;
            }
          }
          value = Math.pow(2, value) * (goodNouns.includes(_constanteData[2]) ? 1 : -1);
          tempStack.unshift(value);
        }
        console.error(tempStack);
      }
      if (_stackCommands.listen != null) {
        stacks[relNickContext[_nick]].unshift(stacks[relNickContext[_nick]][0]);
      }
      if (_stackCommands.forget != null) {
        stacks[relNickContext[_nick]].shift();
      }
      if (_stackCommands.flip != null) {
        let temps = stacks[relNickContext[_nick]][0];
        stacks[relNickContext[_nick]][0] = stacks[relNickContext[_nick]][1];
        stacks[relNickContext[_nick]][1] = temps;
      }
      if (_constanteArithmetic.square != null) {
        let t = tempStack.pop();
        let squared = t * t;
        tempStack.unshift(squared);
      }
      if (_constanteArithmetic.addition != null) {
        let sum = tempStack.pop() + tempStack.pop();
        tempStack.unshift(sum);
      }
      if (_constanteArithmetic.substraction != null) {
        let sub = tempStack.pop() - tempStack.pop();
        tempStack.unshift(sub);
      }
      if (_constanteArithmetic.multiplication != null) {
        let mul = tempStack.pop() * tempStack.pop();
        tempStack.unshift(mul);
      }
      if (_assignCommand != null) {
        for (let i = 0; i < tempStack.length; i++) {
          stacks[relNickContext[_nick]].unshift(tempStack.pop());
        }
      }
      if (_output != null) {
        let output = stacks[relNickContext[_nick]].shift();
        result += output;
      }
    }
    /*console.error('---------------')
        console.error('relNickContext')
        console.error(relNickContext)
        console.error('_nick')
        console.error(_nick[0])
        console.error('stacks')
        console.error('---------------')*/
    console.error("------------");
    console.error(stacks);
    console.error("------------");
  }
}
console.error(stacks);
console.error(regexHelper);
console.log(result);

function buildRegexConstante() {
  let str = "(?:A|AN)\\s+(.*?)(";
  goodNouns.forEach((e) => {
    str += e + "|";
  });
  badNouns.forEach((e) => {
    str += e + "|";
  });
  str = str.substring(0, str.length - 1) + ")";
  return str;
}
