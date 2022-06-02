import { expect, test } from "@jest/globals";
import AirplaneNavigator from "../src/index";

const fixturePath = __dirname + "/fixtures/";

describe("airplane navigator", () => {
  let plane: AirplaneNavigator;

  const calc = (filename: string) => {
    plane = new AirplaneNavigator();
    return plane.readCourseAndNavigate(fixturePath + filename);
  };

  test("should return 510", () => {
    expect(calc("course.txt")).toEqual(510);
  });

  test("should return 0", () => {
    expect(calc("testCourse1.txt")).toEqual(0);
  });

  test("should return 224", () => {
    expect(calc("testCourse2.txt")).toEqual(224);
  });

  test("should throw error due to incorrect format", () => {
    expect(() => calc("incorrectFormat.txt")).toThrow();
  });
});
