import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ComingSoon() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    useCase: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      useCase: formData.useCase,
    
    };

    try {
      await emailjs.send('service_zj83it4', 'template_ah6yhx7', templateParams, 'QdHE4aDaQfosHBaIa');
      alert('Thank you! We’ll keep you updated.');
      setFormData({ name: '', email: '', useCase: ''});
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', overflow: 'hidden' }}>
      {/* Header with Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        position: 'absolute',
        top: '0',
        left: '0'
      }}>
        <h1 style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '0', color: '#E76F51' }}>Learnova</h1>
        <img src="/learnovaicon.png" alt="icon" style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
      </div>
      {/* Hero Section */}
      <div style={{
        padding: '50px 20px',
        backgroundColor: '#F8FAFC',
        textAlign: 'center',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Learning with no limits</h1>
        <p style={{ fontSize: '1.2em', marginTop: '10px' }}>
          Learn something new with an <span style={{ color: '#E76F51' }}>AI Study Guide</span> or <span style={{ color: '#E76F51' }}>create courses</span> for yourself and others
        </p>
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#E76F51',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Join for Free
        </button>
      </div>

      {/* Informational Cards with Orange Outlines */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px 20px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        {[
          { title: 'Study Aid', imgSrc: '/study.webp' },
          { title: 'AI Courses', imgSrc: '/courses.webp' },
          { title: 'Flashcards', imgSrc: '/flashcards.webp' },
          { title: 'Quizzes', imgSrc: '/quizzes.webp' }
        ].map((card, index) => (
          <div key={index} style={{
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            width: '200px',
            border: '2px solid #E76F51', // Orange border for each card
            boxSizing: 'border-box',
          }}>
            <img src={card.imgSrc} alt={card.title} style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ color: '#333', marginTop: '10px' }}>{card.title}</h3>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name or Business"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '10px', fontSize: '1em', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', fontSize: '1em', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            name="useCase"
            placeholder="What would you like to use Learnova for?"
            value={formData.useCase}
            onChange={handleChange}
            style={{ padding: '10px', fontSize: '1em', borderRadius: '5px', border: '1px solid #ccc', resize: 'none', minHeight: '100px' }}
          />
          <button
            type="submit"
            style={{
              padding: '15px',
              fontSize: '1em',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#007BFF',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Get Notified
          </button>
        </form>
      </div>

      {/* Scrolling Banner with Icons */}
      <div style={{
        backgroundColor: '#E76F51',
        paddingTop: '20px',
        paddingBottom: '20px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
      }}>
        <p style={{
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '10px',
          textAlign: 'center'
        }}>Featured On:</p>

        <div style={{
          display: 'inline-block',
          width: '100%',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'inline-flex',
            animation: 'scrollMain 30s linear infinite',
            gap: '30px'
          }}>
            <img src="/Forbes_logo.svg" alt="Forbes" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/TechCrunch_logo.svg" alt="TechCrunch" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/Bloomberg_logo.svg" alt="Bloomberg" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/HuffPost.svg" alt="HuffPost" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/inc.png" alt="Inc." style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            {/* Repeat logos for continuous scrolling */}
            <img src="/Forbes_logo.svg" alt="Forbes" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/TechCrunch_logo.svg" alt="TechCrunch" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/Bloomberg_logo.svg" alt="Bloomberg" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/HuffPost.svg" alt="HuffPost" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            <img src="/inc.png" alt="Inc." style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>

      {/* Keyframes for scrolling animation */}
      <style>
        {`
          @keyframes scrollMain {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}

export default ComingSoon;