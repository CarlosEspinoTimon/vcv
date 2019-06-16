import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'professionalExperienceCurrentJob'
})
export class ProfessionalExperienceCurrentJobPipe implements PipeTransform {

  transform(value: string): any {
      if (value == 'Jan, 1970') {
          return 'Currently working'
      }
      return value;
  }

}
