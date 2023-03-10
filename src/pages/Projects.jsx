import React from 'react'
import Excel from '../components/Excel'
import Imagegallery from '../components/Imagegallery'
import Webdev from '../components/Webdev'
import Youtube from '../components/Youtube'
import { Fade } from 'react-reveal'

const Projects = () => {
  return (
    <div className="container-fluid">
      <div>
      <Fade left>
        <Webdev />
        </Fade>
        <Fade right>
        <Imagegallery />
        </Fade>
        <Fade left>
        <Youtube />
        </Fade>
        <Fade right>
        <Excel />
        </Fade>
      </div>
    </div>
  )
}

export default Projects;