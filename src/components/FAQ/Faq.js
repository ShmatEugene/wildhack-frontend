import React from 'react';
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
  //   function renderFaq() {
  //     const faq = Object.keys(questions).map((question, index) => {
  //       const applicationInfo = selectedOrder[field];
  //       return (
  //         <AccordionItem>
  //           <AccordionItemHeading>
  //             <AccordionItemButton>What harsh truths do you prefer to ignore?</AccordionItemButton>
  //           </AccordionItemHeading>
  //           <AccordionItemPanel>
  //             <p>
  //               Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
  //               consequat est minim minim esse tempor laborum consequat esse adipisicing eu
  //               reprehenderit enim.
  //             </p>
  //           </AccordionItemPanel>
  //         </AccordionItem>
  //       );
  //     });

  //     return faq;
  //   }

  return (
    <section className="faq section-indent">
      <h2>FAQ</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What harsh truths do you prefer to ignore?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
              consequat est minim minim esse tempor laborum consequat esse adipisicing eu
              reprehenderit enim.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Is free will real or just an illusion?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure
              cillum tempor laboris sed adipisicing eu esse duis nulla non.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
