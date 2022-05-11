import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTransform'
})
export class PipeTransformPipe implements PipeTransform {

  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
