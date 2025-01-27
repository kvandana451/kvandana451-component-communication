import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() inpMsg?: string;
  @Output() infoEvent = new EventEmitter<string>();
  sendInfo() {
    this.infoEvent.emit('Hey,I am sending data from child to parent');
  }
  ngOnInit() {
    console.log(this.inpMsg);
  }
}
