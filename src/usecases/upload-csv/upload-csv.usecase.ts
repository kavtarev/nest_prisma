import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UploadCsvUsecase {
  constructor(private prisma: PrismaService) {}

  execute() {
    return 23;
  }
}
