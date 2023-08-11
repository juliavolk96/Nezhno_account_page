import React, { useState } from 'react';

const AccountComponent = () => {
  const [inputType, setInputType] = useState('text');
  const [selectedGender, setSelectedGender] = useState('');

  const handleDateFocus = () => {
    setInputType('date');
  };

  const handleDateBlur = (e) => {
    if (e.target.value === '') {
      setInputType('text');
    }
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div className="account_section">
      <div className="container">
        <div className="account_sections-main">
          <div className="account_analytics-container">
          <div className='progress_text'>Мой прогресс:</div>
            <img src="https://nezhno.space/wp-content/themes/my-theme/assets/images/sapiens.png" alt="Изображение" />
            <div className="account_analytics_not-result-text">Пока не готов результат</div>
            <a href="/survey" className="blue_btn account_analytics_survey-link">
              Пройти опрос
            </a>
          </div>
          <form className="account_personal-data">
            <div className="account_image-wrap">
            <img src='wp-content/uploads/permanent/8_2' alt="photo" width="" height="" />
              <label className="account_edit-img" htmlFor="account_input-img">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.4003 7.33998L16.6603 4.59998C16.3027 4.26408 15.8341 4.07134 15.3436 4.05843C14.8532 4.04553 14.3751 4.21335 14.0003 4.52998L5.0003 13.53C4.67706 13.8559 4.4758 14.2832 4.4303 14.74L4.0003 18.91C3.98683 19.0564 4.00583 19.2041 4.05596 19.3424C4.10608 19.4806 4.1861 19.6062 4.2903 19.71C4.38374 19.8027 4.49455 19.876 4.61639 19.9258C4.73823 19.9755 4.86869 20.0007 5.0003 20H5.0903L9.2603 19.62C9.71709 19.5745 10.1443 19.3732 10.4703 19.05L19.4703 10.05C19.8196 9.68095 20.0084 9.18849 19.9953 8.68052C19.9822 8.17254 19.7682 7.69049 19.4003 7.33998ZM9.0803 17.62L6.0803 17.9L6.3503 14.9L12.0003 9.31998L14.7003 12.02L9.0803 17.62ZM16.0003 10.68L13.3203 7.99998L15.2703 5.99998L18.0003 8.72998L16.0003 10.68Z"
                    fill="#111111"
                  />
                </svg>
              </label>
              <input type="file" name="account_input-img" id="account_input-img" />
            </div>
            <span className="text-error text-error_account_input-img">text error</span>
            <span className="account_personal-name">Мои данные</span>
            <div className="account_wrap-gender-age">
              <div className="account_gender-select">
                <div className="account_input-gender-wrapper">
                    <select
                      className="account_input-gender account-input-custom"
                      value={selectedGender}
                      onChange={handleGenderChange}>
                      <option value="" hidden>Выберите пол</option>
                      <option value="female">Женский</option>
                      <option value="male">Мужской</option>
                    </select>
                </div>
                <div className="account_gender-list">
                  <span>Женский</span>
                  <span>Мужской</span>
                </div>
              </div>
              <div className="account_age-select">
                <input
                  type={inputType}
                  id="account_input-age"
                  className="account-input-custom"
                  name="account_input-age"
                  min="1900-01-01"
                  max="2022-12-31"
                  required="required"
                  placeholder="ДД.ММ.ГГГГ"
                  onFocus={handleDateFocus}
                  onBlur={handleDateBlur}
                />
                <span className="text-error text-error_account_input-age">text error</span>
              </div>
            </div>
            <input
              id="account_personal-name"
              className="account-input-custom"
              type="text"
              placeholder="Имя"
              required="required"
              name="account_input-firstName"
            />
            <span className="text-error text-error_account_input-firstName">text error</span>
            <input
              id="account_personal-lastName"
              className="account-input-custom"
              type="text"
              placeholder="Фамилия"
              required="required"
              name="account_input-lastName"
            />
            <span className="text-error text-error_account_input-lastName">text error</span>
            <input
              id="account_personal-email"
              className="account-input-custom"
              type="email"
              placeholder="example@gmail.com"
              required="required"
              name="account_input-email"
              // readOnly
              // disabled
            />
            <span className="text-error text-error_account_input-email">text error</span>
            <input
              id="account_personal-tel"
              className="account-input-custom"
              type="tel"
              placeholder="Телефон"
              required="required"
              name="account_input-tel"
            />
            <span className="text-error text-error_account_input-tel">text error</span>
            <button
              id="upload_btn"
              className="account_btn-save blue_btn"
              name="account_btn-save"
            >
              Сохранить
            </button>
            <span id="account-info-block" className="showInfo">
              info upload text
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
