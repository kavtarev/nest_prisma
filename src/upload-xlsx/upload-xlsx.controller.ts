import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadXlsxUsecase } from './upload-xlsx.usecase';
import * as XLSX from 'xlsx';

@Controller()
export class UploadXlsxController {
  constructor(private usecase: UploadXlsxUsecase) {}

  @Post('upload-xlsx')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: any) {
    const workbook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
    });
    const sheetName = workbook.SheetNames.at(0);
    console.log(3333, XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]));
  }
}
