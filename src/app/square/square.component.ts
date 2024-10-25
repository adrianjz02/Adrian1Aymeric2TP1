import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Output() colorChange = new EventEmitter<string>();

  changeBackgroundColor(color: string): void {
    this.colorChange.emit(color);
  }

}
