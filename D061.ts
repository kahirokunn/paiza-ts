type Callback = (line: string[]) => void

class WhenQueuedStringLinesExecuteCallbackFunction {
  private lines: string[] = []
  constructor(private callback: Callback, private lineLimit: number) {
  }

  public enqueue(line: string) {
    this.lines.push(line)
    this.hook()
  }

  public hook() {
    if (this.lines.length === this.lineLimit) {
      this.callback(this.lines)
    }
  }
}

function PaizaInputer(callback: Callback, lineLimit: number = 1) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  const queue = new WhenQueuedStringLinesExecuteCallbackFunction(callback, lineLimit)

  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }).on('line', (line: string) => queue.enqueue(line));
}

PaizaInputer((lines: string[]) => {
  const chokoNumber = Number(lines[0])
  if (chokoNumber === 0) {
    console.log(1)
  } else {
    console.log(chokoNumber * 3)
  }
}, 2)
