// PatientSummaryTab.tsx
import React from 'react';

interface PatientSummaryTabProps {
  summaryPoints: string[];
}

const PatientSummaryTab: React.FC<PatientSummaryTabProps> = ({ summaryPoints }) => {
  return (
    <div className="summary-container">
      <div className="summary-card">
        <h2 className="summary-title">Patient Assessment Summary</h2>
        <p className="summary-subtitle">
          Comprehensive overview of patient's reported symptoms and conditions
        </p>
        
        <div className="summary-points">
          {summaryPoints.map((point, index) => (
            <div key={index} className="summary-point">
              <svg 
                className="chevron-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6"/>
              </svg>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientSummaryTab;