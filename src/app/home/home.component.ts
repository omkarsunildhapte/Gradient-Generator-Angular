import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userColor: string = '';
  generatedColors: string[] = [];

  generateRandomColors(): void {
    this.generatedColors = [];
    for (let i = 0; i < 50; i++) {
      const randomColor = this.getRandomColor();
      this.generatedColors.push(this.userColor ? `${this.userColor}'s Color: ${randomColor}` : `Random Color: ${randomColor}`);
    }
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
