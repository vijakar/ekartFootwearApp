import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText: string = '';

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  onSearchText(){
    this.searchTextChanged.emit(this.searchText)
  }

}
