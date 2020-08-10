import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital'
})

// Pipe that do all paragraphs to start with capital letter
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string, ...args: any[]): unknown {
    const trimmed = value.trim(); //delete all spaces
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }
}
