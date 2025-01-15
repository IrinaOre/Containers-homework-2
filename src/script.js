"use strict";

export const errors = [
  [111, "This character already exists!"],
  [222, "Invalid username!"],
  [333, "Impossible to raise the level"],
];
export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errors);
  }

  translate(code) {
    return this.errors.get(code) || "Unknown error";
  }
}
