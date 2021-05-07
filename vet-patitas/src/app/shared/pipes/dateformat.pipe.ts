import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DateformatPipe implements PipeTransform {
  final:any;
  transform(value: string): any {
    this.final = value.split("T", 1);
    return this.final;
  }

}