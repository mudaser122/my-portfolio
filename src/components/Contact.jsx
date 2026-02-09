import React, { useState } from 'react';
import SectionReveal from './SectionReveal';
import '../styles/Contact.css';

const Contact = () => {
    const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');
        setErrorMessage('');

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/mudaserjaskani8@gmail.com", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success === "true" || result.success === true) {
                setStatus('SUCCESS');
                e.target.reset();
                setTimeout(() => setStatus('IDLE'), 5000);
            } else {
                setStatus('ERROR');
                setErrorMessage(result.message || 'Failed to send message.');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('ERROR');
            setErrorMessage('Network error. Please try again.');
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <SectionReveal>
                    <h2 className="contact-heading">CONTACT ME</h2>
                </SectionReveal>
                
                <SectionReveal className="contact-container" delay={0.2}>
                    {/* Left Column: Info */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <h3 className="contact-label">OUR OFFICE:</h3>
                            <p className="contact-value">Taunsa Sharif</p>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h3 className="contact-label">CONTACT NUMBER:</h3>
                            <p className="contact-value">+923040147711</p>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <h3 className="contact-label">EMAIL US:</h3>
                            <p className="contact-value">mudaserjaskani8@gmail.com</p>
                        </div>

                        <div className="contact-item">
                            <h3 className="contact-label">SOCIALS</h3>
                            <div className="contact-socials">
                                <a href="https://www.linkedin.com/in/mudaser-azeem-bbb46b268/" target="_blank" rel="noopener noreferrer" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/mudaserjaskani/" target="_blank" rel="noopener noreferrer" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="https://wa.me/923040147711" target="_blank" rel="noopener noreferrer" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.079 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="New Submission from Portfolio!" />

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">FULL NAME</label>
                                    <div className="input-icon-wrapper">
                                        <input type="text" name="name" required className="form-input" placeholder="Steve Milner" />
                                        <div className="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">EMAIL ADDRESS</label>
                                    <div className="input-icon-wrapper">
                                        <input type="email" name="email" required className="form-input" placeholder="hello@websitename.com" />
                                        <div className="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">SUBJECT</label>
                                <div className="input-icon-wrapper">
                                    <input type="text" name="subject" required className="form-input" placeholder="Your Subject" />
                                    <div className="input-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">YOUR MESSAGE</label>
                                <textarea name="message" required className="form-textarea" placeholder="Write Your message"></textarea>
                            </div>

                            <button type="submit" className="submit-button" disabled={status === 'SENDING'}>
                                {status === 'SENDING' ? 'Sending...' : 'Send Me Message'}
                                {status !== 'SENDING' && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                )}
                            </button>

                            {status === 'SUCCESS' && (
                                <div className="form-notification success">
                                    Message sent successfully!
                                </div>
                            )}

                            {status === 'ERROR' && (
                                <div className="form-notification error">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Contact;
