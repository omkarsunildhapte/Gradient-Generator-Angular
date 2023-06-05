import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDegree]'
})
export class DegreeDirective {

  constructor() { }
  key: number | undefined;
  @HostListener('keydown', ['$event'])
  inputvalue(event: KeyboardEvent) {
    // const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    // const keyCode = event.keyCode || event.which;
    // const key = String.fromCharCode(keyCode);

    // if (!/^\d+$/.test(key)) {
    //   event.preventDefault();
    // }
    // if (key === 'Backspace') {
    //   (this.degree).toString().slice(-1);
    // }
  }
}
