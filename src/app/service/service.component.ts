import { Component, OnInit } from '@angular/core';

import { Directive } from './directive';
import { Color } from './color';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  controls: Array<string> = [
    'required',
    'requisite',
    'sufficient',
    'optional'
  ];

  directives: Array<Directive> = [
    new Directive('required', '', Color.NONE),
  ];

  readonly Color = Color;

  constructor() { }

  ngOnInit() {
  }

  getDirectiveLength() {
    return this.directives.length;
  }

  addDirective() {
    const directive = new Directive('required', '', Color.NONE);

    this.directives.push(directive);
  }

  removeDirective(index: number) {
    this.directives.splice(index, 1);
  }

  setDirectiveColor(index: number, color: Color) {
    this.directives[index].color = color;
  }

}
