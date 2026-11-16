import React from 'react';
import './PrivacyConsent.css';

export default function PrivacyConsent({ policyUrl }) {
  return (
    <label className="privacy-consent">
      <input type="checkbox" name="privacyConsent" required />
      <span>Я ознакомлен(а) с {policyUrl
        ? <a href={policyUrl} target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a>
        : 'политикой конфиденциальности'} и даю <a href="/personal-data-consent" target="_blank" rel="noopener noreferrer">согласие на обработку персональных данных</a>.</span>
    </label>
  );
}
