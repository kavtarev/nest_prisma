import { Controller, Post, StreamableFile } from '@nestjs/common';
import stream from 'stream';
import { MinioDownloadUsecase } from './minio-download.usecase';
@Controller()
export class MinioDownloadController {
  constructor(private readonly appService: MinioDownloadUsecase) {}

  @Post('minio-download')
  async downloadFile(): Promise<any> {
    const result = await this.appService.downloadFile();

    return new StreamableFile(result as unknown as stream.Readable, {
      type: 'text/plain',
      disposition: `attachment; filename="result.txt"`,
    });
  }
}
