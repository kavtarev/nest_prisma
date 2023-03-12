import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadPdfUsecase } from './download-pdf.usecase';

import * as PDFDocument from 'pdfkit';
import stream from 'stream';

@Controller()
export class DownloadPdfController {
  constructor(private usecase: DownloadPdfUsecase) {}

  @Post('download-pdf')
  async execute() {
    const doc = new PDFDocument();

    doc.fontSize(25).text('Some text with an embedded font!', 100, 100);

    doc.end();

    return new StreamableFile(doc as unknown as stream.Readable, {
      type: 'application/pdf',
      disposition: `attachment; filename="report.docx"`,
    });
  }
}
