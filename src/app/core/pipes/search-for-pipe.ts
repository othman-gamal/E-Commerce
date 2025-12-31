import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFor',
})
export class SearchForPipe implements PipeTransform {

  transform(arrayofObject:any[], searchTerm:string): any[] {
    
    
    return arrayofObject.filter((item)=>item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
