import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { Request } from 'express';
import { createReadStream, createWriteStream } from 'fs';
import { PassThrough } from 'stream';
import { S3Readable } from './s3Readable';

@Injectable()
export class S3Service {
  s3instance: S3;
  constructor() {
    this.s3instance = new S3({
      accessKeyId: 'minio',
      secretAccessKey: 'minio123',
      endpoint: 'http://127.0.0.1:9000',
      s3ForcePathStyle: true, // needed with minio?
      signatureVersion: 'v4',
    });
  }

  async upload(file: any) {
    await this.checkBucket();

    return this.s3instance
      .upload({
        Bucket: 'test',
        Key: 'test-2',
        Body: file.buffer.toString(),
      })
      .promise();
  }

  async uploadStream(req: Request) {
    await this.checkBucket();
    const pass = new PassThrough();

    const stream = createReadStream('some.html', 'utf-8');
    stream.pipe(pass);
    return this.s3instance
      .upload({
        Bucket: 'test',
        Key: 'test-3',
        Body: pass,
      })
      .promise();
  }

  async download() {
    // {
    //   AcceptRanges: 'bytes',
    //   LastModified: 2023-03-16T19:48:30.000Z,
    //   ContentLength: 558,
    //   ETag: '"09ae7da6241375807166c095746abb17"',
    //   ContentType: 'application/octet-stream',
    //   Metadata: {}
    // }
    const res = await this.s3instance
      .headObject({
        Bucket: 'test',
        Key: 'test-2',
      })
      .promise();

    const readStream = new S3Readable({
      s3: this.s3instance,
      length: res.ContentLength,
      highWaterMark: 100,
      bucketOpts: {
        Bucket: 'test',
        Key: 'test-2',
      },
      opts: {},
    });

    // const writeStream = createWriteStream('boo.txt', { encoding: 'utf-8' });

    // readStream.pipe(writeStream);

    return readStream;
  }

  async checkBucket() {
    try {
      //return {} or throw error
      await this.s3instance.headBucket({ Bucket: 'test' }).promise();
    } catch (e) {
      await this.s3instance.createBucket({ Bucket: 'test' }).promise();
    }
  }
}
