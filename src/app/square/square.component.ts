import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {

  backgroundColor: string = '#ffffff';

  changeBackgroundColor(color: string): void {
    this.backgroundColor = color;
  }

}
