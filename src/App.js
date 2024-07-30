import './App.css';
import Header from './components/header';
import About from './components/about';
import Education from './components/education.jsx';
import WorkExperiences from './components/workexperience.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div>
      <div>
        <Header />
        <About />
        <WorkExperiences />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
