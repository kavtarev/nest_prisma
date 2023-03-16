import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioUploadUsecase } from './minio-upload.usecase';

@Controller()
export class MinioUploadController {
  constructor(private readonly appService: MinioUploadUsecase) {}

  @Post('minio-upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile()
    file: any,
  ): Promise<any> {
    const result = await this.appService.uploadFile(file);
    return result;
  }
}
