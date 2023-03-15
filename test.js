const { createWriteStream, createReadStream } = require('fs');
const { finished } = require('stream/promises');
const { Readable } = require('stream');

async function hui() {
  let headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Content-Type': 'application/json',
  };

  let bodyContent = JSON.stringify({
    name: 'ivan',
    email: 'email',
  });

  let response = await fetch('http://localhost:3000/download-pdf', {
    method: 'POST',
    body: bodyContent,
    headers: headersList,
  });

  const writeStream = createWriteStream('write.pdf', {
    encoding: 'utf-8',
  });

  const readStream = createReadStream('test.js', {
    encoding: 'utf-8',
  });
  console.log(1);
  const data = await finished(readStream.pipe(writeStream));
  console.log(266, data);
}

async function dui() {
  let res = await fetch('http://localhost:3000/get');
  console.log(await res.body.pipeTo());
}

hui();
