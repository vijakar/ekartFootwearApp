import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outofStock:number=0;

  @Output()
  selectedFilteredRadioButtonChanged: EventEmitter<string>= new EventEmitter<string>();
selectedFilteredRadioButton:string='all'

  onselectedFilteredRadioButtonChanged(){
    this.selectedFilteredRadioButtonChanged.emit(this.selectedFilteredRadioButton)
  }
}
