import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsList from './NewsList';

const news = [
  {
    id: 0,
    title:
      'Камчатка как поле битвы вулканов и ледников: в «Школе защитников природы» начали изучать природу региона',
    text: '',
    published: '03.12.21',
    thumbnailLink: 'https://kronoki.ru/upload/iblock/d95/d950244ab6f1ceee3f49b6534498c16d.jpg',
  },
  {
    id: 0,
    title: 'Заповедные друзья» объединят детей Камчатки',
    text: '',
    published: '03.12.21',
    thumbnailLink:
      'https://kronoki.ru/upload/resize_cache/iblock/6dc/360_225_0/6dcb82557c57d3c17fb8b13aad50299b.jpeg',
  },
  {
    id: 0,
    title: 'Новые цифровые решения встанут на защиту заповедной природы',
    text: '',
    published: '03.12.21',
    thumbnailLink: 'https://kronoki.ru/upload/iblock/fa0/fa000d4f1346064930dd3f56e5243b08.jpeg',
  },
];

export default function Home() {
  return (
    <main>
      {/* advantages */}
      <section className="advantages wrapper overview-block-pt">
        <div className="title title_center advantages__title">
          <h2>
            Причины стать волонтером
            <br /> Кроноцком заповеднике
          </h2>
          {/* <p className="title__subtitle"></p> */}
        </div>
        <div className="advantages__list">
          <div className="advantages__advantage advantage">
            <div className="advantage__icon">
              <i className="fi-rr-e-learning"></i>
            </div>
            <div className="advantage__content">
              <h3 className="advantage__title">
                Получение ценного опыта и возможность увидеть мир по-новому
              </h3>
              <p className="advantage__text">
                Как выживать в дикой природе? Как живут люди вне городов? Каково это - жить почти
                без доступа к интернету минимум 3 недели?
              </p>
            </div>
          </div>
          <div className="advantages__advantage advantage">
            <div className="advantage__icon">
              <i className="fi-rr-graduation-cap"></i>
            </div>
            <div className="advantage__content">
              <h3 className="advantage__title">
                Жизнь в новом и крутом окружении единомышленников
              </h3>
              <p className="advantage__text">
                К нам приезжают чудесные люди, искренне заинтересованные в дикой природе и помощи
                для ее сохранения. Такая вдохновляющая атмосфера в коллективе с каждым днем делает
                нас все лучше и открытие этому миру. Также у нас нередко находят близкие связи на
                всю жизнь.
              </p>
            </div>
          </div>
          <div className="advantages__advantage advantage">
            <div className="advantage__icon">
              <i className="fi-rr-test"></i>
            </div>
            <div className="advantage__content">
              <h3 className="advantage__title">Изменение мира к лучшему</h3>
              <p className="advantage__text">
                Волонтеры обращают внимание общества на социальные и мировые проблемы через участие
                в различных акциях и мероприятиях. Это супергерои без специальных костюмов, которые
                реально помогают, вдохновляя других своим примером.
              </p>
            </div>
          </div>
          <div className="advantages__advantage advantage">
            <div className="advantage__icon">
              <i className="fi-rr-users"></i>
            </div>
            <div className="advantage__content">
              <h3 className="advantage__title">
                Заявление о себе миру и плюшки от участия в программе
              </h3>
              <p className="advantage__text">
                Возможно, вместе с другими участниками вы даже сможете создать волонтёрский проект и
                получить на него грант! Также, волонтёров любят везде и вам будут доступны разные
                плюшки. Например, государственные льготы.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Message */}
      <section className="message overview-block-pt wrapper-fw">
        <div className="message__bg">
          <div className="wrapper message__wrapper">
            <div className="title title_left message__title">
              <h2>Что вас ждет</h2>
            </div>
            <p className="message__text">
              Волонтерство в Кроноцком заповеднике - общественное движение, клуб активных,
              осознанных людей, искренне заинтересованных в познании дикой природы, желающих сделать
              личный вклад в сохранение природного наследия Камчатки.
            </p>
            <p className="message__text">
              Добровольцы в Кроноцком заповеднике и Южно-Камчатском заказнике задействованы в
              работах по хозяйству на кордонах, реализации сувенирной продукции, расчистке и
              маркировке троп, прорубке новых троп для осуществления охраны и других мероприятий.
              Они помогают в сборе полевых материалов научным сотрудникам заповедника, участвуют в
              ремонтных и строительных работах, реализуют дизайнерские проекты, выполняют
              профессиональную фото- и видеосъёмку на заповедной территории и многое другое.
            </p>
            <div className="sh-button message__button sh-mt-30">
              <NavLink to="/apply">
                Подать заявку <i className="fi-rr-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* Home-news */}
      <section className="home-news wrapper overview-block-pt">
        <div className="title title_center home-news__title">
          <h2>Новости</h2>
        </div>
        <NewsList length={3} news={news} />
      </section>
    </main>
  );
}
