import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Method } from './pages/Method';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/sobre') setCurrentPage('about');
    else if (path === '/metodo') setCurrentPage('method');
    else if (path === '/contato') setCurrentPage('contact');
    else if (path === '/cursos') setCurrentPage('courses');
    else if (path.startsWith('/cursos/')) {
      setCurrentPage('course-detail');
      setCourseId(path.split('/')[2]);
    }
    else setCurrentPage('home');

    const handleNavigation = (e) => {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        window.history.pushState({}, '', path);
        
        if (path === '/sobre') setCurrentPage('about');
        else if (path === '/metodo') setCurrentPage('method');
        else if (path === '/contato') setCurrentPage('contact');
        else if (path === '/cursos') setCurrentPage('courses');
        else if (path.startsWith('/cursos/')) {
          setCurrentPage('course-detail');
          setCourseId(path.split('/')[2]);
        }
        else setCurrentPage('home');

        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'method':
        return <Method />;
      case 'contact':
        return <Contact />;
      case 'courses':
        return <Courses />;
      case 'course-detail':
        return <CourseDetail courseId={courseId} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
