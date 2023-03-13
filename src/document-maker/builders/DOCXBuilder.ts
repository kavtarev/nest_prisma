import { IBuilder } from './builder.interface';
import { Document, Packer, Paragraph, TextRun } from 'docx';

import stream from 'stream';
import { Colors } from '../helpers/colors';

export class DOCXBuilder implements IBuilder {
  doc: Document;
  children: any[] = [];
  font = 'Helvetica-BoldOblique';
  color = Colors.GREY;
  fontSize = 15;

  addTitle(title: string) {
    this.children.push(
      new TextRun({
        text: title,
        font: this.font,
        size: this.fontSize + 10,
        color: Colors.DARK_BLUE,
        bold: true,
      }),
    );
    return this;
  }

  addDefaultLine(line: string) {
    this.children.push(
      new TextRun({
        text: line,
        font: this.font,
        size: this.fontSize,
        color: this.color,
      }),
    );
    return this;
  }

  addCustomLine(line: string) {
    return this.addDefaultLine(line);
  }

  addEmptyLine() {
    this.children.push(
      new TextRun({
        text: '',
        break: 1,
      }),
    );
    return this;
  }

  setFontSize(size: number) {
    this.fontSize = size;
    return this;
  }

  setColor(color: Colors) {
    this.color = color;
    return this;
  }

  setFont(font: string) {
    this.font = font;
    return this;
  }

  build() {
    const paragraph = new Paragraph({ children: this.children });
    this.doc = new Document({ sections: [{ children: [paragraph] }] });
  }

  getDocument() {
    return Packer.toStream(this.doc) as stream.Readable;
  }
}
