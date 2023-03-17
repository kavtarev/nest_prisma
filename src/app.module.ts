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
import { UploadCsvUsecase } from './usecases/upload-csv/upload-csv.usecase';
import { UploadCsvController } from './usecases/upload-csv/upload-csv.controller';
import { MinioUploadUsecase } from './usecases/minio-upload/minio-upload.usecase';
import { MinioUploadController } from './usecases/minio-upload/minio-upload.controller';
import { MinioDownloadController } from './usecases/minio-download/minio-download.controller';
import { MinioDownloadUsecase } from './usecases/minio-download/minio-download.usecase';
import { S3Service } from './s3/s3.service';
import { MinioUploadStreamController } from './usecases/minio-upload-stream/minio-upload-stream.controller';
import { MinioUploadStreamUsecase } from './usecases/minio-upload-stream/minio-upload-stream.usecase';

@Module({
  imports: [],
  controllers: [
    AppController,
    DownloadDocxController,
    DownloadPdfController,
    DownloadXlsxController,
    UploadXlsxController,
    UploadCsvController,
    MinioUploadController,
    MinioDownloadController,
    MinioUploadStreamController,
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
    UploadCsvUsecase,
    MinioUploadUsecase,
    MinioDownloadUsecase,
    MinioUploadStreamUsecase,
    S3Service,
  ],
})
export class AppModule {}
