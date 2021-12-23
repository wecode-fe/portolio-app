import { useEffect, useState } from "react";
import { useParams } from "react-router";
import proj from "./data/projects";


const Details = props => {
    const [project, setProject] = useState({})
    const { id } = useParams();

    const update = () => {
        const filtered = proj.filter(p => p.id == id);
        setProject(filtered[0])
    }

    useEffect(update, [id]);

    return <div className="project-details">
        <h1>{project.name}</h1>
        <h2>{project.description}</h2>
        <img src={project.image} alt={project.name} width="400"></img>
    </div>
}

export default Details;