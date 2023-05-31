import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent {
  selectedOption: string = '';
  color1: string = '#ffffff';
  color2: string = '#ffffff';
  selectedColor: string = '';
  degree: string = '';

  options = [
    { id: 1, name: 'Linear Gradient' },
    { id: 2, name: 'Conic Gradient' },
    { id: 3, name: 'Radial Gradient' },
    { id: 4, name: 'Repeating Linear Gradient' }
  ];

  shapes = [
    { id: 1, name: 'circle' },
    { id: 2, name: 'ellipse' },
    { id: 3, name: 'closest-side' },
    { id: 4, name: 'closest-corner' },
    { id: 4, name: 'farthest-side' },
    { id: 4, name: 'farthest-corner' }
  ];
  onSelect(option: any) {
    this.selectedOption = option.name;
  }
  getLinearGradient() {
    this.selectedColor = `linear-gradient(${this.degree}deg, ${this.color1}, ${this.color2})`;
  }


}
