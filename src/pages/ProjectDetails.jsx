import React from 'react'
import gitHub from "../img/icons/gitHub-black.svg";
import { useParams } from 'react-router-dom';
import {projects} from "../helpers/ProjectsList";

const ProjectDetails = () => {
    const {id} = useParams();
    const project = projects[id];
  return (
    <main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">{project.title}</h1>

            <img src={project.img} alt={project.title} className="project-details__cover" />

            <div className="project-details__desc">
                <p>Skills: {project.skills}</p>
            </div>

            <a href={project.gitHub} className="btn-outline">
                <img src={gitHub} alt="gitHub" />
                GitHub repo
            </a>

        </div>
    </div>
</main>
  )
}

export default ProjectDetails
