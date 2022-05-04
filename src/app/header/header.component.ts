import { Component, OnInit, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  featureSelected = new EventEmitter<string>();
  onSelect(feature : String){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
