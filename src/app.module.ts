import { Module } from '@nestjs/common';
import { AppController } from './usecases/nest-default-prisma/app.controller';
import { AppService } from './app.service';
import { PostService } from './usecases/nest-default-prisma/post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './usecases/nest-default-prisma/user.service';
import { DownloadDocxController } from './usecases/download-docx/download-docx.controller';
import { DownloadDocxUsecase } from './usecases/download-docx/download-docx.usecase';
import { DownloadPdfController } from './usecases/download-pdf/download-pdf.controller';
import { DownloadPdfUsecase } from './usecases/download-pdf/download-pdf.usecase';
import { DownloadXlsxUsecase } from './usecases/download-xlsx/download-xlsx.usecase';
import { DownloadXlsxController } from './usecases/download-xlsx/download-xlsx.controller';
import { UploadXlsxController } from './usecases/upload-xlsx/upload-xlsx.controller';
import { UploadXlsxUsecase } from './usecases/upload-xlsx/upload-xlsx.usecase';

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
