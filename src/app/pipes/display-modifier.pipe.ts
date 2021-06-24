import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayModifier'
})
export class DisplayModifierPipe implements PipeTransform {

  transform(value: number): string {
    return ""
  }

}
