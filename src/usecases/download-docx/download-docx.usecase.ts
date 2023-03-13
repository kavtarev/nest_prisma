import { Injectable } from '@nestjs/common';
import { UserArchitect } from 'src/document-maker/architects/user-architect';
import { DOCXBuilder } from 'src/document-maker/builders/DOCXBuilder';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class DownloadDocxUsecase {
  constructor(private prisma: PrismaService) {}

  execute() {
    const architect = new UserArchitect({
      name: 'IVAN',
      email: 'SOME@Mail.ru',
    });
    architect.setBuilder(new DOCXBuilder());
    architect.build();
    return architect;
  }
}
