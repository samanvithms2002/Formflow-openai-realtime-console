import React from 'react';
import Tabs from '../components/tabs/Tabs';
import './ProviderPage.scss';

const ProviderPage: React.FC = () => {
  return (
    <div className="container">
      <div className="heading">Provider Portal</div>
      <div className="content-container">
        <Tabs
          tabs={[
            {
              label: 'Patient Summary',
              children: <div></div>,
            },
            {
              label: 'Patient Response',
              children: <div></div>,
            },
            {
              label: 'Appointment Scheduled',
              children: <div></div>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProviderPage;
