import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class MinioUploadUsecase {
  constructor(private s3Service: S3Service) {
    this.s3Service = new S3Service();
  }

  async uploadFile(file: any) {
    return this.s3Service.upload(file);
  }
}
