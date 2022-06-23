import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() itemElem : {type: string, title: string};
  constructor() { }

  ngOnInit(): void {
  }

}
