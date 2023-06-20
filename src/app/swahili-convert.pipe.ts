import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahiliConvert'
})
export class SwahiliConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.toLowerCase().split(' ').includes('fast')) return value.toLowerCase().replace('fast', 'haraka');
    else if (value.toLowerCase().split(' ').includes('family')) return value.toLowerCase().replace('family', 'familia');
    else if (value.toLowerCase().split(' ').includes('ring')) return value.toLowerCase().replace('ring', 'pete');
    else return value;
  }

}
