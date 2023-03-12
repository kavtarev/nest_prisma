import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class MimeTypeValidationPipe implements PipeTransform {
  constructor(private allowedTypes: string[]) {}

  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.allowedTypes.includes(value.mimetype)) {
      throw new Error('wrong type');
    }

    return value;
  }
}
