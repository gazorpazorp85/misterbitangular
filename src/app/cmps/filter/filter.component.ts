import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  @Output() onFilter = new EventEmitter<KeyboardEvent>()
  
  constructor() { }
  onFilterChange(event){
    this.onFilter.emit(event);
  }
  
  ngOnInit(): void {
  }

}
