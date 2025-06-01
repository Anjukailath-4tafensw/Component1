import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import HomePage from "./components/HomePage";
import CourseDetailPage from "./components/CourseDetailPage";

function App() {
  useEffect(() => {
    document.title = "Courses";
  }, []);
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />       
        <Route path="/course" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;