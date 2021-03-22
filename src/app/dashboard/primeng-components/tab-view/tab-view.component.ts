import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.css']
})
export class TabViewComponent implements OnInit {
  activeIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
