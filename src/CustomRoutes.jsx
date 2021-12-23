import { Route, Routes } from 'react-router';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact'
import Details from './Details';

const CustomRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
)

export default CustomRoutes;