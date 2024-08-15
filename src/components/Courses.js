import React, { useState } from "react";
import Card from "./Card";
import Error from "./Error"

function Courses(props) {
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);

  let courses = props.courses;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((coursesData) => {
          allCourses.push(coursesData);
        });
      });
      return allCourses;
    }
    else{
        return courses[category];
    }
  }

  return (
    
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        courses.length === 0 ? (<Error />) : (getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      }))
      }
    </div>
  );
}

export default Courses;
