import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  constructor(private maxSizeInBytes: number) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (value.size > this.maxSizeInBytes) {
      throw new Error('too big');
    }
    return value;
  }
}
