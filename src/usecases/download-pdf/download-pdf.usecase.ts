import { Injectable } from '@nestjs/common';
import { UserArchitect } from './../../document-maker/architects/user-architect';
import { PDFBuilder } from './../../document-maker/builders/PDFBuilder';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DownloadPdfUsecase {
  constructor(private prisma: PrismaService) {}

  execute() {
    const architect = new UserArchitect({
      name: 'IVAN',
      email: 'SOME@Mail.ru',
    });
    architect.setBuilder(new PDFBuilder());
    architect.build();
    return architect;
  }
}
