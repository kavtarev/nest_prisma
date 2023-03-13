import stream from 'stream';

export interface IBuilder {
  addTitle: (title: string) => IBuilder;
  addDefaultLine: (line: string) => IBuilder;
  addCustomLine: (line: string) => IBuilder;
  addEmptyLine: () => IBuilder;
  setFontSize: (size: number) => IBuilder;
  setColor: (color: string) => IBuilder;
  setFont: (font: string) => IBuilder;
  build: () => void;
  getDocument: () => stream.Readable;
}
