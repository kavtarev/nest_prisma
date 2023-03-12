import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadDocxUsecase } from './download-docx.usecase';

import stream from 'stream';

import { Document, Packer, Paragraph, TextRun } from 'docx';

@Controller()
export class DownloadDocxController {
  constructor(private usecase: DownloadDocxUsecase) {}

  @Post('download-docx')
  async execute() {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun('Hello World'),
                new TextRun({
                  text: 'Foo Bar',
                  bold: true,
                }),
                new TextRun({
                  text: '\tGithub is the best',
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    return new StreamableFile(Packer.toStream(doc) as stream.Readable, {
      disposition: `attachment; filename="report.docx"`,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
  }
}
