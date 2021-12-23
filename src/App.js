import './App.css';
import { Link } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <CustomRoutes />
    </div>
  );
}

export default App;
