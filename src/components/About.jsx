import React from 'react';
import SectionReveal from './SectionReveal';
import '../styles/About.css';
// import aboutImage from '../assets/hero-portrait-new.jpg'; // Removed unused import

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                {/* Left Column: Label */}
                <SectionReveal className="about-label-column">
                    <h2 className="about-label">About Me</h2>
                </SectionReveal>

                {/* Right Column: Bio & Stats */}
                <SectionReveal className="about-content-column" delay={0.2}>
                    <p className="about-bio">
                        I'm Mudasir Azeem, a seasoned UX designer with over 2 years of experience in crafting intuitive and engaging digital experiences. My journey began with a background in graphic design, where I discovered my passion for understanding user behavior and translating it into seamless interactions.
                    </p>
                    
                    <div className="about-stats-grid">
                        <div className="about-stat-item">
                            <h3 className="about-stat-number">2+</h3>
                            <p className="about-stat-label">Years Of Experience</p>
                        </div>
                        <div className="about-stat-item">
                            <h3 className="about-stat-number">20+</h3>
                            <p className="about-stat-label">Completed Projects</p>
                        </div>
                        <div className="about-stat-item">
                            <h3 className="about-stat-number">90%+</h3>
                            <p className="about-stat-label">Client Satisfactions</p>
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default About;
