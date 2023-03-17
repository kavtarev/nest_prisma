import { Injectable } from '@nestjs/common';
import { parseString } from 'xml2js';

@Injectable()
export class UploadXmlUsecase {
  async execute(xml: string) {
    parseString(xml, (err, data) => {
      if (err) {
        console.log(44444, err);
      }
      console.log(data);
    });
  }
}
