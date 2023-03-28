const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
var ExtMT = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const EXT = inputs[0]; // file extension
  const MT = inputs[1]; // MIME type.
  ExtMT.push({
    ext: EXT.toUpperCase(),
    mt: MT,
  });
}
for (let i = 0; i < Q; i++) {
  const FNAME = readline(); // One file name per line.
  let FSplit = FNAME.split(".");
  if (FSplit.length > 1) {
    console.log(getMT(FSplit[FSplit.length - 1].toUpperCase()));
  } else {
    console.log("UNKNOWN");
  }
}
function getMT(ext) {
  for (let i = 0; i < ExtMT.length; i++) {
    if (ExtMT[i].ext == ext) {
      return ExtMT[i].mt;
    }
  }
  return "UNKNOWN";
}
