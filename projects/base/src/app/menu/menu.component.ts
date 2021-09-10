import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'base-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() brandName: string;
  @Input() backgroundColour: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
