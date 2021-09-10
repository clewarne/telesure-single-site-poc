import { Component, OnInit } from '@angular/core';
import { QuoteTwoComponent as BaseComponent } from 'projects/base/src/app/quote-two/quote-two.component';

@Component({
  templateUrl: './quote-two.component.html',
  styleUrls: ['./quote-two.component.less']
})
export class QuoteTwoComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
