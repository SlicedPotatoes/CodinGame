[dir, nbArrow, heightArrow, weightArrow, spaceBetween, indentOfLine] = readline().split(" ");

const str = ((dir == "right" ? ">" : "<").repeat(weightArrow) + " ".repeat(spaceBetween)).repeat(nbArrow).trimEnd();

for (let i = 0; i < heightArrow; i++) {
  let indent = dir == "right" ? indentOfLine * i : ((heightArrow - 1) / 2) * indentOfLine - i * indentOfLine;
  if (i > heightArrow / 2) {
    indent = dir == "right" ? ((heightArrow - 1) / 2) * indentOfLine - (i - (heightArrow - 1) / 2) * indentOfLine : indentOfLine * (i - (heightArrow - 1) / 2);
  }
  console.log(" ".repeat(indent) + str);
}
