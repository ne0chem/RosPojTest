import React from 'react';
import './PrivacyConsent.css';

export default function PrivacyConsent({ policyUrl }) {
  return (
    <label className="privacy-consent">
      <input type="checkbox" name="privacyConsent" required />
      <span>Я соглашаюсь с {policyUrl
        ? <a href={policyUrl} target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a>
        : 'политикой конфиденциальности'} и даю согласие на обработку персональных данных.</span>
    </label>
  );
}
