import { Readable } from 'stream';
import { IBuilder } from '../builders/builder.interface';

export interface IArchitect {
  setBuilder: (builder: IBuilder) => void;
  build: () => void;
  getDocument: () => Readable;
}
