import React from "react";
import ReactDOM from "react-dom";

const MyModal = ({ isShowing, onClose, children, style }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div role="button"
            className="fixed inset-0 z-30 bg-gray-900 bg-opacity-25"
            onClick={onClose}
          />
          <div>
            <div
              id="info-popup"
              tabindex="-1"
              className="fixed left-[calc(50%-205px)]  top-[calc(50%-108.5px)] z-50  "
            >
              <div className="relative h-full w-full max-w-lg p-4 md:h-auto">
                <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-8">
                  <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                    <h3 className=" text-right text-2xl font-bold text-gray-900 dark:text-white">
                      קיבלנו את פנייתך ונציג יפנה אליך
                    </h3>
                    <h3 className=" text-right text-2xl font-bold text-gray-900 dark:text-white">
                      !בהקדם
                    </h3>
                    {/* <p className="text-right">אנא קרא בעיון את התוכן באתר</p> */}
                  </div>
                  <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
                    {/* <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                    >
                      Learn more about privacy
                    </a> */}
                    <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                      <button
                        onClick={onClose}
                        id="close-modal"
                        type="button"
                        className="focus:ring-primary-300 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 sm:w-auto"
                      >
                        המשך
                      </button>
                      <button
                        id="confirm-button"
                        type="button"
                        className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            classNameName={
              " transition-width duration-250 fixed right-[50%] top-[50%] z-40 h-[200px] w-[300px] rounded-md border bg-white"
            }
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="cursor-pointer text-2xl font-bold text-gray-700 opacity-30 hover:opacity-75"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                &times;
              </button>
            </div>
          
          </div> */}
        </React.Fragment>,
        document.body
      )
    : null;

export default MyModal;
