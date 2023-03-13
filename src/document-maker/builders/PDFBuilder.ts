import { IBuilder } from './builder.interface';
import * as PDFDocument from 'pdfkit';
import stream from 'stream';
import { Colors } from '../helpers/colors';

export class PDFBuilder implements IBuilder {
  doc = new PDFDocument();

  addTitle(title: string) {
    this.doc
      .fontSize(25)
      .fillColor(Colors.DARK_BLUE)
      .font('Helvetica-BoldOblique')
      .text(title);
    return this;
  }

  addDefaultLine(line: string) {
    this.doc.fontSize(15).fillColor(Colors.GREY).font('Times-Roman').text(line);
    return this;
  }

  addCustomLine(line: string) {
    this.doc.text(line);
    return this;
  }

  addEmptyLine() {
    this.doc.text(' ');
    return this;
  }

  setFontSize(size: number) {
    this.doc.fontSize(size);
    return this;
  }

  setColor(color: Colors) {
    this.doc.fillColor(color);
    return this;
  }

  setFont(font: string) {
    this.doc.font(font);
    return this;
  }

  build() {
    this.doc.end();
  }

  getDocument() {
    return this.doc as unknown as stream.Readable;
  }
}
