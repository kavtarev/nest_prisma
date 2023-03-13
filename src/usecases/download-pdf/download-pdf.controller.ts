import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadPdfUsecase } from './download-pdf.usecase';

import * as PDFDocument from 'pdfkit';
import stream from 'stream';

@Controller()
export class DownloadPdfController {
  constructor(private usecase: DownloadPdfUsecase) {}

  @Post('download-pdf')
  async execute() {
    const arch = this.usecase.execute();

    return new StreamableFile(arch.getDocument(), {
      type: 'application/pdf',
      disposition: `attachment; filename="report.pdf"`,
    });
  }
}
