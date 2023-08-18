import React from 'react';

function AnalyticsComponent() {
  return (
    <div className="account_analytics-container">
      <div className="progress_text">Мой прогресс:</div>
      <img
        src="https://nezhno.space/wp-content/themes/my-theme/assets/images/sapiens.png"
        alt="Изображение"
      />
      <a href="/survey" className="blue_btn account_analytics_survey-link">
        Пройти опрос
      </a>
    </div>
  );
}

export default AnalyticsComponent;
