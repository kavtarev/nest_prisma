import { Module } from '@nestjs/common';
import { AppController } from './nest-default-prisma/app.controller';
import { AppService } from './app.service';
import { PostService } from './nest-default-prisma/post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './nest-default-prisma/user.service';
import { DownloadDocxController } from './download-docx/download-docx.controller';
import { DownloadDocxUsecase } from './download-docx/download-docx.usecase';
import { DownloadPdfController } from './download-pdf/download-pdf.controller';
import { DownloadPdfUsecase } from './download-pdf/download-pdf.usecase';
import { DownloadXlsxUsecase } from './download-xlsx/download-xlsx.usecase';
import { DownloadXlsxController } from './download-xlsx/download-xlsx.controller';
import { UploadXlsxController } from './upload-xlsx/upload-xlsx.controller';
import { UploadXlsxUsecase } from './upload-xlsx/upload-xlsx.usecase';

@Module({
  imports: [],
  controllers: [
    AppController,
    DownloadDocxController,
    DownloadPdfController,
    DownloadXlsxController,
    UploadXlsxController,
  ],
  providers: [
    AppService,
    PostService,
    UserService,
    PrismaService,
    DownloadDocxUsecase,
    DownloadPdfUsecase,
    DownloadXlsxUsecase,
    UploadXlsxUsecase,
  ],
})
export class AppModule {}
