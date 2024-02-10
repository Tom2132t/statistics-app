import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return date.toLocaleDateString();
  }
}
