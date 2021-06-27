import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beginWith'
})
export class BeginWithPipe implements PipeTransform {

  transform(value: string, beginWith: string): boolean {
    if (value.startsWith(beginWith))
    return null;
  }

}
