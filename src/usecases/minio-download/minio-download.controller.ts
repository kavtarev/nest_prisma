import { Controller, Post } from '@nestjs/common';
import { MinioDownloadUsecase } from './minio-download.usecase';

@Controller()
export class MinioDownloadController {
  constructor(private readonly appService: MinioDownloadUsecase) {}

  @Post('minio-download')
  async downloadFile(): Promise<any> {
    const result = await this.appService.downloadFile();
    return result;
  }
}
