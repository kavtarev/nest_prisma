import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { createWriteStream } from 'fs';
import { UploadXmlUsecase } from './upload.xml.usecase';
@Controller()
export class UploadXmlController {
  constructor(private readonly usecase: UploadXmlUsecase) {}

  @Post('upload-xml')
  async execute(@Req() req: Request) {
    const chunks: Buffer[] = [];

    for await (const ch of req) {
      chunks.push(ch.toString());
    }

    this.usecase.execute(chunks.join(''));
  }
}
