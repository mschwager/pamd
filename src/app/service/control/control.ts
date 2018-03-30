// Return is [<result>, <continue>]
interface Control {
  evaluate(calculatedResult: boolean, currentResult: boolean): [boolean, boolean];
}

class Required implements Control {
  evaluate(calculatedResult: boolean, currentResult: boolean): [boolean, boolean] {
    return [calculatedResult && currentResult, true];
  }
}

class Requisite implements Control {
  evaluate(calculatedResult: boolean, currentResult: boolean): [boolean, boolean] {
    return [calculatedResult && currentResult, false];
  }
}

class Sufficient implements Control {
  evaluate(calculatedResult: boolean, currentResult: boolean): [boolean, boolean] {
    if (calculatedResult && currentResult) {
      return [true, false];
    } else {
      return [calculatedResult, true];
    }
  }
}

class Binding implements Control {
  evaluate(calculatedResult: boolean, currentResult: boolean): [boolean, boolean] {
    if (calculatedResult && currentResult) {
      return [true, false];
    } else {
      return [false, true];
    }
  }
}

class ControlFactory {
  public static createControl(control: string): Control {
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

export {
  Control,
  ControlFactory,
  Required,
  Requisite,
  Sufficient,
  Binding
};
