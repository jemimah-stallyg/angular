import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { features } from 'process';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
    
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
