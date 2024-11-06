// PatientResponseTab.tsx
import React from 'react';

interface ResponseData {
  question_text: string;
  selectedOption: {
    text: string;
  };
  NotSelectedOption: string[];
}

interface PatientResponseTabProps {
  responses: ResponseData[] | null;
}

const PatientResponseTab: React.FC<PatientResponseTabProps> = ({ responses }) => {
  if (!responses || responses.length === 0) {
    return <div className="response-container">No patient responses found.</div>;
  }

  return (
    <div className="response-container">
      <h2 className="response-title">Patient Questionnaire Responses</h2>
      <p className="response-subtitle">Detailed breakdown of patient's answers to assessment questions</p>
      
      <div className="response-list">
        {responses
          .filter(response => response.question_text !== null)
          .map((response, index) => (
          <div key={index} className="response-card">
            <div className="question-section">
              <label>Question</label>
              <p>{response.question_text || 'N/A'}</p>
            </div>
            
            <div className="answers-grid">
              <div className="selected-option">
                <label>Selected Answer</label>
                <span className="selected-badge">
                  {response.selectedOption ? response.selectedOption.text : 'None'}
                </span>
              </div>
              
              <div className="not-selected">
                <label>Other Options</label>
                <div className="not-selected-options">
                  {response.NotSelectedOption ? 
                    response.NotSelectedOption.map((option, idx) => (
                      <span key={idx} className="unselected-badge">{option}</span>
                    )) : 
                    <span className="unselected-badge">None</span>
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientResponseTab;