import { Component } from '@angular/core';

@Component({
  selector: 'app-mulitple-color-graditent',
  templateUrl: './mulitple-color-graditent.component.html',
  styleUrls: ['./mulitple-color-graditent.component.css']
})
export class MulitpleColorGraditentComponent {
  selectedOption: string = '';
  selectedShape: string = '';
  color1: string = '#051937';
  color2: string = '#A8EB12';
  selectedColor: string = '';
  degree: number = 0;

  options: any[] = [
    { id: 1, name: 'Linear Gradient' },
    { id: 2, name: 'Conic Gradient' },
    { id: 3, name: 'Radial Gradient' },
    { id: 4, name: 'Repeating Linear Gradient' }
  ];

  shapes: any[] = [
    { id: 1, name: 'Circle' },
    { id: 2, name: 'Ellipse' },
    { id: 3, name: 'Closest Side' },
    { id: 4, name: 'Closest Corner' },
    { id: 4, name: 'Farthest Side' },
    { id: 4, name: 'Farthest Corner' }
  ];

  shapeVisible: boolean = false;


  inputFields: { inputColor: string }[] = [];
  addInputField() {
    this.inputFields.push({ inputColor: '' });
  }

  removeInputField(index: number) {
    this.inputFields.splice(index, 1);
  }

  onSelect(option: any) {
    this.selectedOption = option.value;
    this.shapeVisible = this.selectedOption === 'Radial Gradient';
  }
  onSelectShape(shapes: any) {
    this.selectedShape = shapes.value;
  }
  getLinearGradient(): any {
    debugger
    const error: string[] = [];
    if (!this.validGradientType)
      error.push('Please select a valid gradient type')
    if (!this.validColor)
      error.push('Please select a color');
    if (!this.validDegree)
      error.push('Please enter valid a degree in range 0 to 360 degrees');

    else if ('Linear Gradient' === this.selectedOption) {
      const gradientColors = this.inputFields.map(input => input.inputColor);
      this.selectedColor = `linear-gradient(${this.degree}deg, ${this.color1}, ${this.color2} ,${gradientColors})`;
    } else if (this.selectedOption === 'Repeating Linear Gradient') {
      const gradientColors = this.inputFields.map(input => input.inputColor);
      this.selectedColor = `repeating-linear-gradient(${this.degree}deg, ${this.color1} 40%, ${this.color2} 40%, ${this.color1} 20%, ${gradientColors})`;
    }
    else if (this.selectedOption === 'Radial Gradient') {
      const gradientColors = this.inputFields.map(input => input.inputColor);
      this.selectedColor = `radial-gradient(${this.selectedShape}, ${this.color1}, ${this.color2},${gradientColors})`;
    } else if (this.selectedOption === 'Conic Gradient') {
      const gradientColors = this.inputFields.map(input => input.inputColor);
      this.selectedColor = `conic-gradient(from ${this.degree}deg, ${this.color1}, ${this.color2},${gradientColors})`;
    }
  }
  copyValue(value: string) {
    navigator.clipboard.writeText(value)
      .then(() => {
        if (value === '') {
          alert('Somethings is wrong');
        }
        else {
          alert('Value copied successfully!')

        }
      }
      )
      .catch((error) => console.error('Failed to copy value:', error));
  }
  get validColor() {
    return this.color1 !== '' && this.color2 !== '';
  }
  get validGradientType() {
    return this.selectedOption !== '';
  }
  get validDegree() {
    return this.degree !== null && this.degree >= 0 && this.degree <= 360;
  }

}