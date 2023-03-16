const { Readable, Writable } = require('stream');
const { appendFile } = require('fs/promises');

class myReadable extends Readable {
  max = 10;
  index = 0;

  constructor(props) {
    super(props);
  }

  _read() {
    this.index += 1;
    if (this.index > this.max) {
      this.push(null);
    } else {
      const buf = Buffer.from(`${this.index}`, 'utf8');
      let res = this.push(buf);

      console.log(`current index ${this.index}, push ${res}`);
    }
  }
}

async function hui() {
  const readable = new myReadable({ highWaterMark: 2 });

  readable.on('data', (chunk) => {
    console.log(chunk.toString());
  });
}

hui();
console.log(`Received: ${readable.read().toString()}`);

class myWritable extends Writable {
  async _write(chunk, cod, cb) {
    await appendFile('some.txt', chunk.toString());
    cb();
  }
}

const writable = new myWritable({ highWaterMark: 2 });

readable.pipe(writable);
