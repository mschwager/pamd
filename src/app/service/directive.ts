export class Directive {
  public pam_control: string;
  public pam_module: string;

  constructor(pam_control: string, pam_module: string) {
    this.pam_control = pam_control;
    this.pam_module = pam_module;
  }
}
