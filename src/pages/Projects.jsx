import React from 'react'
import Excel from '../components/Excel'
import Imagegallery from '../components/Imagegallery'
import Webdev from '../components/Webdev'
import Youtube from '../components/Youtube'
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="container-fluid">
      <div>
      <Fade direction="left">
        <Webdev />
        </Fade>
        <Fade direction="right">
        <Imagegallery />
        </Fade>
        <Fade direction="left">
        <Youtube />
        </Fade>
        <Fade direction="right">
        <Excel />
        </Fade>
      </div>
    </div>
  )
}

export default Projects;