import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayModifier'
})
export class DisplayModifierPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 0)
    {
      return "- "+(-value);
    }
    else if (value > 0)
    {
      return "+ "+value;
    }
    return "-";
  }

}
