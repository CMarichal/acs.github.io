import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from 'model/stats';

@Pipe({
  name: 'modifier'
})
export class ModifierPipe implements PipeTransform {

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
