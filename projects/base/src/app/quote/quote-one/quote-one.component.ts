import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'base-quote-one',
  templateUrl: './quote-one.component.html',
  styleUrls: ['./quote-one.component.less']
})
export class QuoteOneComponent implements OnInit {
  @Input() inputValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
