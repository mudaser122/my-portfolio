import React from 'react';
import '../styles/Stories.css';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';

const Stories = () => {
    const stories = [
        {
            id: 1,
            date: 'ON AUG 28',
            title: 'CREATE A LANDING PAGE THAT PERFORMS GREAT',
            image: story1,
            tag: 'HELP'
        },
        {
            id: 2,
            date: 'ON AUG 28',
            title: 'STARTING AND GROWING A CAREER IN WEB DESIGN',
            image: story2,
            tag: 'BRANDING'
        },
        {
            id: 3,
            date: 'ON AUG 28',
            title: 'HOW CAN DESIGNERS PREPARE FOR THE FUTURE?',
            image: story3,
            tag: 'DESIGN'
        }
    ];

    return (
        <section className="stories-section">
            <div className="container">
                <h2 className="stories-heading">STORIES</h2>
                
                <div className="stories-list">
                    {stories.map(story => (
                        <div key={story.id} className="story-card">
                            <div className="story-image-container">
                                <span className="story-tag">{story.tag}</span>
                                <img src={story.image} alt={story.title} className="story-image" />
                            </div>
                            <div className="story-content">
                                <span className="story-date">POSTED {story.date}</span>
                                <h3 className="story-title">{story.title}</h3>
                                <button className="story-button">Read more →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stories;
