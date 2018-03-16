import { Component, OnInit } from '@angular/core';

import { Directive } from './directive';

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
    new Directive('required', ''),
  ];

  constructor() { }

  ngOnInit() {
  }

  addDirective() {
    this.directives.push(new Directive('required', ''));
  }

  removeDirective(directive: Directive) {
    this.directives.splice(this.directives.indexOf(directive), 1);
  }

}
