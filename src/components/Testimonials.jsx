import React from 'react';
import SectionReveal from './SectionReveal';
import '../styles/Testimonials.css';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <SectionReveal>
                    <h2 className="testimonials-heading">TESTINOMIALS</h2>
                </SectionReveal>
                
                <div className="testimonials-grid">
                    <SectionReveal className="testimonial-card" delay={0.2}>
                        <div className="testimonial-header">
                            <img src={avatar3} alt="User" className="testimonial-avatar" />
                        </div>
                        <p className="testimonial-text">
                            "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how."
                        </p>
                        <h3 className="testimonial-name">ZONATHON DOE</h3>
                        <p className="testimonial-role">CEO & Founder X</p>
                    </SectionReveal>
                    <SectionReveal className="testimonial-card" delay={0.4}>
                         <div className="testimonial-header">
                            <img src={avatar2} alt="User" className="testimonial-avatar" />
                        </div>
                        <p className="testimonial-text">
                            "Asian planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how."
                        </p>
                        <h3 className="testimonial-name">MARTIN SMITH</h3>
                        <p className="testimonial-role">CEO & Founder Google</p>
                    </SectionReveal>
                </div>

                <div className="testimonials-grid-bottom">
                     <SectionReveal className="testimonial-card" delay={0.2}>
                        <div className="testimonial-header">
                            <img src={avatar1} alt="User" className="testimonial-avatar" />
                        </div>
                        <p className="testimonial-text">
                            "Hello planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how."
                        </p>
                        <h3 className="testimonial-name">METHAIL DEV</h3>
                        <p className="testimonial-role">Managing Director - Paydesk</p>
                    </SectionReveal>
                     <SectionReveal className="testimonial-card" delay={0.4}>
                        <div className="testimonial-header">
                            <img src={avatar2} alt="User" className="testimonial-avatar" />
                        </div>
                        <p className="testimonial-text">
                            "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how."
                        </p>
                        <h3 className="testimonial-name">ELIANA TWEET</h3>
                        <p className="testimonial-role">CEO & Founder Tesla</p>
                    </SectionReveal>
                     <SectionReveal className="testimonial-card" delay={0.6}>
                        <div className="testimonial-header">
                            <img src={avatar3} alt="User" className="testimonial-avatar" />
                        </div>
                        <p className="testimonial-text">
                           "Yelp planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how."
                        </p>
                        <h3 className="testimonial-name">HENRY CLARK</h3>
                        <p className="testimonial-role">Founder Oxyzen</p>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
