import { Component, OnInit } from '@angular/core';

import { Directive } from './directive';
import { Color } from './color';
import {
  Control,
  Required,
  Requisite,
  Sufficient,
  Binding
} from './control/control';

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
    'binding'
  ];

  directives: Array<Directive>;

  result_color: Color = Color.NONE;

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
    return new Directive('required', '', Color.NONE, null);
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

  setDirectiveResult(index: number, success: boolean): void {
    this.directives[index].success = success;
    this.directives[index].color = success ? Color.SUCCESS : Color.FAILURE;

    let result: boolean;
    let control_string: string;
    let controller: Control;
    let continue_evaluating: boolean;

    for (let i = 0; i <= index; i++) {
      control_string = this.directives[index].pam_control;
      controller = this.getControl(control_string);

      [result, continue_evaluating] = controller.evaluate(result, success);

      if (!continue_evaluating) {
        this.result_color = result ? Color.SUCCESS : Color.FAILURE;
        break;
      }
    }

    if (index === (this.getDirectiveLength() - 1)) {
      this.result_color = result ? Color.SUCCESS : Color.FAILURE;
    }
  }

  getControl(control: string): Control {
    switch (control) {
      case 'required':
        return new Required();
      case 'requisite':
        return new Requisite();
      case 'sufficient':
        return new Sufficient();
      case 'binding':
        return new Binding();
      default:
        throw new Error('Invalid control string: ' + control);
    }
  }

}
