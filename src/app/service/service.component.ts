import { Component, OnInit } from '@angular/core';

import { Directive, DirectiveColor } from './directive';

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
    new Directive('required', '', DirectiveColor.NONE),
  ];

  readonly DirectiveColor = DirectiveColor;

  constructor() { }

  ngOnInit() {
  }

  getDirectiveLength() {
    return this.directives.length;
  }

  addDirective() {
    const directive = new Directive('required', '', DirectiveColor.NONE);

    this.directives.push(directive);
  }

  removeDirective(index: number) {
    this.directives.splice(index, 1);
  }

  setDirectiveColor(index: number, color: DirectiveColor) {
    this.directives[index].color = color;
  }

}
