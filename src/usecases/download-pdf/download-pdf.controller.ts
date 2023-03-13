import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadPdfUsecase } from './download-pdf.usecase';

@Controller()
export class DownloadPdfController {
  constructor(private usecase: DownloadPdfUsecase) {}

  @Post('download-pdf')
  async execute() {
    const arch = this.usecase.execute();

    return new StreamableFile(arch.getDocument(), arch.getHeaders().PDF);
  }
}
