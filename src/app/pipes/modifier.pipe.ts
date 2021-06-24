import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from 'model/stats';

@Pipe({
  name: 'modifier'
})
export class ModifierPipe implements PipeTransform {

  transform(skill: Skill): number {
    if (skill.expert) {
      return skill.modifier + 10;
    }
  }

}
