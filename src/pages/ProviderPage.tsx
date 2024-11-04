import React, { useState, useEffect } from 'react';
import { useVisibility } from '../context/VisibilityContext';
import Tabs from '../components/tabs/Tabs';
import OpenAI from 'openai';
import './ProviderPage.scss';

const ProviderPage: React.FC = () => {
  const { api_Key } = useVisibility();
  const [activeTab, setActiveTab] = useState(0);
  const [patientSummary, setPatientSummary] = useState('');
  const [patientResponse, setPatientResponse] = useState<any[] | null>(null);

  const fetchPatientSummaryData = async () => {
    try {
      const openai = new OpenAI({
        apiKey: api_Key,
        dangerouslyAllowBrowser: true,
      });
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: 'write a haiku about ai' }],
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching Patient Summary:', error);
    }
  };

  useEffect(() => {
    const getPatientSummary = async () => {
      if (activeTab === 0) {
        const resp = await fetchPatientSummaryData();
        setPatientSummary(resp!);
      }
    };
    getPatientSummary();
  }, [activeTab]);

  useEffect(() => {
    // if (activeTab === 1) {
    const responseData = localStorage.getItem('responseData');
    if (responseData) {
      setPatientResponse(JSON.parse(responseData));
    }
    // }
  }, []);

  return (
    <div className="container">
      <div className="heading">Provider Portal</div>
      <div className="content-container">
        <Tabs
          activeTab={activeTab}
          onTabChange={(tabLabel) => setActiveTab(tabLabel)}
          tabs={[
            {
              label: 'Patient Summary',
              children: <div>{patientSummary}</div>,
            },
            {
              label: 'Patient Response',
              children: (
                <div>
                  {patientResponse && patientResponse.length > 0 ? (
                    patientResponse
                      .filter((response) => response.question_text !== null)
                      .map((response, index) => (
                        <div key={index} className="response-item">
                          <p>
                            <strong>Question:</strong>{' '}
                            {response.question_text || 'N/A'}
                          </p>
                          <p>
                            <strong>Selected Option:</strong>{' '}
                            {response.selectedOption
                              ? response.selectedOption.text
                              : 'None'}
                          </p>
                          <p>
                            <strong>Not Selected Options:</strong>{' '}
                            {response.NotSelectedOption
                              ? response.NotSelectedOption.join(', ')
                              : 'None'}
                          </p>
                          <hr />
                        </div>
                      ))
                  ) : (
                    <div>No patient responses found.</div>
                  )}
                </div>
              ),
            },
            {
              label: 'Appointment Scheduled',
              children: <div>Appointment Scheduled Content</div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProviderPage;
