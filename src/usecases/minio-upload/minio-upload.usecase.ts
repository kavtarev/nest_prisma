import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class MinioUploadUsecase {
  private s3Service: S3Service;

  constructor() {
    this.s3Service = new S3Service();
  }

  async uploadFile(file: any): Promise<any> {
    return this.s3Service.upload(file);
  }
}