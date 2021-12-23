import proj from "./data/projects";
import { Link } from "react-router-dom";
const Projects = props => {
    return (
        <div className="projects">
            {proj.map(el => {
                return (
                    <Link to={`/projects/${el.id}`}>
                        <div className="project-card">
                            <img src={el.image} alt={el.name} width="200" />
                            <h1>{el.name}</h1>
                            <p>{el.description}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default Projects;