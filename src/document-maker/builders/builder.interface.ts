import stream from 'stream';
import { Colors } from '../helpers/colors';

export interface IBuilder {
  addTitle: (title: string) => IBuilder;
  addDefaultLine: (line: string) => IBuilder;
  addCustomLine: (line: string) => IBuilder;
  addEmptyLine: () => IBuilder;
  setFontSize: (size: number) => IBuilder;
  setColor: (color: Colors) => IBuilder;
  setFont: (font: string) => IBuilder;
  build: () => void;
  getDocument: () => stream.Readable;
}
