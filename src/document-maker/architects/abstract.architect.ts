import stream from 'stream';
import { IBuilder } from '../builders/builder.interface';
import { IArchitect } from './architect.interface';

export abstract class AbstractArchitect implements IArchitect {
  protected builder: IBuilder;

  setBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  build() {
    this.builder.build();
  }

  getDocument() {
    return this.builder.getDocument() as unknown as stream.Readable;
  }
}
