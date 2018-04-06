import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BulkAddComponent } from '../bulk-add/bulk-add.component';
import { Directive } from './directive';
import { Color } from './color';
import {
  Control,
  ControlFactory,
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

  constructor(private modal: NgbModal) { }

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

    let result = true;
    let control_string: string;
    let controller: Control;
    let continue_evaluating: boolean;

    for (let i = 0; i <= index; i++) {
      control_string = this.directives[index].pam_control;
      controller = ControlFactory.createControl(control_string);

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

  resetDirectives(): void {
    this.initialize();
  }

  openBulkAddModal(): void {
    this.modal.open(BulkAddComponent, { size: 'lg', centered: true });
  }
}
