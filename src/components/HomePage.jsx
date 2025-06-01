/**
 * This is the home page that list all the courses
 * @fields title, image, description, hours
 */
import courses from "../data/courses";
import './css/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (identifier) => {
    navigate(`/course?id=${identifier}`);
  };
  return (
    <div className="home-container">      
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.shortDescription}</p>
              <p className="course-hours">Duration:{course.hours} hours</p>
              <button className="btn btn-primary view-button view-button:hover" onClick={() => handleButtonClick(course.id)}>
                <span className="visually-hidden">View Details</span>
              </button>              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
