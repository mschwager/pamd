import {
  ControlFactory,
  Required,
  Requisite,
  Sufficient,
  Binding
} from './control';

describe('Control', () => {

  it('required control', () => {
    const result = ControlFactory.createControl('required');

    expect(result).toEqual(jasmine.any(Required));
  });

  it('requisite control', () => {
    const result = ControlFactory.createControl('requisite');

    expect(result).toEqual(jasmine.any(Requisite));
  });

  it('sufficient control', () => {
    const result = ControlFactory.createControl('sufficient');

    expect(result).toEqual(jasmine.any(Sufficient));
  });

  it('binding control', () => {
    const result = ControlFactory.createControl('binding');

    expect(result).toEqual(jasmine.any(Binding));
  });

  it('unknown control', () => {
    expect(function() { return ControlFactory.createControl('UNKNOWN'); }).toThrow();
  });

});
