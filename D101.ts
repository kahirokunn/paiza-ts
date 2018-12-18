function PaizaInputer(callback: (line: string) => void) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).on('line', callback);
}

PaizaInputer((line) => {
  const [number1, number2] = line.split(' ').map(stringNumber => Number(stringNumber))
  const result = [
    number1 % 2 === 0,
    number2 % 2 === 0
  ]
  if (result[0] !== result[1]) {
    console.log('YES')
  } else {
    console.log('NO')
  }
})
