/**
 * This page is showing detailed view of the selected course
 */
import { useLocation, useNavigate } from 'react-router-dom';
import courses from "../data/courses";
import './css/CoursedetailPage.css';
function CourseDetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const courseId = new URLSearchParams(location.search).get('id');
    

    const handleGoBack = () => {
        navigate('/');
    };

    const course = courses.find(c => c.id === parseInt(courseId));
    console.log(course);

    if (!course) return <p>Course not found</p>;

    return ( 


        <div className="course-page">
      <div className="banner" style={{ backgroundImage: `url(${course.banner})` }}>
       
      </div>

      <div className="course-content">
        <h1 className="course-detail-title ">{course.title}</h1>
        <p className="course-duration">Duration: {course.hours} hours</p>
        <p className="full-description">{course.description}</p>

        <h2>Modules Included</h2>
        <ul className="module-list">
          {course.modules.map((module, index) => (
            <li key={index}>{module}</li>
          ))}
        </ul>
        <div className="btn-container">
        <button className="enroll-button">Enroll Now</button>
        </div>
      </div>
    </div>

    );
    }

export default CourseDetailPage;