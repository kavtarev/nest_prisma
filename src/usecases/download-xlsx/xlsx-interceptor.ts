import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  StreamableFile,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as XLSX from 'xlsx';

@Injectable()
export class XLSXInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((res) => this.makeDoc(res)));
  }

  makeDoc(res: Record<string, any>[]) {
    const sheet = XLSX.utils.json_to_sheet(res);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, sheet, 'Результаты');
    XLSX.write(workbook, { type: 'buffer' });

    return new StreamableFile(XLSX.write(workbook, { type: 'buffer' }), {
      disposition: `attachment; filename="hui.xlsx"`,
      length: XLSX.write(workbook, { type: 'buffer' }).length,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  }
}
