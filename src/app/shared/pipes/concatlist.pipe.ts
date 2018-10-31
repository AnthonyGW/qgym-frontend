import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'concatlist',
})
export class ConcatlistPipe implements PipeTransform {
  transform(value: Array<any>, field: string, limit?: number): any {
    if (value == null || value.length <= 1) {
      return value[0][field]
    }
    if (!isNaN(limit)) {
      return value.slice(0, limit).reduce((acc, currentElem, index) => {
        if (index === limit - 1) {
          return acc + currentElem[field] + '...'
        } else {
          return acc + currentElem[field] + ', '
        }
      }, '')
    }
    return value.map(element =>
      element[field].reduce((acc, currentElem) => {
        return acc + currentElem[field] + ', '
      }, '')
    )
  }
}
