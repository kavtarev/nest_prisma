import { Controller, Post, StreamableFile } from '@nestjs/common';
import { DownloadXlsxUsecase } from './download-xlsx.usecase';

import * as XLSX from 'xlsx';

@Controller()
export class DownloadXlsxController {
  constructor(private usecase: DownloadXlsxUsecase) {}

  @Post('download-xlsx')
  async execute() {
    const sheet = XLSX.utils.json_to_sheet([
      { lines: 56, shmines: 66 },
      { lines: 5126, shmines: 644 },
      { lines: 51236, shmines: 6436 },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, 'Результаты');
    XLSX.write(workbook, { type: 'buffer' });

    return new StreamableFile(XLSX.write(workbook, { type: 'buffer' }), {
      disposition: `attachment; filename="hui.xlsx"`,
      length: XLSX.write(workbook, { type: 'buffer' }).length,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  }
}
