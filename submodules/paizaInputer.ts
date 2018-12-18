function PaizaInputer(callback: (line: string) => void) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).on('line', callback);
}

export default PaizaInputer
