export enum DirectiveColor {
  NONE = 'color-none',
  SUCCESS = 'color-success',
  FAILURE = 'color-failure',
}

export class Directive {
  public pam_control: string;
  public pam_module: string;
  public color: DirectiveColor;

  constructor(
    pam_control: string,
    pam_module: string,
    color: DirectiveColor
  ) {
    this.pam_control = pam_control;
    this.pam_module = pam_module;
    this.color = color;
  }
}
