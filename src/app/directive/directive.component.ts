import { Component, OnInit } from '@angular/core';

import { Directive } from './directive';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  controls: Array<string> = [
    'required',
    'requisite',
    'sufficient',
    'optional'
  ];

  directive: Directive = {
    pam_control: 'required',
    pam_module: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
