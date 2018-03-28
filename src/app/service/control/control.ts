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

export {
  Control,
  Required,
  Requisite,
  Sufficient,
  Binding
};
