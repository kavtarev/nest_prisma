import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadDocxUsecase } from './download-docx.usecase';

@Controller()
export class DownloadDocxController {
  constructor(private usecase: DownloadDocxUsecase) {}

  @Post('download-docx')
  async execute() {
    const arch = this.usecase.execute();

    return new StreamableFile(arch.getDocument(), arch.getHeaders().DOCX);
  }
}
