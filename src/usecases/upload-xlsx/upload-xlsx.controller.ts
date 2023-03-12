import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileSizeValidationPipe } from 'src/pipes/file-size-validation.pipe';
import { MimeTypeValidationPipe } from 'src/pipes/mime-type-validation.pipe';
import * as XLSX from 'xlsx';
import { UploadXlsxUsecase } from './upload-xlsx.usecase';

@Controller()
export class UploadXlsxController {
  constructor(private usecase: UploadXlsxUsecase) {}

  @Post('upload-xlsx')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new FileSizeValidationPipe(100_000),
      new MimeTypeValidationPipe([
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ]),
    )
    file: any,
  ) {
    const workbook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
    });
    const sheetName = workbook.SheetNames.at(0);
    console.log(3333, XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]));
  }
}
