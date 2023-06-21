import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swahiliConvert'
})
export class SwahiliConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (
        value.toLowerCase().split(' ').includes('fast') ||
        value.toLowerCase().split(' ').includes('family') ||
        value.toLowerCase().split(' ').includes('ring')
        ){
        const replacement: string[] = value.toLowerCase().split(' ');
        replacement.forEach((word, idx) => {
            if (word === 'fast') {
                replacement.splice(idx, 1, 'haraka');
            }
            if (word === 'family') {
                replacement.splice(idx, 1, 'familia');
            }
            if (word === 'ring') {
                replacement.splice(idx, 1, 'pete');
            }
        })
        return replacement.join(' ');
    }
    else return value;
  }

}
