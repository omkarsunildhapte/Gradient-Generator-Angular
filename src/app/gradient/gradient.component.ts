import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent {
  selectedOption!: string;
  selectedShape: string = '';
  color1: string = '#051937';
  color2: string = '#A8EB12';
  selectedColor: string = 'linear-gradient(23deg, #0e6af4, #33eb12)';
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
  constructor(private renderer: Renderer2) {
    this.setBodyBackground();
  }

  onSelect(option: any) {
    debugger
    this.selectedOption = option.value;
  }
  onSelectShape(shapes: any) {
    this.selectedShape = shapes.value;
  }
  getLinearGradient(): any {
    debugger;
    if (!this.validGradientType) {
      alert('Please select a valid gradient type');
    } else if (!this.validColor) {
      alert('Please select a color');
    } else if (!this.validDegree) {
      alert('Please enter a valid degree in the range 0 to 360 degrees');
    } else {
      if (this.selectedOption === 'Linear Gradient') {
        this.selectedColor = `linear-gradient(${this.degree}deg, ${this.color1}, ${this.color2})`;
      } else if (this.selectedOption === 'Repeating Linear Gradient') {
        this.selectedColor = `repeating-linear-gradient(${this.degree}deg, ${this.color1} 40%, ${this.color2} 40%, ${this.color1} 20%, ${this.color2})`;
      } else if (this.selectedOption === 'Radial Gradient') {
        this.selectedColor = `radial-gradient(${this.selectedShape}, ${this.color1}, ${this.color2})`;
      } else if (this.selectedOption === 'Conic Gradient') {
        this.selectedColor = `conic-gradient(from ${this.degree}deg, ${this.color1}, ${this.color2})`;
      }
      this.setBodyBackground();
    }
  }
  setBodyBackground() {
    this.renderer.setStyle(document.body, 'background', this.selectedColor);
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