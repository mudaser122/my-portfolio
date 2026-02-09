import heroImage from '../assets/hero-portrait-new.jpg';
import '../styles/Hero.css';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
  };

  const imageVariants = {
      hidden: { scale: 1.2, opacity: 0 },
      visible: {
          scale: 1,
          opacity: 1,
          transition: {
              duration: 1.2,
              ease: "easeOut"
          }
      }
  }

  return (
    <section className="hero">
      <Motion.div 
        className="container hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Motion.h1 className="hero-title" variants={itemVariants}>
            MUDASIR AZEEM
        </Motion.h1>
        
        <div className="hero-content-wrapper">
            <Motion.div className="hero-left-column" variants={itemVariants}>
                <div className="hero-avatars">
                    {/* Placeholder for small avatars */}
                    <div className="hero-avatar" style={{background: '#ccc'}}></div>
                    <div className="hero-avatar" style={{background: '#999', marginLeft: '-10px'}}></div>
                    <div className="hero-avatar" style={{background: '#666', marginLeft: '-10px'}}></div>
                </div>
                <div className="hero-reviews">
                    <strong>100+ reviews</strong> <span style={{color: '#666'}}>(4.96 of 5)</span>
                    <p className="hero-review-text">Five-star reviews from my esteemed clients.</p>
                </div>
            </Motion.div>

            <Motion.div className="hero-image-container" variants={imageVariants}>
                <img src={heroImage} alt="Mudasir Azeem" className="hero-image" />
            </Motion.div>

            <Motion.div className="hero-right-column" variants={itemVariants}>
                <p className="hero-intro">
                    Hi, I'm Mudasir, a passionate UX Designer dedicated to creating user-friendly digital experiences.
                </p>
                <Motion.button 
                    className="hero-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get In touch
                </Motion.button>
            </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
