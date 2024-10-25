import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  changeBackgroundColor(color: string): void {
    document.body.style.backgroundColor = color;
  }

}
