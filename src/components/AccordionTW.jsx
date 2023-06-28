import React, { useEffect } from 'react';
import { Accordion } from 'flowbite-react';

export default function AccordionTW() {
  useEffect(() => {
    const accordionButtons = document.querySelectorAll(
      "[data-accordion-target]"
    );

    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-accordion-target");
        const body = document.querySelector(target);

        if (body.classList.contains("hidden")) {
          body.classList.remove("hidden");
          button.setAttribute("aria-expanded", "true");
        } else {
          body.classList.add("hidden");
          button.setAttribute("aria-expanded", "false");
        }
      });
    });
  }, []);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500"
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
        <div className="border border-b-0 border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex w-full items-center justify-between border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500"
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
        <div className="border border-b-0 border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex w-full items-center justify-between border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500"
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-3"
        >
          <span>
            What are the differences between Flowbite and Tailwind UI?
          </span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="border border-b-0 border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="flex w-full items-center justify-between border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500"
          data-accordion-target="#accordion-collapse-body-4"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-4"
        >
          <span>Can I customize Flowbite components?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-4"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-4"
      >
        <div className="border border-b-0 border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            Yes, you can customize Flowbite components to match your project's
            design and branding. Flowbite is built on top of Tailwind CSS, which
            provides extensive customization options through its utility
            classes. You can also extend Flowbite components or create your own
            custom components using the building blocks provided by Flowbite.
          </p>
          <p className="text-gray-500">
            Check out the Flowbite documentation for more information on
            customization and extending components.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          className="border-gray flex w-full items-center justify-between border border-b-0
        p-5 text-left font-medium text-gray-500"
          data-accordion-target="#accordion-collapse-body-5"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-5"
        >
          <span>How can I contribute to Flowbite?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-5"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-5"
      >
        <div className="border border-b-0 border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            Flowbite is an open-source project, and contributions are welcome!
            You can contribute to Flowbite by submitting bug reports, feature
            requests, or pull requests on the official GitHub repository.
          </p>
          <p className="text-gray-500">
            Check out the Flowbite GitHub repository for more information on how
            to contribute and the contribution guidelines.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-6">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-b-xl border border-gray-200 p-5 text-left font-medium text-gray-500"
          data-accordion-target="#accordion-collapse-body-6"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-6"
        >
          <span>Is Flowbite compatible with other CSS frameworks?</span>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-6"
        className="hidden"
        aria-labelledby="accordion-collapse-heading-6"
      >
        <div className="border border-gray-200 p-5">
          <p className="mb-2 text-gray-500">
            Flowbite is built on top of Tailwind CSS, which is designed to be
            highly compatible with other CSS frameworks. You can use Flowbite
            alongside frameworks like Bootstrap or Foundation without conflicts.
            However, keep in mind that different CSS frameworks may have their
            own styles and class naming conventions, so some adjustments might
            be necessary to achieve seamless integration.
          </p>
          <p className="text-gray-500">
            Check out the Flowbite documentation for more information on using
            Flowbite with other CSS frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}

