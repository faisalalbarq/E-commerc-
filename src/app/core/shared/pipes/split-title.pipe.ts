import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitTitle'
})
export class SplitTitlePipe implements PipeTransform {

  transform(text: string, start: number, end: number): string {
    return text.split(' ').slice(start, end).join();
  }

}
