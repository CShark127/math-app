import { ChangeDetectionStrategy, Component } from '@angular/core';

const randomIntBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'math-app';

  protected currentColor: 'COLOR_ONE' | 'COLOR_TWO' = 'COLOR_ONE';
  protected firstNumber!: number;
  protected secondNumber!: number;

  protected cells = [
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
    { id: 9, value: '' },
    { id: 10, value: '' },
    { id: 11, value: '' },
    { id: 12, value: '' },
    { id: 13, value: '' },
    { id: 14, value: '' },
    { id: 15, value: '' },
    { id: 16, value: '' },
    { id: 17, value: '' },
    { id: 18, value: '' },
    { id: 19, value: '' },
  ];

  constructor() {
    this.generateNumbers();
  }

  protected generateNumbers() {
    this.firstNumber = randomIntBetween(1, 20);
    this.secondNumber = randomIntBetween(0, 20 - this.firstNumber);
  }

  protected toggleCell(id: number) {
    if (this.cells[id].value === this.currentColor) {
      this.cells[id].value = '';
    } else {
      this.cells[id].value = this.currentColor;
    }
  }

  protected switchColor() {
    this.currentColor =
      this.currentColor === 'COLOR_ONE' ? 'COLOR_TWO' : 'COLOR_ONE';
  }

  protected reset() {
    this.cells.forEach((cell) => (cell.value = ''));
    this.generateNumbers();
  }
}
