import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="row mt-2">
      <div class="col-12">
        <div class="jumbotron pt-3 pb-1">
          <h3><i [ngClass]="icon"></i> {{ title | titlecase }}</h3>
          <p class="lead">{{ description | paragraphCapital }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
  constructor() {}

  ngOnInit(): void {}
}
