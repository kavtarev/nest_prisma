import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DownloadDocxUsecase {
  constructor(private prisma: PrismaService) {}

  execute() {
    return 23;
  }
}
