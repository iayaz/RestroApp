import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @Output() selected = new EventEmitter<string>();
  @Output() searched = new EventEmitter<string>();
  searchText: string = '';

  Filter(type: string){
    console.log(type)
    this.selected.emit(type);
  }
}
