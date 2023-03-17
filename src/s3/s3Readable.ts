import { S3 } from 'aws-sdk';
import { Readable, ReadableOptions } from 'stream';

export class S3Readable extends Readable {
  s3instance: S3;
  bucketOpts: S3.GetObjectRequest;
  length: number;
  highWaterMark: number;
  current = 0;

  constructor({
    s3,
    length,
    bucketOpts,
    opts,
    highWaterMark,
  }: {
    s3: S3;
    length: number;
    bucketOpts: S3.GetObjectRequest;
    opts: ReadableOptions;
    highWaterMark: number;
  }) {
    super({ ...opts, highWaterMark });
    this.s3instance = s3;
    this.bucketOpts = bucketOpts;
    this.length = length;
    this.highWaterMark = highWaterMark;
  }

  async _read() {
    if (this.current >= this.length) {
      this.push(null);
      return;
    }

    const params = {
      Bucket: this.bucketOpts.Bucket,
      Key: this.bucketOpts.Key,
      Range: `bytes=${this.current}-${this.current + this.highWaterMark - 1}`,
    };

    const bytes = await this.s3instance.getObject(params).createReadStream();

    bytes.on('data', (chunk) => {
      this.push(chunk);
    });

    bytes.on('error', () => {
      this.destroy();
    });

    this.current += this.highWaterMark;
  }
}
