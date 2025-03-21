import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (!value || !gender) return value;
    
    if(gender.toLowerCase()=="male")
      return "Mr. "+value;
      else
      return "Miss. "+value
    }

}
