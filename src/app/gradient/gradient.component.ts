import { Component } from '@angular/core';
@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent {
  selectedOption: string = '';
  selectedShape: string = '';
  color1: string = '';
  color2: string = '';
  selectedColor: string = '';
  degree: string = '';

  options: any[] = [
    { id: 1, name: 'Linear Gradient' },
    { id: 2, name: 'Conic Gradient' },
    { id: 3, name: 'Radial Gradient' },
    { id: 4, name: 'Repeating Linear Gradient' }
  ];

  shapes: any[] = [
    { id: 1, name: 'circle' },
    { id: 2, name: 'ellipse' },
    { id: 3, name: 'closest-side' },
    { id: 4, name: 'closest-corner' },
    { id: 4, name: 'farthest-side' },
    { id: 4, name: 'farthest-corner' }
  ];

  shapeVisible: boolean = false;

  onSelect(option: any) {
    this.selectedOption = option.value;
    this.shapeVisible = this.selectedOption === 'Radial Gradient';
  }
  onSelectShape(shapes: any) {
    this.selectedShape = shapes.value;
  }
  getLinearGradient(): any {
    debugger
    if (!this.validGradientType) {
      alert('Please select a valid gradient type')
    }
    if (!this.validColor) {
      alert('please select a color');

    }
    if (this.validDegree) {
      alert('please select a degree');
    }

    if ('Linear Gradient' === this.selectedOption) {
      this.selectedColor = `linear-gradient(${this.degree}deg, ${this.color1}, ${this.color2})`;
    } else if (this.selectedOption === 'Repeating Linear Gradient') {
      this.selectedColor = `repeating-linear-gradient(${this.degree}deg, ${this.color1} 40%, ${this.color2} 40%, ${this.color1} 20%, ${this.color2})`;
    }
    else if (this.selectedOption === 'Radial Gradient') {
      this.selectedColor = `radial-gradient(${this.selectedShape}, ${this.color1}, ${this.color2})`;
    } else if (this.selectedOption === 'Conic Gradient') {
      this.selectedColor = `conic-gradient(from ${this.degree}deg, ${this.color1}, ${this.color2})`;
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
    return this.degree !== " ";
  }
}