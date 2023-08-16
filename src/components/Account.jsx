import React from 'react';
import AnalyticsComponent from './AnalyticsComponent.jsx';
import FormComponent from './FormComponent.jsx';

function AccountComponent() {
  return (
    <div className="account_section">
      <div className="container">
        <div className="account_sections-main">
          <AnalyticsComponent />
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default AccountComponent;
