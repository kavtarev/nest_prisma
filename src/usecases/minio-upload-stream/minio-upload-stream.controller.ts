import { Controller, Post, Req } from '@nestjs/common';
import { MinioUploadStreamUsecase } from './minio-upload-stream.usecase';
import { Request } from 'express';

@Controller()
export class MinioUploadStreamController {
  constructor(private readonly appService: MinioUploadStreamUsecase) {}

  @Post('minio-upload-stream')
  async uploadFile(
    @Req()
    req: Request,
  ): Promise<any> {
    const result = await this.appService.uploadFile(req);
    return result;
  }
}
