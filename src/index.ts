import * as fs from "fs";
import CourseParser from "./CourseParser";

export default class AirplaneNavigator {
  horizontalPos: number = 0;
  verticalPos: number = 0;
  direction: number = 0;

  readCourseAndNavigate(filename: string) {
    const strs = fs.readFileSync(filename, "utf-8").split(/\r?\n/);
    const courses = strs.map((s) => CourseParser.parseCourse(s));

    courses.forEach((course) => this.calcDirection(course));
    return this.horizontalPos * this.verticalPos;
  }

  private calcDirection([command, distance]: string[]) {
    const dist = CourseParser.parseDistance(distance);
    if (this.direction < 0) throw new Error("It seems you have crashed!");

    switch (command) {
      case "forward":
        this.horizontalPos += dist;
        this.verticalPos += dist * this.direction;
        break;
      case "up":
        this.direction += dist;
        break;
      case "down":
        this.direction -= dist;
        break;
      default:
        throw new Error(`sorry, I dont know what command ${command} means.`);
    }
  }
}

const plane = new AirplaneNavigator();
console.log(plane.readCourseAndNavigate("course.txt"));
