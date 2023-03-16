const { createWriteStream, createReadStream } = require('fs');

async function hui() {
  const stream = createReadStream('some.html', {
    encoding: 'utf-8',
    highWaterMark: 16000,
  });

  stream.on('data', (c) => {
    console.log(c.toString());
    console.log(c.length);
  });

  // for await (const buf of stream) {
  //   console.log(223);
  // }
}
// hui();

const wrightStream = createWriteStream('boo.txt', {
  encoding: 'utf-8',
  highWaterMark: 1,
});
wrightStream.write('some');
wrightStream.write('some2');
wrightStream.write('some3');

wrightStream.on('finish', () => {
  console.log('All writes are now complete.');
});
wrightStream.on('drain', (chunk) => {
  console.log(666, chunk);
});
wrightStream.end('This is the end\n');
// const { finished } = require('stream/promises');
// const { Readable } = require('stream');

// async function hui() {
//   let headersList = {
//     Accept: '*/*',
//     'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
//     'Content-Type': 'application/json',
//   };

//   let bodyContent = JSON.stringify({
//     name: 'ivan',
//     email: 'email',
//   });

//   let response = await fetch('http://localhost:3000/download-pdf', {
//     method: 'POST',
//     body: bodyContent,
//     headers: headersList,
//   });

//   const writeStream = createWriteStream('write.pdf', {
//     encoding: 'utf-8',
//   });

//   const readStream = createReadStream('test.js', {
//     encoding: 'utf-8',
//   });
//   console.log(1);
//   const data = await finished(readStream.pipe(writeStream));
//   console.log(266, data);
// }

// async function dui() {
//   let res = await fetch('http://localhost:3000/get');
//   console.log(await res.body.pipeTo());
// }

// hui();
