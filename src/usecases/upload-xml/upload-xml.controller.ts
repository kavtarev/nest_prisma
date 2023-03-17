import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { createWriteStream } from 'fs';
import { UploadXmlUsecase } from './upload.xml.usecase';
@Controller()
export class UploadXmlController {
  constructor(private readonly usecase: UploadXmlUsecase) {}

  @Post('upload-xml')
  @UseInterceptors(FileInterceptor('file'))
  async execute(
    @UploadedFile()
    file: any,
  ) {
    // const chunks: Buffer[] = [];

    // for await (const ch of req) {
    //   chunks.push(ch.toString());
    // }

    this.usecase.execute(file.buffer.toString());
  }
}
