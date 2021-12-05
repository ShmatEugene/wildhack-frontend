import React from 'react';
import axios from 'axios';
import PublicGoogleSheetsParser from 'public-google-sheets-parser';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq() {
  const [questions, setQuestions] = React.useState(null);

  React.useEffect(() => {
    try {
      const spreadsheetId = '1C1T9fnmoQ_2r1Cnk-aJos1uEpZER9kj4cucR1rAuQyY';
      const parser = new PublicGoogleSheetsParser();
      parser.parse(spreadsheetId, 'Алгоритм - перевод').then((items) => {
        console.log(items);
        setQuestions(items);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function renderFaq() {
    const faq = questions.map((question, index) => {
      console.log(question);
      if (question['Вопрос'] && question['Описание']) {
        return (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>{question['Вопрос']}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{question['Описание']}</AccordionItemPanel>
          </AccordionItem>
        );
      } else {
        return null;
      }
    });

    return faq;
  }

  return (
    <section className="faq section-indent">
      <h2>FAQ</h2>
      <div className="bot-intro">
        <p>
          Ответы на часто задаваемые вопросы также можно найти в{' '}
          <a className="bot-intro-link" target="_blank" href="https://t.me/kronoki_bot">
            нашем телеграм боте
          </a>
          .
        </p>
      </div>
      <Accordion>{questions ? renderFaq() : null}</Accordion>
    </section>
  );
}
