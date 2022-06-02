export default class CourseParser {
  static parseCourse(str: string) {
    const course = str
      .toLowerCase()
      .split(" ")
      .filter((s) => s !== "");
    if (course.length !== 2) throw new Error(`Can not parse course ${str}`);
    return course;
  }

  static parseDistance(char: string) {
    if (char.match(/\d+/)) {
      return parseInt(char);
    } else {
      throw new Error(`${char} is not a valid distance.`);
    }
  }
}
