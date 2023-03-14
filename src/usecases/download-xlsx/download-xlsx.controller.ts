import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { DownloadXlsxUsecase } from './download-xlsx.usecase';

import { XLSXInterceptor } from './xlsx-interceptor';

@Controller()
export class DownloadXlsxController {
  constructor(private usecase: DownloadXlsxUsecase) {}

  @UseInterceptors(XLSXInterceptor)
  @Post('download-xlsx')
  async execute() {
    return [1, 4, 6].map(() => ({
      'Имя маркера': 'name',
      'Процент срабатывания': 'stats.triggerPercentage.toString()',
      'Количество сработанных раз': 'stats.amountOfTriggers',
      'Количество запущенных раз': 'stats.amountOfRuns',
    }));
  }
}
