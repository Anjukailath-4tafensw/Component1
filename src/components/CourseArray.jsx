/*
* List of courses
*/
import courses from "../data/courses";

function CourseArray() {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseList key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseArray;
