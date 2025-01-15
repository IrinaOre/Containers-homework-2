import ErrorRepository, { errors } from "../src/script.js";

test("Check invalid error code", () => {
  const error = new ErrorRepository();
  expect(error.translate(0)).toBe("Unknown error");
});

test.each(errors)("Checking the error code and text", (code, text) => {
  const error = new ErrorRepository();
  expect(error.translate(code)).toBe(text);
});
