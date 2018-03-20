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

  initialize(): void {
    this.directives = [
      this.createDefaultDirective(),
    ];
  }

  createDefaultDirective(): Directive {
    return new Directive('required', '', Color.NONE);
  }

  getDirectiveLength(): number {
    return this.directives.length;
  }

  addDirective(): void {
    const directive = this.createDefaultDirective();
    this.directives.push(directive);
  }

  removeDirective(index: number): void {
    this.directives.splice(index, 1);
  }

  setDirectiveColor(index: number, color: Color): void {
    this.directives[index].color = color;
  }

}
