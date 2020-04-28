/**
 * @todo documentation
 *
 * @since 28/04/2020
 */
class Person {
  //------ Instances ------//

  static readonly FIRST = new Person('first', 0);
  static readonly SECOND = new Person('second', 1);
  static readonly THIRD = new Person('third', 2);

  //------ Static Methods ------//

  static get values(): Person[] {
    return [this.FIRST, this.SECOND, this.THIRD];
  }

  /**
   * Converts a string to its corresponding Person instance.
   *
   * @param string the string to convert to Person
   * @throws RangeError, if a string that has no corressonding Person value was passed.
   * @returns the matching Person
   */
  static fromString(string: string): Person {
    // Works assuming the name property of the enum is identical to the variable's name (case insensitive).
    const value = (this as any)[string.toUpperCase()];
    if (value) {
      return value;
    }

    throw new RangeError(
      `Illegal argument passed to fromString(): ${string} does not correspond to any instance of the enum ${
      (this as any).prototype.constructor.name
      }`
    );
  }

  //------ Constructor------//

  private constructor(
    /** name of the instance */
    public readonly name: string,

    /** index of the instance */
    public readonly index: number
  ) { }

  //------ Methods ------//

  /**
   * Called when converting the Person value to a string using JSON.Stringify.
   * Compare to the fromString() method, which deserializes the object.
   */
  public toJSON() {
    return this.name;
  }
}

export default Person;