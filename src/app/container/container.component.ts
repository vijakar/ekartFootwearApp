import { Component } from '@angular/core';

@Component({
  selector: 'container-list',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText:string=''

  onSearchText(value:string){
    this.searchText=value
  }
}
