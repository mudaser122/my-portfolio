import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'BRAND IDENTITY DESIGN',
      description: 'Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.',
      icon: '○' 
    },
    {
      id: '02',
      title: 'VISUAL DESIGN',
      description: 'Blend of artistic intuition with strategic insight to craft a visual identity.',
      icon: '↗'
    },
    {
      id: '03',
      title: 'UX RESEARCH',
      description: 'Blend of functionality with aesthetics to create delightful experience.',
      icon: '↗'
    },
    {
      id: '04',
      title: 'ART DIRECTION',
      description: 'Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics.',
      icon: '↗'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="services-heading">SERVICES</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="services-card">
              <div className="services-card-header">
                <span className="services-number">{service.id}</span>
                <span className="services-icon">{service.icon}</span>
              </div>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
