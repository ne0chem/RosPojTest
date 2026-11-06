import React from "react";
import Icon from "../../components/Icon";
import "./Contacts.css";

const officeCoordinates = "37.71834,55.7618";

export default function Contacts() {
  return (
    <section className="contacts-page">
      <h1 className="text-title">Как с нами связаться</h1>
      <dl className="contacts-list">
        <div className="contacts-card">
          <dt>
            <Icon name="phone" />
            <span>Телефон</span>
          </dt>
          <dd>
            <a href="tel:+74952696320">8 (495) 269-63-20</a>
          </dd>
        </div>
        <div className="contacts-card">
          <dt>
            <Icon name="mail" />
            <span>Почта</span>
          </dt>
          <dd>
            <a href="mailto:info@rospojtest.ru">info@rospojtest.ru</a>
          </dd>
        </div>
        <div className="contacts-card">
          <dt>
            <Icon name="pin" />
            <span>Офис</span>
          </dt>
          <dd>
            <address>г. Москва, ул. 2-я Синичкина, д. 9А, стр. 3</address>
          </dd>
        </div>
        <div className="contacts-card">
          <dt>
            <Icon name="clock" />
            <span>Режим работы</span>
          </dt>
          <dd>Пн–Пт 10:00–19:00</dd>
        </div>
      </dl>
      <section className="contacts-location">
        <h2 className="text-title">Как добраться</h2>
        <p className="contacts-address">
          Офис в Москве — ул. 2-я Синичкина, д. 9А, стр. 3.
        </p>
        <iframe
          className="contacts-map"
          title="Офис Роспожтест — Москва, 2-я Синичкина улица, 9А, строение 3"
          src={`https://yandex.ru/map-widget/v1/?ll=${officeCoordinates}&pt=${officeCoordinates},pm2blm&z=17`}
          loading="lazy"
          allowFullScreen
        />
      </section>
    </section>
  );
}
