import React from 'react';
import SectionReveal from './SectionReveal';
import '../styles/Projects.css';
import project1 from '../assets/project-newly-temp-latest.png';
import project2 from '../assets/project-msm-logo.jpg';
import project3 from '../assets/project-the100.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Newly Temp',
            description: 'A modern landing page developed with React and Tailwind CSS.',
            image: project1,
            link: 'https://newly-temp.vercel.app/'
        },
        {
            id: 2,
            title: 'MSM Interior Decorator',
            description: 'A portfolio website for an interior decorator, showcasing luxury designs.',
            image: project2,
            link: 'https://msm-interior-decorator-nine.vercel.app/'
        },
        {
            id: 3,
            title: 'THE100.',
            description: 'A premium automotive detailing service website.',
            image: project3,
            link: 'https://the100-nine.vercel.app/'
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <SectionReveal>
                    <h2 className="projects-heading">Recent Projects</h2>
                </SectionReveal>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <SectionReveal key={project.id} delay={index * 0.2}>
                            <div className="project-card">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        View Project <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
