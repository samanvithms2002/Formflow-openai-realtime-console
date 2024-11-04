import { useVisibility } from '../context/VisibilityContext';
import React from 'react';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const { handleStart } = useVisibility();

  return (
    <div className="home-container">
      <div className="home-background">
        <div className="gradient-blob blob-1"></div>
      </div>

      <div className="home-content">
        <section className="home-section">
          <div className="home-text-container">
            <span className="home-title">Welcome to <span className='home-title header'>FormFlow</span></span>
            <span className="home-description">Elevating Patient Care with Real-Time Conversational AI</span>
            <div className="home-buttons">
              <button onClick={handleStart} className="button primary-button">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
