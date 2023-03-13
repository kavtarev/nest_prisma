import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UploadCsvUsecase } from './upload-csv.usecase';
import { appendFile } from 'fs/promises';

@Controller()
export class UploadCsvController {
  constructor(private usecase: UploadCsvUsecase) {}

  @Post('upload-csv')
  execute(@Req() req: Request) {
    console.log(222, req.readableHighWaterMark);

    req.on('data', async (chunk: Buffer) => {
      console.log(444444);

      await appendFile('du.csv', chunk, 'utf-8');
    });
  }
}
