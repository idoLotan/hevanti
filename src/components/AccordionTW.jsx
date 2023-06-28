import React, { useEffect } from 'react';
import { Accordion } from 'flowbite-react';

export default function AccordionTW() {
  useEffect(() => {
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-accordion-target');
        const body = document.querySelector(target);

        if (body.classList.contains('hidden')) {
          body.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
        } else {
          body.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }, []);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is Flowbite?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500">
            Check out this guide to learn how to{' '}
            <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Is there a Figma file available?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500">
            Check out the{' '}
            <a href="https://flowbite.com/figma/" className="text-blue-600 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </div>
      </div>
  )}
