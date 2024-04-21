import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * {number} sqft - square foot of building
   * {number} floors - number of floors in building
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
