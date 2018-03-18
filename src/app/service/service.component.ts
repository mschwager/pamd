import { Component, OnInit } from '@angular/core';

import { Directive } from './directive';
import { Color } from './color';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  readonly controls: Array<string> = [
    'required',
    'requisite',
    'sufficient',
    'optional'
  ];

  directives: Array<Directive>;

  readonly Color = Color;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.directives = [
      this.createDefaultDirective(),
    ];
  }

  createDefaultDirective() {
    return new Directive('required', '', Color.NONE);
  }

  getDirectiveLength() {
    return this.directives.length;
  }

  addDirective() {
    const directive = this.createDefaultDirective();

    this.directives.push(directive);
  }

  removeDirective(index: number) {
    this.directives.splice(index, 1);
  }

  setDirectiveColor(index: number, color: Color) {
    this.directives[index].color = color;
  }

}
