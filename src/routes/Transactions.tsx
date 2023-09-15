import Navbar from "../components/Navbar";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiFillCaretDown, AiFillBell, AiFillEuroCircle } from "react-icons/ai";
import { BsFillChatFill, BsFillCreditCard2BackFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import profile from "../assets/images/avatar2.jpg";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function Transactions() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-row pl-96 pt-8 h-24 w-full">
        <input
          placeholder="Search, transactions, categories or accounts"
          className="flex-shrink-0 w-80 h-8 rounded-xl p-6"
        />
        <Menu as="div" className="relative inline-block text-left pl-8 pr-8">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-2 rounded-md  px-5 py-4 h-12 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-400 hover:ring-gray-100">
              Options
              <AiFillCaretDown
                className="-mr-1 h-5 w-5 text-gray-400"
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
            <Menu.Items className="absolute bg-[#343434] right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-400 text-gray-900" : "text-gray-200",
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
                        active ? "bg-gray-400 text-gray-900" : "text-gray-200",
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
                        active ? "bg-gray-400 text-gray-900" : "text-gray-200",
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
                          "block w-full px-4 py-2 text-left text-sm"
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
        <div className="flex flex-row space-x-5">
          <button className="h-12 w-40 border border-gray-400 rounded-md hover:border-[#85CB9D] hover:text-[#85CB9D]">
            Add a new Transaction
          </button>
          <button className="h-12 w-40 border border-gray-400 rounded-md hover:border-[#85CB9D] hover:text-[#85CB9D]">
            Add transaction
          </button>
        </div>
        <div className="flex flex-row absolute h-12 right-12 space-x-8">
          <button className="h-12 w-32  bg-[#85CB9D] rounded-md text-gray-200 hover:bg-[#94f3b6]">
            Create
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
      <div className="flex flex-col pl-96">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-medium mt-12">Your Transactions</h1>
          </div>
          <div className="flex space-x-2 mr-32 self-center bg-[#232323] h-12 w-54 items-center rounded-md px-2">
            <button className="bg-gray-700 h-10 rounded-sm p-2 text-center">
              Most Popular
            </button>
            <button className="h-10 rounded-sm p-2 text-center">
              Higher Priced
            </button>
          </div>
        </div>
        <div className="flex space-x-8 mt-8 mr-12">
          <div className="flex bg-[#363636] w-full h-32 items-center">
            <div className="flex items-start content-center ml-6">
              <BsFillCreditCard2BackFill
                size={32}
                className="border p-4 h-20 w-20"
              />
              <div className="ml-4 self-center">
                <span className="font-regular">Your Income</span>
                <h1 className="font-medium text-3xl">$9.876,33</h1>
              </div>
            </div>
          </div>
          <div className="flex bg-[#363636] w-1/3 h-32 items-center justify-center">
            <div className="flex flex-col items-center ">
              <AiFillEuroCircle size={32} />
              <span className="font-regular">Total Transactions</span>
              <h1 className="font-medium text-3xl">$20.850</h1>
            </div>
          </div>
          <div className="flex bg-[#363636] w-1/3 h-32 items-center justify-center">
            <div className="flex flex-col items-center ">
              <GrTransaction size={30} className="bg-white rounded-full p-2" />
              <span className="font-regular">Total Transactions</span>
              <h1 className="font-medium text-3xl">$20.850</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#363636] w-[97%] h-auto mt-12">
          <div className="flex flex-row h-24 justify-around items-end underline text-md text-gray-200 pb-4">
            <span className="mr-72">Product</span>
            <span>Status</span>
            <span>Price</span>
            <span>Quantity sold</span>
            <span>Total Income</span>
            <span>Total</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
