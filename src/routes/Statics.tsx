import { BsFillChatFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { AiFillBell, AiFillCaretDown } from "react-icons/ai";
import profile from "../assets/images/avatar2.jpg";
import transaction from "../assets/images/transaction.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import Calendar from "react-calendar";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function Statics() {
  const [date, setDate] = useState<any>(new Date());
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex flex-row pl-96 pt-8 h-24 justify-between">
          <input
            placeholder="Search, transactions, categories or accounts"
            className="flex-shrink-0 w-[60%] h-8 rounded-xl p-6"
          />

          <div className="flex flex-row h-12 relative right-12 space-x-8">
            <button className="h-12 w-32  bg-[#85CB9D] rounded-md text-gray-200 px-4 hover:bg-[#94f3b6]">
              Add Transaction
            </button>
            <button>
              <BsFillChatFill size={"16"} />
            </button>
            <button>
              <AiFillBell size={"18"} />
            </button>
            <img src={profile} className="w-12 h-12 rounded-full" />
          </div>
        </div>
        <div className="flex flex-row pl-96 w-full h-full mt-12 space-x-6 p-6">
          <div className="w-2/3 h-full space-y-8">
            <div className="h-auto w-full bg-black/20">
              <h1 className="text-md p-4">Transaction Details</h1>
              <div className="flex flex-col p-4 -my-2">
                <span className="text-xs">Transaction Title</span>
                <input
                  className="mt-2 p-1 text-sm"
                  placeholder="Enter a title"
                />
                <span className="text-xs mt-2">Transaction Description</span>
                <input
                  className="mt-2 p-1 text-sm"
                  placeholder="Add a description"
                />
                <div className="flex flex-col space-y-4 mt-4">
                  <span className="text-xs">Category Tags</span>
                  <div className="flex flex-row space-x-4">
                    <input
                      className="w-1/2 p-1 text-sm"
                      placeholder="Add a category tag"
                    />
                    <input
                      className="w-1/2 p-1 text-sm"
                      placeholder="Add another category tag"
                    />
                  </div>
                  <div className="flex flex-row space-x-4">
                    <input
                      className="w-1/2 p-1 text-sm"
                      placeholder="Enter amount"
                    />
                    <input
                      className="w-1/2 p-1 text-sm"
                      placeholder="Select currency"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto w-full bg-black/20">
              <h1 className="text-md p-4">Transaction</h1>
              <div className="flex flex-col p-4 -my-2">
                <span className="text-xs">Transaction Date</span>
                <div className="flex h-32 bg-[#323232] mt-4 justify-center items-center">
                  <button className="w-42 h-8 text-xs px-3 border rounded-md">
                    Select or Upload Image
                  </button>
                </div>
                <Menu
                  as="div"
                  className="relative inline-block text-center mt-4"
                >
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-2 rounded-md px-3 py-3 h-10 text-xs font-regular text-gray-200 shadow-sm ring-1 ring-inset ring-gray-400 hover:ring-gray-100">
                      Purchase and Payment
                      <AiFillCaretDown
                        className="-mr-1 h-4 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute bg-[#343434] right-0 z-10 mt-2 w-full origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-gray-900"
                                  : "text-gray-200",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-gray-900"
                                  : "text-gray-200",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-400 text-gray-900"
                                  : "text-gray-200",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-400 text-gray-900"
                                    : "text-gray-200",
                                  "block w-full px-4 py-2 text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div className="h-auto w-full bg-black/20">
              <h1 className="text-md p-4">Transaction Amount</h1>
              <div className="flex flex-col p-4 -my-2">
                <span className="text-xs">Enter Amount</span>
                <input
                  className="mt-2 p-1 bg-[#323232] rounded-md"
                  placeholder="$"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full space-y-6">
            <div className="h-auto w-full bg-black/20">
              <div className="p-4">
                <h1 className="text-bold text-sm mb-2">Preview</h1>
                <img src={transaction} className="w-full" />
                <div className="flex flex-row justify-between mt-4">
                  <span>Transaction Type</span>
                  <button className="bg-[#85CB9D] w-12 h-6 rounded-md text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="h-auto w-full bg-black/20">
              <div className="flex flex-col p-4 items-center space-y-3">
                <button className="w-[90%] h-6 bg-[#85CB9D] rounded-sm text-sm">
                  Save Transaction
                </button>
                <button className="w-[90%] h-6 border rounded-sm text-sm">
                  Schedule Transaction
                </button>
                <span className="font-bold text-sm">Transaction Time</span>
              </div>
            </div>
            <div className="bg-black/20 p-2">
              <h1 className="mb-4 text-sm font-bold">Transaction Schedule</h1>
              <div className="calendar-container">
                <Calendar onChange={(text) => setDate(text)} value={date} />
              </div>
              <p className="text-center">
                <span className="bold">Selected Date:</span>{" "}
                {date.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statics;
