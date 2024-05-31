import React from 'react'
import "./project.css";
import { Link } from 'react-router-dom';

const Project = ({title, img, index}) => {
  return (
    
    <Link to={`/projects/${index}`}>
    <li className="project">
           <img src={img} alt="Project img" className="project__img" />
           <h3 className="project__title">{title}</h3>
            </li>
     </Link>
  )
}

export default Project
