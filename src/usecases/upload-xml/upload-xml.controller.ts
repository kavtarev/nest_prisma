import { Controller } from '@nestjs/common';

@Controller()
export class UploadXmlController {
  constructor(private readonly usecase: UploadXmlController) {}

  async execute() {
    const result = await this.usecase.execute();
  }
}
