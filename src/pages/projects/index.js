import React, { useState } from "react";
import Top from "../../components/top";
import ProjectCard from "../../components/projectCard";
import './index.css'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Footer from "../../components/footer";

const Projects = () => {
    const [scrollx, setScrollX] = useState(-200)

    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2)
        if (x > 2) {
            x = 2
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2)
        if (x < -530) {
            x = -530
        }
        setScrollX(x)
    }

    return (
        <div className="projects-main">
            <Top />
            <div className="projects-body">
                <h1>Projetos</h1>
                <div className="projects-items-left" onClick={handleLeftArrow}>
                    <ArrowBackIosNewIcon style={{ fontSize: 50 }} />
                </div>
                <div className="projects-items-right" onClick={handleRightArrow}>
                    <ArrowForwardIosIcon style={{ fontSize: 50 }} />
                </div>
                <div className="projects-items" style={{ marginLeft: scrollx }}>
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                    <ProjectCard name="Lucas" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects