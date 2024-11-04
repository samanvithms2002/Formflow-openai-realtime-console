import React, { useState, useEffect } from 'react';
import { useVisibility } from '../context/VisibilityContext';
import Tabs from '../components/tabs/Tabs';
import OpenAI from 'openai';
import './ProviderPage.scss';

const ProviderPage: React.FC = () => {
  const { api_Key } = useVisibility();
  const [activeTab, setActiveTab] = useState(0);
  const [patientSummary, setPatientSummary] = useState<string[]>([]);
  const [patientResponse, setPatientResponse] = useState<any[] | null>(null);

  const fetchPatientSummaryData = async () => {
    const response = localStorage.getItem('responseData');
    try {
      const openai = new OpenAI({
        apiKey: api_Key,
        dangerouslyAllowBrowser: true,
      });
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content:
              "You are a summarizing bot for medical providers. You'll receive input in the form of JSON where each item will contain a question and the selected option. Summarize it by making a bulleted list of the question and its chosen option by the patient. Rephrase the question with the option such that it is from third person patient perspective.Keep it elaborate" +
              JSON.stringify(response),
          },
        ],
      });

      const summaryText = completion.choices[0].message.content;
      const points = summaryText
        ?.split('\n')
        .filter((point) => point.trim() !== '');

      setPatientSummary(points!);
    } catch (error) {
      console.error('Error fetching Patient Summary:', error);
    }
  };

  useEffect(() => {
    // if (activeTab === 0) {
      fetchPatientSummaryData();
    // }
  }, []);

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
              children: (
                <>
                  {patientSummary.map((point, index) => (
                    <div key={index}>
                      {point} <br />
                    </div>
                  ))}
                </>
              ),
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
