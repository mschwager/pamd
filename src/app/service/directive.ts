import { Color } from './color';

export class Directive {
  public pam_control: string;
  public pam_module: string;
  public color: Color;
  public success: boolean|null;

  constructor(
    pam_control: string,
    pam_module: string,
    color: Color,
    success: boolean|null
  ) {
    this.pam_control = pam_control;
    this.pam_module = pam_module;
    this.color = color;
    this.success = success;
  }
}
